"""
Generate 4 high-detail isometric game-style island images.
Enhanced version with coastline foam, terrain shading, richer vegetation, water edges.
"""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import math, random, os

W, H = 1000, 800
OUT = os.path.dirname(os.path.abspath(__file__))
random.seed(42)
np.random.seed(42)


def noise2d(w, h, scale=60, octaves=5):
    result = np.zeros((h, w), dtype=np.float64)
    for o in range(octaves):
        freq = 2 ** o
        amp = 0.5 ** o
        gw = max(2, int(w / scale * freq) + 2)
        gh = max(2, int(h / scale * freq) + 2)
        grid = np.random.rand(gh, gw)
        g_img = Image.fromarray((grid * 255).astype(np.uint8), 'L')
        g_up = g_img.resize((w, h), Image.BILINEAR)
        result += np.array(g_up, dtype=np.float64) / 255.0 * amp
    mn, mx = result.min(), result.max()
    return (result - mn) / (mx - mn + 1e-9)


def make_mask(w, h, margin=100, irreg=0.28):
    cx, cy = w // 2, h // 2
    rx, ry = w // 2 - margin, h // 2 - margin
    n = 80
    angles = np.linspace(0, 2 * math.pi, n, endpoint=False)
    radii = []
    for a in angles:
        base = 1.0 + irreg * (random.random() * 2 - 1)
        r = base * math.sqrt((rx * math.cos(a)) ** 2 + (ry * math.sin(a)) ** 2)
        radii.append(r)
    radii = np.array(radii)
    for _ in range(5):
        radii = np.convolve(np.pad(radii, 1, mode='wrap'), [0.15, 0.7, 0.15], mode='valid')[:n]

    pts = [(cx + radii[i] * math.cos(a), cy + radii[i] * math.sin(a)) for i, a in enumerate(angles)]
    mask = Image.new('L', (w, h), 0)
    ImageDraw.Draw(mask).polygon(pts, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(5))
    mask = mask.point(lambda p: 255 if p > 100 else 0)
    mask = mask.filter(ImageFilter.GaussianBlur(2))
    return mask, pts


def lerp_color(c1, c2, t):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))


def draw_cliff(img, pts, base_clr, h=25):
    draw = ImageDraw.Draw(img)
    for off in range(h, 0, -1):
        t = off / h
        shade = 1.0 - t * 0.5
        c = tuple(max(0, int(base_clr[i] * shade)) for i in range(3))
        shifted = [(p[0], p[1] + off) for p in pts]
        draw.polygon(shifted, fill=c)


def draw_foam(img, mask_arr, w, h):
    """Draw white foam/surf around coastline."""
    # Dilate mask to find edge
    from PIL import ImageFilter
    mask_img = Image.fromarray(mask_arr)
    dilated = mask_img.filter(ImageFilter.MaxFilter(9))
    dilated2 = mask_img.filter(ImageFilter.MaxFilter(15))
    dil_arr = np.array(dilated)
    dil2_arr = np.array(dilated2)

    foam = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    foam_arr = np.array(foam)

    # Outer foam (lighter, wider)
    edge2 = (dil2_arr > 128) & (mask_arr < 128)
    foam_arr[edge2] = (200, 230, 255, 40)

    # Inner foam (brighter, narrow)
    edge = (dil_arr > 128) & (mask_arr < 128)
    foam_arr[edge] = (220, 240, 255, 70)

    foam = Image.fromarray(foam_arr, 'RGBA')
    foam = foam.filter(ImageFilter.GaussianBlur(3))
    img.paste(Image.alpha_composite(Image.new('RGBA', img.size, (0, 0, 0, 0)), foam), (0, 0), foam)


def draw_shadow_on_land(img, mask_arr):
    """Add ambient occlusion / edge darkening on land."""
    h, w = mask_arr.shape
    # Erode mask
    mask_img = Image.fromarray(mask_arr)
    eroded = mask_img.filter(ImageFilter.MinFilter(15))
    er_arr = np.array(eroded, dtype=np.float64) / 255.0

    shadow = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    sh_arr = np.array(shadow)
    land = mask_arr > 128
    # Darken where eroded distance is low (near edges)
    alpha = ((1.0 - er_arr) * 60).astype(np.uint8)
    alpha[~land] = 0
    sh_arr[..., 3] = alpha
    shadow = Image.fromarray(sh_arr, 'RGBA')
    shadow = shadow.filter(ImageFilter.GaussianBlur(6))
    img.paste(Image.alpha_composite(Image.new('RGBA', img.size, (0, 0, 0, 0)), shadow), (0, 0), shadow)


def tree_deciduous(draw, cx, cy, s=1.0):
    draw.rectangle([cx - 2 * s, cy, cx + 2 * s, cy + 14 * s], fill=(90, 60, 30))
    for dy, r, c in [(-5, 12, (28, 120, 35)), (-9, 10, (38, 145, 42)), (-13, 7, (50, 165, 55)), (-15, 4, (65, 180, 68))]:
        draw.ellipse([cx - r * s, cy + dy * s - r * s, cx + r * s, cy + dy * s + r * s], fill=c)
    # Highlight
    draw.ellipse([cx - 3 * s, cy - 16 * s, cx + 5 * s, cy - 10 * s], fill=(75, 190, 78, 180))


def tree_pine(draw, cx, cy, s=1.0):
    draw.rectangle([cx - 2 * s, cy, cx + 2 * s, cy + 12 * s], fill=(75, 45, 18))
    layers = [(14, -3, (18, 85, 35)), (11, -9, (22, 105, 40)), (8, -15, (28, 125, 45)), (5, -20, (35, 145, 52))]
    for w2, dy, c in layers:
        draw.polygon([(cx - w2 * s, cy + dy * s), (cx + w2 * s, cy + dy * s), (cx, cy + dy * s - 12 * s)], fill=c)


def tree_palm(draw, cx, cy, s=1.0):
    pts = []
    for i in range(18):
        t = i / 18
        tx = cx + math.sin(t * 1.0) * 10 * s
        ty = cy + (1 - t) * 24 * s - 6 * s
        pts.append((tx, ty))
        draw.ellipse([tx - 2.5 * s, ty - 1.5 * s, tx + 2.5 * s, ty + 1.5 * s], fill=(130, 85, 38))
    if pts:
        top_x, top_y = pts[-1]
        for angle in [-160, -130, -90, -50, -20, 10, 40]:
            a = math.radians(angle)
            for j in range(10):
                fx = top_x + math.cos(a) * j * 3.5 * s
                fy = top_y + math.sin(a) * j * 2.2 * s + j * 0.6 * s
                r = max(1, (3.5 - j * 0.3) * s)
                green = random.randint(120, 160)
                draw.ellipse([fx - r, fy - r * 0.7, fx + r, fy + r * 0.7], fill=(28, green, 30))


def tree_bush(draw, cx, cy, s=1.0):
    for dx, dy, r, g in [(-5, 1, 7, 125), (0, -1, 8, 140), (5, 1, 6, 130), (-2, -3, 5, 155)]:
        c = (35 + random.randint(-5, 5), g + random.randint(-10, 10), 45 + random.randint(-5, 5))
        draw.ellipse([(cx + dx - r) * s + cx * (1 - s), (cy + dy - r) * s + cy * (1 - s),
                       (cx + dx + r) * s + cx * (1 - s), (cy + dy + r) * s + cy * (1 - s)],
                      fill=c)


def rock(draw, cx, cy, s=1.0):
    base = random.randint(115, 145)
    pts = [(cx + dx * s, cy + dy * s) for dx, dy in [(-10, 5), (-7, -7), (0, -10), (8, -6), (10, 4), (5, 7), (-4, 6)]]
    draw.polygon(pts, fill=(base, base - 8, base - 15))
    hi = [(cx + dx * s, cy + dy * s) for dx, dy in [(-5, -2), (-3, -7), (3, -6), (2, -1)]]
    draw.polygon(hi, fill=(base + 20, base + 15, base + 10))
    # Shadow
    sh = [(cx + dx * s, cy + dy * s) for dx, dy in [(4, 2), (10, 4), (8, 7), (2, 5)]]
    draw.polygon(sh, fill=(base - 25, base - 30, base - 35))


def house(draw, cx, cy, s=1.2, roof_color=(175, 55, 35)):
    # Shadow
    draw.ellipse([cx - 18 * s, cy + 6 * s, cx + 18 * s, cy + 14 * s], fill=(0, 0, 0, 40))
    # Wall
    draw.rectangle([cx - 14 * s, cy - 10 * s, cx + 14 * s, cy + 8 * s], fill=(215, 190, 150))
    # Wall detail
    draw.rectangle([cx - 14 * s, cy - 10 * s, cx + 14 * s, cy - 8 * s], fill=(200, 175, 135))
    # Roof
    draw.polygon([(cx - 18 * s, cy - 10 * s), (cx, cy - 28 * s), (cx + 18 * s, cy - 10 * s)], fill=roof_color)
    # Roof highlight
    draw.polygon([(cx - 16 * s, cy - 11 * s), (cx, cy - 26 * s), (cx - 2 * s, cy - 11 * s)],
                  fill=tuple(min(255, c + 25) for c in roof_color))
    # Door
    draw.rounded_rectangle([cx - 4 * s, cy - 2 * s, cx + 4 * s, cy + 8 * s], radius=3, fill=(90, 55, 25))
    # Windows
    for wx in [cx - 10 * s, cx + 6 * s]:
        draw.rectangle([wx, cy - 7 * s, wx + 5 * s, cy - 3 * s], fill=(170, 215, 240))
        draw.rectangle([wx + 2 * s, cy - 7 * s, wx + 3 * s, cy - 3 * s], fill=(140, 130, 120))
        draw.rectangle([wx, cy - 5.5 * s, wx + 5 * s, cy - 4.5 * s], fill=(140, 130, 120))


def castle(draw, cx, cy, s=1.3):
    draw.ellipse([cx - 25 * s, cy + 8 * s, cx + 25 * s, cy + 18 * s], fill=(0, 0, 0, 35))
    # Main wall
    draw.rectangle([cx - 20 * s, cy - 14 * s, cx + 20 * s, cy + 10 * s], fill=(165, 158, 148))
    draw.rectangle([cx - 20 * s, cy - 14 * s, cx + 20 * s, cy - 12 * s], fill=(150, 143, 133))
    # Towers
    for tx in [cx - 20 * s, cx + 14 * s]:
        draw.rectangle([tx, cy - 24 * s, tx + 8 * s, cy + 10 * s], fill=(155, 148, 138))
        for bx in range(4):
            draw.rectangle([tx + bx * 2.5 * s, cy - 28 * s, tx + bx * 2.5 * s + 1.5 * s, cy - 24 * s],
                            fill=(140, 133, 123))
        # Window
        draw.rectangle([tx + 2 * s, cy - 18 * s, tx + 6 * s, cy - 14 * s], fill=(60, 50, 45))
    # Gate
    draw.rounded_rectangle([cx - 6 * s, cy - 2 * s, cx + 6 * s, cy + 10 * s], radius=4, fill=(70, 45, 25))
    # Flag
    draw.line([cx + 17 * s, cy - 28 * s, cx + 17 * s, cy - 38 * s], fill=(100, 90, 80), width=2)
    draw.polygon([(cx + 17 * s, cy - 38 * s), (cx + 25 * s, cy - 35 * s), (cx + 17 * s, cy - 32 * s)],
                  fill=(200, 50, 50))


def temple(draw, cx, cy, s=1.3):
    draw.ellipse([cx - 22 * s, cy + 6 * s, cx + 22 * s, cy + 14 * s], fill=(0, 0, 0, 35))
    # Steps
    for i in range(3):
        draw.rectangle([cx - (18 - i * 2) * s, cy + (4 - i * 3) * s, cx + (18 - i * 2) * s, cy + (7 - i * 3) * s],
                        fill=(205 - i * 8, 195 - i * 8, 175 - i * 8))
    # Columns
    for col_x in [cx - 13 * s, cx - 5 * s, cx + 3 * s, cx + 11 * s]:
        draw.rectangle([col_x, cy - 16 * s, col_x + 3 * s, cy - 2 * s], fill=(195, 185, 170))
        # Capital
        draw.rectangle([col_x - 1 * s, cy - 17 * s, col_x + 4 * s, cy - 16 * s], fill=(185, 175, 160))
    # Roof
    draw.polygon([(cx - 20 * s, cy - 17 * s), (cx, cy - 32 * s), (cx + 20 * s, cy - 17 * s)],
                  fill=(190, 110, 55))
    draw.polygon([(cx - 18 * s, cy - 17 * s), (cx - 2 * s, cy - 30 * s), (cx - 2 * s, cy - 17 * s)],
                  fill=(200, 125, 65))


def volcano(draw, cx, cy, s=1.5):
    draw.polygon([(cx - 38 * s, cy + 18 * s), (cx - 6 * s, cy - 30 * s),
                   (cx + 6 * s, cy - 30 * s), (cx + 38 * s, cy + 18 * s)], fill=(90, 72, 62))
    # Highlight side
    draw.polygon([(cx - 6 * s, cy - 30 * s), (cx, cy - 28 * s),
                   (cx + 20 * s, cy + 18 * s), (cx - 20 * s, cy + 18 * s)], fill=(105, 85, 72))
    # Crater
    draw.ellipse([cx - 10 * s, cy - 34 * s, cx + 10 * s, cy - 26 * s], fill=(55, 38, 28))
    # Lava
    draw.ellipse([cx - 6 * s, cy - 32 * s, cx + 6 * s, cy - 28 * s], fill=(255, 110, 30))
    draw.ellipse([cx - 3 * s, cy - 31 * s, cx + 3 * s, cy - 29 * s], fill=(255, 180, 60))
    # Lava streaks
    for dx, length in [(-8, 20), (5, 15), (12, 25)]:
        for i in range(int(length)):
            lx = cx + dx * s + i * 0.3 * s
            ly = cy - 28 * s + i * 1.8 * s
            r = max(1, (2.5 - i * 0.1) * s)
            alpha = max(0, 200 - i * 10)
            draw.ellipse([lx - r, ly - r * 0.5, lx + r, ly + r * 0.5], fill=(255, 120 + i * 3, 20, alpha))


def generate_island(biome, filename):
    img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    terrain = noise2d(W, H, scale=45, octaves=5)
    detail = noise2d(W, H, scale=18, octaves=4)
    mask, pts = make_mask(W, H, margin=110, irreg=0.25)
    mask_arr = np.array(mask)

    biomes = {
        'forest': {
            'colors': [(52, 125, 55), (68, 152, 65), (42, 105, 48), (78, 170, 75)],
            'cliff': (75, 58, 35),
            'trees': [tree_deciduous, tree_pine, tree_bush, tree_deciduous, tree_pine],
            'buildings': [(house, {'roof_color': (175, 55, 35)}), (castle, {})],
            'n_trees': 55, 'n_rocks': 10,
        },
        'volcanic': {
            'colors': [(95, 78, 88), (115, 92, 98), (80, 65, 75), (130, 105, 100)],
            'cliff': (55, 42, 48),
            'trees': [tree_pine, tree_bush, tree_pine],
            'buildings': [(volcano, {}), (castle, {})],
            'n_trees': 30, 'n_rocks': 18,
        },
        'desert': {
            'colors': [(195, 175, 125), (215, 192, 140), (175, 155, 108), (225, 205, 155)],
            'cliff': (135, 108, 65),
            'trees': [tree_palm, tree_bush, tree_palm, tree_palm],
            'buildings': [(temple, {}), (house, {'roof_color': (200, 170, 100)})],
            'n_trees': 35, 'n_rocks': 8,
        },
        'meadow': {
            'colors': [(62, 155, 72), (82, 178, 88), (48, 135, 58), (95, 195, 100)],
            'cliff': (55, 88, 42),
            'trees': [tree_deciduous, tree_bush, tree_deciduous, tree_bush],
            'buildings': [(house, {'roof_color': (60, 120, 170)}), (house, {'roof_color': (175, 55, 35)})],
            'n_trees': 50, 'n_rocks': 6,
        },
    }

    b = biomes[biome]

    # Draw cliff
    draw_cliff(img, pts, b['cliff'], h=28)

    # Paint terrain
    pixels = np.array(img)
    colors = b['colors']
    for y in range(H):
        for x in range(W):
            if mask_arr[y, x] > 100:
                t = terrain[y, x]
                d = detail[y, x]
                # Pick color based on height
                if t < 0.3:
                    c = colors[2]
                elif t < 0.5:
                    c = lerp_color(colors[2], colors[0], (t - 0.3) / 0.2)
                elif t < 0.7:
                    c = lerp_color(colors[0], colors[1], (t - 0.5) / 0.2)
                else:
                    c = lerp_color(colors[1], colors[3], min(1, (t - 0.7) / 0.3))
                # Detail noise variation
                r = int(c[0] + (d - 0.5) * 28)
                g = int(c[1] + (d - 0.5) * 28)
                bv = int(c[2] + (d - 0.5) * 22)
                r = max(0, min(255, r))
                g = max(0, min(255, g))
                bv = max(0, min(255, bv))
                a = min(255, int(mask_arr[y, x]))
                pixels[y, x] = (r, g, bv, a)

    img = Image.fromarray(pixels, 'RGBA')

    # Edge shadow on land
    draw_shadow_on_land(img, mask_arr)

    # Foam / coastline
    draw_foam(img, mask_arr, W, H)

    draw = ImageDraw.Draw(img)

    # Buildings first (behind trees)
    bld_positions = []
    for i, (bfn, bkw) in enumerate(b['buildings']):
        bx = W // 2 + (i * 2 - 1) * random.randint(80, 150)
        by = H // 2 + random.randint(-50, 50)
        if 0 <= by < H and 0 <= bx < W and mask_arr[min(by, H - 1), min(bx, W - 1)] > 200:
            bfn(draw, bx, by, **bkw)
            bld_positions.append((bx, by))

    # Trees
    placed = []
    attempts = 0
    while len(placed) < b['n_trees'] and attempts < b['n_trees'] * 5:
        attempts += 1
        tx = random.randint(130, W - 130)
        ty = random.randint(130, H - 130)
        if mask_arr[ty, tx] < 200:
            continue
        if abs(tx - W // 2) < 60 and abs(ty - H // 2) < 45:
            continue
        # Don't overlap buildings
        too_close = False
        for bx, by in bld_positions:
            if abs(tx - bx) < 50 and abs(ty - by) < 50:
                too_close = True
                break
        for px, py in placed:
            if abs(tx - px) < 25 and abs(ty - py) < 25:
                too_close = True
                break
        if too_close:
            continue
        placed.append((tx, ty))
        fn = random.choice(b['trees'])
        fn(draw, tx, ty, random.uniform(0.8, 1.5))

    # Rocks
    for _ in range(b['n_rocks']):
        rx = random.randint(120, W - 120)
        ry = random.randint(120, H - 120)
        if mask_arr[ry, rx] < 200:
            continue
        rock(draw, rx, ry, random.uniform(0.7, 1.4))

    # Flowers / grass tufts (small details)
    if biome in ('forest', 'meadow'):
        for _ in range(40):
            fx = random.randint(120, W - 120)
            fy = random.randint(120, H - 120)
            if mask_arr[fy, fx] < 200:
                continue
            c = random.choice([(255, 220, 50), (255, 100, 100), (200, 100, 255), (255, 180, 200)])
            r = random.uniform(2, 4)
            draw.ellipse([fx - r, fy - r, fx + r, fy + r], fill=c)

    # Final subtle vignette
    vig = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    vig_draw = ImageDraw.Draw(vig)
    # Just a very subtle overall enhancement - skip for now to keep crisp

    outpath = os.path.join(OUT, filename)
    img.save(outpath, 'PNG', optimize=True)
    print(f'  {filename}: {os.path.getsize(outpath) // 1024}KB')


if __name__ == '__main__':
    print('Generating enhanced islands...')
    generate_island('forest', 'island-ya3.png')
    generate_island('volcanic', 'island-ya4.png')
    generate_island('desert', 'island-ya5.png')
    generate_island('meadow', 'island-ya6.png')
    print('Done!')

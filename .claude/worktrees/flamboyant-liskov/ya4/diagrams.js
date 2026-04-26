// diagrams.js — 高品質教學圖示（SVG + HTML）
const DIAG = {

// ============================================================
// 1. Le Fort 骨折
// ============================================================
lefort: `
<div style="margin:.65rem 0;background:#fff;border-radius:8px;border:1px solid #e2e8f0;padding:.85rem;">
<div style="font-weight:700;color:#1a365d;font-size:.92rem;margin-bottom:.7rem">📐 Le Fort 骨折分類圖</div>
<svg viewBox="0 0 420 310" style="width:100%;max-width:420px;display:block;margin:0 auto">
  <ellipse cx="210" cy="72" rx="128" ry="68" fill="#fdf5e6" stroke="#9a7940" stroke-width="2"/>
  <rect x="92" y="100" width="86" height="9" rx="4" fill="#c4a860" opacity=".6"/>
  <rect x="242" y="100" width="86" height="9" rx="4" fill="#c4a860" opacity=".6"/>
  <rect x="90" y="108" width="88" height="60" rx="13" fill="#daeef7" stroke="#5a8fa8" stroke-width="2"/>
  <rect x="242" y="108" width="88" height="60" rx="13" fill="#daeef7" stroke="#5a8fa8" stroke-width="2"/>
  <path d="M188,98 L232,98 L226,162 L214,170 Q210,173 206,170 L194,162 Z" fill="#f0dfbf" stroke="#9a7940" stroke-width="1.5"/>
  <path d="M90,148 Q62,160 56,185 Q52,205 72,218" fill="none" stroke="#9a7940" stroke-width="2.5"/>
  <path d="M330,148 Q358,160 364,185 Q368,205 348,218" fill="none" stroke="#9a7940" stroke-width="2.5"/>
  <path d="M118,172 Q210,184 302,172 L296,238 Q210,250 124,238 Z" fill="#fdf5e6" stroke="#9a7940" stroke-width="2"/>
  <rect x="147" y="235" width="126" height="13" rx="4" fill="white" stroke="#aaa" stroke-width="1.5"/>
  <line x1="164" y1="235" x2="164" y2="248" stroke="#ccc" stroke-width="1"/>
  <line x1="181" y1="235" x2="181" y2="248" stroke="#ccc" stroke-width="1"/>
  <line x1="198" y1="235" x2="198" y2="248" stroke="#ccc" stroke-width="1"/>
  <line x1="222" y1="235" x2="222" y2="248" stroke="#ccc" stroke-width="1"/>
  <line x1="239" y1="235" x2="239" y2="248" stroke="#ccc" stroke-width="1"/>
  <line x1="256" y1="235" x2="256" y2="248" stroke="#ccc" stroke-width="1"/>
  <path d="M64,212 Q140,205 210,204 Q280,203 356,212" stroke="#c53030" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <circle cx="64" cy="212" r="5" fill="#c53030"/>
  <circle cx="356" cy="212" r="5" fill="#c53030"/>
  <text x="22" y="216" font-size="13" fill="#c53030" font-weight="bold" font-family="sans-serif">I</text>
  <path d="M210,96 L148,122 L112,168 L72,212" stroke="#c05621" stroke-width="3" fill="none" stroke-dasharray="9,4" stroke-linecap="round"/>
  <path d="M210,96 L272,122 L308,168 L348,212" stroke="#c05621" stroke-width="3" fill="none" stroke-dasharray="9,4" stroke-linecap="round"/>
  <text x="18" y="196" font-size="13" fill="#c05621" font-weight="bold" font-family="sans-serif">II</text>
  <path d="M210,94 L148,108 L92,134 L60,175 L62,212" stroke="#2b6cb0" stroke-width="2.5" fill="none" stroke-dasharray="5,5" stroke-linecap="round"/>
  <path d="M210,94 L272,108 L328,134 L360,175 L358,212" stroke="#2b6cb0" stroke-width="2.5" fill="none" stroke-dasharray="5,5" stroke-linecap="round"/>
  <text x="16" y="168" font-size="13" fill="#2b6cb0" font-weight="bold" font-family="sans-serif">III</text>
  <line x1="63" y1="218" x2="63" y2="272" stroke="#718096" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="357" y1="218" x2="357" y2="272" stroke="#718096" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="63" y1="272" x2="357" y2="272" stroke="#718096" stroke-width="1.5"/>
  <text x="210" y="285" text-anchor="middle" font-size="10" fill="#718096" font-family="sans-serif">★ 三型均涉及 Pterygoid plates（翼狀板）</text>
  <text x="134" y="142" text-anchor="middle" font-size="9" fill="#2c5282" font-family="sans-serif">眼眶</text>
  <text x="286" y="142" text-anchor="middle" font-size="9" fill="#2c5282" font-family="sans-serif">眼眶</text>
  <text x="210" y="134" text-anchor="middle" font-size="9" fill="#2c5282" font-family="sans-serif">鼻骨</text>
  <text x="385" y="142" font-size="9" fill="#7a8fa8" font-family="sans-serif">顴弓</text>
</svg>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.5rem;margin-top:.7rem;font-size:.8rem">
  <div style="background:#fff5f5;border:2px solid #fc8181;border-radius:8px;padding:.55rem">
    <div style="color:#c53030;font-weight:700;margin-bottom:.25rem">Le Fort I 橫型</div>
    <div style="color:#4a5568;line-height:1.5">梨狀孔下緣 → 上顎竇前側壁 → 翼狀板下部<br>⟹ 浮動上顎（floating palate）</div>
  </div>
  <div style="background:#fffaf0;border:2px solid #f6ad55;border-radius:8px;padding:.55rem">
    <div style="color:#c05621;font-weight:700;margin-bottom:.25rem">Le Fort II 金字塔型</div>
    <div style="color:#4a5568;line-height:1.5">鼻骨 → 眶內側壁 → 眶下緣 → 上顎前壁<br>⟹ 中面部骨折</div>
  </div>
  <div style="background:#ebf8ff;border:2px solid #63b3ed;border-radius:8px;padding:.55rem">
    <div style="color:#2b6cb0;font-weight:700;margin-bottom:.25rem">Le Fort III 顱面分離</div>
    <div style="color:#4a5568;line-height:1.5">鼻額縫 → 眶外側壁 → 顴弓 → 翼狀板<br>⟹ 整臉與顱底分離</div>
  </div>
</div>
<div style="background:#fffff0;border-left:4px solid #d69e2e;border-radius:0 8px 8px 0;padding:.5rem .8rem;margin-top:.6rem;font-size:.82rem;color:#744210">
  💡 <b>記憶法：</b>I = 牙關打開（上顎動）／II = 鼻子一起動／III = 整張臉脫離頭顱
</div>
</div>`,

// ============================================================
// 2. 傷口癒合
// ============================================================
woundHealing: `
<div style="margin:.65rem 0;background:#fff;border-radius:8px;border:1px solid #e2e8f0;padding:.85rem;">
<div style="font-weight:700;color:#1a365d;font-size:.92rem;margin-bottom:.7rem">⏱ 傷口癒合四階段圖</div>
<svg viewBox="0 0 520 195" style="width:100%;max-width:520px;display:block;margin:0 auto">
  <rect x="30" y="18" width="65" height="112" fill="#fff5f5" stroke="#fc8181" stroke-width="1.5"/>
  <rect x="95" y="18" width="100" height="112" fill="#fffaf0" stroke="#f6ad55" stroke-width="1.5"/>
  <rect x="195" y="18" width="155" height="112" fill="#f0fff4" stroke="#68d391" stroke-width="1.5"/>
  <rect x="350" y="18" width="140" height="112" fill="#ebf8ff" stroke="#63b3ed" stroke-width="1.5"/>
  <text x="62" y="35" text-anchor="middle" font-size="10" font-weight="700" fill="#c53030" font-family="sans-serif">止血期</text>
  <text x="145" y="35" text-anchor="middle" font-size="10" font-weight="700" fill="#c05621" font-family="sans-serif">發炎期</text>
  <text x="272" y="35" text-anchor="middle" font-size="10" font-weight="700" fill="#276749" font-family="sans-serif">增殖期</text>
  <text x="420" y="35" text-anchor="middle" font-size="10" font-weight="700" fill="#2b6cb0" font-family="sans-serif">重塑期</text>
  <text x="62" y="49" text-anchor="middle" font-size="8.5" fill="#718096" font-family="sans-serif">0–24 hr</text>
  <text x="145" y="49" text-anchor="middle" font-size="8.5" fill="#718096" font-family="sans-serif">1–5 天</text>
  <text x="272" y="49" text-anchor="middle" font-size="8.5" fill="#718096" font-family="sans-serif">3天–3週</text>
  <text x="420" y="49" text-anchor="middle" font-size="8.5" fill="#718096" font-family="sans-serif">3週–12月+</text>
  <text x="36" y="65" font-size="8.5" fill="#c53030" font-family="sans-serif">• 血小板</text>
  <text x="36" y="77" font-size="8.5" fill="#c53030" font-family="sans-serif">• 血塊形成</text>
  <text x="36" y="89" font-size="8.5" fill="#c53030" font-family="sans-serif">• 血管收縮</text>
  <text x="36" y="101" font-size="8.5" fill="#c53030" font-family="sans-serif">• 纖維蛋白</text>
  <text x="100" y="65" font-size="8.5" fill="#c05621" font-family="sans-serif">• PMN→巨噬</text>
  <text x="100" y="77" font-size="8.5" fill="#c05621" font-family="sans-serif">• 血管擴張</text>
  <text x="100" y="89" font-size="8.5" fill="#c05621" font-family="sans-serif">• 細胞激素</text>
  <text x="100" y="101" font-size="8.5" fill="#c05621" font-family="sans-serif">• 紅腫熱痛</text>
  <text x="200" y="65" font-size="8.5" fill="#276749" font-family="sans-serif">• 纖維母細胞</text>
  <text x="200" y="77" font-size="8.5" fill="#276749" font-family="sans-serif">• 膠原蛋白 III</text>
  <text x="200" y="89" font-size="8.5" fill="#276749" font-family="sans-serif">• 新生血管</text>
  <text x="200" y="101" font-size="8.5" fill="#276749" font-family="sans-serif">• 上皮再生</text>
  <text x="355" y="65" font-size="8.5" fill="#2b6cb0" font-family="sans-serif">• III→I型膠原</text>
  <text x="355" y="77" font-size="8.5" fill="#2b6cb0" font-family="sans-serif">• 最大強度80%</text>
  <text x="355" y="89" font-size="8.5" fill="#2b6cb0" font-family="sans-serif">• 瘢痕重塑</text>
  <text x="355" y="101" font-size="8.5" fill="#2b6cb0" font-family="sans-serif">• 無毛囊汗腺</text>
  <path d="M30,160 Q60,158 95,155 Q145,150 195,140 Q280,118 350,108 Q420,100 490,98" stroke="#805ad5" stroke-width="2.5" fill="none"/>
  <text x="492" y="101" font-size="9" fill="#805ad5" font-family="sans-serif">抗張力</text>
  <line x1="30" y1="165" x2="490" y2="165" stroke="#a0aec0" stroke-width="1.5"/>
  <text x="90" y="178" font-size="8" fill="#a0aec0" font-family="sans-serif">1d</text>
  <text x="140" y="178" font-size="8" fill="#a0aec0" font-family="sans-serif">5d</text>
  <text x="188" y="178" font-size="8" fill="#a0aec0" font-family="sans-serif">2w</text>
  <text x="340" y="178" font-size="8" fill="#a0aec0" font-family="sans-serif">6w</text>
  <text x="450" y="178" font-size="8" fill="#a0aec0" font-family="sans-serif">12w+</text>
</svg>
<div style="background:#fff5f5;border-left:3px solid #c53030;border-radius:0 8px 8px 0;padding:.5rem .8rem;margin-top:.5rem;font-size:.82rem">
  <b style="color:#c53030">Dry Socket（乾性齒槽炎）</b> — 血塊脫落、骨暴露、劇烈疼痛（拔牙後3–5天）<br>
  <span style="color:#4a5568">危險因子：吸菸★、女性、OCP、下顎阻生牙、過度漱口 ｜ 處置：沖洗＋Alvogyl（含丁香酚）</span>
</div>
</div>`,

// ============================================================
// 3. 筋膜間隙
// ============================================================
fascialSpaces: `
<div style="margin:.65rem 0;background:#fff;border-radius:8px;border:1px solid #e2e8f0;padding:.85rem;">
<div style="font-weight:700;color:#1a365d;font-size:.92rem;margin-bottom:.7rem">🦠 筋膜間隙解剖（冠狀面示意）</div>
<svg viewBox="0 0 460 265" style="width:100%;max-width:460px;display:block;margin:0 auto">
  <ellipse cx="230" cy="140" rx="210" ry="115" fill="#fce8d8" stroke="#d69e7a" stroke-width="1.5" opacity=".35"/>
  <path d="M72,55 L152,55 L162,165 L62,165 Z" fill="#e8d5b0" stroke="#9a7940" stroke-width="2"/>
  <rect x="82" y="42" width="22" height="18" rx="4" fill="white" stroke="#aaa" stroke-width="1.5"/>
  <rect x="110" y="42" width="22" height="18" rx="4" fill="white" stroke="#aaa" stroke-width="1.5"/>
  <rect x="77" y="57" width="65" height="8" rx="3" fill="#f8a5a5" opacity=".6"/>
  <path d="M298,55 L378,55 L388,165 L288,165 Z" fill="#e8d5b0" stroke="#9a7940" stroke-width="2"/>
  <rect x="308" y="42" width="22" height="18" rx="4" fill="white" stroke="#aaa" stroke-width="1.5"/>
  <rect x="336" y="42" width="22" height="18" rx="4" fill="white" stroke="#aaa" stroke-width="1.5"/>
  <rect x="300" y="57" width="65" height="8" rx="3" fill="#f8a5a5" opacity=".6"/>
  <ellipse cx="230" cy="100" rx="68" ry="50" fill="#f4a0a0" stroke="#c87070" stroke-width="2"/>
  <text x="230" y="105" text-anchor="middle" font-size="13" fill="#7b3f3f" font-family="sans-serif" font-weight="bold">舌</text>
  <path d="M60,144 Q145,156 230,158 Q315,156 400,144" stroke="#2b6cb0" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <line x1="230" y1="158" x2="230" y2="196" stroke="#2b6cb0" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="230" y="208" text-anchor="middle" font-size="10" fill="#2b6cb0" font-weight="700" font-family="sans-serif">Mylohyoid 下頜舌骨肌（關鍵屏障）</text>
  <rect x="82" y="112" width="74" height="28" rx="5" fill="#f0fff4" stroke="#68d391" stroke-width="1.5"/>
  <text x="119" y="126" text-anchor="middle" font-size="8.5" fill="#276749" font-weight="700" font-family="sans-serif">舌下間隙</text>
  <text x="119" y="137" text-anchor="middle" font-size="8" fill="#276749" font-family="sans-serif">Sublingual</text>
  <rect x="304" y="112" width="74" height="28" rx="5" fill="#f0fff4" stroke="#68d391" stroke-width="1.5"/>
  <text x="341" y="126" text-anchor="middle" font-size="8.5" fill="#276749" font-weight="700" font-family="sans-serif">舌下間隙</text>
  <text x="341" y="137" text-anchor="middle" font-size="8" fill="#276749" font-family="sans-serif">Sublingual</text>
  <rect x="74" y="172" width="82" height="28" rx="5" fill="#fffaf0" stroke="#f6ad55" stroke-width="1.5"/>
  <text x="115" y="186" text-anchor="middle" font-size="8.5" fill="#c05621" font-weight="700" font-family="sans-serif">下頜下間隙</text>
  <text x="115" y="197" text-anchor="middle" font-size="8" fill="#c05621" font-family="sans-serif">Submandibular</text>
  <rect x="304" y="172" width="82" height="28" rx="5" fill="#fffaf0" stroke="#f6ad55" stroke-width="1.5"/>
  <text x="345" y="186" text-anchor="middle" font-size="8.5" fill="#c05621" font-weight="700" font-family="sans-serif">下頜下間隙</text>
  <text x="345" y="197" text-anchor="middle" font-size="8" fill="#c05621" font-family="sans-serif">Submandibular</text>
  <rect x="180" y="212" width="100" height="28" rx="5" fill="#fff5f5" stroke="#fc8181" stroke-width="1.5"/>
  <text x="230" y="226" text-anchor="middle" font-size="8.5" fill="#c53030" font-weight="700" font-family="sans-serif">頦下間隙 Submental</text>
  <text x="230" y="237" text-anchor="middle" font-size="8" fill="#c53030" font-family="sans-serif">★ Ludwig's angina 源頭</text>
  <text x="18" y="92" font-size="8" fill="#805ad5" font-weight="700" font-family="sans-serif">頰間隙</text>
  <text x="425" y="92" font-size="8" fill="#805ad5" font-weight="700" font-family="sans-serif">頰間隙</text>
</svg>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem;margin-top:.5rem;font-size:.82rem">
  <div style="background:#fff5f5;border-left:3px solid #c53030;padding:.5rem .7rem;border-radius:0 6px 6px 0">
    <b style="color:#c53030">Ludwig's Angina</b><br>
    <span style="color:#4a5568">同時波及：雙側下頜下＋雙側舌下＋頦下（共5間隙）<br>口底硬腫、舌頭抬高 → 氣道危及 → 立即建立氣道</span>
  </div>
  <div style="background:#ebf8ff;border-left:3px solid #2b6cb0;padding:.5rem .7rem;border-radius:0 6px 6px 0">
    <b style="color:#2b6cb0">感染源 ↔ 間隙對應</b><br>
    <span style="color:#4a5568">下顎前牙 → 頦下間隙<br>下顎後牙（根在mylohyoid上）→ 舌下<br>下顎後牙（根在mylohyoid下）→ 下頜下</span>
  </div>
</div>
</div>`,

// ============================================================
// 4. BSSO vs IVRO
// ============================================================
bssoVsIvro: `
<div style="margin:.65rem 0;background:#fff;border-radius:8px;border:1px solid #e2e8f0;padding:.85rem;">
<div style="font-weight:700;color:#1a365d;font-size:.92rem;margin-bottom:.7rem">✂️ BSSO vs IVRO 正顎手術比較圖</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
<div style="text-align:center">
<div style="font-weight:700;color:#276749;font-size:.85rem;margin-bottom:.4rem;background:#f0fff4;border-radius:6px;padding:.3rem">BSSO（雙側矢狀劈開截骨術）</div>
<svg viewBox="0 0 200 210" style="width:100%;max-width:200px;display:block;margin:0 auto">
  <ellipse cx="155" cy="26" rx="15" ry="20" fill="#e8d5b0" stroke="#9a7940" stroke-width="2"/>
  <path d="M85,16 L98,50 L76,50 Z" fill="#e8d5b0" stroke="#9a7940" stroke-width="1.5"/>
  <path d="M76,50 L78,150 L165,150 L163,50 L98,50" fill="#e8d5b0" stroke="#9a7940" stroke-width="2"/>
  <path d="M16,128 L78,125 L78,150 L165,150 L165,142 L20,140 Z" fill="#e8d5b0" stroke="#9a7940" stroke-width="2"/>
  <rect x="18" y="110" width="68" height="18" rx="4" fill="white" stroke="#aaa" stroke-width="1.5"/>
  <path d="M38,138 Q88,136 128,138 Q152,139 157,123" stroke="#f6ad55" stroke-width="2" fill="none" stroke-dasharray="5,3"/>
  <text x="88" y="148" font-size="7" fill="#c05621" text-anchor="middle" font-family="sans-serif">IAN canal</text>
  <line x1="78" y1="75" x2="78" y2="150" stroke="#c53030" stroke-width="3"/>
  <path d="M78,105 Q118,103 158,105" stroke="#c53030" stroke-width="3" stroke-dasharray="7,3"/>
  <text x="105" y="82" font-size="8" fill="#c53030" font-weight="700" font-family="sans-serif">矢狀劈開</text>
  <text x="105" y="93" font-size="7.5" fill="#c53030" font-family="sans-serif">（內外側切線）</text>
  <path d="M6,128 L28,128" stroke="#2b6cb0" stroke-width="2.5"/>
  <polygon points="28,124 36,128 28,132" fill="#2b6cb0"/>
  <text x="2" y="120" font-size="7.5" fill="#2b6cb0" font-family="sans-serif">前移↔後退</text>
</svg>
</div>
<div style="text-align:center">
<div style="font-weight:700;color:#2b6cb0;font-size:.85rem;margin-bottom:.4rem;background:#ebf8ff;border-radius:6px;padding:.3rem">IVRO（口內垂直截骨術）</div>
<svg viewBox="0 0 200 210" style="width:100%;max-width:200px;display:block;margin:0 auto">
  <ellipse cx="155" cy="26" rx="15" ry="20" fill="#e8d5b0" stroke="#9a7940" stroke-width="2"/>
  <path d="M85,16 L98,50 L76,50 Z" fill="#e8d5b0" stroke="#9a7940" stroke-width="1.5"/>
  <path d="M76,50 L78,150 L165,150 L163,50 L98,50" fill="#e8d5b0" stroke="#9a7940" stroke-width="2"/>
  <path d="M16,128 L78,125 L78,150 L165,150 L165,142 L20,140 Z" fill="#e8d5b0" stroke="#9a7940" stroke-width="2"/>
  <rect x="18" y="110" width="68" height="18" rx="4" fill="white" stroke="#aaa" stroke-width="1.5"/>
  <path d="M38,138 Q88,136 128,138 Q152,139 157,123" stroke="#f6ad55" stroke-width="2" fill="none" stroke-dasharray="5,3"/>
  <text x="88" y="148" font-size="7" fill="#c05621" text-anchor="middle" font-family="sans-serif">IAN canal（不剝離）</text>
  <path d="M128,48 L126,150" stroke="#2b6cb0" stroke-width="4"/>
  <circle cx="128" cy="48" r="5" fill="#2b6cb0" opacity=".4"/>
  <text x="134" y="85" font-size="8" fill="#2b6cb0" font-weight="700" font-family="sans-serif">垂直截骨</text>
  <text x="134" y="96" font-size="7.5" fill="#2b6cb0" font-family="sans-serif">（單一切線）</text>
  <text x="128" y="43" text-anchor="middle" font-size="7" fill="#2b6cb0" font-family="sans-serif">Sigmoid notch</text>
  <path d="M6,130 L28,130" stroke="#718096" stroke-width="2"/>
  <text x="2" y="122" font-size="7.5" fill="#718096" font-family="sans-serif">後退為主</text>
  <text x="10" y="148" font-size="7.5" fill="#718096" font-family="sans-serif">IMF固定</text>
</svg>
</div>
</div>
<table style="width:100%;border-collapse:collapse;font-size:.8rem;margin-top:.6rem">
<thead><tr style="background:#1a365d;color:white">
  <th style="padding:.4rem .5rem;text-align:left">項目</th>
  <th style="padding:.4rem .5rem;color:#68d391">BSSO</th>
  <th style="padding:.4rem .5rem;color:#63b3ed">IVRO</th>
</tr></thead>
<tbody>
<tr><td style="padding:.35rem .5rem;border-bottom:1px solid #e2e8f0;font-weight:600">固定</td>
  <td style="padding:.35rem .5rem;border-bottom:1px solid #e2e8f0">鈦板螺釘（rigid fixation）</td>
  <td style="padding:.35rem .5rem;border-bottom:1px solid #e2e8f0">IMF（顎間固定）4–6週</td></tr>
<tr style="background:#f7fafc"><td style="padding:.35rem .5rem;border-bottom:1px solid #e2e8f0;font-weight:600">神經損傷率</td>
  <td style="padding:.35rem .5rem;border-bottom:1px solid #e2e8f0;color:#c53030">較高（IAN需剝離）</td>
  <td style="padding:.35rem .5rem;border-bottom:1px solid #e2e8f0;color:#276749">較低（不剝離IAN）</td></tr>
<tr><td style="padding:.35rem .5rem;border-bottom:1px solid #e2e8f0;font-weight:600">方向</td>
  <td style="padding:.35rem .5rem;border-bottom:1px solid #e2e8f0">前移／後退均可</td>
  <td style="padding:.35rem .5rem;border-bottom:1px solid #e2e8f0">主要後退（setback）</td></tr>
<tr style="background:#f7fafc"><td style="padding:.35rem .5rem;font-weight:600">髁突控制</td>
  <td style="padding:.35rem .5rem;color:#276749">佳（精確定位）</td>
  <td style="padding:.35rem .5rem;color:#c05621">差（靠自行坐定）</td></tr>
</tbody>
</table>
</div>`,

// ============================================================
// 5. 牙齒外傷 IADT
// ============================================================
toothTrauma: `
<div style="margin:.65rem 0;background:#fff;border-radius:8px;border:1px solid #e2e8f0;padding:.85rem;">
<div style="font-weight:700;color:#1a365d;font-size:.92rem;margin-bottom:.7rem">🦷 IADT 牙齒外傷分類圖</div>
<svg viewBox="0 0 480 205" style="width:100%;max-width:480px;display:block;margin:0 auto">

<!-- === NORMAL x=5 === -->
<g transform="translate(5,5)">
  <rect x="5" y="58" width="62" height="78" rx="6" fill="#e8d5b0" stroke="#9a7940" stroke-width="1.5"/>
  <rect x="18" y="63" width="36" height="70" rx="3" fill="#fffef0" stroke="#c8b060" stroke-width="1"/>
  <rect x="16" y="18" width="38" height="44" rx="5" fill="white" stroke="#aaa" stroke-width="1.5"/>
  <rect x="5" y="60" width="62" height="8" rx="3" fill="#f8a0a0" opacity=".5"/>
  <text x="36" y="150" text-anchor="middle" font-size="9" font-weight="700" fill="#1a365d" font-family="sans-serif">正常（參考）</text>
</g>

<!-- === CONCUSSION x=85 === -->
<g transform="translate(85,5)">
  <rect x="5" y="58" width="62" height="78" rx="6" fill="#e8d5b0" stroke="#9a7940" stroke-width="1.5"/>
  <rect x="16" y="61" width="40" height="72" rx="3" fill="#ffe0b2" stroke="#f6ad55" stroke-width="2"/>
  <rect x="18" y="67" width="36" height="64" rx="3" fill="#fffef0" stroke="#c8b060" stroke-width="1"/>
  <rect x="16" y="18" width="38" height="44" rx="5" fill="white" stroke="#aaa" stroke-width="1.5"/>
  <rect x="5" y="60" width="62" height="8" rx="3" fill="#f8a0a0" opacity=".5"/>
  <text x="55" y="28" font-size="13" font-family="sans-serif">💥</text>
  <text x="36" y="150" text-anchor="middle" font-size="8.5" font-weight="700" fill="#c05621" font-family="sans-serif">震盪</text>
  <text x="36" y="161" text-anchor="middle" font-size="7.5" fill="#718096" font-family="sans-serif">Concussion</text>
  <text x="36" y="172" text-anchor="middle" font-size="7.5" fill="#718096" font-family="sans-serif">叩診(+)不動</text>
</g>

<!-- === SUBLUXATION x=165 === -->
<g transform="translate(165,5)">
  <rect x="5" y="58" width="62" height="78" rx="6" fill="#e8d5b0" stroke="#9a7940" stroke-width="1.5"/>
  <rect x="14" y="61" width="44" height="72" rx="3" fill="#ffe0b2" stroke="#f6ad55" stroke-width="2"/>
  <rect x="16" y="65" width="40" height="66" rx="3" fill="#fffef0" stroke="#c8b060" stroke-width="1"/>
  <rect x="16" y="18" width="38" height="44" rx="5" fill="white" stroke="#aaa" stroke-width="1.5"/>
  <path d="M6,40 L15,40 M13,36 L6,40 L13,44" stroke="#c53030" stroke-width="1.5" fill="none"/>
  <path d="M66,40 L57,40 M59,36 L66,40 L59,44" stroke="#c53030" stroke-width="1.5" fill="none"/>
  <rect x="5" y="60" width="62" height="8" rx="3" fill="#f8a0a0" opacity=".5"/>
  <text x="36" y="150" text-anchor="middle" font-size="8.5" font-weight="700" fill="#c53030" font-family="sans-serif">搖晃</text>
  <text x="36" y="161" text-anchor="middle" font-size="7.5" fill="#718096" font-family="sans-serif">Subluxation</text>
  <text x="36" y="172" text-anchor="middle" font-size="7.5" fill="#718096" font-family="sans-serif">動搖無位移</text>
</g>

<!-- === LATERAL LUXATION x=245 === -->
<g transform="translate(245,5)">
  <rect x="5" y="58" width="62" height="78" rx="6" fill="#e8d5b0" stroke="#9a7940" stroke-width="1.5"/>
  <g transform="rotate(16,36,88)">
    <rect x="18" y="63" width="36" height="70" rx="3" fill="#fffef0" stroke="#f6ad55" stroke-width="1.5"/>
    <rect x="16" y="18" width="38" height="44" rx="5" fill="white" stroke="#f6ad55" stroke-width="2"/>
  </g>
  <rect x="5" y="60" width="62" height="8" rx="3" fill="#f8a0a0" opacity=".5"/>
  <path d="M46,38 L60,26" stroke="#c05621" stroke-width="2"/>
  <polygon points="60,26 52,25 56,33" fill="#c05621"/>
  <text x="36" y="150" text-anchor="middle" font-size="8.5" font-weight="700" fill="#c05621" font-family="sans-serif">側向脫位</text>
  <text x="36" y="161" text-anchor="middle" font-size="7.5" fill="#718096" font-family="sans-serif">Lateral Lux.</text>
  <text x="36" y="172" text-anchor="middle" font-size="7.5" fill="#718096" font-family="sans-serif">不動，側向移</text>
</g>

<!-- === EXTRUSION x=325 === -->
<g transform="translate(325,5)">
  <rect x="5" y="58" width="62" height="78" rx="6" fill="#e8d5b0" stroke="#9a7940" stroke-width="1.5"/>
  <rect x="18" y="40" width="36" height="72" rx="3" fill="#fffef0" stroke="#f6ad55" stroke-width="1.5"/>
  <rect x="16" y="2" width="38" height="42" rx="5" fill="white" stroke="#c53030" stroke-width="2"/>
  <rect x="18" y="110" width="36" height="22" rx="2" fill="#d4e8f0" opacity=".5"/>
  <rect x="5" y="60" width="62" height="8" rx="3" fill="#f8a0a0" opacity=".5"/>
  <path d="M60,14 L60,4" stroke="#c53030" stroke-width="2"/>
  <polygon points="56,4 60,0 64,4" fill="#c53030"/>
  <text x="36" y="150" text-anchor="middle" font-size="8.5" font-weight="700" fill="#c53030" font-family="sans-serif">部分脫出</text>
  <text x="36" y="161" text-anchor="middle" font-size="7.5" fill="#718096" font-family="sans-serif">Extrusion</text>
  <text x="36" y="172" text-anchor="middle" font-size="7.5" fill="#718096" font-family="sans-serif">牙冠拉長</text>
</g>

<!-- === INTRUSION x=405 === -->
<g transform="translate(405,5)">
  <rect x="5" y="58" width="62" height="78" rx="6" fill="#e8d5b0" stroke="#9a7940" stroke-width="1.5"/>
  <rect x="18" y="76" width="36" height="58" rx="3" fill="#fffef0" stroke="#c53030" stroke-width="2"/>
  <rect x="16" y="36" width="38" height="42" rx="5" fill="white" stroke="#c53030" stroke-width="2"/>
  <rect x="5" y="60" width="62" height="8" rx="3" fill="#f8a0a0" opacity=".5"/>
  <path d="M60,52 L60,62" stroke="#c53030" stroke-width="2"/>
  <polygon points="56,62 60,68 64,62" fill="#c53030"/>
  <text x="36" y="150" text-anchor="middle" font-size="8.5" font-weight="700" fill="#c53030" font-family="sans-serif">嵌入</text>
  <text x="36" y="161" text-anchor="middle" font-size="7.5" fill="#718096" font-family="sans-serif">Intrusion</text>
  <text x="36" y="172" text-anchor="middle" font-size="7.5" fill="#718096" font-family="sans-serif">牙冠變短</text>
</g>

</svg>
<div style="background:#fff5f5;border:1px solid #fc8181;border-radius:8px;padding:.55rem .8rem;font-size:.82rem;margin-top:.3rem">
  <b style="color:#c53030">★ 全脫位 Avulsion：最緊急！</b>
  <span style="color:#4a5568">乾燥&lt;60min → 牛奶/HBSS保存 → 1–2週flexible splint → RCT<br>
  乾燥&gt;60min（PDL壞死）→ 2% NaF浸泡20min → 4–6週固定 → 預期牙根吸收</span>
</div>
</div>`,

// ============================================================
// 6. 神經阻斷術
// ============================================================
nerveBlocks: `
<div style="margin:.65rem 0;background:#fff;border-radius:8px;border:1px solid #e2e8f0;padding:.85rem;">
<div style="font-weight:700;color:#1a365d;font-size:.92rem;margin-bottom:.7rem">💉 下顎神經阻斷術比較</div>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.8rem">
<div>
<div style="background:#f0fff4;border-radius:6px;padding:.3rem;font-size:.82rem;font-weight:700;color:#276749;margin-bottom:.4rem;text-align:center">IANB（標準法）</div>
<svg viewBox="0 0 150 170" style="width:100%;max-width:150px;display:block;margin:0 auto">
  <path d="M20,18 L128,28 L138,158 L10,152 Z" fill="#e8d5b0" stroke="#9a7940" stroke-width="2"/>
  <ellipse cx="83" cy="93" rx="8" ry="6" fill="#c4a45a"/>
  <text x="94" y="91" font-size="7" fill="#7a5020" font-family="sans-serif">Lingula</text>
  <line x1="68" y1="32" x2="76" y2="97" stroke="#805ad5" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="22" y="55" font-size="7" fill="#805ad5" font-family="sans-serif">Pterygo-</text>
  <text x="22" y="65" font-size="7" fill="#805ad5" font-family="sans-serif">mandibular</text>
  <text x="22" y="75" font-size="7" fill="#805ad5" font-family="sans-serif">raphe</text>
  <path d="M18,73 L76,91" stroke="#c53030" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="18,73 10,68 14,77" fill="#c53030"/>
  <path d="M80,98 L88,128 L48,143" stroke="#f6ad55" stroke-width="1.5" fill="none"/>
  <text x="30" y="153" font-size="7" fill="#c05621" font-family="sans-serif">IAN</text>
</svg>
<div style="font-size:.73rem;color:#4a5568">
  <b>目標：</b>Lingula上方<br>
  <b>成功率：</b>65–86%<br>
  <b>麻醉：</b>IAN＋Lingual<br>
  <b>Harpoon回抽：必要</b>
</div>
</div>
<div>
<div style="background:#ebf8ff;border-radius:6px;padding:.3rem;font-size:.82rem;font-weight:700;color:#2b6cb0;margin-bottom:.4rem;text-align:center">Gow-Gates 法</div>
<svg viewBox="0 0 150 170" style="width:100%;max-width:150px;display:block;margin:0 auto">
  <path d="M20,38 L108,38 L118,158 L10,153 Z" fill="#e8d5b0" stroke="#9a7940" stroke-width="2"/>
  <ellipse cx="116" cy="20" rx="17" ry="15" fill="#e8d5b0" stroke="#9a7940" stroke-width="2"/>
  <text x="116" y="23" text-anchor="middle" font-size="7" fill="#4a5568" font-family="sans-serif">髁突</text>
  <circle cx="113" cy="40" r="7" fill="#2b6cb0" opacity=".25" stroke="#2b6cb0" stroke-width="1.5"/>
  <text x="120" y="56" font-size="7" fill="#2b6cb0" font-family="sans-serif">目標：</text>
  <text x="120" y="66" font-size="7" fill="#2b6cb0" font-family="sans-serif">髁突頸</text>
  <path d="M16,78 L108,42" stroke="#2b6cb0" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="16,78 8,72 12,82" fill="#2b6cb0"/>
  <text x="5" y="94" font-size="7" fill="#2b6cb0" font-family="sans-serif">入針：</text>
  <text x="5" y="104" font-size="7" fill="#2b6cb0" font-family="sans-serif">上顎第2</text>
  <text x="5" y="114" font-size="7" fill="#2b6cb0" font-family="sans-serif">大臼遠心</text>
</svg>
<div style="font-size:.73rem;color:#4a5568">
  <b>目標：</b>髁突頸部（更高）<br>
  <b>成功率：</b>92–100%★<br>
  <b>麻醉：</b>IAN＋Lingual＋<br>Mylohyoid＋Buccal<br>
  <b>需大張口</b>
</div>
</div>
<div>
<div style="background:#faf5ff;border-radius:6px;padding:.3rem;font-size:.82rem;font-weight:700;color:#553c9a;margin-bottom:.4rem;text-align:center">Vazirani-Akinosi</div>
<svg viewBox="0 0 150 170" style="width:100%;max-width:150px;display:block;margin:0 auto">
  <rect x="10" y="28" width="130" height="24" rx="4" fill="#f0dfbf" stroke="#9a7940" stroke-width="1.5"/>
  <text x="75" y="43" text-anchor="middle" font-size="7" fill="#4a5568" font-family="sans-serif">上顎（閉口）</text>
  <path d="M12,52 L108,56 L110,152 L10,148 Z" fill="#e8d5b0" stroke="#9a7940" stroke-width="2"/>
  <path d="M12,68 L105,68" stroke="#553c9a" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="12,68 4,63 8,73" fill="#553c9a"/>
  <circle cx="105" cy="68" r="5" fill="#553c9a" opacity=".3"/>
  <text x="108" y="74" font-size="7" fill="#553c9a" font-family="sans-serif">翼上顎</text>
  <text x="108" y="84" font-size="7" fill="#553c9a" font-family="sans-serif">間隙</text>
  <text x="75" y="158" text-anchor="middle" font-size="7.5" fill="#553c9a" font-family="sans-serif">閉口注射法</text>
</svg>
<div style="font-size:.73rem;color:#4a5568">
  <b>適用：</b>牙關緊閉<br>
  <b>針平行：</b>上顎咬合面<br>
  <b>麻醉：</b>IAN＋Lingual<br>
  <b style="color:#c53030">⚠️ 回抽（靠近血管）</b>
</div>
</div>
</div>
</div>`,

// ============================================================
// 7. 放射影像 Buzzwords
// ============================================================
buzzwordPatterns: `
<div style="margin:.65rem 0;background:#fff;border-radius:8px;border:1px solid #e2e8f0;padding:.85rem;">
<div style="font-weight:700;color:#1a365d;font-size:.92rem;margin-bottom:.7rem">🔍 放射影像特徵型態（Buzzwords）</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.6rem">

<div style="background:#f7fafc;border-radius:8px;padding:.5rem;text-align:center">
<svg viewBox="0 0 80 65" style="width:100%;max-width:80px;display:block;margin:0 auto">
  <rect width="80" height="65" fill="#1a202c" rx="6"/>
  <circle cx="12" cy="10" r="2" fill="#888" opacity=".5"/><circle cx="26" cy="7" r="1.5" fill="#999" opacity=".4"/>
  <circle cx="40" cy="12" r="2" fill="#888" opacity=".5"/><circle cx="55" cy="8" r="1.5" fill="#aaa" opacity=".4"/>
  <circle cx="67" cy="14" r="2" fill="#888" opacity=".5"/><circle cx="8" cy="22" r="2" fill="#999" opacity=".5"/>
  <circle cx="22" cy="27" r="1.5" fill="#888" opacity=".4"/><circle cx="36" cy="21" r="2" fill="#aaa" opacity=".5"/>
  <circle cx="50" cy="26" r="1.5" fill="#888" opacity=".4"/><circle cx="63" cy="20" r="2" fill="#999" opacity=".5"/>
  <circle cx="16" cy="37" r="2" fill="#888" opacity=".5"/><circle cx="30" cy="42" r="1.5" fill="#999" opacity=".4"/>
  <circle cx="46" cy="35" r="2" fill="#888" opacity=".5"/><circle cx="60" cy="41" r="2" fill="#aaa" opacity=".4"/>
  <circle cx="8" cy="52" r="1.5" fill="#888" opacity=".5"/><circle cx="22" cy="55" r="2" fill="#999" opacity=".4"/>
  <circle cx="38" cy="50" r="1.5" fill="#888" opacity=".5"/><circle cx="54" cy="57" r="2" fill="#aaa" opacity=".4"/>
  <circle cx="68" cy="52" r="1.5" fill="#888" opacity=".5"/>
</svg>
<div style="font-size:.75rem;font-weight:700;color:#2b6cb0;margin-top:.3rem">Ground Glass</div>
<div style="font-size:.7rem;color:#718096;line-height:1.35">細顆粒毛玻璃<br><b>Fibrous Dysplasia</b></div>
</div>

<div style="background:#f7fafc;border-radius:8px;padding:.5rem;text-align:center">
<svg viewBox="0 0 80 65" style="width:100%;max-width:80px;display:block;margin:0 auto">
  <rect width="80" height="65" fill="#1a202c" rx="6"/>
  <circle cx="24" cy="26" r="17" fill="none" stroke="#7ad" stroke-width="1.5" opacity=".8"/>
  <circle cx="50" cy="20" r="15" fill="none" stroke="#7ad" stroke-width="1.5" opacity=".8"/>
  <circle cx="38" cy="44" r="17" fill="none" stroke="#7ad" stroke-width="1.5" opacity=".8"/>
  <circle cx="62" cy="45" r="13" fill="none" stroke="#7ad" stroke-width="1.5" opacity=".7"/>
  <circle cx="16" cy="51" r="11" fill="none" stroke="#7ad" stroke-width="1.5" opacity=".7"/>
</svg>
<div style="font-size:.75rem;font-weight:700;color:#2b6cb0;margin-top:.3rem">Soap Bubble</div>
<div style="font-size:.7rem;color:#718096;line-height:1.35">多房泡狀透亮<br><b>Myxoma / ABC</b></div>
</div>

<div style="background:#f7fafc;border-radius:8px;padding:.5rem;text-align:center">
<svg viewBox="0 0 80 65" style="width:100%;max-width:80px;display:block;margin:0 auto">
  <rect width="80" height="65" fill="#1a202c" rx="6"/>
  <circle cx="40" cy="33" r="7" fill="#888" stroke="#aaa" stroke-width="1"/>
  <line x1="40" y1="26" x2="40" y2="4" stroke="#ccc" stroke-width="1.5"/>
  <line x1="47" y1="27" x2="62" y2="7" stroke="#ccc" stroke-width="1.5"/>
  <line x1="51" y1="33" x2="74" y2="33" stroke="#ccc" stroke-width="1.5"/>
  <line x1="47" y1="39" x2="62" y2="59" stroke="#ccc" stroke-width="1.5"/>
  <line x1="40" y1="40" x2="40" y2="62" stroke="#ccc" stroke-width="1.5"/>
  <line x1="33" y1="39" x2="18" y2="59" stroke="#ccc" stroke-width="1.5"/>
  <line x1="29" y1="33" x2="6" y2="33" stroke="#ccc" stroke-width="1.5"/>
  <line x1="33" y1="27" x2="18" y2="7" stroke="#ccc" stroke-width="1.5"/>
</svg>
<div style="font-size:.75rem;font-weight:700;color:#2b6cb0;margin-top:.3rem">Sunburst</div>
<div style="font-size:.7rem;color:#718096;line-height:1.35">放射狀骨針<br><b>Osteosarcoma</b></div>
</div>

<div style="background:#f7fafc;border-radius:8px;padding:.5rem;text-align:center">
<svg viewBox="0 0 80 65" style="width:100%;max-width:80px;display:block;margin:0 auto">
  <rect width="80" height="65" fill="#1a202c" rx="6"/>
  <ellipse cx="20" cy="20" rx="12" ry="10" fill="#ddd" opacity=".8"/>
  <ellipse cx="52" cy="16" rx="10" ry="9" fill="#ddd" opacity=".7"/>
  <ellipse cx="36" cy="38" rx="14" ry="11" fill="#ddd" opacity=".8"/>
  <ellipse cx="63" cy="44" rx="11" ry="9" fill="#ddd" opacity=".7"/>
  <ellipse cx="16" cy="52" rx="10" ry="8" fill="#ddd" opacity=".7"/>
</svg>
<div style="font-size:.75rem;font-weight:700;color:#2b6cb0;margin-top:.3rem">Cotton Wool</div>
<div style="font-size:.7rem;color:#718096;line-height:1.35">棉絮狀混合密度<br><b>Paget's Disease</b></div>
</div>

<div style="background:#f7fafc;border-radius:8px;padding:.5rem;text-align:center">
<svg viewBox="0 0 80 65" style="width:100%;max-width:80px;display:block;margin:0 auto">
  <rect width="80" height="65" fill="#1a202c" rx="6"/>
  <ellipse cx="40" cy="33" rx="5" ry="4" fill="none" stroke="#ccc" stroke-width="1.5"/>
  <ellipse cx="40" cy="33" rx="13" ry="11" fill="none" stroke="#bbb" stroke-width="1.5"/>
  <ellipse cx="40" cy="33" rx="21" ry="18" fill="none" stroke="#aaa" stroke-width="1.5"/>
  <ellipse cx="40" cy="33" rx="29" ry="25" fill="none" stroke="#999" stroke-width="1.5"/>
  <ellipse cx="40" cy="33" rx="36" ry="30" fill="none" stroke="#888" stroke-width="1"/>
</svg>
<div style="font-size:.75rem;font-weight:700;color:#2b6cb0;margin-top:.3rem">Onion Skin</div>
<div style="font-size:.7rem;color:#718096;line-height:1.35">洋蔥皮狀骨膜<br><b>Ewing's Sarcoma</b></div>
</div>

<div style="background:#f7fafc;border-radius:8px;padding:.5rem;text-align:center">
<svg viewBox="0 0 80 65" style="width:100%;max-width:80px;display:block;margin:0 auto">
  <rect width="80" height="65" fill="#888" rx="6"/>
  <circle cx="18" cy="18" r="9" fill="#1a202c"/>
  <circle cx="47" cy="14" r="8" fill="#1a202c"/>
  <circle cx="28" cy="42" r="10" fill="#1a202c"/>
  <circle cx="60" cy="40" r="8" fill="#1a202c"/>
  <circle cx="12" cy="54" r="7" fill="#1a202c"/>
  <circle cx="67" cy="20" r="6" fill="#1a202c"/>
</svg>
<div style="font-size:.75rem;font-weight:700;color:#2b6cb0;margin-top:.3rem">Punched-Out</div>
<div style="font-size:.7rem;color:#718096;line-height:1.35">鑿孔狀缺損<br><b>Multiple Myeloma</b></div>
</div>

<div style="background:#f7fafc;border-radius:8px;padding:.5rem;text-align:center">
<svg viewBox="0 0 80 65" style="width:100%;max-width:80px;display:block;margin:0 auto">
  <rect width="80" height="65" fill="#1a202c" rx="6"/>
  <ellipse cx="14" cy="14" rx="5" ry="3" fill="#ddd" opacity=".6" transform="rotate(20,14,14)"/>
  <ellipse cx="34" cy="9" rx="6" ry="2.5" fill="#ccc" opacity=".7" transform="rotate(-15,34,9)"/>
  <ellipse cx="58" cy="18" rx="4" ry="5" fill="#ddd" opacity=".6" transform="rotate(30,58,18)"/>
  <ellipse cx="22" cy="34" rx="7" ry="2.5" fill="#ccc" opacity=".7" transform="rotate(-20,22,34)"/>
  <ellipse cx="48" cy="37" rx="5" ry="3.5" fill="#ddd" opacity=".6" transform="rotate(10,48,37)"/>
  <ellipse cx="68" cy="38" rx="3.5" ry="5" fill="#ccc" opacity=".7" transform="rotate(-30,68,38)"/>
  <ellipse cx="12" cy="54" rx="6" ry="2.5" fill="#ddd" opacity=".6" transform="rotate(15,12,54)"/>
  <ellipse cx="40" cy="57" rx="5" ry="3" fill="#ccc" opacity=".7" transform="rotate(-10,40,57)"/>
  <ellipse cx="64" cy="58" rx="6" ry="2.5" fill="#ddd" opacity=".6" transform="rotate(25,64,58)"/>
</svg>
<div style="font-size:.75rem;font-weight:700;color:#2b6cb0;margin-top:.3rem">Driven Snow</div>
<div style="font-size:.7rem;color:#718096;line-height:1.35">飄雪狀（Floaters）<br><b>CEOT (Pindborg)</b></div>
</div>

<div style="background:#f7fafc;border-radius:8px;padding:.5rem;text-align:center">
<svg viewBox="0 0 80 65" style="width:100%;max-width:80px;display:block;margin:0 auto">
  <rect width="80" height="65" fill="#1a202c" rx="6"/>
  <polygon points="20,7 30,7 35,16 30,25 20,25 15,16" fill="none" stroke="#7ad" stroke-width="1.5"/>
  <polygon points="35,7 45,7 50,16 45,25 35,25 30,16" fill="none" stroke="#7ad" stroke-width="1.5"/>
  <polygon points="50,7 60,7 65,16 60,25 50,25 45,16" fill="none" stroke="#7ad" stroke-width="1.5"/>
  <polygon points="12,23 22,23 27,32 22,41 12,41 7,32" fill="none" stroke="#7ad" stroke-width="1.5"/>
  <polygon points="27,23 37,23 42,32 37,41 27,41 22,32" fill="none" stroke="#7ad" stroke-width="1.5"/>
  <polygon points="42,23 52,23 57,32 52,41 42,41 37,32" fill="none" stroke="#7ad" stroke-width="1.5"/>
  <polygon points="57,23 67,23 72,32 67,41 57,41 52,32" fill="none" stroke="#7ad" stroke-width="1.5"/>
  <polygon points="20,39 30,39 35,48 30,57 20,57 15,48" fill="none" stroke="#7ad" stroke-width="1.5"/>
  <polygon points="35,39 45,39 50,48 45,57 35,57 30,48" fill="none" stroke="#7ad" stroke-width="1.5"/>
  <polygon points="50,39 60,39 65,48 60,57 50,57 45,48" fill="none" stroke="#7ad" stroke-width="1.5"/>
</svg>
<div style="font-size:.75rem;font-weight:700;color:#2b6cb0;margin-top:.3rem">Honeycomb</div>
<div style="font-size:.7rem;color:#718096;line-height:1.35">蜂巢多房<br><b>Ameloblastoma</b></div>
</div>

</div>
</div>`,

// ============================================================
// 8. 口外攝影定位
// ============================================================
projections: `
<div style="margin:.65rem 0;background:#fff;border-radius:8px;border:1px solid #e2e8f0;padding:.85rem;">
<div style="font-weight:700;color:#1a365d;font-size:.92rem;margin-bottom:.7rem">📷 口外攝影技術定位圖</div>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.8rem">

<div style="text-align:center">
<div style="background:#f0fff4;border-radius:6px;padding:.3rem;font-size:.82rem;font-weight:700;color:#276749;margin-bottom:.4rem">Waters（OM 23°）</div>
<svg viewBox="0 0 140 155" style="width:100%;max-width:140px;display:block;margin:0 auto">
  <ellipse cx="65" cy="58" rx="44" ry="50" fill="#fdf5e6" stroke="#9a7940" stroke-width="2"/>
  <circle cx="52" cy="50" r="5" fill="none" stroke="#5a8fa8" stroke-width="1.5"/>
  <path d="M52,72 Q65,78 78,72" fill="none" stroke="#aaa" stroke-width="1.5"/>
  <path d="M62,63 L68,63 L65,70 Z" fill="#fde" stroke="#c87070" stroke-width="1"/>
  <path d="M53,105 Q65,118 77,105" fill="#fdf5e6" stroke="#9a7940" stroke-width="2"/>
  <rect x="38" y="120" width="54" height="5" rx="2" fill="#4a5568"/>
  <text x="65" y="133" text-anchor="middle" font-size="8" fill="#4a5568" font-family="sans-serif">Cassette（前）</text>
  <line x1="122" y1="28" x2="65" y2="62" stroke="#c53030" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="65,62 72,54 60,55" fill="#c53030"/>
  <text x="124" y="27" font-size="8" fill="#c53030" font-family="sans-serif">X-ray</text>
  <text x="108" y="48" font-size="8" fill="#c53030" font-family="sans-serif">23°</text>
  <line x1="50" y1="50" x2="78" y2="63" stroke="#2b6cb0" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="80" y="66" font-size="7.5" fill="#2b6cb0" font-family="sans-serif">OML</text>
</svg>
<div style="font-size:.73rem;color:#4a5568;text-align:left">
  <b>顯示：</b>上顎竇、眼眶、顴骨<br>
  <b>特徵：</b>Petrous ridge 降到上顎竇下方<br>
  <b>用途：</b>竇炎、顴骨/Le Fort II骨折
</div>
</div>

<div style="text-align:center">
<div style="background:#ebf8ff;border-radius:6px;padding:.3rem;font-size:.82rem;font-weight:700;color:#2b6cb0;margin-bottom:.4rem">SMV（Submentovertex）</div>
<svg viewBox="0 0 140 155" style="width:100%;max-width:140px;display:block;margin:0 auto">
  <ellipse cx="65" cy="72" rx="44" ry="50" fill="#fdf5e6" stroke="#9a7940" stroke-width="2"/>
  <text x="65" y="18" text-anchor="middle" font-size="8" fill="#4a5568" font-family="sans-serif">Vertex（上）</text>
  <rect x="38" y="126" width="54" height="5" rx="2" fill="#4a5568"/>
  <text x="65" y="140" text-anchor="middle" font-size="8" fill="#4a5568" font-family="sans-serif">Cassette（下頦）</text>
  <line x1="65" y1="20" x2="65" y2="125" stroke="#c53030" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="61,125 65,133 69,125" fill="#c53030"/>
  <text x="70" y="20" font-size="8" fill="#c53030" font-family="sans-serif">X-ray ↓</text>
  <line x1="18" y1="98" x2="112" y2="98" stroke="#2b6cb0" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="114" y="101" font-size="7" fill="#2b6cb0" font-family="sans-serif">IOML ∥ plate</text>
</svg>
<div style="font-size:.73rem;color:#4a5568;text-align:left">
  <b>顯示：</b>顴弓（軸位，無重疊）<br>
  <b>顯示：</b>蝶骨、下顎骨（軸位）<br>
  <b>用途：</b>顴弓骨折最清晰
</div>
</div>

<div style="text-align:center">
<div style="background:#faf5ff;border-radius:6px;padding:.3rem;font-size:.82rem;font-weight:700;color:#553c9a;margin-bottom:.4rem">Reverse Towne（PA 30°）</div>
<svg viewBox="0 0 140 155" style="width:100%;max-width:140px;display:block;margin:0 auto">
  <ellipse cx="65" cy="68" rx="44" ry="50" fill="#fdf5e6" stroke="#9a7940" stroke-width="2"/>
  <rect x="38" y="124" width="54" height="5" rx="2" fill="#4a5568"/>
  <text x="65" y="137" text-anchor="middle" font-size="8" fill="#4a5568" font-family="sans-serif">Cassette（前）</text>
  <line x1="65" y1="6" x2="65" y2="58" stroke="#553c9a" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="61,58 65,66 69,58" fill="#553c9a"/>
  <text x="68" y="8" font-size="8" fill="#553c9a" font-family="sans-serif">X-ray（後→前）</text>
  <path d="M78,22 Q85,15 90,12" fill="none" stroke="#553c9a" stroke-width="1"/>
  <text x="84" y="12" font-size="8" fill="#553c9a" font-family="sans-serif">30°</text>
  <text x="65" y="92" text-anchor="middle" font-size="8" fill="#553c9a" font-family="sans-serif">髁突清晰顯示</text>
</svg>
<div style="font-size:.73rem;color:#4a5568;text-align:left">
  <b>顯示：</b>下顎髁突、升枝<br>
  <b>角度：</b>beam向下30°（後→前）<br>
  <b>用途：</b>髁突骨折診斷
</div>
</div>
</div>
<table style="width:100%;border-collapse:collapse;font-size:.79rem;margin-top:.7rem">
<thead><tr style="background:#1a365d;color:white">
  <th style="padding:.4rem .6rem;text-align:left">攝影法</th><th style="padding:.4rem .6rem">頭部位置</th>
  <th style="padding:.4rem .6rem">主要顯示</th><th style="padding:.4rem .6rem">關鍵用途</th>
</tr></thead>
<tbody>
<tr><td style="padding:.33rem .6rem;border-bottom:1px solid #e2e8f0;font-weight:600">Waters OM 23°</td>
  <td style="padding:.33rem .6rem;border-bottom:1px solid #e2e8f0">下頦抬起23°</td>
  <td style="padding:.33rem .6rem;border-bottom:1px solid #e2e8f0">上顎竇、眶、顴骨</td>
  <td style="padding:.33rem .6rem;border-bottom:1px solid #e2e8f0">竇炎、Le Fort II</td></tr>
<tr style="background:#f7fafc"><td style="padding:.33rem .6rem;border-bottom:1px solid #e2e8f0;font-weight:600">SMV（Submentovertex）</td>
  <td style="padding:.33rem .6rem;border-bottom:1px solid #e2e8f0">頸後仰，vertex向上</td>
  <td style="padding:.33rem .6rem;border-bottom:1px solid #e2e8f0">顴弓（軸位）</td>
  <td style="padding:.33rem .6rem;border-bottom:1px solid #e2e8f0">顴弓骨折</td></tr>
<tr><td style="padding:.33rem .6rem;border-bottom:1px solid #e2e8f0;font-weight:600">Reverse Towne PA 30°</td>
  <td style="padding:.33rem .6rem;border-bottom:1px solid #e2e8f0">面朝cassette</td>
  <td style="padding:.33rem .6rem;border-bottom:1px solid #e2e8f0">髁突、升枝</td>
  <td style="padding:.33rem .6rem;border-bottom:1px solid #e2e8f0">髁突骨折</td></tr>
<tr style="background:#f7fafc"><td style="padding:.33rem .6rem;font-weight:600">Lateral Oblique</td>
  <td style="padding:.33rem .6rem">側臥，頸伸直</td>
  <td style="padding:.33rem .6rem">下顎體/升枝（單側）</td>
  <td style="padding:.33rem .6rem">下顎骨折（基層）</td></tr>
</tbody>
</table>
</div>`,

// ============================================================
// 9. Avulsion 保存介質
// ============================================================
avulsionMedia: `
<div style="margin:.8rem 0;background:#fff5f5;border-radius:10px;border:1px solid #fc8181;padding:.8rem 1rem;font-size:.85rem">
<div style="font-weight:700;color:#c53030;margin-bottom:.5rem">★ 全脫位牙保存介質排名（PDL細胞存活）</div>
<div style="display:flex;flex-direction:column;gap:.3rem">
<div style="display:flex;align-items:center;gap:.7rem"><div style="background:#276749;color:white;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem;flex-shrink:0">1</div><div><b style="color:#276749">HBSS</b>（Hank's Balanced Salt Solution）<span style="color:#718096;font-size:.8rem"> — 最佳，可保存24h，維持pH及滲透壓</span></div></div>
<div style="display:flex;align-items:center;gap:.7rem"><div style="background:#2b6cb0;color:white;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem;flex-shrink:0">2</div><div><b style="color:#2b6cb0">牛奶</b>（冷藏全脂牛奶）<span style="color:#718096;font-size:.8rem"> — 常用，保存4–6h，等滲透壓</span></div></div>
<div style="display:flex;align-items:center;gap:.7rem"><div style="background:#c05621;color:white;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem;flex-shrink:0">3</div><div><b style="color:#c05621">生理食鹽水</b>（Normal Saline）<span style="color:#718096;font-size:.8rem"> — 短期可用，1–2h</span></div></div>
<div style="display:flex;align-items:center;gap:.7rem"><div style="background:#718096;color:white;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem;flex-shrink:0">4</div><div><b style="color:#718096">唾液</b>（口含或舌下含著）<span style="color:#718096;font-size:.8rem"> — 緊急短暫用，&lt;30min</span></div></div>
<div style="display:flex;align-items:center;gap:.7rem"><div style="background:#c53030;color:white;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem;flex-shrink:0">✗</div><div><b style="color:#c53030">清水</b>（hypotonic，低滲透壓）<span style="color:#718096;font-size:.8rem"> — 禁用！PDL細胞迅速死亡</span></div></div>
</div>
</div>`,

};

// ============================================================
// Helper: insert HTML after a specific h3 heading text
// ============================================================
function appendAfterH3(panel, keyword, html) {
  const h3s = panel.querySelectorAll('h3');
  for (const h3 of h3s) {
    if (h3.textContent.includes(keyword)) {
      const div = document.createElement('div');
      div.innerHTML = html;
      h3.parentNode.insertBefore(div, h3.nextSibling);
      return true;
    }
  }
  return false;
}

// ============================================================
// Main: inject diagram after h2 heading based on topic label
// All diagrams wrapped in collapsible <details> toggle
// ============================================================
function wrapDiag(title, html) {
  return `<details class="diag-block">
  <summary>📐 ${title}</summary>
  <div class="diag-inner">${html}</div>
</details>`;
}

function injectDiagrams(panel, label) {
  if (!panel || !label) return;
  const cb = panel.querySelector('.content-body') || panel;
  const h2 = panel.querySelector('h2');
  const after = (title, html) => {
    const d = document.createElement('div');
    d.innerHTML = wrapDiag(title, html);
    if (h2) h2.after(d); else cb.prepend(d);
  };
  const append = (title, html) => {
    const d = document.createElement('div');
    d.innerHTML = wrapDiag(title, html);
    cb.appendChild(d);
  };

  if (label.includes('顏面') || label.includes('Le Fort') || (label.includes('骨折') && label.includes('顏'))) {
    after('Le Fort 骨折分類圖', DIAG.lefort);
  }
  if (label.includes('傷口') || label.includes('癒合') || label.includes('乾性')) {
    after('傷口癒合四階段示意圖', DIAG.woundHealing);
  }
  if (label.includes('筋膜間隙') || label.includes('Ludwig')) {
    after('筋膜間隙解剖（冠狀面示意）', DIAG.fascialSpaces);
  }
  if (label.includes('正顎') || label.includes('BSSO') || label.includes('IVRO') || label.includes('截骨')) {
    after('BSSO vs IVRO 比較示意圖', DIAG.bssoVsIvro);
  }
  if (label.includes('外傷') || label.includes('脫位') || label.includes('IADT') || label.includes('牙齒外')) {
    after('牙齒外傷 IADT 分類示意圖', DIAG.toothTrauma);
  }
  if (label.includes('再植') || label.includes('全脫') || label.includes('Avulsion')) {
    append('全脫位保存介質示意圖', DIAG.avulsionMedia);
  }
  if (label.includes('注射技術') || label.includes('神經阻斷') || label.includes('Gow') || label.includes('IANB') || label.includes('下顎神經') || (label.includes('麻醉') && label.includes('注射'))) {
    after('神經阻斷注射技術示意圖', DIAG.nerveBlocks);
  }
  if (label.includes('Buzzword') || label.includes('影像判讀') || label.includes('放射線病') || label.includes('影像特徵') || label.includes('buzzword')) {
    after('透亮 / 不透亮病灶特徵示意', DIAG.buzzwordPatterns);
  }
  if (label.includes('口外攝影') || label.includes('Waters') || label.includes('投影') || (label.includes('攝影') && label.includes('技術'))) {
    after('口外攝影法投影示意圖', DIAG.projections);
  }
}

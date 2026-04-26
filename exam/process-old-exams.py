"""
process-old-exams.py
把 old-pdfs/ 裡的 133 份 PDF 解析出題目文字，
和 2880 題的 questions-data.js 比對，找出跨年度重複題目。

輸出: old_exam_matches.json
"""

import os, re, json, sys
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    print("請先安裝 PyMuPDF: pip install pymupdf --break-system-packages")
    sys.exit(1)

BASE = Path(__file__).parent

# ─── 1. 載入 2880 題 ────────────────────────────────────────────────────────
def load_questions():
    qs_file = BASE / "questions-data.js"
    raw = qs_file.read_text(encoding="utf-8")
    # 格式: const QUESTIONS = [...];   (JSONL 一行一題)
    lines = raw.strip().splitlines()
    questions = []
    for line in lines:
        line = line.strip().rstrip(",")
        if line.startswith("{") and line.endswith("}"):
            try:
                questions.append(json.loads(line))
            except:
                pass
    print(f"載入 {len(questions)} 題 (111-115年)")
    return questions

def normalize(text: str) -> str:
    """去除空白、標點差異，用於比對"""
    text = re.sub(r"\s+", "", text)
    text = re.sub(r"[，。？！、；：「」『』【】（）(),.?!;:\[\]{}]", "", text)
    text = text.lower()
    return text

# ─── 2. 解析 PDF ─────────────────────────────────────────────────────────────
def extract_text_from_pdf(pdf_path: Path) -> str:
    try:
        doc = fitz.open(str(pdf_path))
        pages_text = []
        for page in doc:
            pages_text.append(page.get_text("text"))
        doc.close()
        return "\n".join(pages_text)
    except Exception as e:
        print(f"  解析失敗 {pdf_path.name}: {e}")
        return ""

def parse_questions_from_text(text: str) -> list[dict]:
    """
    從 PDF 文字中解析出題目列表
    格式: 1. 題目文字 (A)... (B)... (C)... (D)...
    或:   1、題目文字 (A)... (B)... (C)... (D)...
    """
    questions = []

    # 找出所有題號位置
    # 支援格式: "1." "1、" "1 " (行首數字)
    q_pattern = re.compile(r"(?:^|\n)\s*(\d{1,3})[.、．]\s*(.+?)(?=\n\s*\d{1,3}[.、．]|\Z)",
                           re.DOTALL)

    # 也嘗試另一種格式
    matches = list(q_pattern.finditer(text))

    if len(matches) < 5:
        # 嘗試更寬鬆的解析
        q_pattern2 = re.compile(r"(\d{1,3})[.、．]\s*(.+?)(?=\d{1,3}[.、．]|\Z)", re.DOTALL)
        matches = list(q_pattern2.finditer(text))

    for m in matches:
        num = int(m.group(1))
        if num < 1 or num > 120:
            continue
        content = m.group(2).strip()
        # 移除選項，只保留題幹
        stem = re.split(r"\([A-Da-d]\)", content, maxsplit=1)[0].strip()
        # 清理空白
        stem = re.sub(r"\s+", " ", stem).strip()
        if len(stem) > 10:  # 過濾太短的
            questions.append({"num": num, "stem": stem, "full": content})

    return questions

# ─── 3. 從檔名解析考試資訊 ───────────────────────────────────────────────────
def parse_filename(filename: str) -> dict:
    """
    Q_090040_003_1004.pdf → {code:'090040', c:'003', s:'1004', year:90, exam_num:40}
    """
    name = filename.replace("Q_", "").replace(".pdf", "")
    parts = name.split("_")
    if len(parts) < 3:
        return {}
    code, c, s = parts[0], parts[1], parts[2]
    year = int(code[:3])      # 民國年 (e.g. 090 → 90)
    exam_num = int(code[3:])  # 考試序號 (e.g. 040)
    return {"code": code, "c": c, "s": s, "year": year, "exam_num": exam_num}

def get_subject_label(s_code: str) -> str:
    """根據 s 參數猜測科目名稱"""
    mapping = {
        "1004": "口腔顎面外科、牙周病、齒內治療",
        "2004": "全口贗復、局部贗復、牙冠牙橋",
        "3004": "齒顎矯正、兒童牙科、牙體復形",
        "1001": "口腔顎面外科、牙周病、齒內治療",
        "2001": "全口贗復、局部贗復、牙冠牙橋",
        "3001": "齒顎矯正、兒童牙科、牙體復形",
        "1011": "口腔顎面外科、牙周病、齒內治療",
        "3011": "齒顎矯正、兒童牙科、牙體復形",
        "3001": "口腔顎面外科",
        "4001": "牙體復形、贗復學",
        "5001": "矯正、兒牙",
        "6001": "牙周病、齒內治療",
        "300": "口腔顎面外科",
        "400": "贗復學",
        "500": "矯正、兒牙",
        "600": "牙周病、齒內治療",
        "33": "口腔顎面外科、放射",
        "44": "贗復學、咬合",
        "55": "矯正、兒牙",
        "66": "牙周病、牙體復形、齒內治療",
    }
    return mapping.get(s_code, f"s={s_code}")

# ─── 4. 主程式 ───────────────────────────────────────────────────────────────
def main():
    pdf_dir = BASE / "old-pdfs"
    if not pdf_dir.exists():
        print(f"找不到資料夾: {pdf_dir}")
        sys.exit(1)

    pdf_files = sorted(pdf_dir.glob("Q_*.pdf"))
    print(f"找到 {len(pdf_files)} 個 PDF 檔案")

    if len(pdf_files) == 0:
        print("請先執行 download-old-exams.ps1 下載 PDF")
        sys.exit(1)

    # 載入 2880 題
    new_questions = load_questions()

    # 建立 normalized 題幹 → 題目 的索引
    new_index = {}  # norm_stem → list of question dicts
    for q in new_questions:
        norm = normalize(q["question"])
        if norm not in new_index:
            new_index[norm] = []
        new_index[norm].append(q)

    print(f"建立索引: {len(new_index)} 個唯一題幹")

    # 也建立前30字元的前綴索引（加速比對）
    prefix_index = {}  # 前30字元 → list of norm_stems
    for norm in new_index:
        prefix = norm[:30]
        if prefix not in prefix_index:
            prefix_index[prefix] = []
        prefix_index[prefix].append(norm)

    # 處理每個 PDF
    all_matches = []  # {new_q, old_q_info, match_type}
    matched_new_ids = set()

    total_old_q = 0

    for pdf_path in pdf_files:
        info = parse_filename(pdf_path.name)
        if not info:
            continue

        year = info["year"]
        exam_num = info["exam_num"]
        s_code = info["s"]
        subject = get_subject_label(s_code)

        print(f"\n處理: {pdf_path.name} ({year}年 s={s_code})")

        text = extract_text_from_pdf(pdf_path)
        if not text:
            continue

        old_questions = parse_questions_from_text(text)
        print(f"  解析出 {len(old_questions)} 題")
        total_old_q += len(old_questions)

        for oq in old_questions:
            norm_old = normalize(oq["stem"])
            if len(norm_old) < 15:
                continue

            # 方法1: 完全匹配
            if norm_old in new_index:
                for nq in new_index[norm_old]:
                    match_key = f"{nq['id']}_{year}_{exam_num}_{s_code}_{oq['num']}"
                    if match_key not in matched_new_ids:
                        matched_new_ids.add(match_key)
                        all_matches.append({
                            "new_id": nq["id"],
                            "new_question": nq["question"][:80],
                            "new_answer": nq["answer"],
                            "old_year": year,
                            "old_exam_num": exam_num,
                            "old_q_num": oq["num"],
                            "old_subject": subject,
                            "old_stem": oq["stem"][:80],
                            "match_type": "exact",
                        })
                        print(f"  ✓ 完全匹配: {nq['id']} ← {year}年第{oq['num']}題")
                continue

            # 方法2: 前30字元前綴匹配（處理輕微差異）
            prefix = norm_old[:30]
            if prefix in prefix_index:
                for candidate_norm in prefix_index[prefix]:
                    # 計算相似度 (Jaccard on character n-grams)
                    a = set(norm_old[i:i+3] for i in range(len(norm_old)-2))
                    b = set(candidate_norm[i:i+3] for i in range(len(candidate_norm)-2))
                    if not a or not b:
                        continue
                    jaccard = len(a & b) / len(a | b)
                    if jaccard >= 0.88:
                        for nq in new_index[candidate_norm]:
                            match_key = f"{nq['id']}_{year}_{exam_num}_{s_code}_{oq['num']}"
                            if match_key not in matched_new_ids:
                                matched_new_ids.add(match_key)
                                all_matches.append({
                                    "new_id": nq["id"],
                                    "new_question": nq["question"][:80],
                                    "new_answer": nq["answer"],
                                    "old_year": year,
                                    "old_exam_num": exam_num,
                                    "old_q_num": oq["num"],
                                    "old_subject": subject,
                                    "old_stem": oq["stem"][:80],
                                    "match_type": "fuzzy",
                                    "similarity": round(jaccard, 3),
                                })
                                print(f"  ~ 模糊匹配({jaccard:.2f}): {nq['id']} ← {year}年第{oq['num']}題")

    print(f"\n=== 結果 ===")
    print(f"掃描舊題: {total_old_q} 題 (來自 {len(pdf_files)} 份 PDF)")
    print(f"找到重複: {len(all_matches)} 個匹配")
    print(f"涉及新題: {len(set(m['new_id'] for m in all_matches))} 題")

    # 儲存結果
    out_file = BASE / "old_exam_matches.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(all_matches, f, ensure_ascii=False, indent=2)
    print(f"結果儲存至: {out_file}")

if __name__ == "__main__":
    main()

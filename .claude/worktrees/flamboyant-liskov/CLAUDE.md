# 國考應用程式 — AI 工作說明書

> 每次開新對話，Claude 會自動讀取此檔。不需要重新解釋專案結構。

---

## 專案位置
```
主目錄：C:\Users\USER\Desktop\牙科全科APP\
```

---

## 科目架構

> 簡稱對照：牙三=ya3、牙四=ya4、牙五=ya5、牙六=ya6

| 簡稱 | 子科目 | 資料檔 |
|------|--------|--------|
| 牙三 (ya3) | 牙髓病科、贋復科、牙周病科 | `ya3/ya3-data.js` |
| 牙四 (ya4) | 口腔外科(OS) | `ya4/os-data.js` |
| 牙四 (ya4) | 放射科 | `ya4/rad-data.js` |
| 牙五 (ya5) | 假牙科、咬合學 | `ya5/prostho-data.js` |
| 牙六 (ya6) | 矯正科、兒童牙科、公共衛生學 | `ya6/ya6-data.js` |
| 歷屆試題 | 111–115年，2880題 | `exam/questions-data.js` |

---

## 任務對應表 — 每種任務只讀對應檔案，不用讀其他東西

| 任務 | 只需讀這個檔案 |
|------|---------------|
| 新增或修改**筆記內容** | 對應科目的 `*-data.js` |
| 修改**UI版面或互動邏輯** | 對應科目的 `index.html` |
| 修改或新增**某一題詳解** | `exam/questions-data.js`（用 Grep 找 ID）|
| 修**詳解顯示 bug** | `exam/index.html` |
| 修改**首頁入口** | 根目錄 `index.html` |

---

## questions-data.js — 題目資料格式

```js
{
  "id": "ya3-111-1-1",        // 格式：科目-年份-次別-題號
  "subject": "ya3",           // ya3 / ya4 / ya5 / ya6
  "topic": "牙髓神經",
  "meta": "111年第1次第1題",
  "year": 111,
  "session": 1,
  "number": 1,
  "question": "題目文字",
  "options": ["(A) ...", "(B) ...", "(C) ...", "(D) ..."],
  "answer": 0,                // 0-based index（A=0, B=1, C=2, D=3）
  "explanation": "詳解文字（支援 Markdown：**粗體**、表格、bullet）",
  "explanation_source": "",   // 通常為空
  "image": "ya3-111-1-4.jpeg" // 選填，圖片在 exam/images/ 目錄下
}
```

**修改特定題目詳解的方法（高效率）：**
1. 用 Grep 搜尋題目 ID：`Grep pattern="ya3-111-1-4" path="exam/questions-data.js"`
2. 用 Read 只讀那一行附近（offset + limit）
3. 用 Edit 精準修改，不需讀整個檔案

---

## *-data.js — 筆記資料格式

```js
const ENDO_OD_TREE = [   // 每個科目變數名不同，但結構相同
  {
    "label": "章節標題",
    "freq": "critical",  // critical / high / medium / low
    "children": [
      {
        "label": "子項目標題",
        "freq": "critical",
        "content": "<h3>...</h3><p>...</p><table>...</table>"
        // content 為 HTML 字串，支援：
        // <h3>, <p>, <ul class="n">, <table>, <details class="exam-block">
      }
    ]
  }
]
```

---

## 詳解偏好格式

使用者希望詳解盡量使用**表格**呈現，避免重複語句。

**好的詳解範例結構：**
```
**【答案】(B)**

| 選項 | 說明 | 正誤 |
|------|------|------|
| (A) | ... | ✓ 正確 |
| (B) | ... | ✗ 錯誤（因為...） |
| (C) | ... | ✓ 正確 |
| (D) | ... | ✓ 正確 |

**關鍵考點：** ...
```

---

## 已知 Bug 清單

- [x] `ya3-111-1-4`：詳解內容重複貼了兩次 → 已修復，並補上 (D) 選項被截斷的結尾句
- [ ] 部分題目詳解語句重複（待逐一確認）
- [ ] 部分題目詳解內容未顯示（原因待查 `exam/index.html`）

---

## 參考資料位置

| 資料夾 | 內容 |
|--------|------|
| `C:\Users\USER\Desktop\共筆\` | 共筆資料（含各科子資料夾）|
| `C:\Users\USER\Desktop\牙科學習\二階國考\二階參考用書\` | 二階國考參考用書 |

共筆科目對應：
- 共筆/Endodontitcs → 牙髓病科 (ya3)
- 共筆/OD → 贋復科 (ya3)
- 共筆/Peri → 牙周病科 (ya3)
- 共筆/OS → 口腔外科 (ya4)
- 共筆/牙放 → 放射科 (ya4)
- 共筆/Prostho → 假牙科 (ya5)
- 共筆/Orthodontics → 矯正科 (ya6)
- 共筆/Pedo → 兒童牙科 (ya6)
- 共筆/公衛.pdf → 公共衛生學 (ya6)

---

## 部署資訊

| 科目 | Cloudflare Pages URL |
|------|---------------------|
| 牙醫(三) | ya3-endo-od-peri.pages.dev |
| 牙醫(四) | ya4-os-rad.pages.dev |
| 牙醫(五) | ya5-prostho-occ.pages.dev |
| 牙醫(六) | ya6-ortho-pedo-prev.pages.dev |
| 歷屆試題 | dental-exam-book.pages.dev |

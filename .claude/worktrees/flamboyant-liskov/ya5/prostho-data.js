// prostho-data.js — 牙(五) 補綴學 + 咬合 ｜格子筆記本版 v5（擴充版）
// 資料來源：113中榮RPD、FPD國考複習班、PROSTHO.pdf、Prostho 114、CD PDF×2
// 更新：全面擴充各主題深度，補入關鍵數值、考試陷阱、考古題細節

/* ═══════════════════════════════════════════════
   補綴學 TREE
═══════════════════════════════════════════════ */
const PROSTHO_TREE = [

/* ──────────────────────────────────────────
   1. 活動局部義齒（RPD）
────────────────────────────────────────── */
{
  label:"🦷 活動局部義齒（RPD）",freq:"critical",
  children:[
    {
      label:"Kennedy 分類法 & Applegate 法則",freq:"critical",
      content:`
<h3>Kennedy 分類定義</h3>
<table>
<tr><th>分類</th><th>缺牙位置</th><th>特徵</th><th>口訣</th></tr>
<tr><td class="td-k">Class I</td><td>雙側後牙缺牙（游離端×2）</td><td>最遠側缺牙在後</td><td>I = 一對游離端</td></tr>
<tr><td class="td-k">Class II</td><td>單側後牙缺牙（游離端×1）</td><td>另一側有後牙</td><td>II = 一邊游離</td></tr>
<tr><td class="td-k">Class III</td><td>單側缺牙，前後均有牙</td><td>支持端（bounded）</td><td>III = 中間夾</td></tr>
<tr><td class="td-k">Class IV</td><td>前牙跨越中線缺牙</td><td>無 Modification</td><td>IV = 前牙缺</td></tr>
</table>

<div class="hl hl-red">
⚠️ Class IV <strong>絕對沒有修飾區（Modification）</strong>！這是鐵則，不管後方還有多少缺牙都不加 Modification。如果前牙後方還有缺牙，分類應往 Class I/II/III 推。
</div>

<h3>Modification（修飾區）計算規則</h3>
<div class="hl hl-blue">
<b>修飾區只計算「缺牙<em>區數目</em>」，不計算缺幾顆牙。</b><br>
例：Class II + 另一側兩個不連續缺牙區 → Class II Mod. 2（即使那兩區各缺3顆也還是 Mod. 2）
</div>

<h3>Applegate 8 大法則</h3>
<table>
<tr><th>法則</th><th>內容</th><th>為何重要</th></tr>
<tr><td class="td-k">法則 1</td><td>分類應在拔牙後才決定</td><td>拔牙後牙弓狀態才確定</td></tr>
<tr><td class="td-k">法則 2</td><td>若第三大臼齒缺牙且不需補，可不列入分類</td><td>避免因第三大臼齒影響分類</td></tr>
<tr><td class="td-k">法則 3</td><td>若第三大臼齒存在且成為支柱牙，須列入</td><td>確保支柱牙納入設計考量</td></tr>
<tr><td class="td-k">法則 4</td><td><strong>最遠端的缺牙區決定主分類</strong></td><td>最常考！看最後方缺牙位置</td></tr>
<tr><td class="td-k">法則 5</td><td>主分類依最後方缺牙區決定；其餘缺牙區為修飾區</td><td>計算 Modification 的基礎</td></tr>
<tr><td class="td-k">法則 6</td><td>Class IV 不存在修飾區（唯一無 Mod. 的分類）</td><td>Class IV 橫跨中線本身就是唯一區</td></tr>
<tr><td class="td-k">法則 7</td><td>Modification 數只計區數，不計顆數</td><td>常考陷阱</td></tr>
<tr><td class="td-k">法則 8</td><td>Class V 不存在於 Kennedy 系統</td><td>選項中若出現 Class V 必為錯</td></tr>
</table>

<div class="hl hl-purple">
<b>高頻考古題：</b>108-2 #28 / 110-2 #28 / 111-2 #34 / 113-2 #29<br>
題型：給牙弓圖，要判斷 Kennedy 分類 + Modification 數
</div>

<div class="hl hl-yellow">
<b>常考混淆題型：</b>前牙全缺 + 後牙單側缺 → 前牙跨中線但後方還有缺牙 → <strong>不是 Class IV！</strong>看最遠端缺牙 → 若遠端是後牙缺則分 Class I/II
</div>
      `
    },
    {
      label:"RPD 設計三要素：支撐・固位・穩定",freq:"critical",
      content:`
<h3>三要素核心比較（最常考）</h3>
<table>
<tr><th>要素</th><th>英文</th><th>抵抗方向</th><th>主要結構</th><th>補充</th></tr>
<tr><td class="td-k td-b">支撐<br>Support</td><td>Support</td><td>↓ 垂直朝黏膜（防沉陷）</td><td>Occlusal Rest、Cingulum Rest、Incisal Rest</td><td>支柱牙、黏膜共同承擔</td></tr>
<tr><td class="td-k td-r">固位<br>Retention</td><td>Retention</td><td>↑ 垂直離開黏膜（防脫落）</td><td>卡環臂之<strong>末端 1/3 在倒凹內</strong></td><td>圓臂 vs I-bar vs T-bar</td></tr>
<tr><td class="td-k td-g">穩定<br>Stability</td><td>Stability</td><td>↔ 側向/旋轉（防位移）</td><td>主連接體、Rest、剛性臂</td><td>卡環近心臂（非固位臂）</td></tr>
</table>

<div class="hl hl-red">
卡環的<strong>近心臂（mesial arm）</strong>位於倒凹上方 → 提供穩定但<strong>不提供固位</strong>！<br>
<strong>遠心臂（terminal third）</strong>才進入倒凹 → 提供固位。<br>
這是國考超級陷阱，出題頻率極高！
</div>

<h3>Rest（支撐座）種類</h3>
<table>
<tr><th>種類</th><th>位置</th><th>適用</th><th>形態要求</th></tr>
<tr><td class="td-k">Occlusal Rest</td><td>後牙鄰面窩（mesial/distal fossa）</td><td>最常用</td><td>湯匙形（spoon-shaped），尖端指向中央窩</td></tr>
<tr><td class="td-k">Cingulum Rest</td><td>前牙舌面隆凸</td><td>上顎犬齒、切牙</td><td>需磨出 cingulum rest seat</td></tr>
<tr><td class="td-k">Incisal Rest</td><td>前牙切緣角</td><td>前牙無 cingulum 可用時</td><td>會影響美觀，非首選</td></tr>
</table>

<h3>卡環系統分類</h3>
<table>
<tr><th>卡環型</th><th>進入倒凹方式</th><th>優點</th><th>缺點</th><th>適用</th></tr>
<tr><td class="td-k">圓臂卡環<br>Circumferential</td><td>從接近線<strong>上方</strong>繞過頰/舌側</td><td>固位力強、穩定</td><td>美觀差、應力大</td><td>Class III 支持端</td></tr>
<tr><td class="td-k">I-bar（Bar clasp）</td><td>從接近線<strong>下方</strong>向上接觸</td><td>美觀、應力分散</td><td>軟組織倒凹時禁用</td><td>Class I/II 游離端</td></tr>
<tr><td class="td-k">T-bar / Y-bar</td><td>Bar clasp 的變形</td><td>更靈活的倒凹接觸點</td><td>清潔較困難</td><td>特殊牙形態</td></tr>
<tr><td class="td-k">RPI system</td><td>I-bar + Proximal Plate + Mesial Rest</td><td>最佳游離端設計</td><td>製作較複雜</td><td>Class I/II 首選</td></tr>
</table>

<div class="hl hl-purple">
<b>高頻考古題：</b>109-1 #27 / 111-1 #24 / 112-2 #28 / 113-1 #30<br>
題型：辨別支撐/固位/穩定由哪個結構提供；卡環臂的哪個部分提供固位
</div>
      `
    },
    {
      label:"RPI 系統與游離端設計",freq:"critical",
      content:`
<h3>RPI = R（Rest）+ P（Plate）+ I（I-bar）</h3>
<div class="num-grid">
<div class="num-card"><div class="big">R</div><div class="sm"><b>Mesial Rest</b><br>放在支柱牙<em>近心</em>窩<br>（不是遠心）</div></div>
<div class="num-card"><div class="big">P</div><div class="sm"><b>Proximal Plate</b><br>鄰接板要<em>短</em>！<br>可滑入倒凹</div></div>
<div class="num-card"><div class="big">I</div><div class="sm"><b>I-bar Clasp</b><br>從接近線下方<br>接觸頰側倒凹</div></div>
</div>

<div class="hl hl-red">
<b>為何 Rest 要放近心（Mesial）？</b><br>
游離端承受咬合力時，以支點線為軸向黏膜下沉 → 若 Rest 在<strong>遠心</strong>，旋轉支點就在支柱牙上，造成支柱牙遠心扭力（槓桿傷牙！）<br>
若 Rest 在<strong>近心</strong>，力量傳導路徑改善，應力分散到更多結構。
</div>

<div class="hl hl-red">
<b>Proximal Plate（鄰接板）必須設計成短板！</b><br>
短板受力後可往倒凹方向滑動 → 解除支柱牙遠心扭力。<br>
若板太長 → 板與牙面全接觸 → 義齒下沉時對支柱牙產生遠心傾斜力 → 支柱牙受損！
</div>

<h3>I-bar 的絕對禁忌症</h3>
<table>
<tr><th>禁忌</th><th>原因</th></tr>
<tr><td class="td-r"><b>深軟組織倒凹（deep tissue undercut）</b></td><td>I-bar 從接近線下方進入，軟組織倒凹會阻礙摘戴</td></tr>
<tr><td class="td-r">前牙高美觀需求</td><td>I-bar 在頰側可見，影響美觀</td></tr>
<tr><td class="td-r">開口度受限患者</td><td>摘戴角度不足</td></tr>
</table>

<h3>RPI vs 傳統 Aker Clasp（圓臂卡環）</h3>
<table>
<tr><th></th><th>RPI（游離端首選）</th><th>Aker / 圓臂（支持端）</th></tr>
<tr><td class="td-k">支點線效應</td><td class="td-g">↓ 應力分散（設計最佳）</td><td class="td-r">↑ 應力集中支柱牙</td></tr>
<tr><td class="td-k">美觀</td><td>I-bar 較美觀（接觸點小）</td><td>圓臂繞一圈較醒目</td></tr>
<tr><td class="td-k">適用分類</td><td>Class I, II（游離端）</td><td>Class III（支持端）</td></tr>
<tr><td class="td-k">軟組織倒凹</td><td class="td-r">禁忌！</td><td class="td-g">無影響</td></tr>
<tr><td class="td-k">Rest 位置</td><td>近心（Mesial）</td><td>遠心（Distal）</td></tr>
</table>

<div class="hl hl-purple">
<b>高頻考古題：</b>109-1 #30 / 110-2 #30 / 111-1 #27 / 112-2 #29 / 113-2 #29<br>
— RPI 為何選 mesial rest、鄰接板為何要短、I-bar 禁忌症
</div>
      `
    },
    {
      label:"間接固位體（Indirect Retainer）",freq:"high",
      content:`
<div class="hl hl-blue">
<b>定義</b>：防止游離端義齒以<strong>支點線（Fulcrum line）</strong>為軸旋轉翹起的固位裝置。<br>
原理：第一類槓桿（Class I lever）——間接固位體在支點線另一側，有力臂效應。
</div>

<h3>支點線（Fulcrum Line）位置</h3>
<ul class="n">
<li>Class I：連接兩側最近中的支撐座（兩個支柱牙的 Rest）</li>
<li>Class II：最近中支撐座 + 對側最遠端支撐座</li>
<li>間接固位體必須放在<strong>距支點線最遠的對側</strong></li>
</ul>

<div class="hl hl-red">
<b>國考超高頻陷阱：</b>「間接固位體距支點線越近越好」→ <strong>完全錯誤！</strong><br>
槓桿原理：力臂越長 → 翹起時抵抗力越大 → 間接固位體應盡量<strong>遠離支點線</strong>！
</div>

<h3>間接固位體最佳位置</h3>
<table>
<tr><th>位置偏好</th><th>結構</th><th>原因</th></tr>
<tr><td class="td-g">最理想</td><td>小臼齒或犬齒的舌面隆凸（cingulum）rest</td><td>距游離端支點線最遠</td></tr>
<tr><td class="td-b">次選</td><td>前牙的 incisal rest</td><td>前牙力臂長但 rest 設計較差</td></tr>
<tr><td class="td-r">輔助用（不能單獨作為間接固位體）</td><td>上顎顎皺襞（Rugae area）</td><td>僅輔助，無法單獨防止翹起</td></tr>
</table>

<h3>各 Kennedy 分類的間接固位體需求</h3>
<table>
<tr><th>分類</th><th>是否需要</th><th>建議位置</th></tr>
<tr><td class="td-k">Class I</td><td class="td-r">最需要</td><td>上顎前牙區 cingulum rest</td></tr>
<tr><td class="td-k">Class II</td><td class="td-b">通常需要</td><td>游離端對側（有牙側）的前牙區</td></tr>
<tr><td class="td-k">Class III</td><td class="td-g">通常不需要</td><td>前後皆有牙，旋轉軸限制住</td></tr>
<tr><td class="td-k">Class IV</td><td class="td-g">通常不需要</td><td>前牙缺牙但後方義齒有固定端</td></tr>
</table>

<div class="hl hl-purple">
<b>高頻考古題：</b>108-2 #25 / 109-2 #29 / 112-1 #26 / 114-2 #25<br>
題型：哪個位置最適合做間接固位體；支點線如何決定
</div>
      `
    },
    {
      label:"主連接體（Major Connector）",freq:"high",
      content:`
<div class="hl hl-blue">
<b>主連接體功能</b>：連結義齒各部分，傳遞咬合力、提供穩定與支撐。<br>
原則：必須硬（剛性）、不能覆蓋過多黏膜、不能干擾舌頭運動、邊緣離游離齦緣至少 <strong>6mm</strong>
</div>

<h3>下顎主連接體種類</h3>
<table>
<tr><th>種類</th><th>形態</th><th>優點</th><th>缺點/禁忌</th></tr>
<tr><td class="td-k">Lingual Bar<br>（舌側桿）</td><td>半梨形截面，離游離齦緣 ≥6mm</td><td>覆蓋黏膜最少，首選</td><td>口底淺時不可用（空間不足）</td></tr>
<tr><td class="td-k">Lingual Plate<br>（舌板）</td><td>延伸覆蓋下顎前牙舌面</td><td>口底淺時可用，提供更多支撐</td><td>覆蓋面積大，清潔難</td></tr>
<tr><td class="td-k">Kennedy Bar<br>（雙舌側桿）</td><td>連接兩桿，前後各一桿</td><td>剛性佳</td><td>製作複雜，現已少用</td></tr>
</table>

<h3>上顎主連接體種類</h3>
<table>
<tr><th>種類</th><th>形態</th><th>優點</th><th>適用</th></tr>
<tr><td class="td-k">Single Palatal Strap<br>（單一顎板）</td><td>單條橫帶橫越顎部</td><td>覆蓋少，舒適</td><td>缺牙不多、支撐足夠時</td></tr>
<tr><td class="td-k">Anterior-Posterior Palatal Bars</td><td>前後兩條橫帶</td><td>剛性佳</td><td>需大範圍支撐</td></tr>
<tr><td class="td-k">Horseshoe（U型）</td><td>U形圍繞後牙區</td><td>舌面開放</td><td class="td-r">剛性差，通常<b>不建議</b></td></tr>
<tr><td class="td-k">Complete Palatal Coverage<br>（全顎板）</td><td>覆蓋整個硬齶</td><td>最大支撐，義齒穩定性最佳</td><td>牙槽骨嚴重吸收、支柱牙少</td></tr>
</table>

<div class="hl hl-red">
<b>Horseshoe（馬蹄形）顎連接體缺點：剛性差！</b><br>
考題常出現：哪種上顎主連接體剛性最差 → 答案是 Horseshoe<br>
因為兩端開放，受力時容易彎曲變形。
</div>

<div class="hl hl-yellow">
<b>主連接體設計原則：</b><br>
① 下顎舌側桿離游離齦緣 ≥ 6mm<br>
② 上顎主連接體邊緣離齦緣 ≥ 6mm<br>
③ 前緣不能壓到 rugae（顎皺襞）→ 發音干擾<br>
④ 硬顎中央（median line）的 torus palatinus 要繞開
</div>
      `
    },
    {
      label:"Survey & Path of Insertion",freq:"high",
      content:`
<h3>Surveying 目的</h3>
<ul class="n">
<li>決定 <strong>Path of Insertion（插入路徑）</strong>——義齒唯一正確的摘戴方向</li>
<li>找出各支柱牙的 <strong>survey line（接近線）</strong> 位置</li>
<li>計算各牙倒凹深度，決定卡環設計</li>
<li>確認 blockout（填塞倒凹）範圍</li>
</ul>

<h3>Survey Line 的意義</h3>
<div class="hl hl-blue">
Survey line = 接近線 = 用 surveyor 分析儀描出的牙齒最大周徑線（height of contour）。<br>
接近線<b>以上</b>：倒凹上方（suprabulge）→ 放卡環剛性臂（穩定功能）<br>
接近線<b>以下</b>：倒凹（infrabulge）→ 放卡環固位臂末端（固位功能）
</div>

<h3>影響 Path of Insertion 的因素</h3>
<table>
<tr><th>因素</th><th>說明</th><th>調整方式</th></tr>
<tr><td class="td-k">傾斜方向</td><td>模型傾斜改變各牙接近線位置</td><td>調整分析儀傾斜角</td></tr>
<tr><td class="td-k">牙槽脊倒凹</td><td>骨性倒凹影響義齒能否取下</td><td>必要時手術消除</td></tr>
<tr><td class="td-k">前牙美觀</td><td>過大傾斜可能使金屬外露</td><td>找折衷的插入角</td></tr>
<tr><td class="td-k">Blockout 的影響</td><td>過多 blockout → 可用倒凹減少 → 固位力降低</td><td>精確計算倒凹量</td></tr>
</table>

<h3>Blockout 種類</h3>
<table>
<tr><th>種類</th><th>用途</th></tr>
<tr><td class="td-k">Parallel blockout</td><td>填塞與 path of insertion 不平行的表面，防止義齒被卡住</td></tr>
<tr><td class="td-k">Shaped blockout</td><td>在倒凹區填塞特定形狀，引導卡環位置</td></tr>
<tr><td class="td-k">Arbitrary blockout</td><td>填塞不需要的倒凹（不影響固位的區域）</td></tr>
<tr><td class="td-k">Relief</td><td>在重要解剖結構（tori）上增加緩衝空間</td></tr>
</table>

<div class="hl hl-purple">
<b>高頻考古題：</b>109-2 #28 / 111-2 #30 / 112-1 #28<br>
題型：Surveying 的目的是什麼；接近線上下方各放什麼結構
</div>
      `
    },
  ]
},

/* ──────────────────────────────────────────
   2. 全口義齒（CD）
────────────────────────────────────────── */
{
  label:"🦴 全口義齒（Complete Denture）",freq:"critical",
  children:[
    {
      label:"初模、最終印模與邊界鑲嵌",freq:"critical",
      content:`
<h3>印模流程概覽</h3>
<div class="steps">
<div class="step">初步印模（Primary impression）→ 製作個別托盤</div>
<div class="step">邊界鑲嵌（Border molding）→ 確定功能性邊界</div>
<div class="step">最終印模（Final / definitive impression）→ 翻出工作模型</div>
<div class="step">Jaw relation record → CR 記錄、OVD 決定</div>
</div>

<h3>初步印模（Primary Impression）</h3>
<table>
<tr><th>材料</th><th>優點</th><th>缺點</th></tr>
<tr><td class="td-k">Alginate</td><td>快速、方便、成本低</td><td>尺寸穩定性差，需立即灌模</td></tr>
<tr><td class="td-k">ZOE paste<br>（氧化鋅丁香油酯）</td><td>精度高，適合無牙嵴</td><td>有彈性，取出時易變形倒凹</td></tr>
</table>
<p>→ 目的：獲得牙槽脊概形，製作<b>個別托盤（Custom tray）</b>用</p>

<h3>邊界鑲嵌（Border Molding）</h3>
<div class="hl hl-blue">
用加熱軟化的<b>compound（印模化合物）</b>或低熔點材料，逐步鑲嵌在個別托盤邊緣，配合患者做功能性動作，確定義齒的功能性邊界延伸範圍。
</div>

<table>
<tr><th>部位</th><th>要做的動作</th></tr>
<tr><td class="td-k">上顎頰側（buccal flange）</td><td>張嘴、咀嚼動作</td></tr>
<tr><td class="td-k">上顎前庭（labial flange）</td><td>噘嘴、拉嘴角</td></tr>
<tr><td class="td-k">下顎舌側</td><td>舌頭左右移動、往外伸</td></tr>
<tr><td class="td-k">下顎頰側</td><td>張嘴、咀嚼</td></tr>
</table>

<h3>最終印模材料選擇</h3>
<table>
<tr><th>材料</th><th>特性</th><th>適用情況</th></tr>
<tr><td class="td-k">ZOE impression paste</td><td>流動性好、精確</td><td>標準的最終印模</td></tr>
<tr><td class="td-k">Zinc oxide eugenol + 輕體矽膠</td><td>精度高</td><td>現代 wash impression 技術</td></tr>
<tr><td class="td-k">Tissue conditioner（組織調適材）</td><td>軟性，重新塑形黏膜</td><td>舊義齒基托出血／潰瘍調整</td></tr>
</table>

<h3>印模壓力類型</h3>
<table>
<tr><th>類型</th><th>定義</th><th>效果</th></tr>
<tr><td class="td-k">Mucocompressive</td><td>施加壓力取印模</td><td>顯示功能性（咬合）下的黏膜形態</td></tr>
<tr><td class="td-k">Mucostatic</td><td>無壓力取印模</td><td>顯示靜止時黏膜形態</td></tr>
</table>

<div class="hl hl-purple">
<b>高頻考古題：</b>109-1 #35 / 110-1 #40 / 111-2 #38 / 113-1 #37<br>
題型：邊界鑲嵌用什麼材料；初模 vs 最終印模的差異
</div>
      `
    },
    {
      label:"咬合垂直高度（VD）",freq:"critical",
      content:`
<h3>三個關鍵垂直高度</h3>
<div class="num-grid">
<div class="num-card"><div class="big">RVD</div><div class="sm">Rest Vertical Dimension<br>靜息垂直高度<br>肌肉完全放鬆</div></div>
<div class="num-card"><div class="big">OVD</div><div class="sm">Occlusal Vertical Dimension<br>咬合垂直高度<br>牙齒接觸時</div></div>
<div class="num-card"><div class="big">FWS</div><div class="sm">Freeway Space<br>間隙 = RVD − OVD<br><b>正常 2−4 mm</b></div></div>
</div>

<div class="hl hl-red">
<b>Freeway Space（自由間隙）正常值 = 2−4 mm！</b><br>
OVD 過高（freeway space &lt;2mm）→ 咬合力過大、TMD、肌肉疲勞<br>
OVD 過低（freeway space &gt;4mm）→ 嘴唇塌陷、說話含糊、義齒不穩
</div>

<h3>確定 OVD 的方法</h3>
<table>
<tr><th>方法</th><th>操作</th><th>可靠度</th></tr>
<tr><td class="td-k">面部測量法</td><td>鼻下到頤部距離 ≈ OVD</td><td>中等（個體差異大）</td></tr>
<tr><td class="td-k">發音測試</td><td>說 "s" 或 "f" 時，上下牙不接觸且間隙 = freeway space</td><td>好</td></tr>
<tr><td class="td-k">放鬆位測量</td><td>患者放鬆後量 RVD，再減 2−4mm = OVD</td><td>好</td></tr>
<tr><td class="td-k">舊義齒參考</td><td>若舊義齒 OVD 適當，直接測量</td><td>快速，前提舊義齒正確</td></tr>
<tr><td class="td-k">美觀評估</td><td>嘴唇自然閉合、豐滿度</td><td>補充參考</td></tr>
</table>

<h3>OVD 錯誤的臨床表現</h3>
<table>
<tr><th></th><th>OVD 過高</th><th>OVD 過低</th></tr>
<tr><td class="td-k">嘴唇</td><td>張開狀、緊繃</td><td>塌陷、唇紋加深</td></tr>
<tr><td class="td-k">聲音</td><td>咬合聲、牙齒撞擊</td><td>說話不清楚</td></tr>
<tr><td class="td-k">肌肉</td><td>咀嚼肌疲勞、痠痛</td><td>肌肉萎縮</td></tr>
<tr><td class="td-k">顳顎關節</td><td>TMD 症狀</td><td>關節負荷不正常</td></tr>
</table>

<div class="hl hl-yellow">
若全口皆需製作冠橋，VD 決定後，應<strong>先做上下顎前牙</strong>！<br>
（100-2-66 考古題）先做前牙可以確立咬合平面和美觀基準。
</div>

<div class="hl hl-purple">
<b>高頻考古題：</b>108-2 #35 / 109-1 #36 / 110-2 #37 / 112-1 #36 / 113-2 #36<br>
題型：Freeway space 正常值；OVD 過高/過低的臨床症狀；如何決定 OVD
</div>
      `
    },
    {
      label:"正中關係（CR）與排牙原則",freq:"critical",
      content:`
<h3>正中關係（Centric Relation, CR）</h3>
<div class="hl hl-blue">
<b>定義（現代）</b>：髁突在顳顎關節窩最上前方位置（superior-anterior）的生理狀態，為下顎的可重複起始位置。<br>
→ 既非肌肉平衡位，也非最後退位（retrusive），是上下顎骨的「骨性」關係。
</div>

<table>
<tr><th>重點</th><th>說明</th></tr>
<tr><td class="td-k">CR 記錄時機</td><td>必須在印模已翻模、<b>工作模型製成後</b>才進行</td></tr>
<tr><td class="td-k">記錄材料</td><td>蠟、自聚合樹脂、矽膠（加成型）</td></tr>
<tr><td class="td-k">CR vs CO</td><td>正常天然牙：CR 略後於 CO（前滑 1−2mm）；全口義齒目標：<b>CR = CO</b></td></tr>
</table>

<h3>全口義齒排牙原則</h3>
<table>
<tr><th>原則</th><th>內容</th></tr>
<tr><td class="td-k">Monson's curve（球面補償曲線）</td><td>上下牙列排成一個球面（radius ≈ 4 英寸），補償顆突路徑的弧度</td></tr>
<tr><td class="td-k">Curve of Spee（縱向補償曲線）</td><td>從犬齒到磨牙，依序升高形成前低後高的弧形</td></tr>
<tr><td class="td-k">Curve of Wilson（橫向補償曲線）</td><td>後牙橫截面排成弧形，頰尖高於舌尖</td></tr>
<tr><td class="td-k">中線對正</td><td>上下顎中線對齊，模型需標記</td></tr>
<tr><td class="td-k">前牙排列</td><td>依舊有牙照片或解剖標誌，注重美觀</td></tr>
</table>

<h3>全口義齒咬合設計目標：平衡咬合（Balanced Occlusion）</h3>
<div class="hl hl-green">
全口義齒不同於天然牙！目標是在所有咬合位置（CO、protrusive、lateral）<b>同時有工作側與平衡側接觸</b>，增加義齒穩定性。<br>
（天然牙追求 MPO，但全口義齒要平衡咬合）
</div>

<table>
<tr><th>Hanau's Quint（五大因素）</th><th>影響</th></tr>
<tr><td class="td-k">① Condylar guidance（髁突引導角）</td><td>越陡 → 後牙舌尖需越高</td></tr>
<tr><td class="td-k">② Incisal guidance angle（前牙引導角）</td><td>越陡 → 後牙需更多補償曲線</td></tr>
<tr><td class="td-k">③ Cusp angle（牙尖角度）</td><td>尖越高 → 平衡觸點越容易達到</td></tr>
<tr><td class="td-k">④ Compensating curve（補償曲線）</td><td>曲線越深 → 越有利平衡接觸</td></tr>
<tr><td class="td-k">⑤ Occlusal plane orientation（咬合平面傾斜）</td><td>後緣越低 → 越有利平衡接觸</td></tr>
</table>

<div class="hl hl-yellow">
磨耗全口義齒的調磨方向（Balanced occlusion 調整）：<br>
工作側調磨：上顎頰尖舌斜面 + 下顎舌尖頰斜面（BULL rule 的非工作側，full denture相反）<br>
在全口義齒，磨的是<b>上顎頰尖舌斜面 + 下顎舌尖頰斜面</b>（lingual inclines of upper buccal cusps & buccal inclines of lower lingual cusps on working side）
</div>

<div class="hl hl-purple">
<b>高頻考古題：</b>108-1 #40 / 109-2 #38 / 111-1 #39 / 112-2 #40 / 114-1 #38<br>
題型：Hanau's Quint 五因素；全口義齒為何要平衡咬合（vs. 天然牙 MPO）
</div>
      `
    },
    {
      label:"義齒性口腔炎（Denture Stomatitis）",freq:"high",
      content:`
<div class="hl hl-blue">
<b>定義</b>：長期配戴全口義齒引起的上顎黏膜慢性炎症。最常見於<strong>上顎硬齶</strong>，即義齒基托覆蓋的黏膜。<br>
主要病原：<b>念珠菌（Candida albicans）</b>，屬機會性感染。
</div>

<h3>Newton 分類（常考！）</h3>
<table>
<tr><th>分類</th><th>表現</th><th>嚴重度</th></tr>
<tr><td class="td-k">Type I<br>（點狀型）</td><td>局限性針孔狀發紅（pinpoint hyperemia）</td><td>輕度</td></tr>
<tr><td class="td-k">Type II<br>（瀰漫型）</td><td>整個義齒基托覆蓋區均勻發紅（diffuse hyperemia）</td><td>中度</td></tr>
<tr><td class="td-k">Type III<br>（顆粒型）</td><td>乳頭狀增生（papillary hyperplasia），前顎部</td><td>重度</td></tr>
</table>

<h3>危險因子</h3>
<ul class="n">
<li><strong>夜間不摘除義齒</strong>（最重要！）→ 黏膜無法休息 + 念珠菌繁殖</li>
<li>義齒清潔不佳</li>
<li>咬合垂直高度過低（義齒相對過舊）</li>
<li>免疫功能低下（糖尿病、HIV、皮質類固醇用藥）</li>
<li>抗生素長期使用（改變口腔菌叢）</li>
</ul>

<h3>治療原則</h3>
<table>
<tr><th>步驟</th><th>治療</th></tr>
<tr><td class="td-k">1. 義齒清潔衛教</td><td>每天刷洗義齒，浸泡於抗真菌溶液（次氯酸鈉稀釋液）</td></tr>
<tr><td class="td-k">2. 夜間摘除義齒</td><td>讓黏膜休息，改善血液循環</td></tr>
<tr><td class="td-k">3. 局部抗真菌藥</td><td>Nystatin 藥膏或口腔懸浮液（若確認念珠菌感染）</td></tr>
<tr><td class="td-k">4. 重新製作義齒</td><td>若舊義齒已磨損或基托不密合</td></tr>
<tr><td class="td-k">5. Type III 手術</td><td>乳頭狀增生組織先外科切除，再製作新義齒</td></tr>
</table>

<div class="hl hl-red">
<b>最常考陷阱：</b>「義齒性口腔炎的成因是基托過度延伸」→ <strong>不完全對！</strong><br>
主要成因是<b>夜間不摘除 + 清潔不足 + 念珠菌感染</b>。邊界過度延伸主要造成創傷性潰瘍，而非 denture stomatitis。
</div>

<div class="hl hl-purple">
<b>高頻考古題：</b>108-2 #38 / 110-1 #42 / 111-1 #38 / 113-1 #40<br>
題型：Newton 分類各型表現；denture stomatitis 的主要病原；治療方法
</div>
      `
    },
    {
      label:"Retromolar Pad & Post Dam",freq:"mid",
      content:`
<h3>Retromolar Pad（下顎磨牙後墊）</h3>
<div class="hl hl-blue">
位於下顎最後磨牙後方的纖維脂肪墊，是全口義齒後緣延伸的重要參考標誌。
</div>

<table>
<tr><th>重點</th><th>內容</th></tr>
<tr><td class="td-k">義齒後緣延伸</td><td>下顎義齒應覆蓋<strong>磨牙後墊的前 1/2</strong>（也有說法為完整覆蓋）</td></tr>
<tr><td class="td-k">咬合平面高度</td><td>磨牙後墊中點常作為後牙咬合平面高度的參考</td></tr>
<tr><td class="td-k">張嘴時的行為</td><td>張嘴時磨牙後墊向上，需考慮基托邊界厚度，避免義齒翹起</td></tr>
</table>

<h3>Post Dam（後顎封閉區）</h3>
<div class="hl hl-blue">
上顎全口義齒後緣的特殊設計，在硬顎和軟顎交界後方 <strong>1−2 mm</strong> 處形成輕微壓迫，產生邊緣封閉效果。
</div>

<table>
<tr><th>重點</th><th>內容</th></tr>
<tr><td class="td-k">位置</td><td>硬齶（hard palate）與軟齶（soft palate）交界後方 1−2 mm</td></tr>
<tr><td class="td-k">目的</td><td>利用軟組織彈性，義齒後緣形成負壓式密封（border seal）</td></tr>
<tr><td class="td-k">寬度</td><td>通常 3−5 mm，深度 0.5−1.5 mm</td></tr>
<tr><td class="td-k">重要性</td><td>Post dam 若不足 → 義齒後緣翹起、義齒容易脫落</td></tr>
</table>

<h3>Vibrating Line（振動線）</h3>
<ul class="n">
<li>患者發「啊」音時，硬顎與軟顎的動靜交界處</li>
<li>Post dam 應置於 vibrating line 上或略後</li>
<li>可用輕觸法（患者說啊時輕壓）或照射來確認</li>
</ul>

<div class="hl hl-purple">
<b>高頻考古題：</b>108-1 #42 / 110-2 #41 / 112-2 #39<br>
題型：Post dam 位置（硬顎/軟顎交界後 1-2mm）；磨牙後墊覆蓋範圍
</div>
      `
    },
  ]
},

/* ──────────────────────────────────────────
   3. 固定補綴（FPD・冠橋）
────────────────────────────────────────── */
{
  label:"👑 固定補綴（FPD・冠橋）",freq:"critical",
  children:[
    {
      label:"牙冠預備原則（Crown Preparation）",freq:"critical",
      content:`
<h3>牙冠預備關鍵數值（必背！）</h3>
<table>
<tr><th>參數</th><th>數值</th><th>說明</th></tr>
<tr><td class="td-k">軸面傾斜（Taper）</td><td class="td-b"><b>6° 理想</b> / 最大 12°</td><td>單側傾斜角，兩側共 12°/24°</td></tr>
<tr><td class="td-k">軸壁高度（Axial wall height）</td><td class="td-b"><b>≥ 3.5−4.0 mm</b></td><td>後牙固位要求最小值</td></tr>
<tr><td class="td-k">Shoulder 寬度</td><td class="td-b"><b>0.5−1.0 mm</b></td><td>適用陶瓷冠（all-ceramic / porcelain buccal）</td></tr>
<tr><td class="td-k">Chamfer 厚度</td><td class="td-b"><b>0.5−0.8 mm</b></td><td>適用金屬冠或 PFM 舌側</td></tr>
<tr><td class="td-k">邊界離鄰牙距離</td><td class="td-b"><b>0.6 mm</b></td><td>避免食物嵌塞 (103-2-46)</td></tr>
<tr><td class="td-k">Die spacer 厚度</td><td class="td-b"><b>20−40 μm</b></td><td>Cement space 的來源</td></tr>
<tr><td class="td-k">Die spacer 距 margin</td><td class="td-b"><b>≥ 0.5−1.0 mm</b></td><td>邊緣區不塗 die spacer（避免邊緣不密合）</td></tr>
<tr><td class="td-k">Partial veneer crown margin</td><td class="td-b"><b>0.5 mm</b></td><td>PVC 邊緣設計 (104-1-46)</td></tr>
<tr><td class="td-k">Partial veneer crown incisal</td><td class="td-b"><b>1.0 mm</b></td><td>PVC 切端厚度</td></tr>
<tr><td class="td-k">後牙剩餘齒質高度</td><td class="td-b"><b>&gt; 3−4 mm 不用 post</b></td><td>(104-2-50) 足夠高度不需打樁</td></tr>
</table>

<h3>邊界設計（Margin Design）類型</h3>
<table>
<tr><th>邊界型態</th><th>截面形狀</th><th>適用材料</th><th>優缺點</th></tr>
<tr><td class="td-k">Feather edge<br>（刀鋒邊）</td><td>最薄，楔形</td><td>—</td><td class="td-r">最易 overcontouring（100-2-58）⚠️ 應避免！</td></tr>
<tr><td class="td-k">Knife edge<br>（刀緣）</td><td>薄，尖</td><td>全金屬冠</td><td>製作要求高</td></tr>
<tr><td class="td-k">Chamfer<br>（弧形緣）</td><td>圓弧凹入</td><td>金屬冠、PFM舌側、gold onlay 非功能尖</td><td class="td-g">應力最小，最常用</td></tr>
<tr><td class="td-k">Shoulder<br>（肩台）</td><td>垂直 + 水平平台</td><td>全瓷冠 buccal（需厚度支撐陶瓷）</td><td>磨牙量多</td></tr>
<tr><td class="td-k">Shoulder with bevel<br>（45° 斜肩台）</td><td>肩台加斜面</td><td>金屬的 buccal side、central cusp of gold onlay</td><td>可提供金屬 burnish 空間</td></tr>
<tr><td class="td-k">Bevel<br>（斜面）</td><td>斜切面</td><td>Veneer、inlay、onlay</td><td>提供 metal burnish 空間</td></tr>
</table>

<div class="hl hl-red">
<b>Feather edge 最容易產生 overcontouring！</b> (100-2-58)<br>
因為刀鋒邊太薄，技工師無法精確製作，往往加厚補償 → 過度突起 → 牙周組織問題。<br>
<b>Collarless PFM 的邊界貼合度最佳！</b> (101-1-53) — 不設金屬圈，陶瓷直接與齒質相接，邊緣密合度最佳。
</div>

<h3>Taper 方向</h3>
<div class="hl hl-yellow">
後牙預備時，<b>BL（頰舌）方向 taper 比 MD（近遠心）方向</b>要大。<br>
原因：頰舌方向空間大、MD 方向有鄰牙限制，MD 方向要維持最大壁高以保固位。(101-1-54)<br>
前牙因為本身就很小，兩個方向都要注意不能過度。
</div>

<h3>影響固位的因素</h3>
<ul class="n">
<li>脫落力量大小（最主要）</li>
<li>Axial wall 高度：高度越高→固位越好（&lt;6% 高度會影響固位 (100-1-45)）</li>
<li>表面積（surface area）：越大→固位越好</li>
<li>Retention groove（固位溝）：通常加在 mesial，因近心側有鄰牙接觸與側向牙推力 (100-2-46)</li>
<li>Cement 厚度：越薄越好（&lt;50 μm）</li>
<li>Taper 角度：越小越好固位</li>
</ul>

<div class="hl hl-purple">
<b>高頻考古題：</b>100-1-45, 100-2-46, 100-2-58, 101-1-53, 101-1-54, 101-1-55, 103-2-46, 104-1-46<br>
題型：最影響固位的因素；哪種邊界設計最易 overcontouring；taper 角度數值
</div>
      `
    },
    {
      label:"黏合劑（Cement）、Cement Space 與固位",freq:"high",
      content:`
<h3>Cement Space 的調控方法</h3>
<table>
<tr><th>目標</th><th>方法</th></tr>
<tr><td class="td-b"><b>增加</b> cement space</td><td>① 印模材聚合收縮<br>② 使用完整牙模與硬石膏 die<br>③ 蠟型內層用軟蠟<br>④ 移除附著在鑄造物表面的材料</td></tr>
<tr><td class="td-g"><b>減少</b> cement space</td><td>① 用電鍍或樹脂 die（harder die）<br>② 用高熔點合金（膨脹較少）<br>③ 減少包埋材膨脹量</td></tr>
</table>
<p class="hint">(100-1-46) — 增減 Cement space 的方法，高頻考古題！</p>

<h3>Die Spacer 詳細資訊</h3>
<ul class="n">
<li>Die spacer 厚度：<b>20−40 μm</b></li>
<li>塗佈範圍：離 finishing line 以上 <b>0.5−1.0 mm</b> 處停止</li>
<li>目的：確保 cement 有足夠空間，不讓鑄造物因 cement 壓力無法就位</li>
<li>Die hardening agent（die 硬化劑）：保護石膏模型不被磨損，非 cement space 目的</li>
</ul>
<p class="hint">(100-2-63) — Die spacer 厚度 20−40 μm，離 margin 1mm 上方</p>

<h3>各類型 Cement 比較</h3>
<table>
<tr><th>種類</th><th>特性</th><th>適用</th><th>缺點</th></tr>
<tr><td class="td-k">Zinc Phosphate</td><td>固位力佳、不吸水、高壓縮強度</td><td>傳統固定冠橋黏著首選</td><td>對牙髓刺激性強（酸性）</td></tr>
<tr><td class="td-k">Glass Ionomer (GIC)</td><td>釋放氟、與牙齒化學鍵結</td><td>高齲齒風險患者、臨時黏著</td><td>強度較低、溶解性較高</td></tr>
<tr><td class="td-k">Resin Modified GIC<br>（RMGIC）</td><td>GIC + 樹脂，強度提升</td><td>臨時冠、可逆性黏著</td><td>固位力不及 resin cement</td></tr>
<tr><td class="td-k">Resin Cement<br>（樹脂黏合劑）</td><td>固位力最強、不溶於唾液</td><td>All-ceramic 冠、黏著型貼面、oxidized 合金</td><td>操作複雜、移除困難</td></tr>
<tr><td class="td-k">ZOE Cement</td><td>舒緩牙髓、暫時黏著</td><td>臨時冠</td><td>丁香油會抑制樹脂聚合！</td></tr>
</table>

<div class="hl hl-red">
<b>ZOE（氧化鋅丁香油酯）的丁香油成分會<em>抑制 resin 聚合！</em></b><br>
所以臨時冠如果用 ZOE cement → 之後換 resin cement 前，必須徹底清除 ZOE 殘留。<br>
（換永久黏著前 7−10 天安排回診確認 (101-2-53)）
</div>

<h3>Frozen Slab Technique</h3>
<div class="hl hl-teal">
調拌 zinc phosphate cement 時，在冰冷的調拌板（frozen slab）上操作 →<br>
<b>延長 working time，但 setting time 不變</b>。(104-2-56)<br>
冰板降低反應速度 → 可以慢慢調拌 → 薄薄一層均勻混合 → 最終厚度更薄。
</div>

<div class="hl hl-purple">
<b>高頻考古題：</b>100-1-46, 100-2-63, 101-2-53, 104-2-56<br>
題型：Cement space 如何增加/減少；Die spacer 厚度；Frozen slab 的效果
</div>
      `
    },
    {
      label:"橋體（Pontic）與 Pier Abutment",freq:"high",
      content:`
<h3>Pontic（橋體）設計類型</h3>
<table>
<tr><th>類型</th><th>與黏膜關係</th><th>優點</th><th>缺點</th><th>適用</th></tr>
<tr><td class="td-k">Sanitary<br>（衛生型）</td><td>完全不接觸黏膜，下方開放</td><td>最易清潔</td><td>美觀差</td><td>下顎後牙（不可見區）</td></tr>
<tr><td class="td-k">Ridge Lap<br>（鞍形）</td><td>包覆牙嵴的頰舌兩側</td><td>感覺最像真牙</td><td class="td-r">難清潔、黏膜壓迫</td><td>幾乎已不建議使用</td></tr>
<tr><td class="td-k">Modified Ridge Lap</td><td>只接觸頰側，舌側開放</td><td>美觀＋易清潔折衷</td><td>中等</td><td>前牙區（最常用）</td></tr>
<tr><td class="td-k">Ovate<br>（卵圓形）</td><td>伸入拔牙位點的組織凹陷中</td><td>最自然的齦緣輪廓</td><td>需手術預備受區</td><td>前牙美觀要求高</td></tr>
<tr><td class="td-k">Conical<br>（錐形）</td><td>只接觸頂點一點</td><td>清潔容易</td><td>美觀差</td><td>後牙區</td></tr>
</table>

<div class="hl hl-red">
<b>Ridge Lap Pontic 幾乎不再建議使用！</b><br>
頰舌兩側包覆牙嵴 → 形成清潔死角 → 牙菌斑積累 → 黏膜發炎、橋體下方牙嵴骨吸收。<br>
現代首選：前牙美觀區用 <b>Modified Ridge Lap</b>，後牙用 <b>Sanitary</b>。
</div>

<h3>Pier Abutment（中間支柱牙）問題</h3>
<div class="hl hl-blue">
<b>Pier Abutment</b>：五顆牙橋中，中間的支柱牙（如 #2−#4−#6 橋，#4 為 pier abutment）。<br>
問題：兩端 abutment 的咬合力不平衡 → 以 pier 為支點，一端橋翹起 → 黏合劑剝落。
</div>

<h3>Pier Abutment 的解決方案</h3>
<table>
<tr><th>解決方案</th><th>原理</th><th>位置</th></tr>
<tr><td class="td-g"><b>Non-rigid connector（非剛性連接體）</b></td><td>在兩端靠近 pier 的連接處，設計一個可以微小轉動的 key-keyway 接頭，允許少量動作</td><td>設置在 pier 的<b>遠心</b>側（distal of pier）</td></tr>
<tr><td class="td-b">Cantilever design（懸臂設計）</td><td>將 pier 作為最後支柱，改為懸臂橋</td><td>特定案例</td></tr>
</table>

<div class="hl hl-red">
<b>Non-rigid connector 必須放在 pier 的遠心側！</b><br>
若放在近心側 → 遠端橋在咬合力下會以 pier 的近心為支點下壓 → 遠端 abutment 受扭力更大。<br>
放在遠心側 → 遠端橋可以有少量獨立運動，不再傳遞扭力給 pier。
</div>

<div class="hl hl-purple">
<b>高頻考古題：</b>109-2 #49 / 111-1 #46 / 113-2 #47<br>
題型：Pier abutment 的 non-rigid connector 放哪裡；各種 pontic 設計的優缺點
</div>
      `
    },
    {
      label:"陶瓷材料（PFM & All-Ceramic & Zirconia）",freq:"high",
      content:`
<h3>PFM（Porcelain Fused to Metal）關鍵數值</h3>
<table>
<tr><th>重點</th><th>數值 / 說明</th></tr>
<tr><td class="td-k">陶瓷燒附前焊（Pre-solder）溫度</td><td class="td-b"><b>1110−1127°C</b></td></tr>
<tr><td class="td-k">陶瓷燒附後焊（Post-solder）溫度</td><td class="td-b"><b>710−743°C</b></td></tr>
<tr><td class="td-k">陶瓷燒結體積收縮</td><td class="td-b"><b>&gt; 20%</b>（Firing 時）(103-1-57)</td></tr>
<tr><td class="td-k">Metal coping 表面要求</td><td><b>smooth（光滑）</b> → 增加 wetting、易與 porcelain 結合 (104-1-47)</td></tr>
<tr><td class="td-k">Ni-Cr 合金加入鈹（Be）的目的</td><td>控制氧化層 → 更好的 porcelain-metal bond (103-2-57)</td></tr>
<tr><td class="td-k">外部比色修改（External color modification）</td><td>加<b>紫色</b>可改善牙冠透明感</td></tr>
</table>

<h3>PFM 陶瓷破損原因</h3>
<ul class="n">
<li class="li-r">Framework connector 厚度不足 → 金屬彎曲 → porcelain 受張力 → 碎裂</li>
<li class="li-r">Pontic 太長（過大跨距）</li>
<li class="li-r">金屬與陶瓷的熱膨脹係數不符（必須金屬略大於陶瓷）</li>
<li class="li-r">金屬表面不光滑 → 潤濕性差 → 黏著不良</li>
</ul>

<h3>Adhesive vs Cohesive Failure</h3>
<table>
<tr><th>破壞類型</th><th>定義</th><th>原因</th></tr>
<tr><td class="td-k">Adhesive failure</td><td>不同材料<b>介面</b>破壞（如金屬−陶瓷界面脫落）</td><td>介面結合力不足</td></tr>
<tr><td class="td-k">Cohesive failure</td><td><b>同一材料內部</b>破壞（如陶瓷本體裂開）</td><td>材料本身強度不足或受力過大</td></tr>
</table>

<h3>全瓷材料比較</h3>
<table>
<tr><th>材料</th><th>強度</th><th>美觀</th><th>適用</th><th>特性</th></tr>
<tr><td class="td-k">長石質陶瓷（Feldspathic）</td><td>低</td><td>最佳（透光性強）</td><td>前牙貼面（veneer）</td><td>最脆，需黏著支撐</td></tr>
<tr><td class="td-k">Leucite 強化陶瓷<br>（IPS Empress）</td><td>中</td><td>佳</td><td>前牙單冠</td><td>熱壓成型</td></tr>
<tr><td class="td-k">Lithium Disilicate<br>（e.max）</td><td>中高</td><td>佳</td><td>前後牙單冠、短橋</td><td>可酸蝕、黏著、強度佳</td></tr>
<tr><td class="td-k">Zirconia（氧化鋯）</td><td>最高</td><td>傳統較差（不透光）<br>→ 新型高透光 Zirconia 改善</td><td>後牙冠橋、全口重建</td><td>Stress-induced phase transformation</td></tr>
</table>

<div class="hl hl-teal">
<b>Zirconia 的 Stress-Induced Phase Transformation（應力誘發相轉換）</b>：<br>
當裂縫尖端有應力集中時，四方晶系（tetragonal）轉換為單斜晶系（monoclinic）→ 體積膨脹 → 壓縮裂縫尖端 → <b>阻止裂縫擴展</b> → 材料自我強化！<br>
這是 Zirconia 強度高的核心機制。
</div>

<h3>比色（Shade Selection）注意事項</h3>
<ul class="n">
<li>比色在<b>牙齒仍濕潤</b>時進行（乾燥後顏色改變）</li>
<li>避免強光直射，用北向窗戶自然光或標準比色燈</li>
<li>Munsell 系統：Chroma &lt; 4, Value &gt; 7 為最美觀範圍</li>
<li>PFM 若要改善透明感 → 加<b>紫色（purple）</b>的 external stain</li>
</ul>

<div class="hl hl-purple">
<b>高頻考古題：</b>100-1-52, 103-1-57, 103-2-57, 104-1-47<br>
題型：陶瓷焊接溫度；metal coping 表面要求；Zirconia 特殊性質；PFM 陶瓷破損原因
</div>
      `
    },
  ]
},

/* ──────────────────────────────────────────
   4. 牙科材料（印模・包埋）
────────────────────────────────────────── */
{
  label:"🧪 牙科材料（印模・包埋・黏合）",freq:"high",
  children:[
    {
      label:"彈性印模材完整比較",freq:"critical",
      content:`
<h3>四大彈性印模材核心比較（必背！）</h3>
<table>
<tr><th>材料</th><th>Working time</th><th>Setting time</th><th>精確度</th><th>尺寸穩定性</th><th>副產物</th><th>特殊注意</th></tr>
<tr><td class="td-k">Alginate<br>（藻酸鹽）</td><td>2−3 min</td><td>2.5−4.5 min</td><td>低〜中</td><td class="td-r">差（需立即灌模）</td><td>水</td><td>不可逆膠體；最常用初模</td></tr>
<tr><td class="td-k">Polyether<br>（聚乙醚）</td><td><b>2 min</b></td><td><b>4−5 min</b></td><td>最高</td><td class="td-g">好（可延後灌模）</td><td>無</td><td>親水性最佳；硬、有倒凹時難取出；吸水變形</td></tr>
<tr><td class="td-k">Addition Silicone<br>（加成型矽膠）</td><td>3−5 min</td><td>5−7 min</td><td>最高（同 Polyether）</td><td class="td-g">最佳（Hydrogen 副產物排出後穩定）</td><td class="td-r">氫氣（H₂）</td><td>乳膠手套的<b>硫</b>會抑制聚合！需等氫氣散出後再灌模（&gt;30min）</td></tr>
<tr><td class="td-k">Condensation Silicone<br>（縮合型矽膠）</td><td>5−10 min</td><td>9−12 min</td><td>中〜高</td><td class="td-r">差（副產物酒精揮發→收縮）</td><td class="td-r">酒精（乙醇）</td><td>1hr 內灌模；體積不穩定</td></tr>
</table>

<div class="hl hl-red">
<b>Addition Silicone 的兩大陷阱！</b><br>
① 乳膠手套含硫 → <b>抑制加成聚合反應</b> → 矽膠表面軟化、不硬化！<br>
取印模前不能戴乳膠手套接觸齒質（要用 vinyl 或 nitrile 手套）。<br>
② 副產物氫氣 → 剛取完印模材料內部有氣泡 → 需等 <b>&gt;30 分鐘</b>後再灌模。
</div>

<div class="hl hl-red">
<b>Polyether 的特殊陷阱！</b><br>
Polyether 是<b>親水性</b>（hydrophilic）→ 若放在潮濕環境中 → <b>吸水膨脹變形</b>！<br>
取完印模後要盡快灌模，不能浸泡在水中保存。
</div>

<h3>可逆 vs 不可逆膠體</h3>
<table>
<tr><th>類別</th><th>材料</th><th>特性</th><th>應用</th></tr>
<tr><td class="td-k">可逆膠體（Reversible hydrocolloid）</td><td>Agar（瓊脂）</td><td>加熱液化、冷卻固化；可重複使用</td><td>現已少用（需熱水澡設備）</td></tr>
<tr><td class="td-k">不可逆膠體（Irreversible hydrocolloid）</td><td>Alginate（藻酸鹽）</td><td>化學反應固化，不可逆</td><td>最普遍，初模常用</td></tr>
</table>

<h3>精確度排名（由高到低）</h3>
<div class="num-grid">
<div class="num-card"><div class="big">1</div><div class="sm">Addition Silicone<br>/ Polyether<br>（同列最高）</div></div>
<div class="num-card"><div class="big">2</div><div class="sm">Condensation<br>Silicone<br>（中等）</div></div>
<div class="num-card"><div class="big">3</div><div class="sm">Alginate<br>（最低）</div></div>
</div>

<div class="hl hl-purple">
<b>高頻考古題：</b>Polyether（100-1-17, 101-1-18, 102-2-19）；Addition silicone 乳膠手套陷阱（108-2 #17）；縮合型副產物酒精（109-1 #18）
</div>
      `
    },
    {
      label:"包埋材料（Investment Materials）& 鑄造",freq:"mid",
      content:`
<h3>兩大包埋材料比較（必背！）</h3>
<table>
<tr><th>種類</th><th>結合劑</th><th>適用合金</th><th>特性</th></tr>
<tr><td class="td-k"><b>Gypsum-bonded</b><br>（石膏結合型）</td><td>石膏（Gypsum）</td><td class="td-b"><b>Type II、III、IV 金合金</b><br>低熔點合金</td><td>膨脹量較少、加熱穩定性低（&lt;700°C）</td></tr>
<tr><td class="td-k"><b>Phosphate-bonded</b><br>（磷酸鹽結合型）</td><td>MgO + NH₄H₂PO₄</td><td class="td-b"><b>PFM、Framework（Ni-Cr、Co-Cr）</b><br>高熔點合金</td><td>高溫穩定（&gt;700°C）、膨脹量大、精確</td></tr>
</table>

<p class="hint">(103-2-66) — 考古題直接考 Gypsum 對金合金；Phosphate 對 PFM framework</p>

<h3>Ringless Investment Technique</h3>
<div class="hl hl-teal">
<b>Ringless technique</b>：不用金屬鑄造環，直接用可壓縮容器包埋。<br>
→ 膨脹量比傳統鑄造環包埋<b>更大</b><br>
→ 適合 high-strength、phosphate-bonded investment<br>
→ 適用 higher melting alloy（高熔點合金）<br>
(102-2-62) 考古題
</div>

<h3>鑄造流程與膨脹種類</h3>
<table>
<tr><th>膨脹類型</th><th>說明</th><th>控制方式</th></tr>
<tr><td class="td-k">Setting expansion</td><td>包埋材硬化時膨脹</td><td>水粉比（W/P ratio）</td></tr>
<tr><td class="td-k">Hygroscopic expansion</td><td>硬化過程接觸水產生的額外膨脹</td><td>用水浴（water bath technique）增加</td></tr>
<tr><td class="td-k">Thermal expansion</td><td>加熱燒焦蠟型後，包埋材受熱膨脹</td><td>最終加熱溫度</td></tr>
</table>

<h3>製作 Die 的注意事項</h3>
<ul class="n">
<li class="li-r">上顎 premolar die 最易<b>穿孔或斷裂</b>（因 MD 徑最小）(102-1-49)</li>
<li>Die hardening agent：塗在石膏模型表面，防磨損</li>
<li>Die spacer 離 margin 1mm 上方才塗（讓邊緣密合）</li>
</ul>

<div class="hl hl-purple">
<b>高頻考古題：</b>102-1-49（premolar die 最易斷）; 102-2-62（ringless technique）; 103-2-66（包埋材分類）
</div>
      `
    },
  ]
},

]; // end PROSTHO_TREE


/* ═══════════════════════════════════════════════
   咬合 TREE
═══════════════════════════════════════════════ */
const OCC_TREE = [

/* ──────────────────────────────────────────
   1. 互相保護咬合（MPO）
────────────────────────────────────────── */
{
  label:"⚙️ 互相保護咬合（MPO）",freq:"critical",
  children:[
    {
      label:"MPO 完整標準 & 犬齒保護咬合",freq:"critical",
      content:`
<h3>MPO = Mutually Protected Occlusion（互相保護咬合）</h3>
<div class="hl hl-blue">
MPO 又稱 <b>Canine-Protected Occlusion（犬齒保護咬合）</b>，是現代牙科製作冠橋、RPD、全口義齒的<b>天然牙</b>黃金咬合標準（全口義齒例外！）
</div>

<h3>MPO 的四大必要條件（100-1-52 直接考）</h3>
<table>
<tr><th>#</th><th>條件</th><th>說明</th></tr>
<tr><td class="td-b"><b>①</b></td><td><b>CR = CO</b></td><td>正中關係 = 正中咬合；無長中心（no long centric）</td></tr>
<tr><td class="td-b"><b>②</b></td><td><b>CO 時：後牙接觸、前牙<em>不</em>接觸</b></td><td>後牙保護前牙（防止前牙磨耗）</td></tr>
<tr><td class="td-b"><b>③</b></td><td><b>側方及前突運動時：後牙<em>均不</em>接觸</b></td><td>前牙（犬齒）保護後牙（防止後牙側向力）</td></tr>
<tr><td class="td-b"><b>④</b></td><td><b>牙周健康、Angle Class I</b></td><td>適用前提條件</td></tr>
</table>

<div class="hl hl-red">
<b>常見陷阱：「側方運動時，工作側後牙有接觸」</b> → 這是 Group function，<b>不是 MPO！</b><br>
MPO 的側方運動：只有犬齒引導（canine guidance）→ 工作側和非工作側後牙都不接觸。
</div>

<h3>MPO 不適用的情況</h3>
<ul class="n">
<li class="li-r"><b>Angle's Class II and III</b>（100-1-52 選項（4））→ 前牙關係異常，無法提供正常犬齒引導</li>
<li class="li-r">全口義齒（Full dentures）→ 要改為平衡咬合（Balanced occlusion）</li>
<li class="li-r">嚴重磨牙症（bruxism）→ 犬齒磨耗，引導功能喪失</li>
</ul>

<h3>Group Function（群功能咬合）比較</h3>
<table>
<tr><th></th><th>MPO（犬齒保護）</th><th>Group Function</th></tr>
<tr><td class="td-k">側方運動引導</td><td>犬齒單獨引導</td><td>工作側多顆牙同時接觸</td></tr>
<tr><td class="td-k">後牙保護</td><td class="td-g">完全保護</td><td>後牙有接觸，但力量分散</td></tr>
<tr><td class="td-k">適用</td><td>牙周健康、標準 Class I</td><td>犬齒磨耗或喪失時的替代</td></tr>
</table>

<div class="hl hl-purple">
<b>高頻考古題：</b>100-1-52 / 101-2-47 / 108-1 #50 / 110-2 #49 / 112-1 #47<br>
題型：MPO 的四個特徵；哪種情況不適合 MPO；MPO vs Group Function 差異
</div>
      `
    },
    {
      label:"Lateral Movement 影響因素",freq:"high",
      content:`
<h3>影響 Lateral Movement（側方運動）的因素</h3>
<div class="hl hl-blue">
側方運動時，下顎向一側移動，工作側髁突（orbiting condyle）原地轉動，非工作側髁突（balancing condyle）向前內下移動（Bennett movement）。
</div>

<table>
<tr><th>因素</th><th>說明</th><th>臨床影響</th></tr>
<tr><td class="td-k">關節窩內側壁形態<br>（medial wall of articular fossa）</td><td>內側壁越陡 → 非工作側髁突移動路徑越陡 → 後牙需要更多補償曲線</td><td>決定 Bennett angle 大小</td></tr>
<tr><td class="td-k">Temporomandibular ligament 形態</td><td>韌帶決定髁突可移動的範圍</td><td>限制側向運動幅度</td></tr>
<tr><td class="td-k">前牙引導角（Incisal guidance angle）</td><td>越陡的前牙引導 → 側方運動時後牙分離越快</td><td>後牙需更少補償曲線以達到平衡</td></tr>
<tr><td class="td-k">牙尖高度（Cusp height）</td><td>越高的牙尖 → 側方運動阻力越大</td><td>TMD 風險增加</td></tr>
</table>
<p class="hint">(101-2-47) — 影響 lateral movement 的因素，包含關節窩內側壁和 TM ligament</p>

<h3>Bennett Angle（班尼特角）</h3>
<div class="hl hl-teal">
<b>定義</b>：側方運動時，非工作側髁突（balancing condyle）移動軌跡與矢狀面所成的角度。<br>
→ 反映關節窩內側壁的斜度<br>
→ 用於調整 semi-adjustable articulator 的設定<br>
→ Bennett angle ≠ 髁道斜度（condylar inclination）
</div>

<h3>Immediate Side Shift（即刻側移）</h3>
<ul class="n">
<li>側方運動開始瞬間，下顎先做一個純側移（無旋轉）</li>
<li>即刻側移較大 → 義齒或修復體設計需要更多 freedom in centric</li>
<li>Semi-adjustable articulator 可透過 Bennett angle 設定來模擬</li>
</ul>

<div class="hl hl-purple">
<b>高頻考古題：</b>101-2-47 / 108-2 #51 / 110-1 #50<br>
題型：影響 lateral movement 的兩大解剖因素；Bennett angle 的定義
</div>
      `
    },
  ]
},

/* ──────────────────────────────────────────
   2. 咬合器（Articulator）
────────────────────────────────────────── */
{
  label:"🔧 咬合器（Articulator）",freq:"high",
  children:[
    {
      label:"咬合器分類（Class I−IV）",freq:"high",
      content:`
<h3>咬合器分類系統</h3>
<table>
<tr><th>分類</th><th>名稱</th><th>功能</th><th>適用</th></tr>
<tr><td class="td-k">Class I<br>（Simple / 平面型）</td><td>Simple articulator</td><td>只能做垂直開閉口運動</td><td>簡單修復，不需考慮側向動作</td></tr>
<tr><td class="td-k">Class II<br>（半可調型）</td><td>Semi-adjustable articulator</td><td>可模擬部分下顎運動；髁道斜度、Bennett angle 可調整為固定平均值</td><td>一般 FPD、RPD、全口義齒（多數情況）</td></tr>
<tr><td class="td-k">Class III<br>（全可調型）</td><td>Fully adjustable articulator</td><td>可複製個別患者所有下顎運動軌跡</td><td>全口重建、複雜修復、研究</td></tr>
<tr><td class="td-k">Class IV</td><td>Arcon type<br>（含髁球）</td><td>髁球在下顎部分，關節窩在上顎部分，符合解剖位置關係</td><td>更精確模擬解剖運動</td></tr>
</table>

<h3>Arcon vs Non-Arcon</h3>
<table>
<tr><th></th><th>Arcon type</th><th>Non-Arcon type</th></tr>
<tr><td class="td-k">髁球位置</td><td>在下顎部分（符合解剖）</td><td>在上顎部分（相反）</td></tr>
<tr><td class="td-k">精確度</td><td>較高</td><td>較低</td></tr>
<tr><td class="td-k">常見例子</td><td>Whipmix, Denar</td><td>Hanau</td></tr>
</table>

<h3>面弓（Facebow）的使用</h3>
<table>
<tr><th>種類</th><th>功能</th><th>精確度</th></tr>
<tr><td class="td-k">Arbitrary facebow<br>（任意面弓）</td><td>使用面部標誌（耳屏到外眼角）估計鉸鏈軸位置</td><td>中等，臨床足夠</td></tr>
<tr><td class="td-k">Kinematic facebow<br>（動態面弓）</td><td>精確找出真實鉸鏈軸（hinge axis）</td><td>最高，但全口義齒通常不必要</td></tr>
</table>

<div class="hl hl-yellow">
全口義齒通常<b>不用</b> kinematic facebow 找真實鉸鏈軸。<br>
因為無牙嵴患者咬合記錄本身就有誤差，精確找鉸鏈軸的意義有限。<br>
臨床上用 arbitrary location（面部標誌）已足夠。
</div>

<div class="hl hl-purple">
<b>高頻考古題：</b>109-1 #51 / 111-2 #50 / 113-1 #48<br>
題型：Arcon vs Non-arcon；kinematic facebow 的適用情況；各類咬合器的功能差異
</div>
      `
    },
    {
      label:"平衡咬合（Balanced Occlusion）& Hanau's Quint",freq:"high",
      content:`
<h3>平衡咬合（Balanced Occlusion）的概念</h3>
<div class="hl hl-blue">
<b>平衡咬合</b>：在 CR（靜態）、protrusive 及 lateral（動態）所有運動位置，工作側和平衡側同時有後牙接觸。<br>
→ 目的：防止全口義齒翻轉/翹起，提高穩定性。<br>
→ <b>全口義齒需要</b>；天然牙追求 MPO（後牙在側方不接觸）。
</div>

<h3>Hanau's Quint（漢諾五因素）</h3>
<div class="num-grid">
<div class="num-card"><div class="big">①</div><div class="sm">Condylar guidance<br>髁突引導角<br>（患者決定，不可改）</div></div>
<div class="num-card"><div class="big">②</div><div class="sm">Incisal guidance<br>前牙引導角<br>（修復設計決定）</div></div>
<div class="num-card"><div class="big">③</div><div class="sm">Cusp angle<br>牙尖角度<br>（選牙決定）</div></div>
<div class="num-card"><div class="big">④</div><div class="sm">Compensating curve<br>補償曲線<br>（排牙時調整）</div></div>
<div class="num-card"><div class="big">⑤</div><div class="sm">Occlusal plane<br>咬合平面傾斜<br>（排牙時調整）</div></div>
</div>

<h3>五因素的互動關係</h3>
<ul class="n">
<li>① 髁突引導角 越大（陡）→ 後牙需更高牙尖角（③↑）或更深補償曲線（④↑）才能平衡</li>
<li>② 前牙引導角 越大 → 平衡接觸越難達到 → 需降低前牙引導或增加補償曲線</li>
<li>① 和 ② 是<b>固定</b>的（由患者解剖決定）；③ ④ ⑤ 是可以調整的</li>
</ul>

<h3>磨牙調整（Occlusal Adjustment）</h3>
<div class="hl hl-yellow">
<b>全口義齒修磨工作側（以達到更好的平衡接觸）：</b><br>
→ 磨 <b>上顎頰尖舌斜面</b>（lingual inclines of maxillary buccal cusps）<br>
→ 磨 <b>下顎舌尖頰斜面</b>（buccal inclines of mandibular lingual cusps）<br>
→ 不磨 functional cusp tips（功能尖尖端不減少，而是加深對側窩）
</div>

<div class="hl hl-purple">
<b>高頻考古題：</b>108-2 #53 / 110-1 #52 / 111-2 #50 / 113-2 #52<br>
題型：Hanau's Quint 五因素；哪兩個因素不能改變（髁突引導角 + 前牙引導角）；調磨哪個斜面
</div>
      `
    },
  ]
},

/* ──────────────────────────────────────────
   3. TMD・顳顎關節
────────────────────────────────────────── */
{
  label:"🦴 TMD・顳顎關節",freq:"high",
  children:[
    {
      label:"TMD 分類、診斷與治療",freq:"high",
      content:`
<h3>TMD（顳顎關節紊亂症）主要分類</h3>
<table>
<tr><th>分類</th><th>診斷</th><th>特徵</th><th>治療</th></tr>
<tr><td class="td-k">肌肉性 TMD<br>（Myogenous）</td><td>Myofascial pain</td><td>咀嚼肌疼痛、壓痛點、開口受限（functional limitation）</td><td>咬合板、物理治療、肌肉放鬆</td></tr>
<tr><td class="td-k">關節盤前移位<br>（Anterior disc displacement with reduction）</td><td>張口時有 click 聲（復位）</td><td>開口初 click → 盤復位 → 功能正常</td><td>可逆性咬合板（前位化）</td></tr>
<tr><td class="td-k">關節盤前移位<br>（Without reduction）</td><td>無 click，開口受限（&lt;40mm）</td><td>「閉鎖」（closed lock）</td><td>手法復位或手術</td></tr>
<tr><td class="td-k">退化性關節病<br>（Osteoarthritis）</td><td>X 光有髁突骨變化</td><td>持續性疼痛、骨擦音（crepitus）</td><td>對症治療，減少關節負荷</td></tr>
</table>

<h3>鑑別 Click vs Crepitus</h3>
<table>
<tr><th>聲音</th><th>意義</th><th>可能診斷</th></tr>
<tr><td class="td-k">Click（彈響）</td><td>關節盤快速移位的聲音</td><td>Anterior disc displacement with reduction</td></tr>
<tr><td class="td-k">Crepitus（摩擦音）</td><td>骨對骨的摩擦</td><td>關節盤穿孔（perforation）或 Osteoarthritis</td></tr>
</table>

<h3>TMD 的咬合因素</h3>
<ul class="n">
<li><b>非功能性干擾（non-functional interferences）</b> → 側方工作側或非工作側的過大觸點 → 反射性肌肉痙攣</li>
<li><b>深覆蓋（deep overbite）</b> → 增加 TMJ 垂直載荷</li>
<li><b>磨牙症（Bruxism）</b> → 側向力量持續施加 → 關節和肌肉過勞</li>
<li>注意：單一咬合因素<b>不一定</b>直接導致 TMD，多為多因素</li>
</ul>

<h3>診斷工具（RDC/TMD）</h3>
<ul class="n">
<li>開口度測量：正常 ≥ 40 mm（小於此值為 limited opening）</li>
<li>視覺類比量表（VAS）：疼痛評估</li>
<li>X 光（panoramic, CT）：排除骨骼病變</li>
<li>MRI：最佳的關節盤影像</li>
</ul>

<h3>治療原則（由保守到積極）</h3>
<div class="steps">
<div class="step">衛教 + 自我護理（熱敷、軟食、限制大張口）</div>
<div class="step">咬合板治療（Occlusal splint / Night guard）</div>
<div class="step">物理治療（肌肉放鬆、超音波、電療）</div>
<div class="step">藥物治療（NSAIDs、肌肉鬆弛劑）</div>
<div class="step">關節腔注射（透明質酸、類固醇）</div>
<div class="step">手術（關節鏡、開放手術）</div>
</div>

<div class="hl hl-purple">
<b>高頻考古題：</b>108-1 #54 / 110-2 #53 / 112-1 #50 / 113-1 #51<br>
題型：Disc displacement with vs without reduction 的差異；TMD 治療由保守到積極的順序
</div>
      `
    },
  ]
},

/* ──────────────────────────────────────────
   4. 美學贋復・Biological Width
────────────────────────────────────────── */
{
  label:"✨ 美學贋復・Biological Width",freq:"high",
  children:[
    {
      label:"Biological Width（生物學寬度）",freq:"critical",
      content:`
<h3>Biological Width 精確數值（必背！）</h3>
<table>
<tr><th>結構</th><th>寬度</th><th>說明</th></tr>
<tr><td class="td-k">Junctional epithelium (JE)</td><td class="td-b"><b>0.97 mm</b></td><td>結合上皮（附著在牙面上）</td></tr>
<tr><td class="td-k">Supracrestal connective tissue attachment</td><td class="td-b"><b>1.07 mm</b></td><td>結締組織附著（牙槽骨頂上方）</td></tr>
<tr><td class="td-k"><b>Biological Width 總計</b></td><td class="td-r"><b>≈ 2.0 mm</b><br>（0.97 + 1.07）</td><td>牙槽嵴頂到結合上皮冠端</td></tr>
<tr><td class="td-k">Gingival sulcus（齦溝）</td><td>0.5−3.0 mm</td><td>不含在 biological width 之內</td></tr>
</table>

<div class="hl hl-blue">
<b>完整距離：</b>牙槽嵴頂 → 齦溝底部 = Biological Width（2mm）+ Sulcus depth（0.5−3mm）<br>
→ 最低限度：牙槽嵴頂到齦溝底約 <b>3mm</b>
</div>

<h3>Biological Width 的臨床重要性</h3>
<div class="hl hl-red">
<b>復形體邊界若侵入 biological width → 生物學寬度侵犯（Biologic Width Violation）！</b><br>
後果：慢性牙周炎症、骨吸收、齦緣紅腫出血、最終牙周破壞。<br>
若邊界需進入龈溝 → 至少需要 <b>3 mm 的 attached gingiva</b> 才能保護 biological width。
</div>

<h3>Crown Lengthening（牙冠延長術）的適應症</h3>
<ul class="n">
<li>復形體邊界需延伸到龈溝下但空間不足</li>
<li>臨床牙冠短，無法達到足夠固位高度（axial wall height &lt;4mm）</li>
<li>Biological width 被侵犯，需手術重建健康附著結構</li>
</ul>

<h3>Crown Lengthening 前後的等待時間</h3>
<table>
<tr><th>手術</th><th>等待時間</th><th>原因</th></tr>
<tr><td class="td-k">骨切除手術後</td><td><b>3−6 個月</b></td><td>等待骨和牙周組織成熟穩定</td></tr>
<tr><td class="td-k">齦切術後（無骨切除）</td><td><b>3 個月</b></td><td>等待軟組織穩定</td></tr>
</table>

<div class="hl hl-purple">
<b>高頻考古題：</b>108-2 #57 / 110-1 #58 / 111-2 #55 / 113-1 #56<br>
題型：JE + CT 的精確數值（0.97 + 1.07 = 2mm）；biologic width violation 的後果；attached gingiva 需要至少 3mm
</div>
      `
    },
    {
      label:"美觀評估要素與前牙復形",freq:"mid",
      content:`
<h3>前牙美觀評估要素</h3>
<table>
<tr><th>要素</th><th>評估內容</th><th>臨床意義</th></tr>
<tr><td class="td-k">中線（Midline）</td><td>上下顎中線對正，與面部中線一致</td><td>不對稱中線最影響美觀</td></tr>
<tr><td class="td-k">覆咬合（Overbite）</td><td>正常 2−3 mm</td><td>過深 → 限制下顎運動；過淺 → 前牙磨耗</td></tr>
<tr><td class="td-k">覆蓋（Overjet）</td><td>正常 2−3 mm</td><td>過大（Class II）→ 前牙外露，外傷風險</td></tr>
<tr><td class="td-k">牙齦露出（Gingival display）</td><td>微笑時露出齦緣 ≤ 2 mm</td><td>露龈笑（gummy smile）→ 美觀問題</td></tr>
<tr><td class="td-k">牙齒長寬比</td><td>正常 0.75−0.80（寬/長）</td><td>過方或過長的牙齒均不美觀</td></tr>
</table>

<h3>Ceramic Veneer（陶瓷貼面）</h3>
<table>
<tr><th>重點</th><th>說明</th></tr>
<tr><td class="td-k">厚度</td><td>0.3−0.7 mm（最薄型貼面）</td></tr>
<tr><td class="td-k">邊界</td><td>盡量停在釉質內（enamel margin）→ 黏著效果最好</td></tr>
<tr><td class="td-k">黏合劑選擇</td><td>必須用 <b>resin cement</b>（需要微機械性黏著力）</td></tr>
<tr><td class="td-k">禁忌症</td><td>過度磨牙症；嚴重 class III 咬合；切端需承受重咬合力</td></tr>
</table>

<h3>色彩學基礎（Munsell 系統）</h3>
<table>
<tr><th>參數</th><th>定義</th><th>牙科意義</th></tr>
<tr><td class="td-k">Hue（色調）</td><td>顏色種類（紅/黃/藍）</td><td>牙齒通常是黃−橙色調</td></tr>
<tr><td class="td-k">Value（明度）</td><td>顏色亮暗程度</td><td>Value 越高越亮白，美觀性優先考量</td></tr>
<tr><td class="td-k">Chroma（彩度）</td><td>顏色的飽和度</td><td>Chroma 越低越自然；Chroma &lt; 4 最美觀</td></tr>
</table>

<div class="hl hl-yellow">
<b>比色順序：先確認 Value（明度）→ 再確認 Hue（色調）→ 最後確認 Chroma（彩度）</b><br>
Value 是最難被人眼察覺的，也是最影響美觀的參數，應優先確認。
</div>

<div class="hl hl-purple">
<b>高頻考古題：</b>108-1 #58 / 110-2 #57 / 112-2 #55<br>
題型：比色順序；ceramic veneer 邊界應停在哪裡；Munsell system 各參數
</div>
      `
    },
  ]
},

]; // end OCC_TREE

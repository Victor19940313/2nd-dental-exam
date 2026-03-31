const OS_TREE = [
{
  label:"💉 局部麻醉與醫療急症", freq:"critical",
  children:[
    {
      label:"局部麻醉藥物比較", freq:"critical",
      content:`
<div class="box box-red">⚠️ 極高頻！每年必考 3–5 題。藥物名稱、極量、禁忌要背熟。</div>
<h3>Amide vs Ester 分類</h3>
<table>
<tr><th>分類</th><th>代表藥物</th><th>特點</th><th>過敏</th></tr>
<tr><td class="td-k">Amide（醯胺類）</td><td>Lidocaine, Mepivacaine, Bupivacaine, Prilocaine, Articaine</td><td>肝臟代謝；穩定；現代牙科主用</td><td>真正過敏極罕見</td></tr>
<tr><td class="td-k">Ester（酯類）</td><td>Procaine, Tetracaine, Benzocaine</td><td>血漿膽鹼酯酶水解；PABA代謝物→過敏</td><td>過敏較常見</td></tr>
</table>
<div class="box box-blue">記憶法：含字母 <strong>「i」兩個</strong>的都是 Amide（Lidoca<u>i</u>ne, Mep<u>i</u>vaca<u>i</u>ne…）</div>

<h3>藥理機轉</h3>
<ul class="n">
<li>阻斷電壓門控 Na⁺ 通道（voltage-gated sodium channels）→ 阻止去極化</li>
<li>在細胞<strong>內側</strong>作用，需以 un-ionized form 穿過神經膜</li>
<li>Un-ionized form = free base form，在組織 pH 較高時比例較高</li>
<li>感染組織 pH 低（酸性）→ 更多 ionized form → 麻醉效果差</li>
</ul>

<h3>關鍵藥理特性比較</h3>
<table>
<tr><th>特性</th><th>影響</th></tr>
<tr><td class="td-k">pKa（酸解離常數）</td><td>pKa 越接近組織 pH（7.4）→ un-ionized 比例越多 → <strong>起效越快</strong></td></tr>
<tr><td class="td-k">蛋白結合率</td><td>結合率越高 → 效果持續越久（<strong>作用時間長</strong>）</td></tr>
<tr><td class="td-k">脂溶性</td><td>脂溶性越高 → 穿透神經膜越容易 → <strong>效力越強</strong>（效能高）</td></tr>
</table>

<h3>常用局部麻醉藥詳細比較</h3>
<table>
<tr><th>藥物</th><th>濃度</th><th>起效</th><th>持續</th><th>最大劑量</th><th>特殊考點</th></tr>
<tr>
  <td class="td-k">Lidocaine<br>（Xylocaine）</td>
  <td>2%（含Epi）<br>2%（純）</td>
  <td>快（2–3 min）</td>
  <td>含Epi：60–90 min<br>純：30 min</td>
  <td>含Epi：7 mg/kg，最高 500 mg<br>純：4.4 mg/kg，最高 300 mg</td>
  <td>最常用；過量→先CNS興奮（抽搐）→再抑制（心跳停止）</td>
</tr>
<tr>
  <td class="td-k">Mepivacaine<br>（Carbocaine）</td>
  <td>3%（純）<br>2%（含Levonordefrin）</td>
  <td>快</td>
  <td>純：20–40 min<br>含VC：60–90 min</td>
  <td>6.6 mg/kg，最高 400 mg</td>
  <td class="td-r">本身有輕微血管收縮作用 → 不含Epi也可用 → 適合心血管病患</td>
</tr>
<tr>
  <td class="td-k">Bupivacaine<br>（Marcaine）</td>
  <td>0.5%（含Epi）</td>
  <td>慢（6–10 min）</td>
  <td>最長：5–7 小時</td>
  <td>1.3 mg/kg，最高 90 mg</td>
  <td>術後止痛首選；心臟毒性強 → 心跳停止難治</td>
</tr>
<tr>
  <td class="td-k">Prilocaine<br>（Citanest）</td>
  <td>4%（純或含Epi）</td>
  <td>中等</td>
  <td>純：45–60 min</td>
  <td>6 mg/kg，最高 400 mg</td>
  <td class="td-r">⚠️ 代謝物o-toluidine → <strong>Methemoglobinemia（變性血紅素血症）</strong><br>→ 血液攜氧↓→ 發紺 → 禁用於貧血、心肺功能不佳患者</td>
</tr>
<tr>
  <td class="td-k">Articaine<br>（Septocaine）</td>
  <td>4%（含Epi 1:100,000 或 1:200,000）</td>
  <td>快</td>
  <td>60–90 min</td>
  <td>7 mg/kg，最高 500 mg</td>
  <td class="td-r">蛋白結合率最高（95%）；含<strong>thiophene ring</strong>→ 脂溶性最高 → 擴散力最強<br>可不打 IANB 即麻醉下顎（頰側浸潤有效）</td>
</tr>
</table>

<h3>Carpule 劑量計算</h3>
<div class="box box-blue">
1支 carpule = 1.8 mL<br>
2% Lidocaine = 20 mg/mL → 1 carpule = <strong>36 mg</strong> Lidocaine<br>
1:100,000 Epi = 0.01 mg/mL → 1 carpule = <strong>0.018 mg</strong> Epi<br><br>
<strong>CV 病患（Epi 限 0.04 mg）：</strong>0.04 ÷ 0.018 ≈ 2.2 支 → 最多 <strong>2 支</strong> 1:100,000<br>
<strong>健康成人（Epi 限 0.2 mg）：</strong>0.2 ÷ 0.018 ≈ 11 支
</div>

<details class="exam-block">
  <summary>📝 歷屆考古題精選（3 題）</summary>
  <div class="exam-list">
    <div class="exam-item">
      <p class="eq">Q1. Lidocaine 與 Bupivacaine 的主要作用差異？持續時間各約多長？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea"><strong>Lidocaine</strong>：中效（約 1–1.5 小時），最常用；<strong>Bupivacaine</strong>：長效（約 4–8 小時），適合術後止痛。<br>國考陷阱：長效麻藥 = Bupivacaine，不是 Lidocaine。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q2. 2% Lidocaine with 1:100,000 Epinephrine，一般健康成人的 Lidocaine 最大極量為多少 mg？最多可給幾支 Carpule？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">Lidocaine 成人極量 <strong>500 mg</strong>（或按體重 7 mg/kg）。每支 carpule 含 36 mg → 最多約 <strong>13–14 支</strong>。國考常考各藥極量與每支含量的換算。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q3. Articaine 相較於 Lidocaine 的特殊優點為何？為何上顎頰側浸潤即可達到 IANB 效果？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">Articaine 含有<strong>噻吩環（Thiophene ring）</strong>，脂溶性更高，<strong>骨穿透力強</strong>，可從上顎頰側浸潤穿透緻密骨板達到對側腭側麻醉。<br>另一特點：含有 Ester 連結（降低肝臟代謝負擔，但注意 4% 高濃度有感覺異常風險）。</p></details>
    </div>
  </div>
</details>
`
    },
    {
      label:"血管收縮劑", freq:"critical",
      content:`
<div class="box box-red">⚠️ 極高頻！Epinephrine 的劑量、禁忌每年必考。</div>
<h3>常用血管收縮劑</h3>
<table>
<tr><th>藥物</th><th>濃度</th><th>用途</th><th>特點</th></tr>
<tr><td class="td-k">Epinephrine（腎上腺素）</td><td>1:50,000 / 1:100,000 / 1:200,000</td><td>最常用；延長麻醉、止血</td><td>α₁+β₁+β₂；強效；CV 影響大</td></tr>
<tr><td class="td-k">Levonordefrin（Neo-Cobefrin）</td><td>1:20,000</td><td>含 Mepivacaine 2%</td><td>主要 α 作用；心臟毒性較 Epi 低約75%</td></tr>
</table>

<h3>Epinephrine 最大劑量（必背）</h3>
<div class="num-grid">
<div class="num-card"><div class="big">0.2 mg</div><div class="sm">健康成人<br>每次門診極量</div></div>
<div class="num-card"><div class="big">0.04 mg</div><div class="sm">心血管疾病患者<br>（含狹心症、高血壓）</div></div>
<div class="num-card"><div class="big">2 支</div><div class="sm">CV病患<br>1:100,000 最多支數</div></div>
<div class="num-card"><div class="big">4 支</div><div class="sm">CV病患<br>1:200,000 最多支數</div></div>
</div>

<h3>血管收縮劑禁忌症</h3>
<table>
<tr><th>狀況</th><th>處理</th><th>原因</th></tr>
<tr><td class="td-k">未控制高血壓（>180/110）</td><td>延後治療；改用 Mepivacaine 3%</td><td>Epi→α₁→血管收縮→血壓更高</td></tr>
<tr><td class="td-k">嚴重心絞痛/近期心梗</td><td>限制 Epi ≤0.04 mg</td><td>β₁→心肌需氧↑→誘發缺血</td></tr>
<tr><td class="td-k">未控制甲狀腺亢進</td><td>禁用或極限量</td><td>甲狀腺素增強兒茶酚胺敏感性→甲狀腺危象</td></tr>
<tr><td class="td-k">服用非選擇性β-blocker<br>（Propranolol）</td><td>⚠️ 避免大量Epi</td><td>β blocked→α unopposed→<strong>高血壓危象+反射性心跳緩慢</strong></td></tr>
<tr><td class="td-k">服用三環抗憂鬱劑<br>（TCAs, e.g. Amitriptyline）</td><td>限量；改用 Levonordefrin</td><td>TCA阻止Epi回收→作用增強3–8倍</td></tr>
<tr><td class="td-k">嗜鉻細胞瘤（Pheochromocytoma）</td><td>禁用</td><td>腫瘤本身分泌大量兒茶酚胺→外源Epi→高血壓危象</td></tr>
</table>

<h3>血管收縮劑的作用</h3>
<ul class="n">
<li>降低局部血流 → 延緩麻藥吸收 → 延長麻醉時間</li>
<li>減少麻藥全身吸收 → 降低毒性</li>
<li>局部止血（尤其 1:50,000 含量高的）</li>
<li>增加麻醉深度</li>
</ul>

<details class="exam-block">
  <summary>📝 歷屆考古題精選（3 題）</summary>
  <div class="exam-list">
    <div class="exam-item">
      <p class="eq">Q1. 患有缺血性心臟病或嚴重高血壓（ASA III/IV）的心血管疾病患者，牙科門診每次可安全使用的 Epinephrine 最高極量為多少 mg？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">最高安全極量為 <strong>0.04 mg</strong>（≈ 2 管 1.8mL 含 1:100,000 Epi 的麻藥）。健康成人極量為 0.2 mg。<strong>國考最常考的數字陷阱！</strong></p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q2. 病患正在服用非選擇性 β 阻斷劑（Propranolol），注射含 Epinephrine 的局麻劑後最可能發生什麼嚴重交互作用？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">危險的「<strong>血壓劇升 + 反射性心跳過緩（Hypertension with reflex bradycardia）</strong>」。β2 血管擴張作用被阻斷 → α1 收縮不受拮抗。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q3. 含 Epinephrine 的局麻止血效果在術後 6 小時常出現「反彈性出血」，其藥理原因為何？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">隨 Epi 濃度降低，<strong>β2（血管擴張）的接受器親和力大於 α1（收縮）</strong>，造成血管反彈性擴張出血。</p></details>
    </div>
  </div>
</details>
`
    },
    {
      label:"麻醉注射技術", freq:"high",
      content:`
<h3>下顎麻醉技術</h3>
<table>
<tr><th>技術</th><th>目標神經</th><th>注射位置</th><th>考點</th></tr>
<tr>
  <td class="td-k">IANB<br>（下齒槽神經阻斷）</td>
  <td>Inferior alveolar n.<br>Lingual n.<br>Mental n.</td>
  <td>翼下顎韌帶（Pterygomandibular raphe）外側，下顎磨牙咬合面上方約 1 cm</td>
  <td class="td-r">最常用下顎阻斷法；失敗率 15–20%；主要併發症：顏面血腫、舌麻痺</td>
</tr>
<tr>
  <td class="td-k">Buccal n. block<br>（長頰神經阻斷）</td>
  <td>Long buccal n.</td>
  <td>下顎磨牙遠心頰側黏膜</td>
  <td>IANB 不涵蓋頰側軟組織 → 需補打</td>
</tr>
<tr>
  <td class="td-k">Gow-Gates</td>
  <td>整個下顎神經 V3<br>（IANB + Buccal + Lingual + Mylohyoid）</td>
  <td>髁突頸部（condylar neck）</td>
  <td class="td-r">成功率最高（>95%）；開口後注射；麻醉範圍最廣；適合IANB反覆失敗</td>
</tr>
<tr>
  <td class="td-k">Vazirani-Akinosi<br>（閉口法）</td>
  <td>下齒槽神經、舌神經</td>
  <td>翼下顎縫隙，閉口狀態注射</td>
  <td>適合張口受限患者（Trismus）</td>
</tr>
</table>

<h3>上顎麻醉技術</h3>
<table>
<tr><th>技術</th><th>麻醉區域</th><th>考點</th></tr>
<tr><td class="td-k">PSA（後上牙槽神經）</td><td>上顎磨牙（除第一大臼齒 MB 根）</td><td class="td-r">⚠️ 注射過深→翼靜脈叢血腫（Pterygoid plexus hematoma）</td></tr>
<tr><td class="td-k">MSA（中上牙槽神經）</td><td>上顎前臼齒 + 第一大臼齒 MB 根</td><td>約 28% 的人才有此神經分支</td></tr>
<tr><td class="td-k">ASA（前上牙槽神經）</td><td>上顎前牙</td><td>從 Infraorbital 分出</td></tr>
<tr><td class="td-k">Infraorbital block</td><td>上顎前牙 + 前臼齒 + 頰側軟組織</td><td>注射至眶下孔（Infraorbital foramen）</td></tr>
<tr><td class="td-k">Greater Palatine block</td><td>後方硬顎</td><td>注射至大顎孔（GPF），位於上顎第二或第三大臼齒齶側</td></tr>
<tr><td class="td-k">Nasopalatine block</td><td>前方硬顎（中切牙後方）</td><td>注射至切牙孔（Incisive canal）；最痛的注射點之一</td></tr>
</table>

<div class="box box-blue">
<strong>記憶：上顎前牙需 ASA + Nasopalatine（唇側 + 齶側）</strong><br>
上顎磨牙需 PSA（或 MSA）+ Greater Palatine（頰側 + 齶側）
</div>
`
    },
    {
      label:"醫療急症處置", freq:"critical",
      content:`
<div class="box box-red">⚠️ 極高頻！每年 3–5 題。正確處置順序、禁忌要背熟。</div>
<h3>醫療急症快速處置表</h3>
<table>
<tr><th>急症</th><th>最常見原因</th><th>症狀</th><th>處置</th><th>關鍵禁忌</th></tr>
<tr>
  <td class="td-k">暈厥<br>Syncope<br><span class="tag tag-r">最常見急症</span></td>
  <td>迷走神經反應（Vasovagal）；疼痛、焦慮、空腹</td>
  <td>臉色蒼白、冷汗、噁心、意識喪失；脈搏弱但有</td>
  <td>1. 停止治療<br>2. <strong>Trendelenburg 位（腳高頭低 10–15°）</strong><br>3. 鬆開衣領<br>4. 給予氧氣<br>5. 監測生命徵象</td>
  <td>與心跳停止鑑別：暈厥有脈搏</td>
</tr>
<tr>
  <td class="td-k">過度換氣<br>Hyperventilation</td>
  <td>焦慮→呼吸過快→CO₂過低→呼吸性鹼中毒</td>
  <td>手足麻木、手腕痙攣（Tetany）、頭暈、心悸</td>
  <td>1. 安撫情緒<br>2. <strong>紙袋呼吸</strong>（重建CO₂）<br>3. 降低呼吸頻率</td>
  <td class="td-r">⚠️ 絕對不可給純氧！（會加重CO₂過低）</td>
</tr>
<tr>
  <td class="td-k">過敏反應<br>Anaphylaxis</td>
  <td>Penicillin、Latex、造影劑；IgE 媒介</td>
  <td>輕度：蕁麻疹、搔癢<br>重度：支氣管痙攣、喉頭水腫、休克</td>
  <td>輕度：Antihistamine（Diphenhydramine 50 mg IM）<br><strong>重度（Anaphylaxis）：Epinephrine 0.3–0.5 mg IM（大腿外側）</strong><br>＋ 氧氣、仰臥抬腳、AED standby</td>
  <td>Epi 是 Anaphylaxis 首選，延誤給藥致死</td>
</tr>
<tr>
  <td class="td-k">低血糖<br>Hypoglycemia</td>
  <td>糖尿病患者過量胰島素或空腹就診</td>
  <td>顫抖、出汗、意識混亂、頭暈；嚴重→意識喪失</td>
  <td><strong>有意識：口服糖水/果汁/葡萄糖片</strong><br>無意識：Glucagon 1 mg IM 或 IV Dextrose 50%</td>
  <td>勿給昏迷患者口服食物（窒息風險）</td>
</tr>
<tr>
  <td class="td-k">狹心症<br>Angina</td>
  <td>心臟缺氧；壓力或疼痛誘發</td>
  <td>胸骨後壓迫感、放射至左臂/下顎；休息可緩解（穩定型）</td>
  <td>1. 停止治療、休息<br>2. <strong>Nitroglycerin 0.3–0.4 mg 舌下含片</strong><br>3. 氧氣<br>4. 若3次無效→懷疑心肌梗塞→叫救護車</td>
  <td>Nitroglycerin 低血壓患者禁用</td>
</tr>
<tr>
  <td class="td-k">心肌梗塞<br>Myocardial Infarction</td>
  <td>冠狀動脈阻塞</td>
  <td>劇烈胸痛>20分鐘、不因休息或NTG緩解、冷汗、噁心</td>
  <td>1. 叫救護車<br>2. <strong>Aspirin 325 mg 嚼碎（抗血小板）</strong><br>3. Nitroglycerin（若BP正常）<br>4. 氧氣<br>5. 準備 AED、CPR</td>
  <td>不可讓患者自行開車去醫院</td>
</tr>
<tr>
  <td class="td-k">氣喘發作<br>Asthma</td>
  <td>過敏原、Aspirin、NSAIDs、壓力</td>
  <td>呼吸困難、哮鳴（Wheezing）、無法說完整句子</td>
  <td>1. 停止治療、坐直<br>2. <strong>短效支氣管擴張劑（Salbutamol/Albuterol 吸入）</strong><br>3. 氧氣<br>4. 嚴重→Epinephrine 0.3 mg IM</td>
  <td>NSAIDs 可誘發 Aspirin-sensitive asthma</td>
</tr>
<tr>
  <td class="td-k">腎上腺危象<br>Adrenal Crisis</td>
  <td>長期類固醇患者（>2週）手術壓力→腎上腺皮質抑制</td>
  <td>低血壓、虛弱、腹痛、低血糖、意識改變</td>
  <td><strong>Hydrocortisone 100 mg IV/IM</strong><br>＋ 液體補充（Normal saline）<br>＋ 叫救護車</td>
  <td>術前評估類固醇使用史；可能需要類固醇補充（Steroid coverage）</td>
</tr>
<tr>
  <td class="td-k">局麻藥毒性反應<br>LA Toxicity</td>
  <td>過量注射或誤入血管</td>
  <td>輕度CNS興奮（口周麻木、耳鳴、頭暈）→<br>重度：抽搐、意識喪失→<br>心臟抑制（心跳停止）</td>
  <td>輕度：停止注射、觀察<br>中度：氧氣、Benzodiazepine（抽搐）<br>重度：CPR；Bupivacaine毒性→Lipid emulsion 20%</td>
  <td class="td-r">Lidocaine 毒性：<strong>先CNS興奮→再CNS+心臟抑制</strong></td>
</tr>
</table>

<h3>急症優先順序</h3>
<div class="box box-orange">
所有急症的處置順序：<strong>A（氣道）→ B（呼吸）→ C（循環）→ D（Disability/意識）→ E（暴露/評估）</strong><br>
生命體徵監測：血壓、心跳、呼吸、血氧（SpO₂）
</div>

<details class="exam-block">
  <summary>📝 歷屆考古題精選（3 題）</summary>
  <div class="exam-list">
    <div class="exam-item">
      <p class="eq">Q1. 病患在門診發生過敏性休克（Anaphylactic shock），呼吸道阻塞且血壓驟降，首選急救藥物的濃度、途徑與成人劑量？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea"><strong>肌肉注射（IM）1:1,000 濃度 Epinephrine 0.3 mL</strong>。<br>陷阱：濃度「1:10,000」或途徑「靜脈注射（IV）」均為錯誤選項！</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q2. 極度焦慮患者注射後出現呼吸急促、手腳發麻，此為換氣過度症候群，絕對「不可」給予哪項急救處置？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">絕對不可給予<strong>氧氣（O₂）</strong>。此症為呼吸性鹼中毒，給氧會加重 CO₂ 流失；正確處置：對著紙袋或雙手罩口鼻重新呼吸。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q3. 胰島素依賴型糖尿病患者發生低血糖並已「失去意識」，且無法建立靜脈管路時，最優先的藥物處置？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea"><strong>肌肉注射（IM）Glucagon 1 mg</strong>。失去意識時禁止口服給糖（吸入風險），且無靜脈管路時無法給予 50% 葡萄糖液。</p></details>
    </div>
  </div>
</details>
`
    },
    {
      label:"系統疾病患者注意事項", freq:"high",
      content:`
<h3>心血管疾病患者</h3>
<table>
<tr><th>疾病</th><th>牙科注意事項</th><th>考點</th></tr>
<tr><td class="td-k">高血壓</td><td>BP>180/110 → 延後治療<br>Epi 限 0.04 mg<br>避免 Mepivacaine（輕微VC效果）</td><td>最常考的界定值：收縮壓>180 或舒張壓>110</td></tr>
<tr><td class="td-k">狹心症</td><td>Epi ≤0.04 mg<br>短時間手術<br>術前服藥（NTG备用）</td><td>Stable angina 可以治療；Unstable → 延後</td></tr>
<tr><td class="td-k">服用 Warfarin 患者</td><td>INR ≤3.5 → 可拔牙（不停藥）<br>INR>3.5 → 與內科醫師討論</td><td class="td-r">⚠️ 一般牙科拔牙<strong>不需停止</strong> Warfarin</td></tr>
<tr><td class="td-k">服用 Aspirin/Clopidogrel</td><td>通常不需停藥<br>局部止血措施</td><td>停藥風險（血栓）>出血風險</td></tr>
<tr><td class="td-k">雙磷酸鹽藥物（Bisphosphonate）</td><td>拔牙前評估 MRONJ 風險<br>口服＜3年且無類固醇 → 風險低</td><td class="td-r">MRONJ：Medication-related Osteonecrosis of Jaw<br>下顎比上顎多；拔牙是最大誘因</td></tr>
</table>

<h3>糖尿病患者</h3>
<ul class="n">
<li>安排<strong>早上</strong>診次（血糖較穩定）</li>
<li>確認患者已正常進食（避免低血糖）</li>
<li>血糖控制差者 → 感染風險高、傷口癒合差</li>
<li class="td-r">HbA1c >9% → 擇期手術應謹慎</li>
<li>Metformin：拔牙不需停藥；大手術若用造影劑需停48小時</li>
</ul>

<h3>孕婦用藥</h3>
<table>
<tr><th>FDA 分類</th><th>含義</th><th>例子</th></tr>
<tr><td class="td-k">Category A</td><td>人體對照研究確認安全</td><td>（很少藥物）</td></tr>
<tr><td class="td-k">Category B</td><td>動物無風險，無人體研究</td><td class="td-g">Amoxicillin、Acetaminophen、Lidocaine</td></tr>
<tr><td class="td-k">Category C</td><td>動物有風險或無研究</td><td>Epinephrine、Codeine、多數 NSAIDs</td></tr>
<tr><td class="td-k">Category D</td><td>有人體風險，但利大於弊</td><td class="td-r">Tetracycline（牙齒染色+骨骼影響）</td></tr>
<tr><td class="td-k">Category X</td><td>有畸胎風險，絕對禁用</td><td class="td-r">Thalidomide、部分鎮靜劑</td></tr>
</table>
<div class="box box-blue">
<strong>孕婦最安全牙科治療時機：懷孕中期（第 4–6 個月）</strong><br>
X 光：必要時可照，務必穿鉛衣 + 甲狀腺護套<br>
最安全抗生素：Amoxicillin（Category B）<br>
禁用：Tetracycline、Metronidazole（第一孕期）
</div>

<h3>腎臟疾病患者</h3>
<ul class="n">
<li>GFR &lt;30 → 需謹慎調整藥物劑量</li>
<li class="td-r">避免 NSAIDs（降低腎血流）</li>
<li>Amide 類局麻藥腎臟影響小（主要肝代謝），相對安全</li>
<li>透析患者：最佳診治時機為透析後隔天</li>
<li>注意出血傾向（腎衰→血小板功能障礙）</li>
</ul>

<h3>肝臟疾病患者</h3>
<ul class="n">
<li class="td-r">Amide 類局麻藥由肝臟代謝 → 嚴重肝病需降低劑量</li>
<li>凝血因子在肝臟合成 → 肝功能不佳 → 出血風險↑ → 術前查 PT/INR</li>
<li>Child-Pugh A 級（輕度）→ 可正常治療</li>
<li>Child-Pugh C 級（重度）→ 避免擇期手術</li>
</ul>
`
    }
  ]
},
{
  label:"🦴 顎骨囊腫與腫瘤", freq:"critical",
  children:[
    {
      label:"發炎性囊腫", freq:"critical",
      content:`
<div class="box box-red">⚠️ 極高頻！Radicular cyst 最常見，OKC 最愛考復發率與 Gorlin syndrome。</div>
<h3>Radicular Cyst（根尖周囊腫）</h3>
<table>
<tr><th>項目</th><th>內容</th></tr>
<tr><td class="td-k">別名</td><td>Periapical cyst / Apical periodontal cyst</td></tr>
<tr><td class="td-k">發生率</td><td class="td-r">最常見的顎骨囊腫（佔全部 50–70%）</td></tr>
<tr><td class="td-k">來源</td><td>慢性根尖周炎 → Malassez 上皮殘留（Rests of Malassez）增生 → 囊腫化</td></tr>
<tr><td class="td-k">位置</td><td>非活性牙（死髓牙）根尖處</td></tr>
<tr><td class="td-k">X 光</td><td>根尖周圓形/橢圓形透亮影，有硬化邊界（corticated border）</td></tr>
<tr><td class="td-k">治療</td><td>根管治療 → 觀察；若不消退 → 根端切除術 + 囊腫剜出</td></tr>
<tr><td class="td-k">組織學</td><td>Non-keratinized stratified squamous epithelium 內壁；Rushton bodies（玻璃樣小體）</td></tr>
</table>

<h3>Residual Cyst（殘留囊腫）</h3>
<ul class="n">
<li>牙齒拔除後，根尖周囊腫未完全清除 → 持續存在</li>
<li>X光：無牙區的透亮影，邊界清楚</li>
<li>治療：手術剜出</li>
</ul>

<h3>Paradental Cyst（Buccal Bifurcation Cyst）</h3>
<ul class="n">
<li>位於部分萌出下顎磨牙（常為第一大臼齒）頰側分叉處</li>
<li>與牙周炎症相關，非真正的牙根囊腫</li>
<li>兒童多見；治療：外科剜出</li>
</ul>

<details class="exam-block">
  <summary>📝 歷屆考古題精選（3 題）</summary>
  <div class="exam-list">
    <div class="exam-item">
      <p class="eq">Q1. 根尖囊腫、殘餘囊腫、含齒囊腫三者中，哪一個「不屬於」發炎性囊腫？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea"><strong>含齒囊腫（Dentigerous cyst）</strong>屬於發育性（Developmental）齒源性囊腫。根尖囊腫與殘餘囊腫才是發炎性。<strong>最常考的分類陷阱！</strong></p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q2. X 光評估阻生牙時，含齒囊腫附著位置的解剖特徵？濾泡空間大於多少 mm 懷疑為囊腫？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">附著於牙齒的<strong>牙骨質牙釉質交界（CEJ）</strong>；濾泡透射區寬度大於 <strong>5 mm</strong>（部分教材 3 mm）即懷疑為囊腫。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q3. 診斷根尖囊腫最重要的臨床檢查？病灶多大才能初步與根尖肉芽腫區分？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">最重要的是<strong>牙髓活性測試</strong>（根尖囊腫患齒必為 Non-vital）；直徑通常須大於 <strong>1.5–2 cm</strong> 才傾向診斷囊腫而非肉芽腫。</p></details>
    </div>
  </div>
</details>
`
    },
    {
      label:"發育性囊腫", freq:"critical",
      content:`
<div class="box box-red">⚠️ 極高頻！Dentigerous cyst X光定義 + OKC 復發率 + Gorlin syndrome 每年必考</div>

<h3>Dentigerous Cyst（含齒囊腫）</h3>
<div class="box box-blue">🔑 關鍵定義：囊腫從 <strong>CEJ（牙骨質釉質交界處）</strong> 開始包覆未萌出的牙冠</div>
<table>
<tr><th>項目</th><th>內容</th></tr>
<tr><td class="td-k">發生率</td><td class="td-r">最常見發育性囊腫；第二常見顎骨囊腫（僅次Radicular）</td></tr>
<tr><td class="td-k">來源</td><td>Reduced enamel epithelium（退化性牙釉質上皮）與牙冠之間液體積聚</td></tr>
<tr><td class="td-k">好發位置</td><td class="td-r">下顎第三大臼齒 > 上顎犬齒 > 下顎第二臼齒（對應最常見的阻生牙順序）</td></tr>
<tr><td class="td-k">X 光特徵</td><td>單房放射線透射影，邊界清楚；囊腫<strong>附著於 CEJ</strong>，包圍整個牙冠</td></tr>
<tr><td class="td-k">治療</td><td>小型：剜出術 + 拔除阻生牙<br>大型（近下齒槽神經/怕骨折）：先做<strong>Marsupialization（造袋術）</strong>減壓，縮小後再剜出</td></tr>
<tr><td class="td-k">惡性轉變</td><td class="td-r">長期存在可惡化為：Ameloblastoma、Squamous cell carcinoma、Mucoepidermoid carcinoma</td></tr>
<tr><td class="td-k">復發率</td><td class="td-g">低</td></tr>
</table>

<h3>OKC（Odontogenic Keratocyst）/ KCOT</h3>
<div class="box box-red">⚠️ OKC = 最喜歡出的囊腫考題。復發率最高、Gorlin syndrome、組織學特徵必背！</div>

<div class="box box-blue">
<strong>先建立概念：</strong>OKC 之所以特別，是因為它<strong>不像一般囊腫靜靜待在原地，而是沿著骨髓腔前後偷偷蔓延</strong>，臨床上骨頭膨脹不明顯，卻已經長到很大了。這也是它特別難完全切乾淨、容易復發的原因。
</div>

<table>
<tr><th>項目</th><th>內容</th></tr>
<tr><td class="td-k">WHO 命名演變</td><td>OKC → KCOT（2005年改名腫瘤）→ OKC（2017年改回囊腫）</td></tr>
<tr><td class="td-k">好發位置</td><td class="td-r">下顎後牙區 → 上升支（Ramus）；沿顎骨前後向生長，<strong>皮質骨膨脹不明顯</strong>（與Dentigerous cyst的圓形膨脹不同）</td></tr>
<tr><td class="td-k">X 光特徵</td><td>單房或多房放射線透射影；邊界清楚（有時有硬化邊）；可沿骨髓腔長距離延伸；可能伴隨未萌出牙</td></tr>
<tr><td class="td-k">組織學（必背）</td><td class="td-r">• 上皮極薄：只有 <strong>6–8 層</strong>細胞<br>• 多為<strong>Parakeratinized</strong>（不全角化）；表面波浪狀<br>• 基底層細胞核遠離基底膜（<strong>Palisaded</strong>，柵欄狀排列）<br>• 常見<strong>Satellite cysts（衛星子囊腫）</strong>— 這是復發的主因！</td></tr>
<tr><td class="td-k">復發率</td><td class="td-r"><strong>25–60%</strong>（最高的顎骨囊腫）<br>原因：①薄而脆的囊壁殘留②衛星子囊腫③PTCH1基因突變導致生長活性強</td></tr>
<tr><td class="td-k">治療</td><td>剜出術 + <strong>Carnoy's solution 塗佈骨壁</strong>（殺死殘留上皮）或液態氮冷凍；大型病灶先Marsupialization再剜出；需長期（5–10年）定期追蹤</td></tr>
</table>
<div class="box box-red">
<strong>🧬 Gorlin Syndrome（痣樣基底細胞癌症候群）— 必背！</strong><br><br>
當一個患者出現<strong>多發性 OKC</strong>，要立刻想到 Gorlin Syndrome：<br><br>
<strong>核心三聯徵：</strong><br>
① 多發性 OKC（常是最早出現的症狀）<br>
② 多發性皮膚基底細胞癌（Basal cell carcinoma），年輕就發病<br>
③ 大腦鐮鈣化（Calcification of falx cerebri），X光可見<br><br>
<strong>其他特徵：</strong>肋骨分叉、手掌/腳掌小窩（Palmar/plantar pits）、蝶鞍骨橋<br>
<strong>基因：</strong>PTCH1 tumor suppressor gene 突變（染色體 9q22.3），體染色體顯性遺傳
</div>
<h3>Lateral Periodontal Cyst</h3>
<ul class="n">
<li>發生於活性牙牙根側方（不是根尖）</li>
<li>常見：下顎前牙/前臼齒區</li>
<li>組織學：Glycogen-rich clear cells</li>
<li>治療：保守剜出；不復發</li>
<li>Botryoid OKC = 多房型 Lateral periodontal cyst，復發率較高</li>
</ul>

<details class="exam-block">
  <summary>📝 歷屆考古題精選（3 題）</summary>
  <div class="exam-list">
    <div class="exam-item">
      <p class="eq">Q1. 下顎後牙區病灶「沿顎骨前後向生長但極少造成皮質骨膨脹」，最可能診斷？其上皮有何病理特徵？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea"><strong>齒源性角化囊腫（OKC）</strong>。上皮薄（6–8層）、表面 Parakeratinized，基底層細胞核呈<strong>柵欄狀排列（Palisading）</strong>。<br>與造釉細胞瘤的鑑別：OKC 初期不膨脹皮質骨。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q2. 年輕患者全景片顯示顎骨多發性 OKC + 大腦鐮鈣化 + 肋骨分叉，為何種症候群？國考常混淆的顏面特徵？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea"><strong>Gorlin syndrome（痣樣基底細胞癌症候群）</strong>。國考陷阱：顏面特徵是「<strong>眼距過寬（Hypertelorism）</strong>」，選項常故意寫成「眼距過小」。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q3. 巨大含齒囊腫有病理性骨折或下齒槽神經損傷風險，正確的外科決策為何？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">先施行<strong>造袋術 / 減壓術（Marsupialization / Decompression）</strong>，待囊腫縮小骨質再生後，再進行剜出術（Enucleation）。</p></details>
    </div>
  </div>
</details>
`
    },
    {
      label:"非齒源性囊腫", freq:"high",
      content:`
<h3>Nasopalatine Duct Cyst（鼻顎管囊腫）</h3>
<table>
<tr><th>項目</th><th>內容</th></tr>
<tr><td class="td-k">發生率</td><td class="td-r">最常見的非齒源性囊腫</td></tr>
<tr><td class="td-k">位置</td><td>上顎前牙中央，切牙管（Incisive canal）殘留上皮</td></tr>
<tr><td class="td-k">X 光</td><td class="td-r">心形（Heart-shaped）或橢圓形透亮影於正中線<br>⚠️ 與正常切牙孔鑑別：病灶>6 mm 才診斷為囊腫</td></tr>
<tr><td class="td-k">臨床</td><td>多無症狀；大時可造成前牙移位或腭部腫脹</td></tr>
<tr><td class="td-k">治療</td><td>手術剜出；預後佳</td></tr>
</table>

<h3>Nasolabial Cyst（鼻唇囊腫）</h3>
<ul class="n">
<li>位於上唇皮下，鼻翼基部（鼻唇溝）</li>
<li>X 光無骨骼變化（軟組織囊腫）</li>
<li>臨床：上唇局部隆起，偶爾影響鼻孔</li>
</ul>

<h3>Traumatic Bone Cavity（Simple Bone Cyst / Solitary Bone Cyst）</h3>
<ul class="n">
<li class="td-r">⚠️ 不是真正的囊腫！腔內無上皮內壁，內含空氣或血清</li>
<li>好發：青少年下顎體部</li>
<li>X 光：透亮影，邊界呈「扇形波浪狀（Scalloping）」</li>
<li>治療：手術打開 → 誘發出血 → 血塊填充 → 自然癒合（治療即診斷）</li>
</ul>

<h3>Aneurysmal Bone Cyst</h3>
<ul class="n">
<li>充滿血液的多房病灶</li>
<li>X 光：肥皂泡狀（但為非齒源性），骨皮質膨脹</li>
<li>需與 Ameloblastoma 鑑別（組織學區分）</li>
</ul>

<h3>Globulomaxillary Cyst</h3>
<ul class="n">
<li>位於上顎側門齒與犬齒之間</li>
<li>X 光：<span class="td-r">梨形（Pear-shaped）透亮影</span></li>
<li>現認為非獨立疾病，多為其他囊腫（Radicular / Lateral periodontal）延伸</li>
</ul>
`
    },
    {
      label:"良性腫瘤詳解", freq:"critical",
      content:`
<div class="box box-red">⚠️ 極高頻！Ameloblastoma 手術選擇、AOT 的 2/3 rule、CEOT Buzzword 必考。</div>
<h3>Ameloblastoma（造釉細胞瘤）</h3>
<div class="box box-red">⚠️ 最常考的良性顎骨腫瘤！手術方式選擇 + Soap bubble X光 + 復發率是必考核心</div>

<div class="box box-blue">
<strong>建立概念：</strong>Ameloblastoma 雖然是「良性」，但它的行為接近惡性——它沒有包膜、會向周圍骨頭浸潤、復發率極高。所以<strong>治療必須切除一定的安全邊界</strong>，不能只是把它「挖出來」。
</div>

<table>
<tr><th>項目</th><th>內容</th></tr>
<tr><td class="td-k">發生率</td><td class="td-r">最常見的「有臨床意義」的良性顎骨腫瘤（Odontoma雖然更常見，但無侵犯性）</td></tr>
<tr><td class="td-k">好發位置</td><td class="td-r">下顎（80%），尤其後牙區→上升支（Molar-ramus region）；20–40歲多見</td></tr>
<tr><td class="td-k">X 光特徵</td><td class="td-r">多房：<strong>Soap bubble（皂泡狀）</strong>分房大 / <strong>Honeycomb（蜂窩狀）</strong>分房小<br>→ 會造成骨皮質膨脹（頰舌側）<br>→ 常見鄰近牙根<strong>吸收（Root resorption）</strong><br>→ 皮質骨可能穿孔</td></tr>
<tr><td class="td-k">類型</td><td>① Multicystic（最常見、最具侵犯性）<br>② Unicystic（預後較好，但壁內型仍須廣泛切除）<br>③ Peripheral（只在牙齦軟組織）<br>④ Desmoplastic（纖維化型，好發上顎前牙）</td></tr>
<tr><td class="td-k">治療原則</td><td class="td-r">⚠️ <strong>絕對禁止只做剜出術！</strong>（復發率 55–100%）<br>• Multicystic：<strong>Marginal resection（邊緣切除）</strong>或 Segmental resection，安全邊界至少 <strong>1 cm</strong><br>• Unicystic Luminal/Intraluminal 型：可做剜出術，但需密切追蹤<br>• Unicystic Mural 型：已侵犯囊壁 → 比照 Multicystic 廣泛切除</td></tr>
<tr><td class="td-k">復發率</td><td class="td-r">剜出術：55–100% ｜ 廣泛切除：&lt;15%</td></tr>
</table>
</details>
`
    },
    {
      label:"惡性與骨骼病灶", freq:"critical",
      content:`
<div class="box box-red">⚠️ Buzzword 配對題每年必考 4–6 題。看到關鍵字直接選答案！</div>
<table>
<tr><th>病灶</th><th>X光關鍵字（Buzzword）</th><th>其他特徵/考點</th></tr>
<tr>
  <td class="td-k">Osteosarcoma<br>骨肉瘤</td>
  <td class="td-r">Sun-ray / Sun-burst<br>（陽光放射狀骨刺）</td>
  <td>早期：PDL（牙周膜間隙）<strong>對稱性增寬</strong><br>最常見惡性骨腫瘤；下顎好發；30–40歲<br>鹼性磷酸酶（ALP）升高</td>
</tr>
<tr>
  <td class="td-k">Multiple Myeloma<br>多發性骨髓瘤</td>
  <td class="td-r">Punched-out lesions<br>（打洞狀，無硬化邊界）</td>
  <td>全身多發；老年男性多見<br>尿液 Bence Jones protein (+)<br>血液 M-protein（Monoclonal protein）<br>高鈣血症；貧血；腎功能異常</td>
</tr>
<tr>
  <td class="td-k">Paget's Disease<br>骨之柏哲德氏病</td>
  <td class="td-r">Cotton-wool appearance<br>（羊毛棉花狀，混合透亮不透亮）</td>
  <td>老年人；顎骨逐漸膨大<br>ALP 大幅升高（最顯著指標）<br>義齒患者：假牙逐漸不合<br>Osteosarcoma 惡化風險 1%</td>
</tr>
<tr>
  <td class="td-k">Fibrous Dysplasia<br>纖維性發育不良</td>
  <td class="td-r">Ground-glass appearance<br>（毛玻璃狀，均一密度）</td>
  <td>骨小樑被纖維組織取代<br>邊界不清（無硬化邊界）<br>Monostotic（單骨）/ Polyostotic<br>McCune-Albright syndrome：多骨 + 皮膚咖啡牛奶斑 + 性早熟<br>青春期後趨於穩定</td>
</tr>
<tr>
  <td class="td-k">Garre's Osteomyelitis<br>增殖性骨膜炎</td>
  <td class="td-r">Onion-skin / Onion-peel<br>（洋蔥皮狀，分層骨膜新生）</td>
  <td>兒童多見；下顎體部<br>與慢性牙源性感染（磨牙齲齒）相關<br>骨皮質外側骨膜增生形成新骨</td>
</tr>
<tr>
  <td class="td-k">Metastatic Carcinoma<br>轉移癌</td>
  <td class="td-r">Moth-eaten appearance<br>（蟲蛀狀，不規則破壞）</td>
  <td>女性最常見原發：<strong>乳癌</strong><br>男性最常見原發：<strong>肺癌</strong><br>下顎多於上顎；常造成 Numb chin syndrome（頦神經麻木）</td>
</tr>
<tr>
  <td class="td-k">Chronic Osteomyelitis<br>慢性骨髓炎</td>
  <td>Orange peel / Granular（顆粒狀）<br>或 Moth-eaten（蟲蛀）</td>
  <td>死骨（Sequestrum）+ 新生骨（Involucrum）<br>最常見原因：牙源性感染</td>
</tr>
<tr>
  <td class="td-k">Hyperparathyroidism<br>副甲狀腺功能亢進</td>
  <td>Stepladder / Loss of lamina dura<br>（失去牙板緻密線）</td>
  <td>Brown tumor（巨細胞病灶）<br>高鈣血症；低磷血症；ALP 升高<br>牙周膜間隙可增寬</td>
</tr>
</table>
<h3>Oral Squamous Cell Carcinoma（口腔鱗狀細胞癌）</h3>
<ul class="n">
<li class="td-r">最常見的口腔惡性腫瘤（佔口腔癌 90%）</li>
<li>最好發位置：舌側緣（Lateral border of tongue）</li>
<li>台灣特殊：頰黏膜癌（與嚼檳榔高度相關）</li>
<li>危險因子：菸、酒、檳榔（3 合 1 風險極高）</li>
<li>早期：無痛性潰瘍或白斑（Leukoplakia）</li>
<li>分期：TNM（T=腫瘤大小、N=淋巴轉移、M=遠端轉移）</li>
<li>治療：手術 + 放射線治療 ± 化療</li>
</ul>

<details class="exam-block">
  <summary>📝 歷屆考古題精選（3 題）</summary>
  <div class="exam-list">
    <div class="exam-item">
      <p class="eq">Q1. 15 歲青少年，單側上顎骨無痛緩慢膨大，X 光呈「毛玻璃狀（Ground-glass）」不透性且邊界不清，最可能診斷？手術時機？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea"><strong>纖維性發育不良（Fibrous dysplasia）</strong>。因青春期後病灶通常停止生長，手術應<strong>延遲至骨骼發育停止（成年後）</strong>再進行，以防止復發。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q2. 老年男性假牙突然變緊，X 光呈「棉花狀（Cotton-wool）」骨硬化 + 牙骨質增生（Hypercementosis），哪項抽血指標異常極高？後期有何惡性風險？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea"><strong>血清鹼性磷酸酶（Alkaline phosphatase）</strong>極高。後期有 5–15% 機率惡化為<strong>骨肉瘤（Osteosarcoma）</strong>。此為 Paget's disease 的必考組合。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q3. 單一牙齒周圍出現深且不規則「蟲蛀狀（Moth-eaten）」骨破壞，拔牙後傷口不癒合反而擴大，最應懷疑何診斷？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea"><strong>口腔鱗狀細胞癌（OSCC）侵犯顎骨</strong>。早期極易誤判為牙周炎；關鍵警訊：<strong>缺乏周邊骨硬化（Sclerosis）反應 + 拔牙後傷口不癒合</strong>。</p></details>
    </div>
  </div>
</details>
`
    },
    {
      label:"手術選擇原則", freq:"high",
      content:`
<h3>保守 vs 廣泛手術選擇</h3>
<table>
<tr><th>手術方式</th><th>說明</th><th>適用病灶</th></tr>
<tr><td class="td-k">Enucleation（剜出術）</td><td>完整摘除囊腫或腫瘤</td><td class="td-g">Radicular cyst, Dentigerous cyst, AOT, Odontoma, Unicystic ameloblastoma</td></tr>
<tr><td class="td-k">Marsupialization（造袋術）</td><td>切開囊腫，縫合至口腔黏膜 → 減壓 → 縮小 → 再剜出</td><td>大型囊腫（OKC、Dentigerous），怕骨折或靠近重要結構時</td></tr>
<tr><td class="td-k">Curettage（刮除術）</td><td>刮除病灶及周邊骨壁</td><td>CGCG；部分囊腫</td></tr>
<tr><td class="td-k">Marginal / Peripheral resection（邊緣切除）</td><td>切除腫瘤 + 安全邊界骨質，保留下顎骨連續性</td><td class="td-r">Multicystic ameloblastoma（小型）、Myxoma、CEOT</td></tr>
<tr><td class="td-k">Segmental resection（部分切除）</td><td>切除一段顎骨（下顎骨不連續）</td><td class="td-r">Multicystic ameloblastoma（大型）、惡性腫瘤</td></tr>
<tr><td class="td-k">Hemimandibulectomy（半下顎切除）</td><td>切除半邊下顎骨</td><td>大範圍惡性腫瘤</td></tr>
</table>

<div class="box box-red">
<strong>⚠️ 絕對不可只做 Enucleation 的病灶：</strong><br>
• Multicystic Ameloblastoma（復發率 50–90%）<br>
• Odontogenic Myxoma（無包膜，浸潤性強）<br>
• OKC（必須加 Carnoy's solution 或廣泛切除）
</div>

<h3>頸部淋巴廓清術（Neck Dissection）</h3>
<table>
<tr><th>術式</th><th>切除結構</th><th>保留結構</th></tr>
<tr><td class="td-k">Radical（RND）</td><td class="td-r">SCM + IJV + CN XI（副神經）+ 淋巴</td><td>無</td></tr>
<tr><td class="td-k">Modified Radical（MRND）</td><td>淋巴 + （SCM/IJV/CN XI 其中1–3個）</td><td>保留1–3個以上結構</td></tr>
<tr><td class="td-k">Selective（SND）</td><td>指定淋巴節群</td><td class="td-g">SCM + IJV + CN XI 全保留</td></tr>
<tr><td class="td-k">Extended RND</td><td>RND + 額外結構（頸動脈、椎旁肌等）</td><td>無</td></tr>
</table>
<div class="box box-blue">CN XI（副神經/Spinal accessory nerve）支配斜方肌 → 切除後 → 肩膀下垂、無法外展上臂</div>
`
    }
  ]
},
{
  label:"🦷 拔牙與口腔外科手術", freq:"high",
  children:[
    {
      label:"拔牙適應症與禁忌症", freq:"high",
      content:`
<h3>拔牙適應症</h3>
<ul class="n">
<li>嚴重齲齒，無法修復</li>
<li>嚴重牙周病（骨喪失>75%）</li>
<li>阻生牙造成反覆感染、囊腫、鄰牙吸收</li>
<li>矯正需要（拔牙空間）</li>
<li>骨折線上的牙齒（影響癒合）</li>
<li>放射線治療前評估（照射區域的預後差牙）</li>
<li>多生牙、殘根</li>
</ul>

<h3>絕對禁忌症（Absolute Contraindications）</h3>
<ul class="n">
<li class="td-r">近期心肌梗塞（&lt;6個月）</li>
<li class="td-r">未控制心絞痛（Unstable angina）</li>
<li class="td-r">嚴重未控制出血性疾病（INR>3.5）</li>
<li class="td-r">近期放射線治療顎骨（骨壞死風險）</li>
</ul>

<h3>相對禁忌症（需評估風險）</h3>
<ul class="n">
<li>未控制糖尿病（HbA1c>9%）</li>
<li>服用雙磷酸鹽藥物（MRONJ 風險）</li>
<li>懷孕（第一及第三孕期相對禁忌）</li>
<li>正在化療（白血球低下→感染風險）</li>
<li>高血壓未控制（BP>180/110）</li>
</ul>

<h3>放射線治療後骨壞死（ORN）</h3>
<div class="box box-orange">
放射線治療後 → 骨血管受損 → 拔牙後傷口不癒合 → Osteoradionecrosis（ORN）<br>
<strong>一般建議放射治療結束後等待 6–12 個月再拔牙</strong><br>
若必須拔牙：高壓氧治療（HBO）輔助、謹慎手術
</div>
`
    },
    {
      label:"抗凝血劑與抗血小板藥物", freq:"critical",
      content:`
<div class="box box-red">⚠️ 極高頻！歷屆考題常以「應停藥幾天」出題，答案往往和直覺相反！</div>

<h3>Warfarin（傳統抗凝血劑）</h3>
<table>
<tr><th>INR 值</th><th>處置</th></tr>
<tr><td class="td-k">INR ≤ 3.0</td><td class="td-g">✅ <strong>不需停藥</strong>，配合局部止血措施即可直接拔牙</td></tr>
<tr><td class="td-k">INR 3.0–3.5</td><td>部分指引仍可接受，視術式而定</td></tr>
<tr><td class="td-k">INR > 3.0（高風險術式）</td><td class="td-r">與內科醫師討論，必要時術前 2 天停藥，每日監測，降至安全值後手術，<strong>術後當天即可恢復用藥</strong></td></tr>
</table>
<div class="box box-red">🚨 國考陷阱：「拔牙前應停用 Warfarin 2–3 天並測 PT 值」→ <strong>錯誤！</strong>一般拔牙不需例行停藥</div>

<h3>NOACs / DOACs（新型口服抗凝血劑）</h3>
<div class="box box-blue">包含：Dabigatran（直接凝血酶抑制劑）、Rivaroxaban / Apixaban（Xa因子抑制劑）</div>
<table>
<tr><th>手術風險</th><th>停藥時機</th></tr>
<tr><td class="td-k">常規拔牙（低風險）</td><td class="td-g">✅ <strong>不需停藥</strong>，配合局部止血即可</td></tr>
<tr><td class="td-k">低風險手術</td><td>停藥 24 小時</td></tr>
<tr><td class="td-k">高風險手術</td><td class="td-r">停藥 48 小時</td></tr>
</table>
<ul class="n"><li>半衰期短（4–12小時），效果可預期，<strong>不需監測 INR</strong></li></ul>

<h3>抗血小板藥物</h3>
<table>
<tr><th>藥物</th><th>常規拔牙</th><th>大型手術</th></tr>
<tr><td class="td-k">Aspirin（低劑量預防用）</td><td class="td-g">✅ <strong>不需停藥</strong></td><td>通常不停</td></tr>
<tr><td class="td-k">Clopidogrel（Plavix）</td><td class="td-g">✅ 不需停藥</td><td class="td-r">術前停藥 <strong>5 天</strong></td></tr>
</table>
<div class="box box-red">🚨 國考陷阱（105年）：「冠狀動脈繞道術後每天服 Aspirin 拔牙需停藥 5 天」→ <strong>錯誤！</strong>低劑量 Aspirin 不需停藥</div>

<h3>局部止血措施（未停藥時必備）</h3>
<table>
<tr><th>方法</th><th>細節</th></tr>
<tr><td class="td-k">壓迫止血</td><td>濕紗布咬 30–60 分鐘；濕茶包（茶葉單寧酸 = 局部血管收縮）</td></tr>
<tr><td class="td-k">填塞材料</td><td>Gelfoam（吸收性明膠海綿）＋ Topical thrombin；Surgicel（氧化纖維素）；微纖維膠原蛋白</td></tr>
<tr><td class="td-k">縫合</td><td>八字縫合法（Figure-of-eight suture）固定血塊</td></tr>
<tr><td class="td-k">漱口藥</td><td>Tranexamic acid 局部漱口，防止血塊過早溶解</td></tr>
</table>
<div class="box box-red">🚨 <strong>術後止痛：絕對禁用 NSAIDs（Ibuprofen）！</strong>會抑制血小板 → 延長出血。改用 <strong>Acetaminophen（普拿疼）</strong></div>
`,
    },
    {
      label:"IE 預防性抗生素", freq:"critical",
      content:`
<div class="box box-red">⚠️ 極高頻！哪些心臟病需要、哪些手術需要、Amoxicillin 劑量，每年必考！</div>

<h3>哪些心臟病患者需要 IE Prophylaxis？</h3>
<div class="box box-blue">只有「最高風險」患者才需要！（AHA 2007 指引）</div>
<ul class="n">
<li class="td-r">① <strong>人工心臟瓣膜</strong>（Prosthetic cardiac valve）</li>
<li class="td-r">② <strong>曾有 IE 病史</strong>（Previous infective endocarditis）</li>
<li class="td-r">③ <strong>特定先天性心臟病（CHD）</strong>：未修補的發紺性 CHD；術後 6 個月內以人工材料修補的 CHD；修補後鄰近仍有缺損者</li>
<li class="td-r">④ <strong>心臟移植後出現瓣膜病變</strong></li>
</ul>
<div class="box box-orange">🚫 以下<strong>不需要</strong>預防性抗生素（常考陷阱）：冠狀動脈繞道手術（CABG）、裝置心律調節器（Pacemaker）、單純室間隔缺損、風濕性心臟病（無瓣膜功能異常）</div>

<h3>哪些牙科手術需要投藥？</h3>
<table>
<tr><th>需要 ✅</th><th>不需要 🚫</th></tr>
<tr>
<td class="td-r">操作牙齦組織（牙周手術）<br>操作根尖區域（根管清創）<br>穿透口腔黏膜的手術<br>牙周韌帶麻醉（PDL injection）</td>
<td>常規局部麻醉（未感染組織）<br>拍攝 X 光片<br>放置活動假牙/矯正器<br>乳牙自然脫落<br>全口印模、假牙試戴</td>
</tr>
</table>

<h3>藥物選擇與劑量（必背！）</h3>
<table>
<tr><th>狀況</th><th>藥物</th><th>成人劑量</th><th>時機</th></tr>
<tr><td class="td-k">無青黴素過敏</td><td class="td-r"><strong>Amoxicillin</strong></td><td class="td-r"><strong>2 g</strong> PO</td><td rowspan="4">術前 <strong>30–60 分鐘</strong>給予單一劑量</td></tr>
<tr><td class="td-k">無法口服</td><td>Ampicillin 或 Cefazolin/Ceftriaxone</td><td>2 g IV/IM 或 1 g IV/IM</td></tr>
<tr><td class="td-k">青黴素過敏</td><td class="td-r"><strong>Clindamycin</strong></td><td class="td-r"><strong>600 mg</strong> PO</td></tr>
<tr><td class="td-k">青黴素過敏（其他選項）</td><td>Azithromycin / Clarithromycin<br>Cephalexin（非嚴重過敏）</td><td>500 mg PO<br>2 g PO</td></tr>
</table>
<div class="pearl">若術前忘記投藥 → 可於術後 <strong>2–4 小時內補給</strong>，仍有效</div>
`,
    },
    {
      label:"器械與物理原理", freq:"high",
      content:`
<div class="box box-blue">⚠️ 物理原理是常考送分題，背熟！</div>
<h3>拔牙鉗（Forceps）</h3>
<ul class="n">
<li class="td-r">物理原理：<strong>楔型（Wedge）+ 輪軸（Wheel and axle）</strong></li>
<li>楔型：鉗喙楔入牙槽骨與牙齒間 → 擴張牙槽骨</li>
<li>輪軸：以手柄為輪、鉗喙為軸 → 旋轉牙齒</li>
<li>握持原則：鉗喙盡量貼緊根面，至少到 CEJ 以下</li>
</ul>

<h3>牙挺（Elevator）</h3>
<ul class="n">
<li class="td-r">物理原理：<strong>槓桿（Lever）+ 輪軸（Wheel and axle）</strong></li>
<li>槓桿：以牙槽骨或鄰牙為支點（Fulcrum）</li>
<li>⚠️ 不可以鄰牙為支點（會損傷鄰牙）</li>
<li>常用型：Straight elevator, Cryer elevator（分叉根）, Apical elevator（根尖）</li>
</ul>

<h3>拔牙動作原則</h3>
<ul class="n">
<li>擴張（Luxation）：左右搖動擴大牙槽窩</li>
<li>旋轉（Rotation）：圓錐形根牙齒（上顎單根牙）</li>
<li>牽引（Traction/Delivery）：脫位後沿牙根軸方向取出</li>
<li>上顎牙：通常向頰側外擴（頰骨較薄）</li>
<li>下顎牙：向頰舌側交替搖動</li>
</ul>

<details class="exam-block">
  <summary>📝 歷屆考古題精選（3 題）</summary>
  <div class="exam-list">
    <div class="exam-item">
      <p class="eq">Q1. 長期服用 Warfarin 的患者，術前 INR 為 2.8，進行常規拔牙是否需要停藥？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea"><strong>不需要停藥。</strong>國考絕對陷阱：INR ≤ 3.0 可直接拔牙，配合局部止血措施即可。<strong>絕對不需例行性停藥 2–3 天！</strong></p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q2. 長期服用低劑量 Aspirin 預防心血管疾病的患者，一般門診拔牙前需停藥幾天？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea"><strong>不需要停藥。</strong>臨床指引強烈不建議停用 Aspirin，以避免引發致命性心血管血栓。「術前停藥 5 天」是最常出現的陷阱選項。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q3. 服用 NOACs（Rivaroxaban、Dabigatran）的患者進行常規拔牙前，需要抽血監測 INR 嗎？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea"><strong>不需要監測 INR。</strong>NOACs 的抗凝效果無法用 INR 評估。常規小範圍牙科手術通常<strong>不需停藥也不需例行抽血</strong>。近年高頻新藥觀念題。</p></details>
    </div>
  </div>
</details>

<details class="exam-block">
  <summary>📝 歷屆考古題精選（3 題）</summary>
  <div class="exam-list">
    <div class="exam-item">
      <p class="eq">Q1. CABG（冠狀動脈繞道手術）後患者、裝置心律調節器（Pacemaker）患者、人工心臟瓣膜患者，三者中哪些在拔牙前需要 IE 預防性抗生素？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">只有<strong>人工心臟瓣膜（Prosthetic heart valve）</strong>患者需要。CABG 術後與裝置心律調節器均<strong>不需要</strong>預防性抗生素，為最常考的陷阱選項。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q2. 需要 IE 預防的患者若對 Penicillin 過敏，首選替代口服藥物為何？成人術前單次劑量？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">首選 <strong>Clindamycin</strong>，成人術前單次口服劑量 <strong>600 mg</strong>。陷阱：選項常故意寫成 300 mg 或 900 mg。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q3. 若術前忘記投予 IE 預防抗生素，最遲在術後幾小時內可補給？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">最遲應於術後 <strong>2–4 小時內</strong>補給標準劑量。<strong>注意</strong>：部分教材與 AHA 指引寫法略有差異（2 小時 vs 4 小時），兩個數字都要記。</p></details>
    </div>
  </div>
</details>
`
    },
    {
      label:"阻生智齒分類", freq:"high",
      content:`
<h3>Winter's Classification（依傾斜角度）</h3>
<table>
<tr><th>分類</th><th>方向</th><th>難度</th><th>頻率</th></tr>
<tr><td class="td-k">Mesioangular</td><td>向近心傾斜</td><td class="td-g">最容易</td><td class="td-r">最常見（約43%）</td></tr>
<tr><td class="td-k">Horizontal</td><td>水平</td><td>困難</td><td>第二常見（約3%）</td></tr>
<tr><td class="td-k">Vertical</td><td>垂直（阻生）</td><td>中等</td><td>常見</td></tr>
<tr><td class="td-k">Distoangular</td><td>向遠心傾斜</td><td class="td-r">最困難！（需要骨頭移除最多）</td><td>較少</td></tr>
<tr><td class="td-k">Transverse / Inverted</td><td>橫向或倒置</td><td>最複雜</td><td>罕見</td></tr>
</table>

<h3>Pell & Gregory Classification（依與升支和深度關係）</h3>
<table>
<tr><th>分類</th><th>定義</th></tr>
<tr><td class="td-k">Class I</td><td>智齒近心面在第二大臼齒遠心面前方（齒槽骨與升支間有足夠空間）</td></tr>
<tr><td class="td-k">Class II</td><td>智齒部分被升支覆蓋</td></tr>
<tr><td class="td-k">Class III</td><td>智齒完全在升支內（最難移除）</td></tr>
<tr><td class="td-k">Position A</td><td>智齒咬合面與第二大臼齒咬合面同高（或以上）</td></tr>
<tr><td class="td-k">Position B</td><td>智齒咬合面在第二大臼齒 CEJ 與咬合面之間</td></tr>
<tr><td class="td-k">Position C</td><td>智齒咬合面在第二大臼齒 CEJ 以下（最深，最難）</td></tr>
</table>
<div class="box box-blue">難度最高組合：<strong>Class III + Position C + Distoangular</strong></div>

<h3>阻生智齒的手術適應症</h3>
<ul class="n">
<li>反覆性冠周炎（Pericoronitis）</li>
<li>相關囊腫（Dentigerous cyst）或腫瘤</li>
<li>鄰牙根吸收</li>
<li>矯正需要</li>
<li>疼痛無法緩解</li>
</ul>

<h3>冠周炎（Pericoronitis）</h3>
<ul class="n">
<li>定義：部分萌出牙冠周圍軟組織感染（Operculum 下方）</li>
<li class="td-r">急性期不可立即拔牙 → 先抗生素 + 沖洗 → 感染控制後再拔</li>
<li>可能蔓延至 Masticator space → 開口受限（Trismus）</li>
</ul>
`
    },
    {
      label:"術後併發症", freq:"high",
      content:`
<h3>乾性齒槽炎（Dry Socket / Alveolar Osteitis）</h3>
<table>
<tr><th>項目</th><th>內容</th></tr>
<tr><td class="td-k">發生時間</td><td>拔牙後 2–4 天</td></tr>
<tr><td class="td-k">機轉</td><td>纖維蛋白溶解（Fibrinolysis）過度 → 血塊溶解 → 骨頭暴露 → 劇烈疼痛（放射至耳朵）</td></tr>
<tr><td class="td-k">最大危險因子</td><td class="td-r">吸菸（尼古丁→血管收縮→影響血塊形成）</td></tr>
<tr><td class="td-k">其他危險因子</td><td>口服避孕藥（OCP）、下顎磨牙、困難拔牙、細菌感染、用吸管喝水（負壓）</td></tr>
<tr><td class="td-k">處置</td><td class="td-r">⚠️ 絕對禁止刮除術（Curettage）！<br>✅ 溫生理食鹽水沖洗 + 含丁香油鎮痛敷料（Alvogyl、ZnOE）<br>3–5 天換藥一次；止痛藥</td></tr>
<tr><td class="td-k">預防</td><td>戒菸 24–48 小時；輕柔拔牙；不要漱口太大力</td></tr>
</table>

<h3>上顎竇穿孔（Oroantral Communication, OAC）</h3>
<ul class="n">
<li>最常發生：上顎第一、二大臼齒拔牙（根尖靠近上顎竇底）</li>
<li>診斷：Valsalva test（捏鼻吹氣）→ 空氣從拔牙窩漏出</li>
<li>處置：
  <ul class="n">
  <li>&lt;2 mm：通常自行癒合</li>
  <li>2–5 mm：縫合 + 抗生素</li>
  <li class="td-r">&gt;5 mm：手術修補（Buccal advancement flap 或 Buccal fat pad flap）</li>
  </ul>
</li>
<li>術後注意：不擤鼻涕、不用吸管、避免打噴嚏閉口</li>
</ul>

<h3>神經損傷</h3>
<ul class="n">
<li>最常見：Inferior alveolar nerve（IAN）→ 下唇麻木</li>
<li>Lingual nerve → 舌頭麻木（下顎智齒拔除常見）</li>
<li class="td-r">多數（80–90%）在 6 個月內自行恢復</li>
<li>預後分類：Neuropraxia（最輕，完全恢復）→ Axonotmesis → Neurotmesis（最重，可能永久）</li>
</ul>

<h3>拔牙後出血</h3>
<ul class="n">
<li>局部原因：不完整去除肉芽組織、殘留感染、血塊被破壞</li>
<li>全身原因：凝血疾病、抗凝血藥物、白血病</li>
<li>處置：局部壓迫（紗布咬 30–45 分鐘）→ 縫合 → 明膠海綿（Gelfoam）</li>
</ul>
`
    }
  ]
},
{
  label:"🩹 傷口癒合", freq:"high",
  children:[
    {
      label:"癒合四階段詳解", freq:"high",
      content:`
<h3>傷口癒合四階段</h3>
<table>
<tr><th>階段</th><th>時間</th><th>主角細胞/事件</th><th>關鍵考點</th></tr>
<tr>
  <td class="td-k">止血期<br>Hemostasis</td>
  <td>立即→數分鐘</td>
  <td>血管收縮（vasoconstriction）→ 血小板黏附→聚集→凝血瀑布→血塊（Fibrin clot）</td>
  <td>受傷後<strong>先收縮再擴張</strong>；血小板分泌 PDGF、TGF-β 召喚修復細胞</td>
</tr>
<tr>
  <td class="td-k">發炎期<br>Inflammatory</td>
  <td>0–5 天</td>
  <td>嗜中性白血球（Neutrophils）最先（24–48h）→ 巨噬細胞（Macrophages，3–5天）→ 清除細菌和壞死組織</td>
  <td class="td-r">嗜中性球<strong>最早到</strong>；巨噬細胞是「修復指揮官」—分泌 Growth factors；無巨噬細胞→癒合嚴重受阻</td>
</tr>
<tr>
  <td class="td-k">纖維組織增生期<br>Fibroplastic/<br>Proliferative</td>
  <td>3天–3週</td>
  <td>纖維母細胞（Fibroblasts）增生→合成 Type III 膠原→後期轉換為 Type I<br>血管新生（Angiogenesis）→肉芽組織（Granulation tissue）</td>
  <td class="td-r">此期結束時傷口強度達 <strong>70–80%</strong>；<br>Type III 膠原（早期，紅色 Masson's trichrome）→ Type I（成熟，較強）</td>
</tr>
<tr>
  <td class="td-k">重塑期<br>Remodeling/<br>Maturation</td>
  <td>3週–1年以上</td>
  <td>Type III → Type I 膠原再組織；膠原纖維交叉連結（Cross-linking）增加強度</td>
  <td>最終強度達原本 <strong>80%</strong>（<strong>永遠無法恢復 100%</strong>）；無彈性蛋白再生</td>
</tr>
</table>

<div class="box box-blue">
<strong>膠原蛋白口訣：</strong>早期 III（三）→ 成熟 I（一）<br>
「三歲小孩→長大變老大」= Type III 長大轉為 Type I
</div>

<h3>一期癒合 vs 二期癒合</h3>
<table>
<tr><th></th><th>一期癒合（Primary）</th><th>二期癒合（Secondary）</th></tr>
<tr><td>條件</td><td>傷口邊緣整齊、縫合閉合</td><td>傷口開放、無法縫合（感染、組織喪失）</td></tr>
<tr><td>時間</td><td>快（5–10天）</td><td>慢（數週）</td></tr>
<tr><td>疤痕</td><td>小</td><td>大</td></tr>
<tr><td>肉芽組織</td><td>少</td><td>大量（填補缺損）</td></tr>
</table>
`
    },
    {
      label:"影響傷口癒合的因素", freq:"mid",
      content:`
<h3>局部因素</h3>
<table>
<tr><th>因素</th><th>影響</th></tr>
<tr><td class="td-k">感染</td><td>最重要局部因素；細菌→持續發炎→延遲癒合</td></tr>
<tr><td class="td-k">血液供應</td><td>血流不足（放射治療損傷血管）→ 癒合差；ORN</td></tr>
<tr><td class="td-k">異物</td><td>縫線、骨碎片→持續異物反應</td></tr>
<tr><td class="td-k">張力</td><td>傷口張力過大→影響縫合癒合</td></tr>
<tr><td class="td-k">組織受損程度</td><td>挫裂傷比切割傷癒合慢</td></tr>
</table>

<h3>全身因素</h3>
<ul class="n">
<li class="td-r"><strong>糖尿病</strong>：高血糖→白血球功能↓→感染風險↑；微血管病變→血流↓</li>
<li class="td-r"><strong>類固醇</strong>：抑制發炎期（減少膠原合成）→ 癒合延遲</li>
<li><strong>營養不良</strong>：蛋白質（膠原合成需胺基酸）、維生素 C（羥化賴胺酸→膠原交叉連結）、Zinc（DNA合成）</li>
<li><strong>年齡</strong>：老年人癒合較慢（細胞再生能力↓）</li>
<li><strong>化療</strong>：抑制細胞分裂→纖維母細胞↓</li>
<li><strong>放射線治療</strong>：血管纖維化→局部缺氧</li>
<li><strong>吸菸</strong>：CO→組織缺氧；尼古丁→血管收縮</li>
</ul>
`
    }
  ]
},
{
  label:"💥 顏面外傷", freq:"high",
  children:[
    {
      label:"牙齒外傷 IADT 分類", freq:"high",
      content:`
<div class="box box-red">⚠️ 固定時間表幾乎每年考！數字一定要背熟。</div>
<h3>牙齒外傷分類與處置</h3>
<table>
<tr><th>外傷種類</th><th>定義</th><th>固定時間</th><th>固定方式</th><th>考點</th></tr>
<tr><td class="td-k">Infraction</td><td>釉質裂縫，無組織喪失</td><td>不需固定</td><td>—</td><td>可能造成遠期牙髓壞死，需追蹤</td></tr>
<tr><td class="td-k">Concussion（震盪）</td><td>牙周膜受傷，叩診敏感，無位移</td><td>不需 或 2週彈性</td><td>彈性</td><td>最輕微的牙齒外傷</td></tr>
<tr><td class="td-k">Subluxation（半脫位）</td><td>鬆動，無位移</td><td class="td-r">2週</td><td>彈性固定</td><td></td></tr>
<tr><td class="td-k">Lateral Luxation（側方脫位）</td><td>牙齒側方位移，牙槽骨骨折</td><td class="td-r">4週</td><td>彈性固定</td><td>需用器械復位</td></tr>
<tr><td class="td-k">Extrusive Luxation（拔出性脫位）</td><td>牙齒部分拔出（向冠方）</td><td class="td-r">2週</td><td>彈性固定</td><td>復位後固定</td></tr>
<tr><td class="td-k">Intrusive Luxation（壓入）</td><td>牙齒壓入牙槽骨</td><td class="td-r">4–8週</td><td>依處置</td><td class="td-r">最嚴重！牙髓壞死率高；可自然再萌（年輕）或正畸/手術（成人）</td></tr>
<tr><td class="td-k">Avulsion（完全脫出）</td><td>完全脫出牙槽窩</td><td class="td-r">2週</td><td>彈性固定</td><td>見下方詳解</td></tr>
<tr><td class="td-k">Root fracture—頸部1/3</td><td>CEJ附近斷裂</td><td class="td-r">4個月</td><td class="td-r">剛性固定（Rigid）</td><td>預後最差；常需拔除冠段</td></tr>
<tr><td class="td-k">Root fracture—中1/3</td><td>中間斷裂</td><td class="td-r">4週</td><td>彈性固定</td><td>預後較好</td></tr>
<tr><td class="td-k">Root fracture—根尖1/3</td><td>根尖斷裂</td><td>可不固定或2週</td><td>彈性</td><td>預後最好</td></tr>
<tr><td class="td-k">Alveolar fracture（齒槽骨骨折）</td><td>連帶齒槽骨斷裂</td><td class="td-r">4–6週</td><td>彈性固定</td><td></td></tr>
</table>

<h3>牙齒脫落（Avulsion）詳細處置</h3>
<div class="box box-orange">
<strong>保存介質優先順序（乾燥時間越短越好）：</strong><br>
最佳 → HBSS（Hank's balanced salt solution）> 牛奶（Milk）> 生理食鹽水 > 唾液（Saliva）> 水（最差）
</div>
<table>
<tr><th>情況</th><th>根尖狀態</th><th>處置</th><th>固定時間</th></tr>
<tr><td class="td-k">乾燥時間 &lt;60 分鐘</td><td>開放根尖（年輕）</td><td>植回、不做根管（可能再血管化）、Doxycycline 浸泡</td><td class="td-r">2週</td></tr>
<tr><td class="td-k">乾燥時間 &lt;60 分鐘</td><td>閉合根尖（成人）</td><td>植回、7–10天後根管治療</td><td class="td-r">2週</td></tr>
<tr><td class="td-k">乾燥時間 &gt;60 分鐘</td><td>任何</td><td>牙根處理（NaF 浸泡）、植回（預後差）</td><td class="td-r">4週</td></tr>
</table>
`
    },
    {
      label:"顏面骨折", freq:"high",
      content:`
<h3>Le Fort 骨折分類（必背）</h3>
<table>
<tr><th>分類</th><th>骨折線路徑</th><th>特徵</th><th>記憶法</th></tr>
<tr><td class="td-k">Le Fort I</td><td class="td-r">水平骨折，從梨狀孔底部橫跨至翼突</td><td>上顎牙弓（floating maxilla）可移動；顴骨固定</td><td>Level I = 最低</td></tr>
<tr><td class="td-k">Le Fort II</td><td class="td-r">錐狀骨折：鼻根 → 眶內側 → 眶底 → 顴上顎縫</td><td>中臉骨折；眼眶受累；眶下神經麻木</td><td>Level II = 中間（Pyramidal）</td></tr>
<tr><td class="td-k">Le Fort III</td><td class="td-r">顱顏分離：顴額縫 → 眶外側壁 → 眶底 → 鼻根</td><td>整個中臉與顱底分離；最嚴重；熊貓眼（Bilateral periorbital ecchymosis）</td><td>Level III = 最高（Total craniofacial separation）</td></tr>
</table>
<div class="box box-blue">所有 Le Fort 骨折共同特徵：<strong>PTM（Pterygomaxillary）分離</strong>（翼上顎連接斷裂）</div>
<h3>下顎骨折</h3>
<table>
<tr><th>部位</th><th>發生率</th><th>特點</th></tr>
<tr><td class="td-k">Condyle / Subcondylar（髁突/髁頸）</td><td class="td-r">最常見（約30–35%）</td><td>力量傳導造成間接骨折；牙關緊閉、患側偏移</td></tr>
<tr><td class="td-k">Body（下顎體）</td><td>約15–20%</td><td>常為直接撞擊</td></tr>
<tr><td class="td-k">Parasymphysis（副聯合部）</td><td>約15–20%</td><td>犬齒區域；常雙側（蝶形骨折）</td></tr>
<tr><td class="td-k">Angle（下顎角）</td><td>約25%</td><td>智齒未萌造成骨質缺損→薄弱點</td></tr>
<tr><td class="td-k">Symphysis（聯合部）</td><td>約7%</td><td>正中線</td></tr>
<tr><td class="td-k">Ramus（升支）</td><td>約3%</td><td>肌肉保護，較少</td></tr>
<tr><td class="td-k">Coronoid（冠突）</td><td>最少</td><td>顴骨弓保護</td></tr>
</table>
<h3>顴骨骨折（Zygomatic Fracture）</h3>
<ul class="n">
<li>Tripod fracture：顴額縫 + 顴上顎縫 + 顴弓 三點分離</li>
<li>症狀：眶下神經麻木（Paresthesia）、眼眶凹陷（Enophthalmos）、開口受限</li>
<li class="td-r">最佳顴弓X光：SMV（Submentovertex）</li>
</ul>

<h3>眼眶爆裂性骨折（Orbital Blow-out Fracture）</h3>
<ul class="n">
<li class="td-r">最常見：眶底（Orbital floor）骨折（最薄弱）</li>
<li>Inferior rectus 或 Inferior oblique 肌肉/脂肪 卡入骨折縫 → Entrapment</li>
<li>症狀：垂直複視（Diplopia，尤其往上看）、眼球下陷（Enophthalmos）</li>
<li>診斷：CT scan（最佳）；Waters' X光可見</li>
</ul>

<h3>唇顎裂修補時機（Rule of 10s）</h3>
<div class="num-grid">
<div class="num-card"><div class="big">10週</div><div class="sm">週齡<br>（唇裂修補）</div></div>
<div class="num-card"><div class="big">10磅</div><div class="sm">體重<br>（≈4.5 kg）</div></div>
<div class="num-card"><div class="big">10 g/dL</div><div class="sm">血紅素</div></div>
</div>
<ul class="n">
<li>唇裂修補（Cheiloplasty）：10週；技術：Millard rotation-advancement flap</li>
<li>顎裂修補（Palatoplasty）：12–18個月（語言發展前，避免代償性發音）</li>
<li>齒槽骨移植：8–10 歲（犬齒萌出前，混合牙列期）</li>
</ul>
`
    }
  ]
},
{
  label:"🦠 齒源性感染", freq:"high",
  children:[
    {
      label:"筋膜間隙解剖", freq:"high",
      content:`
<div class="box box-red">⚠️ Mylohyoid 肌是最重要的分界線！感染蔓延路徑必考！</div>
<h3>關鍵分界：Mylohyoid 肌（下顎舌骨肌）</h3>
<div class="box box-orange">
<strong>Mylohyoid 肌以上（上方）：</strong>Sublingual space（舌下間隙）<br>
<strong>Mylohyoid 肌以下（下方）：</strong>Submandibular space（下顎下間隙）<br><br>
下顎磨牙根尖位置決定感染哪個間隙：<br>
• 根尖在 Mylohyoid 上方 → Sublingual space<br>
• 根尖在 Mylohyoid 下方（多數磨牙）→ Submandibular space
</div>

<h3>主要筋膜間隙詳表</h3>
<table>
<tr><th>間隙</th><th>位置</th><th>主要感染來源</th><th>臨床表現</th><th>危險</th></tr>
<tr><td class="td-k">Sublingual<br>舌下</td><td>Mylohyoid 上方、舌頭下</td><td>下顎前牙、前臼齒</td><td>舌下腫脹、舌頭上抬</td><td>氣道壓迫</td></tr>
<tr><td class="td-k">Submandibular<br>下顎下</td><td>Mylohyoid 下方</td><td class="td-r">下顎磨牙（最常見感染間隙）</td><td>下顎下腫脹、皮膚紅腫硬化</td><td>可蔓延至頸部</td></tr>
<tr><td class="td-k">Submental<br>頦下</td><td>兩側 Anterior belly of digastric 之間</td><td>下顎前牙</td><td>頦部腫脹</td><td>可向下蔓延</td></tr>
<tr><td class="td-k">Masticator<br>咀嚼</td><td>含 Masseter、翼內肌、下顎升支</td><td>下顎磨牙、智齒</td><td class="td-r">開口受限（Trismus）、咬合痛</td><td>可延伸至 Parapharyngeal</td></tr>
<tr><td class="td-k">Parapharyngeal<br>咽旁</td><td>翼內肌內側、咽部外側</td><td>Masticator 間隙延伸</td><td>咽喉腫痛、吞嚥困難</td><td class="td-r">可延伸至 Retropharyngeal → 縱膈炎</td></tr>
<tr><td class="td-k">Retropharyngeal<br>咽後「危險間隙」</td><td>咽後壁後方</td><td>Parapharyngeal 延伸</td><td>頸項僵硬、吞嚥困難</td><td class="td-r">⚠️ 直通後縱膈！→ Mediastinitis（致命）</td></tr>
<tr><td class="td-k">Canine<br>犬齒</td><td>上唇提肌下方</td><td>上顎犬齒（根最長）</td><td>眼眶下腫脹（消除鼻唇溝）</td><td>延伸至眼眶→海綿竇血栓</td></tr>
<tr><td class="td-k">Buccal<br>頰</td><td>頰肌外側、皮下</td><td>上下顎磨牙前臼齒</td><td>臉頰腫脹</td><td>相對局限</td></tr>
</table>

<h3>感染蔓延路徑（考試最愛）</h3>
<div class="box box-orange">
牙源性感染 → Submandibular/Sublingual/Masticator → <strong>Parapharyngeal</strong> → <strong>Retropharyngeal</strong> → <strong>縱膈腔（Mediastinum）</strong> → 死亡！
</div>
`
    },
    {
      label:"Ludwig's Angina & 感染處置", freq:"high",
      content:`
<div class="box box-red">⚠️ Ludwig's angina 定義、緊急處置、抗生素選擇每年必考！</div>

<h3>Ludwig's Angina（盧德威氏咽峽炎）</h3>
<div class="box box-blue">
<strong>先記定義：</strong>Ludwig's Angina = 同時侵犯 <strong>5 個間隙</strong> 的雙側硬性蜂窩織炎：<br>
<strong>雙側顎下（Submandibular × 2）+ 雙側舌下（Sublingual × 2）+ 單側頦下（Submental × 1）</strong>
</div>

<table>
<tr><th>項目</th><th>內容</th></tr>
<tr><td class="td-k">最常見原因</td><td>下顎第二、三大臼齒感染（根尖位於 Mylohyoid 下方 → 直接進入顎下間隙）</td></tr>
<tr><td class="td-k">臨床特徵</td><td>• 口底觸診如<strong>木板（Board-like induration）</strong><br>• 舌頭被向上推舉（Tongue elevation）<br>• 含滾水口音（Hot potato voice）<br>• 吞嚥困難（Dysphagia）、流口水<br>• 呼吸困難 → <strong>最終氣道阻塞（致死主因！）</strong></td></tr>
<tr><td class="td-k">第一優先處置</td><td class="td-r">⚠️ <strong>確保氣道（Airway management）！</strong><br>早期清醒纖維支氣管鏡插管 → 困難時立即<strong>氣管切開術（Tracheotomy）</strong></td></tr>
<tr><td class="td-k">後續治療</td><td>• 廣譜抗生素 IV（Penicillin G + Metronidazole，或 Clindamycin）<br>• 廣泛手術切開引流（雙側顎下 + 頦下切口）<br>• 住院、加護病房監測</td></tr>
</table>
<h3>抗生素選擇原則（必背）</h3>
<div class="box box-blue">
齒源性感染 = <strong>多菌混合感染（Polymicrobial）</strong><br>
早期：嗜氧菌（Streptococcus spp.）為主<br>
膿瘍期：轉為厭氧菌主導（Bacteroides、Prevotella、Peptostreptococcus）
</div>

<table>
<tr><th>情況</th><th>首選</th><th>理由</th></tr>
<tr><td class="td-k">一般齒源性感染</td><td class="td-r"><strong>Penicillin VK 或 Amoxicillin</strong></td><td>窄效殺菌、毒性低、對Streptococcus有效</td></tr>
<tr><td class="td-k">Penicillin 過敏</td><td class="td-r"><strong>Clindamycin</strong></td><td>對多數口腔需氧菌+厭氧菌有效</td></tr>
<tr><td class="td-k">嚴重深部感染輔助</td><td><strong>Metronidazole（Flagyl）</strong></td><td>針對絕對厭氧菌；<strong>不單獨使用</strong>，搭配Penicillin</td></tr>
<tr><td class="td-k">Amoxicillin + Clavulanate<br>（Augmentin）</td><td>可用於混合感染</td><td>含β-lactamase抑制劑，覆蓋產酶菌</td></tr>
</table>
<div class="pearl">抗生素是「輔助」，<strong>移除感染源（拔牙或根管）+ 切開引流（I&D）才是主要治療</strong>，不能單靠抗生素！</div>

<h3>手術引流（I&D）時機與原則</h3>
<table>
<tr><th>原則</th><th>說明</th></tr>
<tr><td class="td-k">必須引流的時機</td><td>① 膿瘍期：有波動感（Fluctuant）→ 必須引流<br>② 蜂窩織炎期：若累及深部間隙或腫脹嚴重 → 也應引流</td></tr>
<tr><td class="td-k">切線位置</td><td>放在腫脹<strong>最低位（Dependent position）</strong>，利用重力引流</td></tr>
<tr><td class="td-k">引流步驟</td><td>① 切開<br>② 血管鉗鈍性剝離（破壞腔室分隔）<br>③ 放入 Penrose drain 並縫合固定<br>④ 每日沖洗，通常 2–5 天後移除</td></tr>
<tr><td class="td-k">絕對不可</td><td class="td-r">在蜂窩織炎期只靠抗生素、拖延手術</td></tr>
</table>

<h3>骨髓炎（Osteomyelitis）</h3>
<table>
<tr><th>類型</th><th>特徵</th><th>X光</th><th>治療</th></tr>
<tr>
  <td class="td-k">急性化膿性<br>Acute Suppurative</td>
  <td>劇痛、發燒、下唇麻木（IAN受壓）；發病&lt;4週</td>
  <td>早期X光正常（骨密度需降低30–50%才看到）</td>
  <td>廣譜抗生素IV + 手術引流</td>
</tr>
<tr>
  <td class="td-k">慢性骨髓炎<br>Chronic Suppurative</td>
  <td>持續&gt;4週；瘻管（Fistula）；低度疼痛</td>
  <td class="td-r"><strong>Sequestrum（死骨）</strong>：放射不透亮塊<br><strong>Involucrum（新生骨）</strong>：包圍死骨</td>
  <td>手術清創（Sequestrectomy）+ 長期抗生素</td>
</tr>
<tr>
  <td class="td-k">Garre's 骨髓炎<br>增殖性骨膜炎</td>
  <td>兒童；下顎體部腫脹；無化膿</td>
  <td class="td-r"><strong>Onion-skin</strong>（洋蔥皮狀骨膜新骨）</td>
  <td>去除感染來源（根管/拔牙）；骨膜新骨多自行吸收</td>
</tr>
</table>`
    },
    {
      label:"齒源性感染抗生素選擇", freq:"critical",
      content:`
<div class="box box-red">⚠️ 極高頻！每屆必考：首選藥物、過敏替代、Metronidazole 時機、各情境選藥</div>

<h3>黃金原則：窄效・殺菌型・低毒性</h3>
<div class="box box-blue">
齒源性感染 = <strong>多菌混合感染（Polymicrobial）</strong>：口腔正常菌叢（好氧鏈球菌 + 絕對厭氧菌）<br>
選藥三原則：<strong>Narrow-spectrum（窄效）、Bactericidal（殺菌型）、Low toxicity（低毒性）</strong><br>
永遠記住：<strong>切開引流（I&amp;D）+ 移除感染源</strong> 才是主要治療；抗生素只是輔助！
</div>

<h3>第一線藥物比較</h3>
<table>
<tr><th>藥物</th><th>特點</th><th>缺點／注意</th><th>劑量</th></tr>
<tr>
  <td class="td-k"><strong>Penicillin VK</strong><br>（口服）/<br>Penicillin G<br>（靜脈/肌肉）</td>
  <td class="td-g">✅ <strong>黃金首選</strong>：窄效、殺菌型<br>對好氧鏈球菌＋口腔厭氧菌最有效<br>Penicillin G：非腸胃道給藥（IV/IM）</td>
  <td>口服半衰期短 → 需 <strong>QID（每天4次）</strong><br>約 3% 人口過敏</td>
  <td>Pen VK 500mg QID<br>Pen G 1–4 MU IV q4–6h</td>
</tr>
<tr>
  <td class="td-k"><strong>Amoxicillin</strong></td>
  <td class="td-g">✅ 半合成 Penicillin；抗菌譜略廣（含革蘭氏陰性菌）<br>最大優勢：<strong>半衰期較長 → TID（每天3次）</strong>，服藥順從性更高<br>→ 門診常優先取代 Pen VK</td>
  <td>對產 β-lactamase 菌株無效</td>
  <td>500mg TID（或 875mg BID）</td>
</tr>
<tr>
  <td class="td-k"><strong>Clindamycin</strong></td>
  <td>對革蘭氏陽性球菌 + <strong>幾乎所有厭氧菌</strong>極有效<br>低劑量：抑菌型；高劑量：殺菌型</td>
  <td class="td-r">⚠️ <strong>偽膜性腸炎風險！</strong><br>Clostridium difficile 過度生長 → pseudomembranous colitis（嚴重腹瀉）<br>口腔鏈球菌抗藥性上升、價格貴<br>→ <strong>保留給 Penicillin 過敏患者</strong></td>
  <td>150–450mg QID</td>
</tr>
</table>

<div class="box box-red">🚨 國考陷阱：Clindamycin 的嚴重副作用 = <strong>偽膜性腸炎（Pseudomembranous Colitis）</strong>，因 C. difficile 毒素在腸道中產生。</div>

<h3>Penicillin 過敏時的替代選擇</h3>
<table>
<tr><th>替代藥物</th><th>適用</th><th>注意事項</th></tr>
<tr><td class="td-k"><strong>Clindamycin ✅ 首選</strong></td><td class="td-g">Penicillin 過敏的首選替代（含糖尿病患、根尖感染）</td><td>注意 C. difficile 風險</td></tr>
<tr><td class="td-k">Azithromycin（阿奇黴素）</td><td>療效/毒性比佳；無 Erythromycin 的肝臟藥物交互作用</td><td>傳統 Erythromycin 已因副作用大及抗藥性高被淘汰</td></tr>
<tr><td class="td-k">Cephalexin（頭孢子菌素）</td><td>對革蘭氏陽性球菌有效</td><td class="td-r">⚠️ <strong>絕對禁忌</strong>：對 Penicillin 有<strong>過敏性休克（anaphylaxis）、蕁麻疹、血管性水腫</strong>病史者禁用！（約 10% 交叉過敏率）</td></tr>
</table>

<h3>Metronidazole（Flagyl）加入時機</h3>
<div class="box box-blue">
<strong>只對絕對厭氧菌（Obligate anaerobes）有效</strong>（Prevotella, Porphyromonas）<br>
對好氧菌及兼性厭氧菌（口腔鏈球菌）<strong>完全無效</strong> → 絕對不能單獨使用！
</div>
<table>
<tr><th>時機</th><th>說明</th></tr>
<tr><td class="td-k">輔助合併用藥</td><td class="td-g">嚴重深部感染、培養出大量絕對厭氧菌、常規抗生素反應不佳<br>→ 搭配 <strong>Penicillin + Metronidazole</strong></td></tr>
<tr><td class="td-k">禁忌</td><td class="td-r">單獨用於一般混合性齒源性感染 → 效果極差！</td></tr>
</table>

<h3>各情境選藥（國考最愛）</h3>
<table>
<tr><th>情境</th><th>致病菌特點</th><th>首選藥物</th></tr>
<tr>
  <td class="td-k">蜂窩性組織炎<br>Cellulitis（早期 1–5天）</td>
  <td>以<strong>好氧鏈球菌</strong>為主；觸感如木板（Boardlike）</td>
  <td class="td-g">Penicillin 或 Amoxicillin<br>儘早切開引流防擴散</td>
</tr>
<tr>
  <td class="td-k">膿瘍 Abscess（晚期 4–10天）</td>
  <td>轉為<strong>厭氧菌</strong>主導；有波動感（Fluctuant）</td>
  <td class="td-g">Penicillin ± Metronidazole<br>外科切開引流（絕對必要）</td>
</tr>
<tr>
  <td class="td-k">顎骨骨髓炎<br>Osteomyelitis</td>
  <td>好氧+厭氧混合感染</td>
  <td><strong>Penicillin 首選</strong>；次選 Clindamycin 或 Fluoroquinolones<br>慢性期：Sequestrectomy + 長達 <strong>6週–6個月</strong> 高劑量 IV 抗生素</td>
</tr>
<tr>
  <td class="td-k">MRONJ 感染</td>
  <td>骨穿透力需求高</td>
  <td class="td-r"><strong>Amoxicillin 或 Clindamycin</strong>（骨穿透力佳）<br>教科書強調「better bone penetration」</td>
</tr>
<tr>
  <td class="td-k">齒源性上顎竇炎<br>Odontogenic Sinusitis</td>
  <td>80% 菌株產 β-lactamase<br>（葡萄球菌、鼻竇正常菌叢）</td>
  <td class="td-r"><strong>Amoxicillin-Clavulanic acid（Augmentin）首選！</strong><br>⚠️ 不用 Clindamycin（50% 抗藥性）</td>
</tr>
<tr>
  <td class="td-k">口面放線菌病<br>Actinomycosis</td>
  <td>硫磺顆粒（Sulfur granules）；下顎角廔管</td>
  <td>手術引流 + <strong>長期 Penicillin</strong>（初期IV→轉口服；防復發）</td>
</tr>
</table>

<div class="pearl">口訣：「一般感染 Pen/Amox，過敏換 Clinda，深部厭氧加 Metro，竇炎要 Augmentin！」</div>

<details class="exam-block">
  <summary>📝 歷屆考古題精選（3 題）</summary>
  <div class="exam-list">
    <div class="exam-item">
      <p class="eq">Q1. Penicillin 過敏患者使用替代抗生素後發生嚴重腹瀉（偽膜性腸炎），最可能是服用哪種藥物？致病機轉？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">最可能是 <strong>Clindamycin</strong>。改變腸道菌叢 → <em>Clostridium difficile</em> 過度生長 → 毒素 → <strong>偽膜性腸炎（Pseudomembranous colitis）</strong>。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q2. 「單獨」使用 Metronidazole 治療一般混合型齒源性感染為何效果極差？正確的使用時機？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">因為 Metronidazole 只對<strong>絕對厭氧菌（Obligate anaerobes）</strong>有效，對好氧/兼性厭氧鏈球菌完全無效。正確用法：搭配 Penicillin 作為<strong>嚴重深部感染的輔助合併用藥</strong>。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q3. 治療齒源性感染，Penicillin 和低劑量 Clindamycin 分別屬於「殺菌型」還是「抑菌型」？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">Penicillin → <strong>殺菌型（Bactericidal）</strong>；Clindamycin 低劑量 → <strong>抑菌型（Bacteriostatic）</strong>。<br>齒源性感染應優先選「窄效且殺菌型」抗生素。</p></details>
    </div>
  </div>
</details>
`
    },
    {
      label:"MRONJ 藥物相關顎骨壞死", freq:"high",
      content:`
<div class="box box-red">⚠️ 近年極高頻！骨質疏鬆症患者越來越多，MRONJ 的定義、分期、預防是必考點</div>

<h3>什麼是 MRONJ？</h3>
<div class="box box-blue">
<strong>MRONJ = Medication-Related Osteonecrosis of the Jaw（藥物相關顎骨壞死）</strong><br><br>
診斷條件（三個都要符合）：<br>
① 正在使用或曾使用抗吸收藥物（Bisphosphonates）或抗血管新生藥物<br>
② 顎骨有<strong>骨頭暴露超過 8 週</strong>（或有影像學/臨床證據）<br>
③ <strong>沒有接受過顎骨放射治療</strong>（排除 ORNJ）
</div>

<h3>常見致病藥物</h3>
<table>
<tr><th>藥物類型</th><th>常見藥物</th><th>適應症</th><th>風險</th></tr>
<tr>
  <td class="td-k">Bisphosphonates<br>（雙磷酸鹽）</td>
  <td>靜脈：Zoledronate（Zometa）、Pamidronate<br>口服：Alendronate（Fosamax）、Risedronate</td>
  <td>骨質疏鬆症、骨轉移癌、多發性骨髓瘤、Paget's disease</td>
  <td class="td-r">靜脈注射 >> 口服；癌症用途 >> 骨質疏鬆用途</td>
</tr>
<tr>
  <td class="td-k">RANKL Inhibitor<br>（抗吸收藥）</td>
  <td>Denosumab（Prolia / Xgeva）</td>
  <td>骨質疏鬆症、骨轉移癌</td>
  <td class="td-r">風險類似靜脈Bisphosphonates</td>
</tr>
<tr>
  <td class="td-k">Antiangiogenic drugs<br>（抗血管新生）</td>
  <td>Bevacizumab（Avastin）、Sunitinib</td>
  <td>癌症治療</td>
  <td>較低但存在風險</td>
</tr>
</table>

<h3>分期（AAOMS Staging）</h3>
<table>
<tr><th>分期</th><th>臨床表現</th><th>治療原則</th></tr>
<tr><td class="td-k">At-risk</td><td>用藥中，無骨頭壞死跡象</td><td>不需特殊治療；正常牙科保養</td></tr>
<tr><td class="td-k">Stage 0</td><td>無骨頭暴露，但有非特異性症狀（骨痛、牙根周圍炎）</td><td>全身症狀治療；止痛</td></tr>
<tr><td class="td-k">Stage 1</td><td>骨頭暴露，<strong>無感染症狀</strong></td><td>Chlorhexidine 漱口；保守觀察</td></tr>
<tr><td class="td-k">Stage 2</td><td class="td-r">骨頭暴露 + <strong>有感染症狀</strong>（紅、腫、膿）</td><td>抗生素治療 + 局部清創</td></tr>
<tr><td class="td-k">Stage 3</td><td class="td-r">骨頭暴露 + 感染 + 病理性骨折/口鼻瘻管/顎外感染</td><td>手術切除壞死骨</td></tr>
</table>

<h3>預防（最重要！）</h3>
<div class="pearl">預防遠比治療重要。在開始 Bisphosphonate 治療<strong>之前</strong>，應先完成所有口腔治療（拔牙、牙周治療）</div>
<table>
<tr><th>時機</th><th>做法</th></tr>
<tr><td class="td-k">用藥前</td><td>全口牙科評估；拔除無法保留的牙齒；完成牙周治療</td></tr>
<tr><td class="td-k">口服Bisphosphonates用藥中需拔牙</td><td>• 使用 &lt; 4年且無風險因子：可正常拔牙<br>• 使用 &gt; 4年或合併免疫抑制劑：考慮<strong>停藥（Drug holiday）3個月</strong>後再拔，術後再持續停藥3個月</td></tr>
<tr><td class="td-k">靜脈注射Bisphosphonates</td><td class="td-r">風險極高；任何侵入性手術前需充分與內科醫師會診評估</td></tr>
</table>`
    }
  ]
},
{
  label:"✂️ 正顎手術", freq:"mid",
  children:[
    {
      label:"BSSO vs IVRO 比較", freq:"mid",
      content:`
<div class="box box-red">⚠️ 考試最愛比較 BSSO vs IVRO！看到「不需IMF」→ BSSO；「不能前移」→ IVRO；「神經傷害低」→ IVRO</div>

<div class="box box-blue">
<strong>先建立概念：</strong>下顎正顎手術就是把下顎骨「切一刀」，然後把帶牙齒的部分移到正確位置。<br>
BSSO = 從前面看是「矢狀方向」劈開，骨頭重疊多 → 固定好 → 可前移也可後退<br>
IVRO = 從側面看是「垂直方向」截斷，肌肉自然拉緊 → 只能後退，靠IMF固定
</div>

<table>
<tr><th>比較項目</th><th>BSSO（雙側矢狀劈裂）</th><th>IVRO（口內垂直上升支截骨）</th></tr>
<tr><td class="td-k">切線方向</td><td>從 Lingula 上方水平切，沿前緣向下，再頰側垂直切 → 矢狀劈裂</td><td>從乙狀切跡（Sigmoid notch）往下垂直切，位於 Lingula <strong>後方</strong></td></tr>
<tr><td class="td-k">適應症</td><td class="td-g">前移（Advancement）✓<br>後退（Setback）✓<br>兩者都可！</td><td class="td-r">只能<strong>後退（Setback）</strong><br>絕對不能前移</td></tr>
<tr><td class="td-k">術後固定</td><td class="td-g">剛性內固定（Rigid Internal Fixation）<br>迷你骨板 + 骨釘<br>不需長期IMF（或只需短暫）</td><td class="td-r">必須上下顎間固定（IMF）<br>約 2–6 週<br>這段時間嘴巴不能張開！</td></tr>
<tr><td class="td-k">下齒槽神經（IAN）風險</td><td class="td-r"><strong>極高</strong><br>切線直接劈過IAN走行的骨髓腔 → 術後下唇麻木很常見</td><td class="td-g"><strong>極低</strong><br>切線在IAN進入下顎孔的後方，避開神經管</td></tr>
<tr><td class="td-k">髁突控制</td><td>需精確定位髁突 → 可用骨板固定在正確位置</td><td class="td-g">髁突可被動引導至關節窩 → 適合合併TMD患者</td></tr>
<tr><td class="td-k">骨段癒合</td><td class="td-g">骨段重疊大 → 接觸面積大 → 癒合快</td><td>靠肌肉拉力讓骨頭自然貼合</td></tr>
<tr><td class="td-k">記憶口訣</td><td class="td-g">BSSO = <strong>B</strong>oth directions（前後都能移）</td><td class="td-r">IVRO = <strong>I</strong>nward only（只能往後縮）</td></tr>
</table>

<h3>Le Fort I 截骨術（上顎正顎手術）</h3>
<div class="box box-blue">Le Fort I = 把整個上顎齒槽骨段切下來，在三維空間重新定位後固定</div>

<table>
<tr><th>步驟</th><th>說明</th></tr>
<tr><td class="td-k">① 切開</td><td>上顎前庭黏膜（Mucogingival junction），從一側顴上顎支柱切到另一側</td></tr>
<tr><td class="td-k">② 骨膜下剝離</td><td>暴露上顎骨外側壁，從梨狀孔緣到翼顎結節</td></tr>
<tr><td class="td-k">③ 水平截骨</td><td>在牙根尖<strong>上方至少5mm</strong>處截骨（避免傷及牙根）</td></tr>
<tr><td class="td-k">④ 翼板分離</td><td class="td-r">⚠️ 必考步驟！用骨鑿分離上顎骨與<strong>翼突板（Pterygoid plates）</strong><br>若太暴力可能傷及蝶腭動脈 → 大出血，甚至視神經受損</td></tr>
<tr><td class="td-k">⑤ 下折鬆動</td><td>上顎骨向下折斷，此時血流靠<strong>升腭動脈（Ascending palatine a.）</strong>等周邊軟組織維持</td></tr>
<tr><td class="td-k">⑥ 固定</td><td>放在正確咬合位置後，用迷你骨板固定在<strong>鼻上顎支柱 + 顴上顎支柱</strong></td></tr>
</table>

<div class="box box-orange">
<strong>🎯 國考速記口訣：</strong><br>
看到「<strong>下顎前突 + 需後退 + 神經傷害低</strong>」→ 秒選 <strong>IVRO</strong><br>
看到「<strong>不需IMF</strong>」或「<strong>下顎前移（Advancement）</strong>」→ 秒選 <strong>BSSO</strong><br>
Le Fort I 上顎游離後血流 → <strong>升腭動脈、升咽動脈</strong>（不是內顎動脈！）<br>
固定骨板放在 → <strong>鼻上顎支柱 + 顴上顎支柱</strong><br>
移動方向穩定性最差 → <strong>下置（Inferior repositioning）</strong>（骨頭無接觸，肌肉往上拉）
</div>
`
    }
  ]
},
{
  label:"💧 唾液腺疾病", freq:"mid",
  children:[
    {
      label:"唾液腺腫瘤", freq:"mid",
      content:`
<div class="box box-blue">腮腺（Parotid）腫瘤 80% 良性；顎下腺（Submandibular）和舌下腺（Sublingual）惡性率更高！</div>
<h3>唾液腺腫瘤分佈規律</h3>
<div class="box box-orange">
「越小的腺體，惡性率越高」：<br>
腮腺：80% 良性 ↔ 顎下腺：50% 良性 ↔ 舌下腺：大多惡性
</div>

<h3>常見唾液腺腫瘤</h3>
<table>
<tr><th>腫瘤</th><th>特徵</th><th>考點</th></tr>
<tr>
  <td class="td-k">Pleomorphic Adenoma<br>多形性腺瘤（Mixed tumor）</td>
  <td>最常見唾液腺腫瘤（良性）<br>腮腺後下極好發<br>緩慢生長、無痛、可移動<br>包膜不完整（假包膜）</td>
  <td class="td-r">治療：腮腺部分切除（Parotidectomy）<br>⚠️ 單純剜出術→高復發率（30%）<br>長期存在可惡化（Carcinoma ex pleomorphic adenoma）</td>
</tr>
<tr>
  <td class="td-k">Warthin's Tumor<br>（Papillary Cystadenoma Lymphomatosum）</td>
  <td>第二常見良性唾液腺腫瘤<br>幾乎只在腮腺<br>雙側可能性10%<br>與<strong>吸菸</strong>強烈相關</td>
  <td>組織學：雙層 oncocytic epithelium + 淋巴樣間質<br>Tc-99m 核子醫學掃描：Hot spot（攝取↑）</td>
</tr>
<tr>
  <td class="td-k">Mucoepidermoid Carcinoma<br>黏液表皮樣癌</td>
  <td class="td-r">最常見的惡性唾液腺腫瘤<br>腮腺最常見；小唾液腺中以顎部最多</td>
  <td>Low grade（低惡性度）→ 預後好<br>High grade → 預後差<br>組織學：mucous cells + epidermoid cells + intermediate cells</td>
</tr>
<tr>
  <td class="td-k">Adenoid Cystic Carcinoma<br>腺樣囊性癌</td>
  <td>顎下腺、小唾液腺好發<br>神經浸潤（Perineural invasion）特性→ 沿神經蔓延→ 遠端復發</td>
  <td class="td-r">Cribriform pattern（篩狀），像「瑞士起司」<br>預後差（晚期復發）；放射線治療輔助</td>
</tr>
</table>

<h3>CN VII（顏面神經）與腮腺</h3>
<div class="box box-red">
腮腺惡性腫瘤最重要的惡性指標：<strong>顏面神經麻痺（CN VII palsy）</strong><br>
顏面神經穿過腮腺 → 腫瘤侵犯 CN VII → 同側顏面肌肉麻痺<br>
任何腮腺腫瘤 + 顏面神經麻痺 = 惡性，直到排除為止
</div>
`
    },
    {
      label:"唾液腺炎與結石", freq:"mid",
      content:`
<h3>唾液腺結石（Sialolithiasis）</h3>
<table>
<tr><th>項目</th><th>內容</th></tr>
<tr><td class="td-k">最常見腺體</td><td class="td-r">顎下腺（Submandibular gland）佔 80–90%</td></tr>
<tr><td class="td-k">原因</td><td>Wharton's duct：長、走向向上（逆重力）、彎曲 → 唾液流速慢 → 鈣質沉積</td></tr>
<tr><td class="td-k">症狀</td><td>進食時下顎下方脹痛（Post-prandial pain）；腺體腫脹</td></tr>
<tr><td class="td-k">診斷</td><td>咬合X光（Occlusal film）可見結石；超音波；CT</td></tr>
<tr><td class="td-k">治療</td><td>小：按摩、多喝水、酸性食物刺激唾液<br>大：手術取石（Sialolithectomy）或腺體切除</td></tr>
</table>

<h3>唾液腺炎（Sialadenitis）</h3>
<ul class="n">
<li class="td-r">細菌性：最常見菌種 <strong>Staphylococcus aureus</strong>（金黃色葡萄球菌）</li>
<li>好發：術後患者（脫水、口腔衛生差）→「手術後腮腺炎」</li>
<li>病毒性：Mumps（腮腺炎病毒）→ 雙側腮腺腫脹；可能引起睪丸炎→不孕</li>
<li>Sjögren syndrome：自體免疫疾病→乾眼、口乾（Xerostomia）→ Parotid 腫大</li>
</ul>

<h3>Mucocele 與 Ranula</h3>
<table>
<tr><th></th><th>Mucocele（黏液囊腫）</th><th>Ranula（蛤蟆瘤）</th></tr>
<tr><td>位置</td><td class="td-r">下唇（最常見）；頰黏膜</td><td>口底一側</td></tr>
<tr><td>來源</td><td>小唾液腺導管破裂</td><td>Sublingual gland 導管阻塞/破裂</td></tr>
<tr><td>外觀</td><td>藍色透明水泡狀</td><td>藍色、大型、口底腫塊</td></tr>
<tr><td>治療</td><td>手術切除（含相關腺體）</td><td>Marsupialization 或手術切除</td></tr>
</table>
`
    }
  ]
},
{
  label:"🦷 顳顎關節（TMJ）", freq:"mid",
  children:[
    {
      label:"TMD 分類與治療", freq:"mid",
      content:`
<h3>Okeson 顳顎關節疾患（TMD）分類</h3>
<table>
<tr><th>大類</th><th>疾病</th><th>特徵</th><th>治療</th></tr>
<tr>
  <td class="td-k">咀嚼肌疾患<br>（最常見）</td>
  <td>Myofascial Pain Dysfunction（MPD）</td>
  <td>肌肉壓痛點（Trigger points）；無關節雜音；咬合、壓力、磨牙相關；女性多見</td>
  <td>咬合板（Splint）；物理治療；NSAIDs；肌肉鬆弛劑；Biofeedback</td>
</tr>
<tr>
  <td class="td-k" rowspan="2">關節內疾患<br>Disc disorders</td>
  <td>Disc displacement<br>WITH reduction（DDwr）</td>
  <td class="td-r">開口時 Click（彈響）；關節盤前移，開口時回到位</td>
  <td>咬合板；物理治療；觀察（多自然改善）</td>
</tr>
<tr>
  <td>Disc displacement<br>WITHOUT reduction（DDwor）</td>
  <td class="td-r">閉口鎖死（Closed lock）；開口受限（&lt;35mm）；無彈響</td>
  <td>物理治療嘗試復位；關節腔注射；手術（Disc repositioning）</td>
</tr>
<tr>
  <td class="td-k">退化性疾患</td>
  <td>Osteoarthritis（骨關節炎）</td>
  <td>捻髮音（Crepitus）；X光：關節間隙變窄、骨棘（Osteophyte）</td>
  <td>NSAIDs；關節腔注射 Hyaluronic acid；低強度雷射</td>
</tr>
</table>

<h3>正常TMJ開口量</h3>
<ul class="n">
<li>正常最大開口：40–55 mm</li>
<li class="td-r">開口受限定義：&lt;35 mm（Trismus）</li>
<li>正常側方運動：&gt;7–8 mm</li>
</ul>

<h3>咬合板種類</h3>
<ul class="n">
<li>Stabilization splint（穩定板）：全牙弓覆蓋；肌肉放鬆；最常用</li>
<li>Anterior repositioning splint：將下顎引導向前 → 協助 DDwr</li>
<li>Anterior bite plane：只接觸前牙 → 去除後牙干擾</li>
</ul>
`
    }
  ]
}
];

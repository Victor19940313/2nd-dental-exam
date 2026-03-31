const RAD_TREE = [
{
  label:"🔍 病灶影像判讀（Buzzwords）", freq:"critical",
  children:[
    {
      label:"透亮病灶鑑別診斷", freq:"critical",
      content:`
<div class="box box-red">⚠️ 極高頻！每年 4–6 題。看到關鍵字直接選答案，不需要思考！</div>
<h3>放射線透亮（Radiolucent）病灶快速配對表</h3>
<table>
<tr><th>影像特徵（Buzzword）</th><th>中文</th><th>診斷</th><th>額外考點</th></tr>
<tr><td class="td-r">Soap bubble / Honeycomb</td><td>肥皂泡/蜂窩狀</td><td class="td-r">→ Ameloblastoma 造釉細胞瘤</td><td>牙根吸收或推開；下顎後牙區</td></tr>
<tr><td class="td-r">Tennis racket</td><td>網球拍狀（多房小格）</td><td class="td-r">→ Odontogenic Myxoma 黏液瘤</td><td>無包膜；局部侵犯性強</td></tr>
<tr><td class="td-r">Heart-shaped（正中）</td><td>心形</td><td class="td-r">→ Nasopalatine duct cyst 鼻顎管囊腫</td><td>>6mm才診斷；最常見非齒源性囊腫</td></tr>
<tr><td class="td-r">Pear-shaped（側切牙/犬齒間）</td><td>梨形</td><td class="td-r">→ Globulomaxillary cyst</td><td>現認為非獨立疾病</td></tr>
<tr><td class="td-r">Scalloping（扇形波浪邊界）</td><td>扇形邊界</td><td class="td-r">→ Traumatic bone cavity（Simple bone cyst）</td><td>無上皮內壁；治療=開刀誘發出血</td></tr>
<tr><td class="td-r">Well-defined unilocular（根尖）</td><td>根尖圓形透亮，邊界清楚</td><td class="td-r">→ Radicular cyst / Periapical granuloma</td><td>最常見顎骨囊腫；非活性牙根尖</td></tr>
<tr><td class="td-r">Punched-out（無硬化邊界）</td><td>打洞狀</td><td class="td-r">→ Multiple Myeloma 多發性骨髓瘤</td><td>全身多發；Bence Jones protein尿液陽性</td></tr>
<tr><td class="td-r">Moth-eaten（不規則破壞）</td><td>蟲蛀狀</td><td class="td-r">→ Metastatic carcinoma / Osteomyelitis</td><td>女性最常見原發：乳癌；男性：肺癌</td></tr>
<tr><td class="td-r">Stepladder（骨小樑）</td><td>階梯狀骨小樑</td><td class="td-r">→ Hyperparathyroidism / Brown tumor</td><td>血PTH↑、Ca²⁺↑、ALP↑</td></tr>
</table>

<h3>放射線不透亮（Radiopaque）病灶</h3>
<table>
<tr><th>影像特徵（Buzzword）</th><th>中文</th><th>診斷</th></tr>
<tr><td class="td-r">Sun-ray / Sun-burst</td><td>陽光放射狀骨刺</td><td class="td-r">→ Osteosarcoma 骨肉瘤</td></tr>
<tr><td class="td-r">Onion-skin / Onion-peel</td><td>洋蔥皮狀分層</td><td class="td-r">→ Garre's Osteomyelitis 增殖性骨膜炎</td></tr>
<tr><td class="td-r">Cotton-wool（混合）</td><td>羊毛棉花狀</td><td class="td-r">→ Paget's Disease 骨之柏哲德氏病</td></tr>
<tr><td class="td-r">Ground-glass（均一霧狀）</td><td>毛玻璃狀</td><td class="td-r">→ Fibrous Dysplasia 纖維性發育不良</td></tr>
<tr><td class="td-r">Driven snow（細小鈣化點）</td><td>飄落雪花</td><td class="td-r">→ CEOT / Pindborg Tumor</td></tr>
<tr><td class="td-r">Multiple tooth-like structures</td><td>多個小牙形狀</td><td class="td-r">→ Compound Odontoma 複合型牙瘤</td></tr>
<tr><td class="td-r">Dense mass at root apex</td><td>根尖緻密不透亮+透亮帶</td><td class="td-r">→ Cementoblastoma 牙骨質母細胞瘤</td></tr>
</table>

<h3>特殊 X 光徵象</h3>
<table>
<tr><th>徵象</th><th>診斷</th><th>說明</th></tr>
<tr><td class="td-r">Symmetric widening of PDL space</td><td>Osteosarcoma（早期）或 Scleroderma（硬皮症）</td><td>整個牙周膜間隙均等增寬</td></tr>
<tr><td class="td-r">Loss of lamina dura（牙板緻密線消失）</td><td>Hyperparathyroidism</td><td>可見於整個牙列</td></tr>
<tr><td class="td-r">Floating teeth（牙齒漂浮感）</td><td>Langerhans Cell Histiocytosis（組織球增多症）</td><td>周圍牙槽骨溶解消失</td></tr>
<tr><td class="td-r">Tooth in a cyst（囊腫內含牙）</td><td>Dentigerous cyst</td><td>從 CEJ 包圍牙冠</td></tr>
</table>
</details>
`
    }
  ]
},
{
  label:"📷 口外攝影技術", freq:"critical",
  children:[
    {
      label:"全景片與口內片常見錯誤", freq:"critical",
      content:`
<div class="box box-red">⚠️ 極高頻！每年必考 2–4 題。考題常附圖請你判斷是哪種錯誤。</div>

<h3>全景X光片（Panoramic）常見錯誤</h3>
<table>
<tr><th>錯誤類型</th><th>發生原因</th><th>影像特徵（辨識重點）</th></tr>
<tr>
  <td class="td-k">Ghost Image<br>（鬼影）</td>
  <td>金屬物（耳環、項鍊、義齒金屬）位於 X 光源與旋轉中心之間</td>
  <td class="td-r">① 出現在真實影像的<strong>對側（opposite side）</strong><br>② 位置<strong>比真實影像更高</strong><br>③ <strong>模糊且放大</strong>（邊界不清）</td>
</tr>
<tr>
  <td class="td-k">咬太前面<br>（too far forward）</td>
  <td>患者前牙咬在 bite peg 前方，靠近感應器</td>
  <td class="td-r">前牙影像<strong>極度狹窄</strong>且失焦模糊；脊椎陰影過度重疊</td>
</tr>
<tr>
  <td class="td-k">咬太後面<br>（too far back）</td>
  <td>患者前牙咬在 bite peg 後方，遠離感應器</td>
  <td class="td-r">前牙影像<strong>寬大、放大且模糊</strong></td>
</tr>
<tr>
  <td class="td-k">下巴抬太高<br>（Chin up）</td>
  <td>法蘭克福平面向上傾斜</td>
  <td class="td-r">咬合平面呈<strong>倒V字型（grumpy face）</strong>；硬腭陰影遮蔽上顎牙根</td>
</tr>
<tr>
  <td class="td-k">下巴壓太低<br>（Chin down）</td>
  <td>法蘭克福平面向下傾斜</td>
  <td class="td-r">咬合平面呈<strong>過度V字微笑（smiley face）</strong>；下顎門齒失焦；下顎角鬼影過度重疊</td>
</tr>
<tr>
  <td class="td-k">頭部左右偏轉</td>
  <td>患者臉部未正對中線</td>
  <td class="td-r">影像左右<strong>不對稱</strong>；靠近感應器那側牙齒<strong>縮小</strong>，遠離那側<strong>放大</strong></td>
</tr>
<tr>
  <td class="td-k">舌頭未貼腭部<br>（Air shadow）</td>
  <td>患者未將舌頭平貼上顎</td>
  <td class="td-r">影像上半部出現寬大的<strong>黑色放射線透過性帶</strong>，遮蔽上顎牙根</td>
</tr>
<tr>
  <td class="td-k">移動模糊<br>（Movement）</td>
  <td>拍攝過程中患者移動</td>
  <td class="td-r">整體模糊；垂直方向突然移動 → 下顎骨下緣出現<strong>階梯狀變形（step-deformity）</strong></td>
</tr>
</table>

<h3>口內X光片（Intraoral）常見錯誤</h3>
<table>
<tr><th>錯誤</th><th>原因</th><th>影像特徵</th><th>記憶法</th></tr>
<tr>
  <td class="td-k">Foreshortening<br>（影像縮短）</td>
  <td class="td-r">垂直角度<strong>過大/過陡</strong></td>
  <td>牙根看起來<strong>異常短小</strong></td>
  <td>角度太<strong>陡</strong>→牙根<strong>短</strong></td>
</tr>
<tr>
  <td class="td-k">Elongation<br>（影像拉長）</td>
  <td class="td-r">垂直角度<strong>過小/過平</strong></td>
  <td>牙齒被<strong>拉長延展</strong></td>
  <td>角度太<strong>平</strong>→牙根<strong>長</strong></td>
</tr>
<tr>
  <td class="td-k">Cone Cut<br>（錐切/空白區域）</td>
  <td class="td-r">X光中心射線未對準感應器中心</td>
  <td><strong>邊緣銳利的空白區域</strong>（未曝光）；使用矩形瞄準儀時更易發生</td>
  <td>對不準→切掉一角</td>
</tr>
<tr>
  <td class="td-k">Overlapping<br>（影像重疊）</td>
  <td class="td-r">水平角度不正確（未垂直穿過鄰接面）</td>
  <td>相鄰牙冠/牙根鄰接面<strong>互相重疊</strong>；無法判讀鄰面齲齒</td>
  <td>水平角偏→鄰牙重疊</td>
</tr>
</table>
<div class="pearl">口訣：<strong>「陡短平長、切空重疊」</strong> = 垂直角太陡→縮短；太平→拉長；中心未對→錐切；水平偏→重疊</div>
`,
    },
    {
      label:"各攝影法適應症配對", freq:"critical",
      content:`
<div class="box box-red">⚠️ 極高頻！Waters/SMV/Reverse Towne 的適應症配對每年必考！</div>
<h3>口外攝影法完整比較（必背配對）</h3>
<table>
<tr><th>攝影法</th><th>主要觀察</th><th>記憶法</th><th>技術要點</th></tr>
<tr>
  <td class="td-k">Waters' projection<br>（Occipitomental）</td>
  <td class="td-r">① 上顎竇（最佳視角）<br>② 眼眶底部骨折<br>③ 中顏面骨折</td>
  <td>Waters = 水 = 竇（上顎竇像水槽）</td>
  <td>OM角37°；口巴接觸底片架</td>
</tr>
<tr>
  <td class="td-k">Submentovertex（SMV）<br>基底位</td>
  <td class="td-r">① 顴骨弓骨折（最佳）<br>② 顱底<br>③ 下顎髁突相對位置</td>
  <td>SMV = 從下巴往頭頂 = 看兩邊顴弓像「蝴蝶翅膀」</td>
  <td>頭部過度後仰；底片平行顱底</td>
</tr>
<tr>
  <td class="td-k">Reverse Towne（AP）<br>後前位</td>
  <td class="td-r">下顎髁骨頸部骨折<br>（高位髁突、髁頸骨折）</td>
  <td>Towne = 頭朝後仰 = 看髁頸</td>
  <td>X光管向上傾斜30°；後前位</td>
</tr>
<tr>
  <td class="td-k">Lateral Cephalometric<br>側頭顱X光</td>
  <td>骨骼分析（SNA, SNB, ANB角）；正顎手術規劃；矯正</td>
  <td>矯正/正顎必用；測量骨骼關係</td>
  <td>耳棒固定頭部；標準距離</td>
</tr>
<tr>
  <td class="td-k">PA（Posteroanterior）<br>後前位</td>
  <td>下顎骨骼正面觀；顏面不對稱評估</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td class="td-k">Panoramic（全景片）<br>Orthopantomogram</td>
  <td>全口概觀；下顎骨；TMJ；智齒；鼻竇</td>
  <td>最常用的口外片；一張看全口</td>
  <td>Focal trough（焦域）調整；患者需移除金屬</td>
</tr>
<tr>
  <td class="td-k">Transcranial / Transpharyngeal</td>
  <td>TMJ 側方觀察</td>
  <td>TMJ問題使用</td>
  <td>已大多被 MRI/CT 取代</td>
</tr>
<tr>
  <td class="td-k">Occlusal film<br>咬合片</td>
  <td>唾液腺結石；顎骨骨折；多生牙位置</td>
  <td>比咬翼片大；適合兒童（放入口中）</td>
  <td>上顎：魚形（70°）；下顎：蛙形（平行法）</td>
</tr>
</table>
</details>

<details class="exam-block">
  <summary>📝 歷屆考古題精選（3 題）</summary>
  <div class="exam-list">
    <div class="exam-item">
      <p class="eq">Q1. 懷疑「顴骨弓骨折（Zygomatic arch fracture）」時首選哪種口外攝影？拍攝時曝光條件有何特殊要求？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">首選<strong>頦下顱頂攝影（SMV / Submentovertex view）</strong>。需<strong>降低曝光劑量</strong>，避免薄顴骨弓過曝而無法判讀。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q2. 評估「高位下顎髁骨頸部骨折」首選哪種攝影？拍攝時病患的下顎位置？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">首選<strong>反陶恩氏攝影（Reverse Towne projection）</strong>。病患必須<strong>張口（Open-mouth）</strong>，使髁狀突滑移出關節盂，避免與顱底重疊。</p></details>
    </div>
    <div class="exam-item">
      <p class="eq">Q3. 評估 Le Fort 骨折、顴骨複合體骨折及上顎竇病變最常用的攝影法？眼耳線與底片需夾幾度？</p>
      <details class="ans-details"><summary>▶ 顯示答案</summary><p class="ea">首選<strong>華特氏攝影（Waters projection / Occipitomental view）</strong>。眼耳線與底片夾 <strong>37 度角</strong>，將顳骨岩部移至上顎竇下方。<strong>37 度是最常考的數字陷阱！</strong></p></details>
    </div>
  </div>
</details>
`
    }
  ]
},
{
  label:"⚡ 放射線物理", freq:"high",
  children:[
    {
      label:"kVp、mA 與影像品質", freq:"high",
      content:`
<h3>X 光參數與影像控制</h3>
<table>
<tr><th>參數</th><th>控制什麼</th><th>增加時影響</th><th>考試重點</th></tr>
<tr>
  <td class="td-k">kVp<br>（千伏特峰值）</td>
  <td>射線<strong>品質</strong>（穿透力）</td>
  <td class="td-r">kVp↑ → 穿透力↑ → 對比度↓（灰階增多，短灰階）<br>kVp↓ → 對比度↑（長灰階，黑白分明）</td>
  <td>kVp決定對比度和穿透力；現代牙科60–70 kVp</td>
</tr>
<tr>
  <td class="td-k">mA<br>（毫安培）</td>
  <td>射線<strong>數量</strong>（密度/強度）</td>
  <td>mA↑ → 影像密度↑（較黑）<br>mA↓ → 影像較淡（underpenetrated）</td>
  <td>mA × 時間 = mAs（總電荷量）= 影像密度</td>
</tr>
<tr>
  <td class="td-k">曝光時間</td>
  <td>射線數量</td>
  <td>時間↑ → mAs↑ → 密度↑</td>
  <td>與mA關係：時間減半可mA加倍（等效）</td>
</tr>
<tr>
  <td class="td-k">靶片距離（FSD/SID）</td>
  <td>影像放大率和銳利度</td>
  <td class="td-r">距離增加 → 放大率↓ → 影像更銳利（inverse square law：強度∝1/d²）</td>
  <td>口內攝影：長筒（20 cm）比短筒（10 cm）影像更精準</td>
</tr>
</table>

<h3>常見影像錯誤及原因</h3>
<table>
<tr><th>錯誤</th><th>原因（角平分線法）</th><th>矯正方法</th></tr>
<tr><td class="td-k td-r">Elongation（拉長）</td><td>垂直角度太小（射線太水平）</td><td>增加垂直角度</td></tr>
<tr><td class="td-k td-r">Foreshortening（縮短）</td><td>垂直角度太大（射線太垂直）</td><td>減少垂直角度</td></tr>
<tr><td class="td-k">Cone-cut / Cone-shift</td><td>射線圓錐未完全對準底片（底片局部未曝光）</td><td>重新對準圓錐方向</td></tr>
<tr><td class="td-k">Overlapping（鄰牙重疊）</td><td>水平角度不正確（射線未通過鄰牙接觸點）</td><td>調整水平角度至正確方向</td></tr>
<tr><td class="td-k">Double image（雙重影）</td><td>底片移動或二次曝光</td><td>固定底片；確認曝光次數</td></tr>
<tr><td class="td-k">Light image（影像太淡）</td><td>kVp或mAs太低；底片過期</td><td>增加曝光參數</td></tr>
<tr><td class="td-k">Dark image（影像太黑）</td><td>過度曝光；顯影過度</td><td>降低曝光參數；調整顯影時間</td></tr>
</table>
`
    }
  ]
},
{
  label:"🛡️ 輻射防護", freq:"high",
  children:[
    {
      label:"劑量標準與防護原則", freq:"high",
      content:`
<h3>輻射劑量限制標準（ICRP）</h3>
<div class="num-grid">
<div class="num-card"><div class="big">1 mSv</div><div class="sm">一般民眾<br>年有效劑量上限</div></div>
<div class="num-card"><div class="big">20 mSv</div><div class="sm">職業人員<br>5年平均年劑量</div></div>
<div class="num-card"><div class="big">50 mSv</div><div class="sm">職業人員<br>單年最大允許劑量</div></div>
<div class="num-card"><div class="big">500 mSv</div><div class="sm">職業人員<br>肢體（手、腳）年劑量限</div></div>
</div>

<h3>ALARA 原則</h3>
<div class="box box-blue">
<strong>ALARA = As Low As Reasonably Achievable</strong><br>
在合理且可行的範圍內，盡量降低輻射劑量。<br>
三大方法：<strong>① 時間（縮短曝光）② 距離（增加與射線源距離）③ 屏蔽（鉛衣）</strong>
</div>

<h3>降低劑量的方法</h3>
<table>
<tr><th>方法</th><th>效果</th><th>說明</th></tr>
<tr><td class="td-k">矩形限光筒<br>（Rectangular collimator）</td><td class="td-r">降低約 <strong>60%</strong> 散射劑量</td><td>比圓形限光筒（Round）更能限制射線範圍</td></tr>
<tr><td class="td-k">F-speed film / Digital sensor</td><td>F速底片感光速度最快；劑量最低</td><td>數位感應器比膠片劑量更低（約50–80%）</td></tr>
<tr><td class="td-k">長焦距（長筒）</td><td>影像更準確；散射較少</td><td>20cm 長筒優於 10cm 短筒</td></tr>
<tr><td class="td-k">鉛圍裙 + 甲狀腺護套</td><td>保護重要器官</td><td class="td-r">孕婦必用；兒童必用；成人也應使用</td></tr>
<tr><td class="td-k">平行法（Paralleling technique）</td><td>影像更準確；可能需較少重拍</td><td>減少因失真重拍造成的額外劑量</td></tr>
</table>

<h3>X 光拍攝的適應症評估</h3>
<ul class="n">
<li>X光應有明確的臨床適應症（Justified）</li>
<li>不應常規全口X光（Full mouth series）</li>
<li>兒童：應更謹慎選擇適應症（發育中組織更敏感）</li>
<li>孕婦：非緊急情況下避免；必要時穿戴鉛衣</li>
<li class="td-r">輻射最敏感的組織：骨髓、性腺、甲狀腺、晶狀體、乳腺</li>
</ul>
`
    }
  ]
},
{
  label:"📱 CBCT（錐狀射束電腦斷層）", freq:"mid",
  children:[
    {
      label:"CBCT 適應症與比較", freq:"mid",
      content:`
<h3>CBCT vs 傳統 CT vs 全景片</h3>
<table>
<tr><th>項目</th><th>CBCT</th><th>傳統 CT（MSCT）</th><th>全景片</th></tr>
<tr><td class="td-k">影像維度</td><td>3D</td><td>3D</td><td>2D</td></tr>
<tr><td class="td-k">輻射劑量</td><td>中等（比MSCT低）</td><td>高（最高）</td><td>低（最低）</td></tr>
<tr><td class="td-k">軟組織評估</td><td>差</td><td>好</td><td>差</td></tr>
<tr><td class="td-k">骨骼解析度</td><td class="td-g">極佳</td><td>好</td><td>中等</td></tr>
<tr><td class="td-k">費用</td><td>中等</td><td>高</td><td>低</td></tr>
</table>

<h3>CBCT 的牙科適應症</h3>
<ul class="n">
<li class="td-r"><strong>植牙規劃</strong>：評估骨量、骨質、重要解剖構造（IAN、上顎竇）</li>
<li><strong>阻生齒評估</strong>：精確判斷與IAN的關係（替代全景片的重要工具）</li>
<li><strong>顎骨病灶三維評估</strong>：囊腫、腫瘤範圍</li>
<li><strong>正顎手術規劃</strong>：3D 骨骼分析</li>
<li><strong>矯正</strong>：牙根吸收評估、阻生犬齒定位</li>
<li><strong>根管治療</strong>：複雜根管解剖、根尖周病灶評估</li>
<li><strong>TMJ 評估</strong>：骨性變化（但MRI評估軟組織更佳）</li>
<li><strong>外傷評估</strong>：骨折位置和移位程度</li>
</ul>

<h3>CBCT 的限制</h3>
<ul class="n">
<li>金屬artifact（金屬偽影）：金屬修復體造成影像干擾</li>
<li>軟組織解析度差（不如MRI或傳統CT）</li>
<li>劑量仍高於傳統口內片</li>
<li>需要專業解讀（全視野CBCT顯示許多頭頸部結構）</li>
</ul>
<div class="img-row">

</div>
`
    }
  ]
}
];

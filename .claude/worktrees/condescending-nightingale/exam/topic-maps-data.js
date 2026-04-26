const TOPIC_MAPS = {
  "ya3": {
    "nodes": [
      {
        "id": "基礎醫學與倫理",
        "label": "基礎醫學與倫理",
        "count": 84
      },
      {
        "id": "根尖手術與再治療",
        "label": "根尖手術與再治療",
        "count": 32
      },
      {
        "id": "根管治療與器械",
        "label": "根管治療與器械",
        "count": 82
      },
      {
        "id": "植牙學",
        "label": "植牙學",
        "count": 42
      },
      {
        "id": "牙周治療與手術",
        "label": "牙周治療與手術",
        "count": 88
      },
      {
        "id": "牙周疾病與診斷",
        "label": "牙周疾病與診斷",
        "count": 84
      },
      {
        "id": "牙髓診斷與病理",
        "label": "牙髓診斷與病理",
        "count": 75
      },
      {
        "id": "牙體復形與窩洞",
        "label": "牙體復形與窩洞",
        "count": 106
      },
      {
        "id": "牙齒外傷處理",
        "label": "牙齒外傷處理",
        "count": 27
      },
      {
        "id": "複合樹脂與材料",
        "label": "複合樹脂與材料",
        "count": 42
      },
      {
        "id": "黏著與美學修復",
        "label": "黏著與美學修復",
        "count": 58
      }
    ],
    "edges": [
      {
        "source": "基礎醫學與倫理",
        "target": "牙髓診斷與病理",
        "label": "診斷基礎"
      },
      {
        "source": "基礎醫學與倫理",
        "target": "牙周疾病與診斷",
        "label": "診斷基礎"
      },
      {
        "source": "基礎醫學與倫理",
        "target": "植牙學",
        "label": "治療倫理"
      },
      {
        "source": "基礎醫學與倫理",
        "target": "牙體復形與窩洞",
        "label": "倫理考量"
      },
      {
        "source": "牙髓診斷與病理",
        "target": "根管治療與器械",
        "label": "治療指引"
      },
      {
        "source": "牙髓診斷與病理",
        "target": "根尖手術與再治療",
        "label": "治療指引"
      },
      {
        "source": "牙髓診斷與病理",
        "target": "牙齒外傷處理",
        "label": "外傷診斷"
      },
      {
        "source": "根管治療與器械",
        "target": "根尖手術與再治療",
        "label": "進階處理"
      },
      {
        "source": "根管治療與器械",
        "target": "牙體復形與窩洞",
        "label": "開髓修復"
      },
      {
        "source": "根尖手術與再治療",
        "target": "牙周治療與手術",
        "label": "周髓病變"
      },
      {
        "source": "牙周疾病與診斷",
        "target": "牙周治療與手術",
        "label": "治療依據"
      },
      {
        "source": "牙周疾病與診斷",
        "target": "植牙學",
        "label": "植體評估"
      },
      {
        "source": "牙周治療與手術",
        "target": "植牙學",
        "label": "軟硬組織"
      },
      {
        "source": "牙體復形與窩洞",
        "target": "複合樹脂與材料",
        "label": "材料應用"
      },
      {
        "source": "牙體復形與窩洞",
        "target": "黏著與美學修復",
        "label": "進階修復"
      },
      {
        "source": "複合樹脂與材料",
        "target": "黏著與美學修復",
        "label": "材料基礎"
      },
      {
        "source": "複合樹脂與材料",
        "target": "牙齒外傷處理",
        "label": "外傷修復"
      },
      {
        "source": "黏著與美學修復",
        "target": "牙齒外傷處理",
        "label": "美學重建"
      }
    ]
  },
  "ya4": {
    "nodes": [
      {
        "id": "T1",
        "label": "全身性疾病與急症",
        "count": 45
      },
      {
        "id": "T2",
        "label": "口腔外科基礎與麻醉",
        "count": 81
      },
      {
        "id": "T3",
        "label": "口腔病理與腫瘤",
        "count": 117
      },
      {
        "id": "T4",
        "label": "唇顎裂與正顎手術",
        "count": 45
      },
      {
        "id": "T5",
        "label": "唾液腺疾病",
        "count": 29
      },
      {
        "id": "T6",
        "label": "拔牙學與併發症",
        "count": 46
      },
      {
        "id": "T7",
        "label": "放射影像判讀",
        "count": 85
      },
      {
        "id": "T8",
        "label": "放射線原理與技術",
        "count": 92
      },
      {
        "id": "T9",
        "label": "植牙外科",
        "count": 22
      },
      {
        "id": "T10",
        "label": "顎顏面外傷與骨折",
        "count": 52
      },
      {
        "id": "T11",
        "label": "顳顎關節與顏面疼痛",
        "count": 56
      },
      {
        "id": "T12",
        "label": "骨骼代謝與發育疾病",
        "count": 18
      },
      {
        "id": "T13",
        "label": "齒源性感染與藥物",
        "count": 32
      }
    ],
    "edges": [
      {
        "source": "T1",
        "target": "T2",
        "label": "麻醉風險"
      },
      {
        "source": "T1",
        "target": "T3",
        "label": "疾病影響"
      },
      {
        "source": "T1",
        "target": "T5",
        "label": "疾病影響"
      },
      {
        "source": "T1",
        "target": "T6",
        "label": "治療考量"
      },
      {
        "source": "T1",
        "target": "T9",
        "label": "治療考量"
      },
      {
        "source": "T1",
        "target": "T10",
        "label": "急症處理"
      },
      {
        "source": "T1",
        "target": "T11",
        "label": "鑑別診斷"
      },
      {
        "source": "T1",
        "target": "T12",
        "label": "影響發育"
      },
      {
        "source": "T1",
        "target": "T13",
        "label": "用藥考量"
      },
      {
        "source": "T2",
        "target": "T4",
        "label": "手術基礎"
      },
      {
        "source": "T2",
        "target": "T5",
        "label": "手術基礎"
      },
      {
        "source": "T2",
        "target": "T6",
        "label": "手術基礎"
      },
      {
        "source": "T2",
        "target": "T9",
        "label": "手術基礎"
      },
      {
        "source": "T2",
        "target": "T10",
        "label": "手術基礎"
      },
      {
        "source": "T2",
        "target": "T11",
        "label": "手術治療"
      },
      {
        "source": "T2",
        "target": "T13",
        "label": "感染控制"
      },
      {
        "source": "T3",
        "target": "T7",
        "label": "影像診斷"
      },
      {
        "source": "T3",
        "target": "T5",
        "label": "唾液腺腫"
      },
      {
        "source": "T3",
        "target": "T12",
        "label": "骨病變"
      },
      {
        "source": "T3",
        "target": "T13",
        "label": "感染併發"
      },
      {
        "source": "T4",
        "target": "T7",
        "label": "術前影像"
      },
      {
        "source": "T4",
        "target": "T12",
        "label": "發育異常"
      },
      {
        "source": "T5",
        "target": "T7",
        "label": "影像診斷"
      },
      {
        "source": "T6",
        "target": "T7",
        "label": "術前影像"
      },
      {
        "source": "T6",
        "target": "T9",
        "label": "植牙相關"
      },
      {
        "source": "T7",
        "target": "T8",
        "label": "技術基礎"
      },
      {
        "source": "T7",
        "target": "T10",
        "label": "診斷工具"
      },
      {
        "source": "T7",
        "target": "T11",
        "label": "診斷工具"
      },
      {
        "source": "T7",
        "target": "T12",
        "label": "評估工具"
      },
      {
        "source": "T7",
        "target": "T13",
        "label": "診斷工具"
      },
      {
        "source": "T9",
        "target": "T12",
        "label": "骨質評估"
      },
      {
        "source": "T9",
        "target": "T13",
        "label": "術後感染"
      },
      {
        "source": "T10",
        "target": "T11",
        "label": "創傷相關"
      },
      {
        "source": "T10",
        "target": "T13",
        "label": "術後感染"
      },
      {
        "source": "T13",
        "target": "T5",
        "label": "感染擴散"
      }
    ]
  },
  "ya5": {
    "nodes": [
      {
        "id": "全口義齒",
        "label": "全口義齒",
        "count": 152
      },
      {
        "id": "咬合學與顳顎關節",
        "label": "咬合學與顳顎關節",
        "count": 168
      },
      {
        "id": "固定義齒",
        "label": "固定義齒",
        "count": 83
      },
      {
        "id": "植牙贋復",
        "label": "植牙贋復",
        "count": 28
      },
      {
        "id": "活動義齒設計",
        "label": "活動義齒設計",
        "count": 164
      },
      {
        "id": "牙科材料學",
        "label": "牙科材料學",
        "count": 82
      },
      {
        "id": "臨床基礎與倫理",
        "label": "臨床基礎與倫理",
        "count": 43
      }
    ],
    "edges": [
      {
        "source": "咬合學與顳顎關節",
        "target": "全口義齒",
        "label": "咬合建立"
      },
      {
        "source": "咬合學與顳顎關節",
        "target": "固定義齒",
        "label": "咬合設計"
      },
      {
        "source": "咬合學與顳顎關節",
        "target": "植牙贋復",
        "label": "咬合考量"
      },
      {
        "source": "咬合學與顳顎關節",
        "target": "活動義齒設計",
        "label": "咬合調整"
      },
      {
        "source": "牙科材料學",
        "target": "全口義齒",
        "label": "材料選用"
      },
      {
        "source": "牙科材料學",
        "target": "固定義齒",
        "label": "材料特性"
      },
      {
        "source": "牙科材料學",
        "target": "植牙贋復",
        "label": "植體材料"
      },
      {
        "source": "牙科材料學",
        "target": "活動義齒設計",
        "label": "材料應用"
      },
      {
        "source": "臨床基礎與倫理",
        "target": "全口義齒",
        "label": "臨床倫理"
      },
      {
        "source": "臨床基礎與倫理",
        "target": "咬合學與顳顎關節",
        "label": "診斷倫理"
      },
      {
        "source": "臨床基礎與倫理",
        "target": "固定義齒",
        "label": "治療原則"
      },
      {
        "source": "臨床基礎與倫理",
        "target": "植牙贋復",
        "label": "病人福祉"
      },
      {
        "source": "臨床基礎與倫理",
        "target": "活動義齒設計",
        "label": "照護原則"
      },
      {
        "source": "全口義齒",
        "target": "活動義齒設計",
        "label": "義齒設計"
      },
      {
        "source": "全口義齒",
        "target": "植牙贋復",
        "label": "植體支撐"
      },
      {
        "source": "全口義齒",
        "target": "固定義齒",
        "label": "贋復方式"
      },
      {
        "source": "固定義齒",
        "target": "植牙贋復",
        "label": "植體贋復"
      },
      {
        "source": "固定義齒",
        "target": "活動義齒設計",
        "label": "贋復選擇"
      },
      {
        "source": "植牙贋復",
        "target": "活動義齒設計",
        "label": "植體輔助"
      }
    ]
  }
};
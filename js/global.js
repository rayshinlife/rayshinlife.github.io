var jpmap_collector = [];
var collector = [];
const all_data = {
  "_Guava_": {
    "en": "Guava",
    "tw": "番石榴",
    "cn": "番石榴",
    "ja": "石榴 (ざくろ)",
    "plant": [],
    "cook": [],
    "process": []
  }, 
  "_Kiwifruit_": {
    "en": "Kiwifruit",
    "tw": "奇異果",
    "cn": "猕猴桃",
    "ja": "キウイ",
    "plant": [],
    "cook": [],
    "process": []
  }, 
  "_Longan_": {
    "en": "Longan",
    "tw": "龍眼/桂圓",
    "cn": "龙眼/桂圆",
    "ja": "竜眼 (りゅうがん)",
    "plant": [],
    "cook": [],
    "process": [
      {
        "name": "龍眼乾",
        "url": "https://youtu.be/loVHIyp0ACU"
      }
    ]
  }, 
  "_Papaya_": {
    "en": "Papaya",
    "tw": "木瓜",
    "cn": "番木瓜",
    "ja": "パパイヤ",
    "plant": [],
    "cook": [],
    "process": []
  }, 
  "_Pomelo_": {
    "en": "Pomelo",
    "tw": "柚子",
    "cn": "柚",
    "ja": "ザボン",
    "plant": [
      {
        "name": "文旦柚種植",
        "url": "https://youtu.be/x9yle9OTsew"
      },{
        "name": "柚子茶&柚香清潔劑",
        "url": "https://youtu.be/G1gwwiC1P5k"
      }
    ],
    "cook": [],
    "process": []
  }, 
  "_Strawberry_": {
    "en": "Strawberry",
    "tw": "草莓",
    "cn": "草莓",
    "ja": "苺 (いちご)",
    "plant": [],
    "cook": [],
    "process": []
  }, 
  "_Oranges_": {
    "en": "Oranges",
    "tw": "柳丁",
    "cn": "柳橙",
    "ja": "ネーブル",
    "plant": [],
    "cook": [],
    "process": [
      {
        "name": "糖漬&巧克力柳橙片",
        "url": "https://youtu.be/IjAtyH5ak8o"
      }
    ]
  },
  "_Lemons_": {
    "en": "Lemons",
    "tw": "檸檬",
    "cn": "柠檬",
    "ja": "レモン",
    "plant": [],
    "cook": [],
    "process": []
  }, 
  "_Pineapple_": {
    "en": "Pineapple",
    "tw": "鳳梨",
    "cn": "菠萝",
    "ja": "パイナップル",
    "plant": [],
    "cook": [],
    "process": [
      {
        "name": "釀鳳梨酒",
        "url": "https://youtu.be/VQ1wd84ImDk"
      },{
        "name": "鳳梨冰茶",
        "url": "https://youtu.be/T2SrVOWQg50"
      },{
        "name": "鳳梨豆醬",
        "url": "https://youtu.be/xqk-tOx6Y8o"
      }
    ]
  }, 
  "_Mandarin_Orange_": {
    "en": "Mandarin Orange",
    "tw": "橘子",
    "cn": "橘子",
    "ja": "オレンジ",
    "plant": [],
    "cook": [],
    "process": []
  }, 
  "_Dragon_Fruit_": {
    "en": "Dragon Fruit",
    "tw": "火龍果",
    "cn": "火龙果",
    "ja": "ドラゴンフルーツ",
    "plant": [
      {
        "name": "火龍果種植教學",
        "url": "https://youtu.be/nigCANV4Ocw"
      },{
        "name": "火龍果種植紀錄",
        "url": "https://youtu.be/Ghg0g0UMsQw"
      }
    ],
    "cook": [],
    "process": []
  }, 
  "_Banana_": {
    "en": "Banana",
    "tw": "香蕉",
    "cn": "香蕉",
    "ja": "バナナ",
    "plant": [
      {
        "name": "香蕉催熟法",
        "url": "https://youtu.be/EWB55EIY_MU"
      }
    ],
    "cook": [],
    "process": []
  }, 
  "_Green_Apple_": {
    "en": "Green Apple",
    "tw": "青蘋果",
    "cn": "青苹果",
    "ja": "青りんご",
    "plant": [],
    "cook": [],
    "process": [
      {
        "name": "青蘋果果膠",
        "url": "https://youtu.be/QsXan7MOrBM"
      }
    ]
  }, 
  "_Grape_": {
    "en": "Grape",
    "tw": "葡萄",
    "cn": "葡萄",
    "ja": "葡萄 (ぶどう)",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Bitter_Cucumber_": {
    "en": "Bitter Cucumber",
    "tw": "苦瓜",
    "cn": "苦瓜",
    "ja": "ツルレイシ",
    "plant": [
      {
        "name": "綠苦瓜種植教學",
        "url": "https://youtu.be/NWQXF4fsMcw"
      },{
        "name": "綠苦瓜第2春教學",
        "url": "https://youtu.be/gWT-9HiohTo"
      }
    ],
    "cook": [
      {
        "name": "沖繩苦瓜雜炒",
        "url": "https://youtu.be/vumnbJY4xCU"
      }
    ],
    "process": []
  }, 
  "_Mustard_Leaf_": {
    "en": "Mustard Leaf",
    "tw": "芥菜",
    "cn": "芥菜",
    "ja": "カラシナ",
    "plant": [],
    "cook": [],
    "process": [
      {
        "name": "梅乾菜",
        "url": "https://youtu.be/bcYYlL4xEbA"
      },{
        "name": "酸菜",
        "url": "https://youtu.be/WThI1AeCHbg"
      }
    ]
  }, 
  "_Sweet_Pepper_": {
    "en": "Sweet Pepper",
    "tw": "甜椒",
    "cn": "彩椒",
    "ja": "ピーマン",
    "plant": [],
    "cook": [],
    "process": []
  }, 
  "_Chinese_Chive_Flower_Stalk_": {
    "en": "Chinese Chive (Flower Stalk)",
    "tw": "韭菜花",
    "cn": "韭花",
    "ja": "ハナニラ",
    "plant": [],
    "cook": [],
    "process": []
  }, 
  "_Tomato_": {
    "en": "Tomato",
    "tw": "番茄",
    "cn": "西紅柿",
    "ja": "トマト",
    "plant": [
      {
        "name": "蕃茄隧道式棚架",
        "url": "https://youtu.be/KCGn68iNTww"
      }
    ],
    "cook": [],
    "process": [
      {
        "name": "紫蘇梅醃漬蕃茄",
        "url": "https://youtu.be/LUi6--XrHi8"
      }
    ]
  }, 
  "_Winter_Melon_": {
    "en": "Winter Melon",
    "tw": "冬瓜",
    "cn": "冬瓜",
    "ja": "トウガン",
    "plant": [],
    "cook": [],
    "process": [
      {
        "name": "冬瓜茶",
        "url": "https://youtu.be/-EicKDsTdZw"
      },{
        "name": "蔭冬瓜",
        "url": "https://youtu.be/e22B8GvDO1g"
      }
    ]
  }, 
  "_Chinese_Chive_": {
    "en": "Chinese Chive",
    "tw": "韭菜",
    "cn": "韭菜",
    "ja": "ニラ",
    "plant": [
      {
        "name": "韭菜移植教學",
        "url": "https://youtu.be/jtF6WHs5pYQ"
      }
    ],
    "cook": [],
    "process": []
  }, 
  "_Chinese_Spinach_": {
    "en": "Chinese Spinach",
    "tw": "莧菜",
    "cn": "苋菜",
    "ja": "アマランス",
    "plant": [],
    "cook": [],
    "process": []
  }, 
  "_Radish_": {
    "en": "Radish",
    "tw": "白蘿蔔",
    "cn": "白萝卜",
    "ja": "ダイコン",
    "plant": [],
    "cook": [],
    "process": [
      {
        "name": "蘿蔔乾",
        "url": "https://youtu.be/kEKOhaiLe6k"
      },{
        "name": "純米蘿蔔糕",
        "url": "https://youtu.be/qyfiEENCmkA"
      }
    ]
  }, 
  "_Cucumber_": {
    "en": "Cucumber",
    "tw": "小黃瓜",
    "cn": "黃瓜",
    "ja": "胡瓜",
    "plant": [
      {
        "name": "小黃瓜種植",
        "url": "https://youtu.be/Wv6loe31VlU"
      }
    ],
    "cook": [],
    "process": [
      {
        "name": "醃脆瓜",
        "url": "https://youtu.be/yO_qMRihgdQ"
      }
    ]
  }, 
  "_Blanched_Chinese_Chive_": {
    "en": "Blanched Chinese Chive",
    "tw": "韭黃",
    "cn": "韭黄",
    "ja": "きにら",
    "plant": [],
    "cook": [],
    "process": []
  }, 
  "_Pumpkin_": {
    "en": "Pumpkin",
    "tw": "南瓜",
    "cn": "南瓜",
    "ja": "南瓜",
    "plant": [],
    "cook": [
      {
       "name": "南瓜粉蒸排骨",
        "url": "https://youtu.be/b9Jkk6kl3Rc"
      },{
        "name": "蛤蠣南瓜濃湯",
        "url": "https://youtu.be/oItU0GAqcWQ"
      }
    ],
    "process": [
    ]
  }, 
  "_Onion_": {
    "en": "Onion",
    "tw": "洋蔥",
    "cn": "洋葱",
    "ja": "タマネギ",
    "plant": [],
    "cook": [],
    "process": []
  }, 
  "_Carrot_": {
    "en": "Carrot",
    "tw": "紅蘿蔔",
    "cn": "胡萝卜",
    "ja": "人参",
    "plant": [],
    "cook": [],
    "process": []
  }, 
  "_Angled_Luffa_": {
    "en": "Angled Luffa",
    "tw": "絲瓜",
    "cn": "丝瓜",
    "ja": "糸瓜",
    "plant": [],
    "cook": [],
    "process": []
  }, 
  "_Eggplant_": {
    "en": "Eggplant",
    "tw": "茄子",
    "cn": "茄子",
    "ja": "ナス",
    "plant": [],
    "cook": [
      {
       "name": "涼拌茄子",
        "url": "https://youtu.be/0RMNxpAzhWk"
      }
    ],
    "process": [
    ]
  },
  "_Avocado_": {
    "en": "Avocado",
    "tw": "酪梨",
    "cn": "牛油果",
    "ja": "アボカド",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Mango_": {
    "en": "Mango",
    "tw": "芒果",
    "cn": "芒果",
    "ja": "マンゴー",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Garland_Chrysanthemum_": {
    "en": "Garland Chrysanthemum",
    "tw": "茼蒿",
    "cn": "茼蒿",
    "ja": "春菊 (しゅんぎく)",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Pea_": {
    "en": "Pea",
    "tw": "豌豆",
    "cn": "豌豆/青豆",
    "ja": "エンドウ",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Celery_": {
    "en": "Celery",
    "tw": "芹菜/西洋芹",
    "cn": "芹菜",
    "ja": "セロリ",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Passion_Fruit_": {
    "en": "Passion Fruit",
    "tw": "百香果",
    "cn": "鸡蛋果 ",
    "ja": "パッションフルーツ",
    "plant": [
     {
       "name": "滿天星百香果種植",
        "url": "https://youtu.be/fo-3CDl9sI4"
      }
    ],
    "cook": [],
    "process": [
     {
       "name": "滿天星百香果醬",
        "url": " https://youtu.be/p5EaaP7g5Mk"
      }
    ]
  },
  "_Spinach_": {
    "en": "Spinach",
    "tw": "菠菜",
    "cn": "菠菜",
    "ja": "ほうれん草",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Apple_": {
    "en": "Apple",
    "tw": "蘋果",
    "cn": "苹果",
    "ja": "りんご",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Grape_": {
    "en": "Grape",
    "tw": "葡萄",
    "cn": "葡萄",
    "ja": "ぶどう",
    "plant": [],
    "cook": [],
    "process": [
      {
       "name": "釀葡萄酒",
        "url": "https://youtu.be/EHOTLaG1lZ4"
      }
    ]
  },
  "_Peach_": {
    "en": "Peach",
    "tw": "水蜜桃",
    "cn": "水蜜桃",
    "ja": "桃 (もも) (ピーチ)",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Nectarine_": {
    "en": "Nectarine",
    "tw": "甜桃/油桃",
    "cn": "油桃",
    "ja": "ネクタリン",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Cherry_": {
    "en": "Cherry",
    "tw": "櫻桃",
    "cn": "樱桃",
    "ja": "さくらんぼ (チェリー)",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Pear_": {
    "en": "Pear",
    "tw": "梨",
    "cn": "梨",
    "ja": "梨 (なし)",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Potato_": {
    "en": "Potato",
    "tw": "馬鈴薯",
    "cn": "土豆",
    "ja": "じゃがいも",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Kale_": {
    "en": "Kale",
    "tw": "羽衣甘藍",
    "cn": "羽衣甘蓝",
    "ja": "ケール",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Chili_": {
    "en": "Chili",
    "tw": "辣椒",
    "cn": "辣椒",
    "ja": "チリ",
    "plant": [],
    "cook": [],
    "process": [
     {
       "name": "麻辣豆瓣醬",
        "url": "https://youtu.be/EHOTLaG1lZ4"
     },{
        "name": "XO醬",
        "url": "https://youtu.be/kckwa4asmlE"
      }
    ]
  },
  "_Chinese_kale_": {
    "en": "Chinese kale",
    "tw": "芥藍",
    "cn": "芥蓝",
    "ja": "カイラン",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Kidney_Bean_": {
    "en": "Kidney Bean",
    "tw": "菜豆",
    "cn": "菜豆",
    "ja": "インゲンマメ",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Cowpea_": {
    "en": "Cowpea",
    "tw": "豇豆",
    "cn": "豇豆",
    "ja": "ササゲ",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Kumquat_": {
    "en": "Kumquat",
    "tw": "金桔",
    "cn": "金桔",
    "ja": "きんかん",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Litchi_": {
    "en": "Litchi",
    "tw": "荔枝",
    "cn": "荔枝",
    "ja": "ライチー",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Indian_Jujube_": {
    "en": "Indian Jujube",
    "tw": "印度棗",
    "cn": "印度枣",
    "ja": "インドナツメ",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Green_tea_": {
    "en": "Green tea",
    "tw": "綠茶",
    "cn": "绿茶",
    "ja": "りょくちゃ",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Blackberry_": {
    "en": "Blackberry",
    "tw": "黑莓",
    "cn": "黑莓",
    "ja": "ブラックベリー",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Blueberry_": {
    "en": "Blueberry",
    "tw": "藍莓",
    "cn": "蓝莓",
    "ja": "ブルーベリー",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Raspberry_": {
    "en": "Raspberry",
    "tw": "覆盆子",
    "cn": "复盆子",
    "ja": "ラズベリー",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Grapefruit_": {
    "en": "Grapefruit",
    "tw": "葡萄柚",
    "cn": "葡萄柚",
    "ja": "グレープフルーツ",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Red_Grapes_": {
    "en": "Red Grapes",
    "tw": "紅葡萄/紅地球",
    "cn": "红葡萄",
    "ja": "赤ブドウ",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Red_Wine_": {
    "en": "Red Wine",
    "tw": "紅酒/葡萄酒",
    "cn": "紅酒",
    "ja": "赤ワイン",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Indian_Jujube_": {
    "en": "Indian Jujube",
    "tw": "印度棗",
    "cn": "印度枣",
    "ja": "インドナツメ",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Bok_Choy_": {
    "en": "Bok Choy",
    "tw": "小白菜",
    "cn": "青菜",
    "ja": "ちんげんさい",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Soy_Beans_": {
    "en": "Soy Beans",
    "tw": "黃豆/大豆",
    "cn": "大豆",
    "ja": "大豆 (だいず)",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Ginseng_": {
    "en": "Ginseng",
    "tw": "人蔘",
    "cn": "人参",
    "ja": "人参 (ニンジン)",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Maitake_Mushroom_": {
    "en": "Maitake Mushroom",
    "tw": "舞菇/舞茸",
    "cn": "舞茸",
    "ja": "舞茸 (まいたけ)",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Licorice_": {
    "en": "Licorice",
    "tw": "甘草",
    "cn": "甘草",
    "ja": "リコリス",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Turmeric_": {
    "en": "Turmeric",
    "tw": "薑黃",
    "cn": "姜黄",
    "ja": "ターメリック",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Nutmeg_": {
    "en": "Nutmeg",
    "tw": "肉荳蔻",
    "cn": "荳蔻",
    "ja": "ナツメグ",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Artichokes_": {
    "en": "Artichokes",
    "tw": "朝鮮薊",
    "cn": "朝鲜蓟",
    "ja": "アーティチョーク",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Lavender_": {
    "en": "Lavender",
    "tw": "薰衣草",
    "cn": "薰衣草",
    "ja": "ラベンダー",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Sea_Cucumber_": {
    "en": "Sea Cucumber",
    "tw": "海參",
    "cn": "海参",
    "ja": "ナマコ",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Tuna_": {
    "en": "Tuna",
    "tw": "鮪魚",
    "cn": "鲔鱼",
    "ja": "ツナ",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Parsley_": {
    "en": "Parsley",
    "tw": "荷蘭芹",
    "cn": "荷兰芹",
    "ja": "パセリ",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Garlic_": {
    "en": "Garlic",
    "tw": "蒜頭",
    "cn": "大蒜",
    "ja": "ニンニク",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Olive_Oil_": {
    "en": "Olive Oil",
    "tw": "橄欖油",
    "cn": "橄榄油",
    "ja": "オリーブオイル",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Grape_Seed_Oil_": {
    "en": "Grape Seed Oil",
    "tw": "葡萄籽油",
    "cn": "葡萄籽油",
    "ja": "グレープシードオイル",
    "plant": [],
    "cook": [],
    "process": []
  },
  "_Dark_Chocolate_": {
    "en": "Dark Chocolate",
    "tw": "黑巧克力",
    "cn": "黑巧克力",
    "ja": "ダークチョコレート",
    "plant": [],
    "cook": [],
    "process": []
  }
};

const jp_dict = {
  "北海道": 1,
  "青森県": 2,
  "岩手県": 3,
  "宮城県": 4,
  "秋田県": 5,
  "山形県": 6,
  "福島県": 7,
  "茨城県": 8,
  "栃木県": 9,
  "群馬県": 10,
  "埼玉県": 11,
  "千葉県": 12,
  "東京都": 13,
  "神奈川県": 14,
  "新潟県": 15,
  "富山県": 16,
  "石川県": 17,
  "福井県": 18,
  "山梨県": 19,
  "長野県": 20,
  "岐阜県": 21,
  "静岡県": 22,
  "愛知県": 23,
  "三重県": 24,
  "滋賀県": 25,
  "京都府": 26,
  "大阪府": 27,
  "兵庫県": 28,
  "奈良県": 29,
  "和歌山県": 30,
  "鳥取県": 31,
  "島根県": 32,
  "岡山県": 33,
  "広島県": 34,
  "山口県": 35,
  "徳島県": 36,
  "香川県": 37,
  "愛媛県": 38,
  "高知県": 39,
  "福岡県": 40,
  "佐賀県": 41,
  "長崎県": 42,
  "熊本県": 43,
  "大分県": 44,
  "宮崎県": 45,
  "鹿児島県": 46,
  "沖縄県": 47
};

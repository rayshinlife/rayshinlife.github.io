(function(col, data) {

    col.push({
      "title": "TW Fruit Pesticide",
      "tag": "fpest",
      "columns": ["繁體", "简体", "English", "日本語", "不合格率", "種植", "食譜", "加工"], 
      "data": [
        {
          "d": data["_Strawberry_"],
          "num": 14.0
        }, {
          "d": data["_Passion_Fruit_"],
          "num": 13.6
        }, {
          "d": data["_Mandarin_Orange_"],
          "num": 10.0
        },{
          "d": data["_Kumquat_"],
          "num": 8.7
        }, {
          "d": data["_Banana_"],
          "num": 7.7
        }, {
          "d": data["_Longan_"],
          "num": 7.3
        }, {
          "d": data["_Oranges_"],
          "num": 7.1
        }, {
          "d": data["_Lemons_"],
          "num": 7.1
        }, {
          "d": data["_Litchi_"],
          "num": 6.6
        }, {
          "d": data["_Indian_Jujube_"],
          "num": 6.5
        }
      ]
    });
  
  })(collector, all_data);
  

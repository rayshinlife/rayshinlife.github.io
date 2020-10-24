(function(col, data) {

    col.push({
      "title": "TW Veg Pesticide",
      "tag": "fpest",
      "columns": ["繁體", "简体", "English", "日本語", "不合格率", "種植", "食譜", "加工"], 
      "data": [
        {
          "d": data["_Celery_"],
          "num": 30.8
        }, {
          "d": data["_Pea_"],
          "num": 25.4
        }, {
          "d": data["_Radish_"],
          "num": 16.7
        }, {
          "d": data["_Chili_"],
          "num": 15.9
        }, {
          "d": data["_Chinese_Chive_"],
          "num": 15.8
        }, {
          "d": data["_Chinese_kale_"],
          "num": 14.8
        }, {
          "d": data["_Spinach_"],
          "num": 14.6
        }, {
          "d": data["_Garland_Chrysanthemum_"],
          "num": 14.3
        }, {
          "d": data["_Kidney_Bean_"],
          "num": 14.1
        }, {
          "d": data["_Cowpea_"],
          "num": 13.2
        }
      ]
    });
  
  })(collector, all_data);
  

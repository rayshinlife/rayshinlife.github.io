(function(col, data) {

    col.push({
      "title": "Fruit Pesticide",
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
        }
      ]
    });
  
  })(collector, all_data);
  
(function(col, data) {

  col.push({
    "title": "US Pesticide",
    "tag": "uspest",
    "columns": ["繁體", "简体", "English", "日本語", "種植", "食譜", "加工"], 
    "data": [
      {
        "d": data["_Strawberry_"]
      }, {
        "d": data["_Spinach_"]
      }, {
        "d": data["_Kale_"]
      }, {
        "d": data["_Nectarine_"]
      }, {
        "d": data["_Apple_"]
      }, {
        "d": data["_Grape_"]
      }, {
        "d": data["_Peach_"]
      }, {
        "d": data["_Cherry_"]
      }, {
        "d": data["_Pear_"]
      }, {
        "d": data["_Tomato_"]
      }, {
        "d": data["_Celery_"]
      }, {
        "d": data["_Potato_"]
      }
    ]
  });

})(collector, all_data);
  

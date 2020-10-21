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
      }
    ]
  });

})(collector, all_data);
  
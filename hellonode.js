var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var filteredList = [];
fs.readdir(dir, function callback (err, list) {
  for (var i = 0; i < list.length; i ++) {
    if ("." + process.argv[3] == path.extname(list[i])) {
      console.log(list[i]);
    }
  }
});

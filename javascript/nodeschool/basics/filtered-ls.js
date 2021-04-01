var path = require('path');
var fs = require('fs');

var directoryName = process.argv[2];
var extension = process.argv[3];

fs.readdir(directoryName, function(err, list) {
  for(var i = 0; i < list.length; i++) {
    var file = list[i];
    if(path.extname(file) === ('.' + extension)) {
      console.log(file);
    }
  }

});

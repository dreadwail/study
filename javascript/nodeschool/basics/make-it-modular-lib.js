var path = require('path');
var fs = require('fs');

module.exports = function(dirName, extension, callback) {
  fs.readdir(dirName, function(err, list) {
    if(err) {
      return callback(err);
    } else {
      var files = [];
      for(var i = 0; i < list.length; i++) {
        var file = list[i];
        if(path.extname(file) === ('.' + extension)) {
          files.push(file);
        }
      }
      callback(null, files);
    }
  });
};

var libFunc = require('./make-it-modular-lib');

var dirName = process.argv[2];
var extension = process.argv[3];

libFunc(dirName, extension, function(err, files) {
  if(err) {
    console.log('Something bad happened.', err);
  } else {
    for(var i = 0; i < files.length; i++) {
      console.log(files[i]);
    }
  }
});

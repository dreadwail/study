var http = require('http');

var urls = process.argv.slice(2, 5);
var outputs = ['','',''];
var done = [false, false, false];

function maybePrint() {
  if(done[0] && done[1] && done[2]) {
    console.log(outputs[0]);
    console.log(outputs[1]);
    console.log(outputs[2]);
  }
}

function retrieve(idx) {
  http.get(urls[idx], function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      outputs[idx] += data;
    });
    response.on('end', function() {
      done[idx] = true;
      maybePrint();
    });
  });
}

for(var idx = 0; idx < 3; idx++) {
  retrieve(idx);
}

var http = require('http');

var url = process.argv[2];
var output = '';

http.get(url, function(response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    output += data;
  });
  response.on('end', function() {
    console.log(output.length);
    console.log(output);
  });
});

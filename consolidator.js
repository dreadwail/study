var _ = require('underscore');
var readline = require('readline');
var graph = require('./lib/graph'); 

var graph = graph.graph();

readline.createInterface({
  input: process.stdin,
  output: function() {}
}).on('line', function(line) {
  var parts = line.split("\t");
  var from = parts[0];
  var to = parts[1];
  graph.connect(from, to);
}).on('close', function() {
  graph.remove_redundancies();
  _.each(graph.connections(), function(pair) {
    process.stdout.write(pair[0] + '\t' + pair[1] + '\n');
  });
});

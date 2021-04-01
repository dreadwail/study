var graph = require('../lib/graph');

exports.test_basic_redundancy_removal = function(test) {
  var testGraph = graph.graph();
  testGraph.connect('A', 'B');
  testGraph.connect('B', 'C');
  testGraph.remove_redundancies();
  test.deepEqual(testGraph.connections(), [
    [ 'A', 'C' ]
  ]);
  test.done();
};

exports.test_multipath_redundancies = function(test) {
  var testGraph = graph.graph();
  testGraph.connect('A', 'B');
  testGraph.connect('B', 'C');
  testGraph.connect('A', 'D');
  testGraph.connect('D', 'C');
  testGraph.remove_redundancies();
  test.deepEqual(testGraph.connections(), [
    [ 'A', 'C' ]
  ]);
  test.done();
};

exports.test_cyclic_redundancy = function(test) {
  var testGraph = graph.graph();
  testGraph.connect('A', 'B');
  testGraph.connect('B', 'C');
  testGraph.connect('C', 'D');
  testGraph.connect('D', 'A');
  testGraph.remove_redundancies();
  test.deepEqual(testGraph.connections(), []);
  test.done();
};

exports.test_multiple_outputs_not_redundant = function(test) {
  var testGraph = graph.graph();
  testGraph.connect('A', 'B');
  testGraph.connect('B', 'C');
  testGraph.connect('B', 'D');
  testGraph.remove_redundancies();
  test.deepEqual(testGraph.connections(), [
      [ 'A', 'B' ],
      [ 'B', 'C' ],
      [ 'B', 'D' ]
  ]);
  test.done();
};

exports.test_multiple_inputs_not_redundant = function(test) {
  var testGraph = graph.graph();
  testGraph.connect('A', 'C');
  testGraph.connect('B', 'C');
  testGraph.connect('C', 'D');
  testGraph.remove_redundancies();
  test.deepEqual(testGraph.connections(), [
      [ 'A', 'C' ],
      [ 'B', 'C' ],
      [ 'C', 'D' ]
  ]);
  test.done();
};

exports.test_multipass_redundancy_removal = function(test) {
  var testGraph = graph.graph();
  testGraph.connect('A', 'B');
  testGraph.connect('B', 'C');
  testGraph.connect('C', 'D');
  testGraph.connect('B', 'D');
  testGraph.connect('D', 'E');
  testGraph.connect('E', 'F');
  testGraph.connect('E', 'G');
  testGraph.connect('G', 'H');
  testGraph.connect('G', 'A');
  testGraph.remove_redundancies();
  test.deepEqual(testGraph.connections(), [
      [ 'E', 'F' ],
      [ 'E', 'G' ],
      [ 'G', 'H' ],
      [ 'G', 'E' ]
  ]);
  test.done();
};


var _ = require('underscore');

exports.graph = function() {

  var graph_node = function(value) {

    var parents = [];
    var children = [];

    return {
      value: function() {
        return value;
      },
      parents: function() {
        return parents;
      },
      children: function() {
        return children;
      },
      connect_from: function(other) {
        if(!_.contains(parents, other) && other != this) {
          parents.push(other);
        }
      },
      connect_to: function(other) {
        if(!_.contains(children, other) && other != this) {
          children.push(other);
          other.connect_from(this);
        }
      },
      disconnect_from: function(other) {
        parents = _.without(parents, other);
      },
      disconnect_to: function(other) {
        children = _.without(children, other);
        other.disconnect_from(this);
      },
      reset: function() {
        var self = this;
        _.each(parents, function(p) { p.disconnect_to(self); });
        _.each(children, function(c) { c.disconnect_from(self); });
      }
    };

  };

  var nodes = {};
  var roots = [];

  var node_for = function(val) {
    nodes[val] = nodes[val] || graph_node(val);
    return nodes[val];
  };

  var is_redundant = function(node) {
    return node.parents().length == 1 && node.children().length == 1;
  };

  var remove_redundant_node = function(node) {
    var parent_node = node.parents()[0];
    var child_node = node.children()[0];
    parent_node.connect_to(child_node);
    parent_node.disconnect_to(node);
    node.reset();
    roots = _.without(roots, node);
  };

  return {
    connect: function(from, to) {
      node_for(from).connect_to(node_for(to));
      if(!_.contains(roots, node_for(from))) {
        roots.push(node_for(from));
      }
    },
    remove_redundancies: function() {
      var removed = [];
      _.each(nodes, function(n) {
        if(is_redundant(n)) {
          remove_redundant_node(n);
          removed.push(n);
        }
      });
      if(removed.length > 0) {
        this.remove_redundancies();
      }
    },
    connections: function() {
      var flattened = [];
      _.each(roots, function(root) {
        _.each(root.children(), function(child) {
          flattened.push([root.value(), child.value()]);
        });
      });
      return flattened;
    },
  };

};

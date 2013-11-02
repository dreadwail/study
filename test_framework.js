//a poor mans javascript unit testing framework for my experiments
var fail = function(msg) {
  var ex = {
    name: "AssertFailure",
    message: msg // || "Expression is falsey: " + exp
  };
  console.log(ex.message);
  throw ex;
};

var pass = function(msg) {
  console.log(msg || "pass");
};

var assert = function(exp, msg) {
  if(!exp) {
    fail(msg || "Expression is falsey: " + exp);
  } else {
    pass();
  }
};

var assertEquals = function(expected, actual) {
  assert(expected == actual, "Expected: " + expected + ", Actual: " + actual);
};

var assertNotEquals = function(notExpected, actual) {
  assert(expected != actual, "Not expected: " + expected + ", Actual: " + actual);
};

var assertThrows = function(func) {
  try {
    func();
    fail("Function did not throw.");
  } catch(e) {
    pass();
  }
};

var assertDoesntThrow = function(func) {
  try {
    func();
    pass();
  } catch(e) {
    fail("Function threw an exception: " + e.name + " " + e.message);
  }
};

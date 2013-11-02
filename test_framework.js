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

var assertTrue = function(exp, msg) {
  if(!exp) {
    fail(msg || "Expression is falsey: " + exp);
  } else {
    pass();
  }
};

var assertFalse = function(exp, msg) {
  assertTrue(!exp, "Expression is truthy: " + exp);
};

var assertEquals = function(expected, actual) {
  assertTrue(expected == actual, "Expected: " + expected + ", Actual: " + actual);
};

var assertNotEquals = function(notExpected, actual) {
  assertTrue(expected != actual, "Not expected: " + expected + ", Actual: " + actual);
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

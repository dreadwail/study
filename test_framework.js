//a poor mans javascript unit testing framework for my experiments

(function() {

  var runData = {};

  var reset = function() {
    runData.tests = [];
    runData.failures = [];
    runData.passes = 0;
  };
  reset();

  var getCallerLineNumber = function() {
    try {
      throw Error('');
    } catch(e) {
      var callerLine = e.stack.split("\n")[5];
      return callerLine.slice(callerLine.indexOf("at ") + 2, callerLine.length);
    }
  };

  var fail = function(msg, line) {
    runData.failures.push({
      name: "AssertFailure",
      message: msg,
      line: line
    });
  };

  var pass = function() {
    runData.passes += 1;
  };

  var report = function() {
    for(var i = 0; i < runData.failures.length; i++) {
      var failure = runData.failures[i];
      console.log(failure.name, failure.message);
      console.log(failure.line);
    }
    console.log("Passed: " + runData.passes + ", Failed: " + runData.failures.length);
  };

  window.Assert = {
    runTests: function() {
      for(var i = 0; i < runData.tests.length; i++) {
        runData.tests[i]();
      }
      report();
      reset();
    },
    assertTrue: function(exp, msg) {
      var lineNumber = getCallerLineNumber();
      runData.tests.push(function() {
        if(!exp) {
          fail(msg || "Expression is falsey: " + exp, lineNumber);
        } else {
          pass();
        }
      });
    },
    assertFalse: function(exp, msg) {
      this.assertTrue(!exp, "Expression is truthy: " + exp);
    },
    assertEquals: function(expected, actual) {
      this.assertTrue(expected == actual, "Expected: " + expected + ", Actual: " + actual);
    },
    assertNotEquals: function(notExpected, actual) {
      this.assertTrue(expected != actual, "Not expected: " + expected + ", Actual: " + actual);
    },
    assertThrows: function(func) {
      var lineNumber = getCallerLineNumber();
      runData.tests.push(function() {
        try {
          func();
          fail("Function did not throw.", lineNumber);
        } catch(e) {
          pass();
        }
      });
    },
    assertDoesntThrow: function(func) {
      var lineNumber = getCallerLineNumber();
      runData.tests.push(function() {
        try {
          func();
          pass();
        } catch(e) {
          fail("Function threw an exception: " + e.name + " " + e.message, lineNumber);
        }
      });
    }
  };

})();


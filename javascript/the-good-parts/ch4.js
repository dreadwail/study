(function() {

  var functionObject = function() {
    return this;
  };

  Assert.assertEquals(functionObject, functionObject.prototype.constructor);

  var testObject = {
    method: functionObject
  };

  //method invocation pattern
  Assert.assertEquals(testObject, testObject.method());

  //function invocation pattern
  Assert.assertEquals(window, functionObject());

  //constructor invocation pattern
  var ConstructorFunction = function() {
    this.someProp = "foo";
  };
  ConstructorFunction.prototype.getSomeProp = function() {
    return this.someProp;
  };
  var instance = new ConstructorFunction();
  Assert.assertEquals("foo", instance.someProp);
  Assert.assertEquals("foo", instance.getSomeProp());

  var OtherConstructorFunction = function() {
    return {
      foo: "bar"
    }
  };
  Assert.assertEquals("bar", (new OtherConstructorFunction()).foo);

  //apply invocation pattern
  Assert.assertEquals(testObject, functionObject.apply(testObject));

  //recursion
  var fib = function fib(index) {
    if(index == 0 || index == 1) {
      return 1;
    }
    return fib(index - 1) + fib(index - 2);
  };
  Assert.assertEquals(8, fib(5));

  //js without tail call optimization requires manual work
  var iterativeFib = function(index) {
    var twoAgo = 1;
    var oneAgo = 1;
    var answer = 1;
    for(var i = 0; i <= index; i++) {
      if(i >= 2) {
        answer = oneAgo + twoAgo;
        twoAgo = oneAgo;
        oneAgo = answer;
      }
    }
    return answer;
  };

  Assert.assertEquals(8, iterativeFib(5));

  //closure
  var maker = function(foo, bar) {
    return {
      getFoo: function() {
        return foo;
      },
      getBar: function() {
        return bar;
      }
    };
  };
  var made = maker("one", "two");
  Assert.assertEquals("one", made.getFoo());
  Assert.assertEquals("two", made.getBar());

  var stateMaker = function() {
    var level = 0;
    return {
      increment: function() {
        level += 1;
      },
      getLevel: function() {
        return level;
      }
    };
  };
  var state = stateMaker();
  Assert.assertEquals(0, state.getLevel());
  state.increment();
  Assert.assertEquals(1, state.getLevel());

  var badMaker = function() {
    var things = [];
    for(var i = 0; i < 10; i++) {
      things[i] = function() {
        return i;
      };
    }
    return things;
  };
  var bad = badMaker();
  for(var i = 0; i < 10; i++) {
    Assert.assertEquals(10, bad[i]());
  };

  //callbacks
  var doer = function(onFinish) {
    var result = 42;
    onFinish(result);
  };
  doer(function(result) {
    Assert.assertEquals(42, result);
  });

  //cascade
  var cascade = {
    value: 1,
    init: function(x) {
      this.value = x;
      return this;
    },
    x2: function() {
      this.value *= 2;
      return this;
    },
    add: function(x) {
      this.value += x;
      return this;
    },
    subtract: function(x) {
      this.value -= x;
      return this;
    }
  };
  cascade
    .init(2)
    .x2()
    .add(3)
    .subtract(1);
  Assert.assertEquals(6, cascade.value);

  //curry
  var addMaker = function(x) {
    return function(arg) {
      return arg + x;
    };
  };
  var add1 = addMaker(1);
  Assert.assertEquals(4, add1(3));
  
})();

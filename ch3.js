(function() {

  var testObject = {
    foo: "one",
    bar: "two",
    baz: "three",
    buz: function () {
      return "four";
    }
  };

  // enumeration and type checking
  assertEquals("string", typeof testObject.foo);
  assertEquals("string", typeof testObject.bar);
  assertEquals("string", typeof testObject.baz);
  assertEquals("function", typeof testObject.buz);

  for(propName in testObject) {
    if(typeof testObject[propName] !== 'function') {
      assertEquals("string", typeof testObject[propName]);
    }
  }

  // retrieval, safe retrieval, defaults
  assertEquals(testObject["bar"], testObject.bar);
  assertEquals("default biz", testObject.biz || "default biz");
  assertThrows(function() {
    testObject.biz.bazzle;
  });
  assertDoesntThrow(function() {
    testObject.biz && testObject.biz.bazzle;
  });

  //javascript objects are pass by reference
  var foo = {};
  var bar = foo;
  foo.prop = "derp";
  assertEquals("derp", bar.prop);

  //Augmenting javascript with an Object.create method. I gather this exists in some implementations of javascript but
  //not all. 
  if(typeof Object.create !== 'function') {
    Object.create = function(parentObj) {
      var Obj = function() {};
      Obj.prototype = parentObj;
      return new Obj();
    };
  }

  var superObj = {};
  var subObj = Object.create(superObj);
  superObj.superProp = "foo";
  assertEquals("foo", subObj.superProp);

  assertFalse(subObj.hasOwnProperty("superProp"));
  assertTrue(superObj.hasOwnProperty("superProp"));

  assertEquals("two", testObject.bar);
  delete testObject.bar;
  assertEquals(undefined, testObject.bar);

})();

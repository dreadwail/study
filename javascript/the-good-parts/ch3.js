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
  Assert.assertEquals("string", typeof testObject.foo);
  Assert.assertEquals("string", typeof testObject.bar);
  Assert.assertEquals("string", typeof testObject.baz);
  Assert.assertEquals("function", typeof testObject.buz);

  for(propName in testObject) {
    if(typeof testObject[propName] !== 'function') {
      Assert.assertEquals("string", typeof testObject[propName]);
    }
  }

  // retrieval, safe retrieval, defaults
  Assert.assertEquals(testObject["bar"], testObject.bar);
  Assert.assertEquals("default biz", testObject.biz || "default biz");
  Assert.assertThrows(function() {
    testObject.biz.bazzle;
  });
  Assert.assertDoesntThrow(function() {
    testObject.biz && testObject.biz.bazzle;
  });

  //javascript objects are pass by reference
  var foo = {};
  var bar = foo;
  foo.prop = "derp";
  Assert.assertEquals("derp", bar.prop);

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
  Assert.assertEquals("foo", subObj.superProp);

  Assert.assertFalse(subObj.hasOwnProperty("superProp"));
  Assert.assertTrue(superObj.hasOwnProperty("superProp"));

  Assert.assertEquals("two", testObject.bar);
  delete testObject.bar;
  Assert.assertEquals(undefined, testObject.bar);

})();

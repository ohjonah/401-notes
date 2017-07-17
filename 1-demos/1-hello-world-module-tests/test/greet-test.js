'use strict';

// bring in two different modules
// 1. the module you want to test
const greet = require('../lib/greet.js');
const assert = require('assert');

// describe is only used to format the output in console, i.e. what we are testing
describe('Greet Module', function() {
  // # says it's a method in that file
  describe('#sayHey', function() {
    it('should return hey jonah!', function() {
      var result = greet.sayHey('jonah');
      assert.ok(result === 'hey jonah!', 'not equal to hey jonah!');
    });
    it('should throw a missing name error', function() {
      assert.throws(function() {
        greet.sayHey();
      }, 'error not thrown');
    });
  });

  describe('#sayBye', function() {
    it('should return see ya later!', function() {
      var bye = greet.sayBye();
      assert.ok(bye === 'see ya later!', 'not equal to see ya later!');
    });
  });
});

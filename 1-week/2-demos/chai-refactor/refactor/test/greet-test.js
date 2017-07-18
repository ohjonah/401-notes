'use strict';

// bring in two different modules
// 1. the module you want to test
const greet = require('../lib/greet.js');
const expect = require('chai').expect;

// describe is only used to format the output in console, i.e. what we are testing
describe('Greet Module', function() {
  // # says it's a method in that file
  describe('#sayHey', function() {
    it('should return hey jonah!', function() {
      var result = greet.sayHey('jonah');
      expect(greet).to.have.property('sayHey');
      expect(greet.sayHey).to.be.a('function');
      expect(greet).to.be.an('object');
      expect(result).to.equal('hey jonah!');
      expect(result).to.be.a('string');
    });
    it('should throw a missing name error', function() {
      var result = greet.sayHey;
      expect(result).to.throw(Error);
    });
  });

  describe('#sayBye', function() {
    it('should return see ya later!', function() {
      var bye = greet.sayBye();
      expect(bye).to.equal('see ya later!');
      expect(bye).to.be.a('string');
    });
  });
});

'use strict';

module.exports= exports = {};

exports.sayHey = function(name) {
  // every parameter you put in, now you check it
  if (arguments.length === 0) throw new Error('Name not provided!');

  return(`hey ${name}!`);
};

exports.sayBye = function() {
  console.log('see ya later!');
};

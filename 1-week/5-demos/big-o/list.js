'use strict';

// for...key...in => for objects
// allows us to get a dynamic set of properties
// gives us length as well

// we add prototypes so that it doesn't automatically run when you instantiate the object

function List() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
}

List.prototype.copy = function() {
  let result = new List();

  for (let key in this) {
    result[key] = this[key];
  }
  return result;
};

List.prototype.push = function(value) {
  let result = this.copy();

  result[result.length++] = value;
  return result;
};

List.prototype.pop = function() {
  let result = this.copy();
  let popVal = this[this.length - 1];

  result = delete this[this.length - 1];
  this.length = this.length - 1;

  return popVal;
};

List.prototype.forEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

List.prototype.map = function(callback, mappedArr=[], currentIndex=0) {
  if (currentIndex >= this.length) return new List(...mappedArr);
  mappedArr.push(callback(this[currentIndex], currentIndex, this));
  return this.map(callback, mappedArr, currentIndex + 1);
};

let nums = new List(1, 2, 3, 4, 8, 10, 13);

// console.log('copied list:', nums.copy());
// console.log('push method:', nums.push('ab'));
// console.log('pop method:', nums.pop());
// console.log(nums);
//
// nums.forEach(function(n) {
//   console.log('each iteration:', n);
// });

console.log(nums.map((x) => x + 1));





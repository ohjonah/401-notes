'use strict';

// array has an N of 4
var nums = [1, 2, 3, 4];

// O(n)
function contains(input, find) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === find) return true;
  }
  return false;
}

console.log('contains 2:', contains(nums, 2));
console.log('contains 32:', contains(nums, 37));


// object has an N of 5
var colors = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  white: '#ffffff',
  black: '000000'
};

// O(1)
function match(input, find) {
  if (input[find]) return true;
  return false;
}

console.log('matches red:', match(colors, 'red')); // return true
console.log('matches purple:', match(colors, 'purple')); // return false


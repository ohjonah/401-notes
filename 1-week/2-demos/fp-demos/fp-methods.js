'use strict';

// map

function map(arr, callback) {
  if (!arr) throw new Error('array not provided');
  if (!callback) throw new Error('callback not provided');

  return Array.prototype.map.call(arr, callback);
}

map([1, 2, 3, 4], function(n) { console.log(n); });

// filter

function filter(arr, callback) {
  if (!arr) throw new Error('array not provided');
  return Array.prototype.filter.call(arr, callback);
}

filter([1, 2, 3, 4], function(n) { console.log(n !== 2); });


// concat
function concat(arr1, arr2) {
  if (!arr1) throw new Error('no array provided');
  if (!arr2) throw new Error('no array provided');

  return Array.prototype.concat.apply(arr1, arr2);
}

concat([1, 3, 5], [2, 4, 6]);

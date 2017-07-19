'use strict';

// callback demo
var someCallback = function(data) {
  console.log('got some data:', data);
};

var useCallback = function(cb) {
  cb('data that I wanted to get');
};

useCallback(someCallback);


// callback with error handling
var someCallback = function(err, data) {
  if (err) throw err;
  console.log('got some data:', data);
};

var useCallback = function(cb) {
  cb(null, 'the data that I wanted to get');
};

useCallback(someCallback);


// callback with simulated error
var someCallback = function(err, data){
  if (err) throw err;
  console.log('got some data:', data);
};

var useCallback = function(cb) {
  var sampleError = new Error('throwing a simulated error');
  cb(sampleError, 'the data that I wish I got');
};

useCallback(someCallback);

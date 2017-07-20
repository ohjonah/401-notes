'use strict';

const EE = require('events');
const ee = new EE();

// creates
ee.on('customEvent', function() {
  console.log('hello from my custom event');
});

ee.on('anotherCustomEvent', function() {
  ee.emit('customEvent');
  console.log('we also fired anotherCustomEvent');
});

ee.emit('anotherCustomEvent');
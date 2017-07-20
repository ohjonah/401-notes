'use strict';

const EE = require('events');
const ee = new EE();

// creates
ee.on('customEvent', function() {
  console.log('hello from my custom event');
});

// fires customEvent
ee.emit('customEvent');


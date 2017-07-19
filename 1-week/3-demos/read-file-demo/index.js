'use strict';

// 1 - native node modules, i.e. fs et. al
// 2 - npm modules, i.e. express et. al
// 3 - custom app modules, i.e. greet.js et. al
// 4 - module constant, i.e. port
// 5 - module logic, e.g. the code

const fs = require('fs');

fs.readFile(`${__dirname}/data/data.txt`, function(err, data) {
  if (err) throw err;
  console.log('content of my file:', data.toString());
});

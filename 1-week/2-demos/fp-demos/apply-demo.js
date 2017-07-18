'use strict';

let person = {
  name: 'brian',
  age: 32,
  oldify: function(a, b) {
    console.log(this.age * a * b);
  }
};

function youngify(a, b) {
  console.log('youngify age:', this.age / a / b);
  console.log('this:', this);
}

youngify.apply(person, [2, 4]);

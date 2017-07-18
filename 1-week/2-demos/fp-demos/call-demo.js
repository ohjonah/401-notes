'use strict';

let person = {
  name: 'brian',
  age: 32,
  speak: function() {
    return `${this.name} is ${this.age} years old.`;
  }
};

// console.log('person obj:', person);
// console.log('speak method:', person.speak());
console.log('new context:', person.speak.call({ name: 'john', age: 44}));
console.log('person obj:', person);

/*
person.speak gets context from person object. name = brian, age = 32.
call method says, 'lets call speak' with a specified context, without having to modify the initial object.
*/

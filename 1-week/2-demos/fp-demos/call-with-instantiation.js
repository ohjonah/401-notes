'use strict';

function Tracker(inventory) {
  this.inventory = inventory;
}

function Import(products) {
  Tracker.call(this, products);
  this.import_date = new Date();
}

let shirts = new Import({
  count: 2,
  release_date: new Date('2017-10-15'),
  products: [
    {
      brand: 'nike',
      type: 'shirt',
      size: 'sm',
      color: 'blue'
    },
    {
      brand: 'nike',
      type: 'shorts',
      size: 'sm',
      color: 'black'
    }
  ]
});

console.log('imported items:', shirts);

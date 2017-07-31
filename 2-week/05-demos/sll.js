'use strict';

function Node(val) {
  this.next = null;
  this.val = val;
}

function SinglyLinkedList() {
  this.head = null;
}


// SinglyLinkedList.prepend(10);
// let node = new Node(10)
// node = { next = null, val = 10}
// SLL = { head = null { next = null, val = 10}};
// if (!null) => head = { next = null, val = 10};
// SO -> head = { next = null, val = 10}


SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  console.log('this:', this);

  if (!this.head) {
    this.head = node;
    return this;
  }

  node.next =  this.head;
  this.head = node;
  return this;
};
//
// SinglyLinkedList.prototype.append = function(val) {
//   let node = new Node(val);
//   let last = null; // we need to find
//
//
//   if (!this.head) {
//     this.head = node;
//     return this;
//   }
//
//   _setLastNode(this.head);
//   last.next = node;
//   return this;
//
//   function _setLastNode(node) {
//     if (!node) return;
//     last = node;
//     _setLastNode(node.next);
//   }
// };

const sll = new SinglyLinkedList();

// sll.prepend(2);
sll.prepend(1);


console.log('new linked list:', sll.head.next);
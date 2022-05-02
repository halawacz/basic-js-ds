const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      let current = this.head;

      // move to the last node
      while (current.next) {
        current = current.next;
      }

      current.next = new Node(value);
    }

    this.length++;
  }

  removeElementByValue(k) {
    if (!k) {
      return;
    }
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.value === k) {
        if (current === this.head) {
          this.head = this.head.next;
          current = this.head;
          this.length--;
        } else {
          previous.next = current.next;
          current = current.next;
          this.length--;
        }
      } else {
        previous = current;
        current = current.next;
      }
    }
  }
}

let myList = new LinkedList();
myList.add(42);
myList.add(3);
myList.add(99);
console.log(myList.head.value);
console.log(myList.length);
myList.removeElementByValue(3);
console.log("\n after deletion");
console.log(myList.head.value);
console.log(myList.length);
console.log(myList);

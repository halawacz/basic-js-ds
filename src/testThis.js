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
class ListNode {
  constructor(x) {
    this.x = x;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(x) {
    if (this.length === 0) {
      this.head = new ListNode(x);
    } else {
      let current = this.head;

      // move to the last node
      while (current.next) {
        current = current.next;
      }

      current.next = new ListNode(x);
    }

    this.length++;
  }

  toArray() {
    let head = this.head;
    let res = [];
    while (head) {
      res.push(head.x);
      head = head.next;
    }
    return res;
  }
}

function removeKFromList(l, k) {
  if (!l || !k) {
    return;
  }
  let current = l.head;
  let previous = null;

  while (current) {
    if (current.x === k) {
      if (current === l.head) {
        l.head = l.head.next;
        current = l.head;
        l.length--;
      } else {
        previous.next = current.next;
        current = current.next;
        l.length--;
      }
    } else {
      previous = current;
      current = current.next;
    }
  }
  return l;
}

module.exports = {
  removeKFromList,
};

let myList = new LinkedList();
myList.add(1);
myList.add(2);
myList.add(3);
console.log(myList.toArray());
console.log("\n after deletion");
console.log(removeKFromList(myList, 3));

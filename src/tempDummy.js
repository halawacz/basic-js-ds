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
}

function removeKFromList(l, k) {
  if (!l || !k) {
    return;
  }

  let dummy = new ListNode(-1);
  dummy.next = l;
  let previous = dummy;
  let current = l;

  while(current) {
      if(current.value === k) {
          previous.next = current.next;
          current = current.next

      } else {
          previous = current;
          current = current.next;
      }
  }

  return dummy.next;

}

module.exports = {
  removeKFromList,
};

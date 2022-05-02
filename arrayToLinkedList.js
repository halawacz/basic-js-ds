class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}
let arr1 = [3, 8, 52, 6];
console.log(convertArrayToList(arr1));

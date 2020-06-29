const ListNode = require('./common').ListNode;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const r = new ListNode();
  let l = r;
  let carry = 0;
  while (l1 && l2) {
    let and = l1.val + l2.val + carry;
    if (and >= 10) {
      and = and - 10;
      carry = 1;
    }
    const node = new ListNode(and);
    l.next = node;

    l = l.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  const left = l1 != null ? l1 : l2 != null ? l2 : null;
  if (left) {
    left.val += carry;
    r.next = left;
  }

  return r.next;
};

module.exports = addTwoNumbers;

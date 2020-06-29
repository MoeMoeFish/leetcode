
const ListNode = function(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
};

const toList = function(arr) {
  const r = new ListNode();
  let l = r;
  for (const v of arr) {
    const node = new ListNode(v);
    l.next = node;
    l = l.next;
  }

  return r.next;
};

const toArray = function(n) {
  const arr = [];
  while (n) {
    arr.push(n.val);
    n = n.next;
  }

  return arr;
};

module.exports = {
  ListNode,
  toList,
  toArray
};


// 2. Add Two Numbers

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
    var r = {val: 0, next: null}, t = r, p = r, v = 0, x = 0;
    while (l1 || l2 || v !== 0 || x !== 0) {
        var n = 0;
        if (l1) { n += l1.val; l1 = l1.next; }
        if (l2) { n += l2.val; l2 = l2.next; }
        v = n + x;
        if (v - 10 >= 0) { v = v - 10; x = 1; }
        else { x = 0; }
        if (l1 || l2 || v !== 0 || x !== 0) {
            p = t;
            t.val = v; t.next = { next: null }
            t = t.next;
        }
    }
    p.next = null;
    return r;
};

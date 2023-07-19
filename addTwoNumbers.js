// https://leetcode.com/problems/add-two-numbers/submissions/

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
var addTwoNumbers = function(l1, l2, memo = 0) {
    if (!l1 && !l2 && !memo) return null;
    const val = (l1?.val || 0) + (l2?.val || 0) + memo;
    const node = addTwoNumbers(l1?.next, l2?.next, Math.floor(val / 10));
    return new ListNode(val % 10, node);
};

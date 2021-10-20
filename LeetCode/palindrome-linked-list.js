//Palindrome linked list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
  let values = [];
  let reversed = [];
  while (head) {
    values.push(head.val);
    reversed.unshift(head.val);
    head = head.next;
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== reversed[i]) {
      return false;
    }
  }
  return true;
};

var isPalindrome = function (head) {
  let current = head;
  let values = "";
  let reversed = "";
  while (current) {
    values += current.val;
    reversed = current.val + rev;
    current = current.next;
  }

  return values === reversed;
};

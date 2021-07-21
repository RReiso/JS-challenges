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
	while (head) {
		values.push(head.val);
		head = head.next;
	}
	let reversed = [...values].reverse();

	for (let i = 0; i < values.length; i++) {
		if (values[i] !== reversed[i]) {
			return false;
		}
	}
	return true;
};

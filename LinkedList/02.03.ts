/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 237
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

//----------------------------------------------------------------
// 1290
var getDecimalValue = function (head) {
  var arr = [];
  var cur = head;
  while (cur.next !== null) {
    arr.push(cur.val);
    cur = cur.next;
  }
  return parseInt(arr.join(""), 2);
};

//----------------------------------------------------------------

// 20

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  var slow = head;
  var fast = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (slow !== null && fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.val = slow.next.val;
  slow.next = slow.next.next;
  return head;
};

//------------------------------
// 19

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  var dummy = new ListNode(0, head);
  var slow = dummy;
  var fast = dummy;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};

//----------------------------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  var fast = head;
  var slow = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow.val;
};

//------------------------------

// 06

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const stack = [];
  while (head !== null) {
    stack.push(head.val);
    head = head.next;
  }
  return stack.reverse();
};

// ------------------------------
// 24

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head == null || head.next == null) return head;
  const last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};

//------------------------------

//876

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  var fast = head;
  var slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

//================================================================

//02.01  https://leetcode-cn.com/problems/remove-duplicate-node-lcci/

var removeDuplicateNodes = function (head) {
  if (head == null) return head;
  const temp = new Map();
  temp.set(head.val, true);
  while (head.next) {
    console.log("head", head, "head.next", head.next, "temp", temp);
    if (temp.has(head.next.val)) {
      head.next = head.next.next;
    } else {
      temp.set(head.next.val, true);
      head = head.next;
    }
  }
  return head;
};

// var removeDuplicateNodes = function(head) {
//     if (head == null) {
//         return head
//     }
//     let obj = {},node = head
//     obj[head.val] = true
//     while (node.next) {
//         if (obj[node.next.val]) { // 如果当前节点是重复的
//         node.next = node.next.next // 让prev的next直接指向cur的next，完成删除
//         } else {
//         obj[node.next.val]=true    // 当前节点是第一次出现，存储一下
//         node = node.next     // prev和cur都更新一下，跳到下一个
//         }
//     }
//     return head // 返回删除重复节点后的链表
// };

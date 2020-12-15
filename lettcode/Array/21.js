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
// var mergeTwoLists = function (l1, l2) {
//   if (l1 === null) {
//     return l2;
//   }
//   if (l2 === null) {
//     return l1;
//   }

//   if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//       l2.next = mergeTwoLists(l2)
//   }
// };

const sum = (count, pre) => {
  if (count === 0) return 0;
  return pre + count + sum(count - 1, 0);
};

const a = sum(4, 20);
console.log("sum", a);

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x - 1;

  while (left <= right) {
    let mid = (left + (right - left)) >> 1;
    if (mid * mid <= x) {
      left = mid + 1;
    } else if (mid * mid > x) {
      right = mid - 1;
    }
  }
  // return
  return left;
};

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
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) {
    return l2;
  }

  if (l2 == null) {
    return l1;
  }

  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

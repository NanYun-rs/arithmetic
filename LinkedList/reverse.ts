/*
 * @Author: yushengyu@58.com
 * @Date: 2021-01-26 23:50:40
 * @Last Modified by: yushengyu@58.com
 * @Last Modified time: 2021-01-27 09:49:41
 */

// 反转整个链表

const reverse = (head) => {
  if (head.next === null) return head;
  const last = reverse(head.next);
  // a-b-null -> head.next(b).next = head(a) b-a
  head.next.next = head;
  // head.next -> a.next = null a-null
  head.next = null;
  // b-a-null
  return last;
};

// 反转前N个节点 m<=length

var successor = null;

const reverseN = (head, n) => {
  if (n == 1) {
    successor = head.next;
    return head;
  }
  const last = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = successor;
  return last;
};

// 反转 [m,n]区间节点

const reverseBetween = (head, m, n) => {
  if (m === 1) {
    return reverseN(head, n);
  }

  head.next = reverseBetween(head.next, m - 1, n - 1);
  return head;
};



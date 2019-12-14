
// 1->2->3->4
function reverseList(head) {
  let prev = null
  let cur = head
  // 用来存储cur的下一个节点
  let temp = null
  while (cur) {
    temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  return prev
}



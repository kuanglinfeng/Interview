
// 给定一颗二叉树，判断是否是二叉平衡树

function Node(val) {
  this.val = val 
  this.left = this.right = null
}

let a = new Node('1')
let b = new Node('2')
let c = new Node('3')
let d = new Node('4')
let e = new Node('4')
let f = new Node('4')
a.left = b
a.right = c
c.right = d
d.right = e
e.right = f

function getDepth(root) {
  if (root === null) return 0
  if (root.left === null && root.right === null) {
    return 1
  }
  let leftDepth = getDepth(root.left)
  let rightDepth = getDepth(root.right)
  return  leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1
}

function isBalanceTree(root) {
  if (root === null) return true
  if (root.left === null && root.right === null) return true
  let leftDepth = getDepth(root.left)
  let rightDepth = getDepth(root.right)
  if (Math.abs(leftDepth - rightDepth) > 1) {
    return false
  } else {
    return isBalanceTree(root.left) && isBalanceTree(root.right)
  }
}

console.log(isBalanceTree(a));


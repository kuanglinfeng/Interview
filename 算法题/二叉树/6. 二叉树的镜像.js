// 二叉树的镜像定义：源二叉树 
//             a
//            /  \
//           b   c
//          / \  / \
//         d  e f  g
//         镜像二叉树
//             a
//            /  \
//           c   b
//          / \  / \
//         g  f e   d

// 得到一个二叉树的镜像
function mirrorTree(root) {
  if (root === null || root.left === null && root.right === null) return 
  let tempNode = root.right
  root.right = root.left
  root.left = tempNode
  if (root.left) mirrorTree(root.left)
  if (root.right) mirrorTree(root.right)
}

function Node(val) {
  this.val = val
  this.left = this.right = null
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
const g = new Node('g')

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g

function prevTravel(root) {
  if (root) {
    console.log(root.val)
    prevTravel(root.left)
    prevTravel(root.right)
  }
}


// a b d e c f g
prevTravel(a)
console.log("******************************************************")

mirrorTree(a)

// a c g f b e d
prevTravel(a)
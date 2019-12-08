//               a
//              / \
//             b   c
//            /   / \
//           d  e    f

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

a.left = b
a.right = c
b.left = d
c.left = e
c.right = f

// 深搜
function depthFirstSearch(root, target) {
  if (root === null) return false
  if (root.val === target) return true
  else return depthFirstSearch(root.left, target) || depthFirstSearch(root.right, target)
}

// 广搜（层次搜索）
function breadthFirstSearch(root, target) {

  function _breadthFirstSearch(nodeList, target) {
    if (nodeList.length === 0) return false
    const newNodeList = []
    for (let i = 0; i < nodeList.length; i++) {
      if (nodeList[i].val === target) {
        return true
      }
      if (nodeList[i].left) {
        newNodeList.push(nodeList[i].left)
      }
      if (nodeList[i].right) {
        newNodeList.push(nodeList[i].right)
      }
    }
    return _breadthFirstSearch(newNodeList, target)
  }

  return _breadthFirstSearch([root], target)
}

// 二叉树的深度优先遍历，也就是二叉树的先序遍历
function depthFirstTraversal(root) {
  if (root === null) return
  console.log(root.val)
  depthFirstTraversal(root.left)
  depthFirstTraversal(root.right)
}

// 二叉树的广度优先遍历，也就是二叉树的层次遍历
function breadthFirstTraversal(root) {

  function _breadthFirstTraversal(nodeList) {
    if (nodeList.length === 0) return
    const newNodeList = []
    for (let i = 0; i < nodeList.length; i++) {
      console.log(nodeList[i].val)
      if (nodeList[i].left) {
        newNodeList.push(nodeList[i].left)
      }
      if (nodeList[i].right) {
        newNodeList.push(nodeList[i].right)
      }
    }
    _breadthFirstTraversal(newNodeList)
  }

  _breadthFirstTraversal([root])
}


console.log(depthFirstSearch(a, 'd'))

depthFirstTraversal(a)

console.log(breadthFirstSearch(a, 'f'))

breadthFirstTraversal(a)


// letecode链接：https://leetcode-cn.com/problems/path-sum-ii/

// 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

// 说明: 叶子节点是指没有子节点的节点。

// 示例:
// 给定如下二叉树，以及目标和 sum = 22，

//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// 返回:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

function Node(val) {
  this.val = val
  this.left = null
  this.right = null
}

function pathSum(root, sum) {
  let res = []
  _pathSum(root, sum, res, [])
  return res
}

function _pathSum(root, sum, res, arr) {
  if (root === null) return
  arr.push(root.val)
  // 遍历到叶子节点 判断路径和是否匹配
  if (root.left === null && root.right === null && root.val === sum) {
    res.push([...arr])
  }
  _pathSum(root.left, sum - root.val, res, arr)
  _pathSum(root.right, sum - root.val, res, arr)
  // 回溯
  arr.pop()
}




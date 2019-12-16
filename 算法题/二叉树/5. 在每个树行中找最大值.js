// leetcode 515题，链接：https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/submissions/

// 输入: 

//           1
//          / \
//         3   2
//        / \   \  
//       5   3   9 

// 输出: [1, 3, 9]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (root === null) return []
  var nodeList = [root]
  var res = []
    
  function _large(nodeList, res) {
    if (nodeList.length === 0)  return

    var max = nodeList[0].val
    for (var i = 1; i < nodeList.length; i++) {
      if (nodeList[i].val > max) {
        max = nodeList[i].val
      }
    }
    res.push(max)
    var newNodeList = []
    for (var i = 0; i < nodeList.length; i++) {
      if (nodeList[i].left) {
        newNodeList.push(nodeList[i].left)
      }
      if (nodeList[i].right) {
        newNodeList.push(nodeList[i].right)
      }
    }
    _large(newNodeList, res)
  }

  _large(nodeList, res)
  return res
}
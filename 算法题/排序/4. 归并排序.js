const { createArr } = require('./util')

// 将两个有序数组合并成一个有序数组
// [1, 2, 3, 4] 
// [2, 4, 6]
function mergeTwoOrderedArr(arr1, arr2) {
  const arr = []
  while (0 < arr1.length && 0 < arr2.length) {
    if (arr1[0] <= arr2[0]) {
      arr.push(arr1.shift())
    } else {
      arr.push(arr2.shift())
    }
  }
  return [...arr, ...arr1, ...arr2]
}


// 划分数组
function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  // 递归划分成一个一个单项数组
  let arr1 = mergeSort(left)
  let arr2 = mergeSort(right)
  // 归并
  return mergeTwoOrderedArr(arr1, arr2)
}

const arr = createArr(20)
console.log(mergeSort(arr))
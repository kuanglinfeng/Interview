const { createArr, swap } = require('./util')

const arr = createArr(20)

function bubbleSort(arr) {
  let flag = false
  for (let i = 0; i < arr.length - 1; i++) {
    flag = true
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false
        swap(arr, j, j + 1)
      }
    }
    // 能稍微提升点排序速度
    if (flag) return arr
  }
  return arr
}

console.log(bubbleSort(arr))








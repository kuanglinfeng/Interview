const { createArr } = require('./util')

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let temp = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] >= temp; j--) {
        arr[j + 1] = arr[j]
      }
      // 跳出循环 arr[j] < arr[i] or j = -1
      arr[j + 1] = temp
    }
  }
  return arr
}

const arr = createArr(20)
console.log(insertSort(arr))
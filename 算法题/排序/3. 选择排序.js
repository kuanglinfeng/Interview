const { createArr, swap } = require('./util')

const arr = createArr(20)

function selectSort(arr) {
  let len = arr.length
  let min
  for (let i = 0; i < len - 1; i++) {
    min = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min !== i) {
      swap(arr, min, i)
    }
  }
  return arr
}

console.log(selectSort(arr))

const { createArr } = require('./util')

const arr = createArr(100)
function quickSort(arr) {
  function _quickSort(arr, low, high) {
    if (high > low) {
      let i = low
      let j = high
      let temp = arr[low]
      while (i < j) {
        while (i < j && arr[j] >= temp) {
          j--
        }
        arr[i] = arr[j]
        while (i < j && arr[i] <= temp) {
          i++
        }
        arr[j] = arr[i]
      }
      arr[i] = temp
      _quickSort(arr, low, i - 1)
      _quickSort(arr, i + 1, high)
      return arr
    }

  }
  return _quickSort(arr, 0, arr.length - 1)
}

console.log(quickSort(arr))








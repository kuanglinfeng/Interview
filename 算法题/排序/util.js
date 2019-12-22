
function createRandomNumber() {
  return Math.round(Math.random() * 1000)
}

function createArr(len) {
  len = len ? len : 10
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(createRandomNumber())
  }
  return arr
}

function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}





module.exports = {
  createArr,
  swap
}
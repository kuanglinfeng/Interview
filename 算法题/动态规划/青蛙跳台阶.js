// 题：青蛙可以一次跳1个台阶，也可以一次跳2个台阶，问：跳上n级台阶共有多少种跳法
function fibo(n) {
  if (n === 1) return 1
  if (n === 2) return 2
  return fibo(n - 1) + fibo(n - 2)
}

function jump(n) {
  const table = []
  function _jump(n) {
    if (table[n]) return table[n]
    if (n === 1) table[n] = 1
    else if (n === 2) table[n] = 2
    else table[n] = _jump(n - 1) + _jump(n - 2)
    return table[n]
  }
  return _jump(n)
}


console.log(jump(50))

// 没有使用动态规划优化，栈溢出了
console.log(fibo(50))





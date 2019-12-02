// 实现一个这样的函数
// add(1)(2)(3)(4)  // 10
// add(1, 2, 3)(4)  // 10
// add(1, 2)(3, 4)  // 10
// add(1)(2, 3, 4)  // 10
// ...

function add(a, b, c, d) {
  return a + b + c + d
}

// 这个函数起到固定参数个数的作用
function fixedParams(fn) {
  const transArr = Array.prototype.slice
  const _args = transArr.call(arguments, 1)
  return function () {
    return fn.apply(null, _args.concat(transArr.call(arguments, 0)))
  }
}

function curry(fn, len) {
  const transArr = Array.prototype.slice
  len = len || fn.length
  
  return function () {
    let _args = transArr.call(arguments)
    if (_args.length === len) {
      return fn.apply(null, _args)
    } else {
      const arr = [fn].concat(_args)
      return curry( fixedParams.apply(null, arr), len - _args.length )
    }
  }
}

// const newAdd = fixedParams(add, 1)
// 10
// console.log(newAdd(2, 3, 4))

const newAdd = curry(add)


// 10
console.log(newAdd(1)(2)(3)(4))
// 10
console.log(newAdd(1, 2)(3)(4))
// 10
console.log(newAdd(1, 2, 3)(4))
// 10
console.log(newAdd(1)(2, 3, 4))









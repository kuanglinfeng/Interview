
// 是函数fn具有防抖功能 
// 如果频繁调用fn，这个fn最终只会调用最后的那一次
function debounce(fn, gap) {
  var gap = gap || 2000
  var _args = Array.prototype.slice.call(arguments, 2)
  var timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(null, _args)
    }, gap)
  }
}








// 使fn具备节流（技能冷却）功能
function throttle(fn, gap) {
  var gap = gap || 2000
  var prevTime = new Date().getTime()
  var _args = Array.prototype.slice.call(arguments, 2)

  return function () {
    var curTime = new Date().getTime()
    if (curTime - prevTime >= gap) {
      fn.apply(null, _args)
      prevTime = curTime
    }
  }
}





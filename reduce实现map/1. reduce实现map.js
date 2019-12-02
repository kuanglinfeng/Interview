Array.prototype.myMap = function (fn, _this) {
  var _this = _this || null
  return this.reduce(function (prev, cur, index, array) {
    prev[index] = fn.call(_this, cur, index, array)
    return prev
  }, [])
}


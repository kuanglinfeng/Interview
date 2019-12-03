function deepClone(origin, map = new Map()) {
  if (typeof origin !== 'object') {
    return origin
  }
  const o = Array.isArray(origin) ? [] : {}

  if (map.get(origin)) return map.get(origin)
  else map.set(origin, o)

  for (let prop in origin) {
    if (origin.hasOwnProperty(prop)) {
      if (typeof origin[prop] === 'object') {
        o[prop] = deepClone(origin[prop], map)
      } else {
        // 这里为基本数据类型了
        o[prop] = origin[prop]
      }
    }
  }
  
  return o
}

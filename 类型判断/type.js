function type(target) {
  const map = {
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Boolean]': 'boolean',
    '[object Array]': 'array',
    '[object Object]': 'object',
    '[object Date]': 'date',
    '[object RegExp]': 'regexp',
    '[object Error]': 'error',
    '[object Symbol]': 'symbol'
  }
  // undefined null number string boolean object function ...
  if (target === null) return 'null'
  if (target === undefined) return 'undefined'
  return map[Object.prototype.toString.call(target)]
}

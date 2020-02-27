
// 实现一个EventHub（发布订阅模式实现的一种实例，EventHub可称之为事件中心）
class EventHub {

  constructor() {
    this.cache = {}
  }

  on(eventName, fn) {
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn)
  }

  emit(eventName, data) {
    (this.cache[eventName] || []).forEach(fn => fn(data))
  }

  // 取消订阅
  off(eventName, fn) {
    this.cache[eventName] = this.cache[eventName] || []
    let index = undefined
    // 把fn从this.cache[eventName]中删除掉
    for (let i = 0; i < this.cache[eventName].length; i++) {
      if (this.cache[eventName][i] === fn) {
        index = i
        break
      }
    }
    if (index !== undefined) {
      this.cache[eventName].splice(index, 1)
    }
  }
}

const eventHub = new EventHub()

const fn = (data) => {
  console.log(data)
}

eventHub.on('xxx', fn)

eventHub.emit('xxx', 'Hello')

eventHub.off('xxx', fn)

eventHub.emit('xxx', 'Hello')






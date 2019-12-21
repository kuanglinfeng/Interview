
// 实现一个EventHub（发布订阅模式实现的一种实例，EventHub可称之为事件中心）
class EventHub {
  constructor() {
    this.events = {}
  }
  // 添加监听事件
  on(type, fn) {
    if (!this.events[type]) {
      this.events[type] = [fn]
    } else {
      this.events[type].push(fn)
    }
  }
  // 触发事件
  trigger(type) {
    if (this.events[type] === undefined) {
      throw new Error(`${type} is not defined`)
    } else {
      this.events[type].forEach(item => item())
      return true
    }
  }
  // 移除监听事件
  off(type) {
    if (this.events[type]) {
      delete this.events[type]
    }
  }

  // 触发一次再移除
  once(type) {
    this.trigger(type) ? this.off(type) : null
  }
}

const o = new EventHub()

o.on('print', () => {
  console.log('flinn');
})

o.on('print', () => {
  console.log('king');
})

o.trigger('print')
// o.trigger('print')
console.log(o.events)
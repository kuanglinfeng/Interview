
// config对象的属性有：type、url、 data（get请求查询的数据, post请求发送的数据）、async（是否异步）、 success回调、fail回调
function ajax(config) {
  let { type, url, data, async, success, fail } = config
  type = type || 'GET'
  async = async || true
  data = data || null
  let xhr = null
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }
  if (type === 'GET') {
    let url = url + '?' + transObjToStr(data)
    xhr.open(type, url, async)
    xhr.send()
  } else {
    xhr.open(type, url, async)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    let data = transObjToStr(data)
    xhr.send(data)
  }
  xhr.onreadystatechange = function () {
    // readyState为4 表示整个请求过程已经完毕
    if (xhr.readyState === 4) {
      let status = xhr.status
      if (status === 200 && status < 300 || status === 304) {
        success(JSON.parse(xhr.responseText))
      } else {
        fail(status)
      }
    }
  }
}

function transObjToStr(obj) {
  if (obj === null) return null
  let arr = []
  for (let prop in obj) {
    let str = prop + '=' + obj[prop]
    arr.push(str)
  }
  return arr.join('&')
}


ajax({
  url: 'http://mock-api.com/DmgvxyKQ.mock/list',
  success(data) {
    console.log(data)
  },
  fail(status) {
    console.log(status);
  }
})







function ajax(config) {
  let { type, url, data, async, success, fail } = config
  type = type || 'GET'
  async = async || true
  data = data || null
  let url = null
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



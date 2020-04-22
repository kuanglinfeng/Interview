const http = require('http')
const fs = require('fs')
const p = require('path')

const server = http.createServer()
const publicDir = p.resolve(__dirname, 'public')

server.on('request', (request, response) => {
  let { method, url, headers } = request
  switch (url) {
    case '/': {
      response.setHeader('Content-Type', 'text/html; charset=utf-8')
      fs.readFile(p.resolve(publicDir, 'index.html'), (error, data) => {
        if (error)  throw error
        response.end(data.toString())
      })
      break
    }
    case '/signup': {
      // 用户访问注册页面 返回注册页面字符串
      if (method === 'GET') {
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        fs.readFile(p.resolve(publicDir, 'signup.html'), (error, data) => {
          if (error)  throw error
          response.end(data.toString())
        })
      }
      // 用户进行注册 返回JSON字符串 表达是否注册成功
      if (method === 'POST') {
        const data = []
        request.on('data', (chunk) => {
          data.push(chunk)
        })
        request.on('end', () => {
          const _data = Buffer.concat(data).toString()
          let strings = _data.split('&')
          let hash = {}
          strings.forEach(string => {
            let parts = string.split('=')
            let key = parts[0]
            let value = parts[1]
            hash[key] = value
          })
          let { email, password, confirm } = hash
          if (email.indexOf('@') === -1) {
            response.statusCode = 400
            response.write('{"status": -1, "message": "email is bad"}')
          } else if (password !== confirm) {
            response.statusCode = 400
            response.write('{"status": -1, "message": "password confirm is not same"}')
          } else {
            response.statusCode = 200
            response.write('{"status": 0, "message": "success"}')
          }
          response.end()
        })
        // response.end('{"message": "注册成功", "status": 200}')
      }
      break
    }
    case '/style.css': {
      response.setHeader('Content-Type', 'text/css; charset=utf-8')
      fs.readFile(p.resolve(publicDir, 'style.css'), (error, data) => {
        if (error)  throw error
        response.end(data.toString())
      })
      break
    }
    case '/main.js': {
      response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
      fs.readFile(p.resolve(publicDir, 'main.js'), (error, data) => {
        if (error)  throw error
        response.end(data.toString())
      })
      break
    }
  }
})

server.listen(7777, () => console.log('http://localhost:7777'))
# Cookie、Session、Cache-Control

Cookie、Session、Cache-Control都是http响应头

## cookie（曲奇饼干🍪）

运行demo：

node server.js

路由：
/signup：注册账号
/signin: 登录账号，成功后，自动跳转到首页

原理：

1. 服务器通过设置响应头`Set-Cookie`，来设置cookie，cookie就是一串字符串

2. 浏览器得到cookie后，每次请求都要带上cookie，客户端要在一段时间内保存这个cookie

3. 服务器读取cookie就知道登录用户的信息

问题：
1. 我在chrome登录得到了cookie，请问用Safari访问，会带上cookie吗？

no，cookie是跟着浏览器走的

2. cookie存在哪？

存在硬盘的一个文件里

3. cookie可以做假吗？

可以，可以在Set-Cookie设置HttpOnly来阻止js篡改cookie

4. cookie有有效期吗？

默认有效期：20min左右
后端可以强制设置有效期

5. cookie遵守同源策略吗？

部分遵守，和AJAX的同源策略稍有不同。
当请求qq.com下的资源时，浏览器会默认带上qq.com对于的cookie，不会带上baidu.com对于的cookie
当请求v.qq.com下的资源时，浏览器不仅会带上v.qq.com的cookie，还会带上qq.com的cookie
另外cookie还可以根据路径做限制，这个功能用得比较少。


## session（服务器上的hash）

- session的本质是一块内存（哈希，对象）

- session的存在是为了弥补cookie容易被篡改而引发的安全问题

比如：用户a的用户名为a，密码为1；用户a的用户名为b，密码为2

用户a登录成功后，可以查看自己的密码，同时他的用户名存在cookie中。

假若用户a改自己的cookie为用户名b，那么刷新浏览器后，它就能知道用户b的密码了。

- session的原理

1. 将session id（随机数）通过cookie发给客户端

2. 客户端访问服务器时，服务器读取session id

3. 服务器有一块内存（对象）保存了所有的session

4. 通过session id，我们可以得到对应用户的隐私信息，如：id、email

5. 这块内存（哈希表）就是服务上的所有session


## localStorage（浏览器上的hash）

1. localStorage跟http无关

2. http不会带上localStorage

3. 只有相同域名的页面才能互相读取localStorage

4. 每个域名localStorage最大存储量为5Mb左右（每个浏览器不一样）

5. 常用场景：记录有没有提示过用户，记录一些不敏感的信息，不能记录密码

6. 过期时间：理论上永久有效，除非用户清理缓存


## sessionStorage

1、2、3、4同上

5. sessionStorage在用户关闭页面后就失效

## 面试题

1. cookie和session的关系

session是依赖于cookie实现的

2. cookie和localStorage的区别

http请求会带上cookie，不会带上localStorage
  
cookie最大一般是4k，localStorage最大一般是5Mb左右

3. localStorage和sessionStorage区别

sessionStorage在用户关闭页面（会话结束）后就失效

localStorage可以持续有效

## 不基于cookie的session

原理：可以通过url的查询参数（query）+ localStorage来替代cookie

## http缓存

### cache-control（缓存控制）

后端通过设置响应头`Cache-Control`，可以缓存http请求 

max-age的单位是秒，表示缓存多久

`response.setHeader('Cache-Control', 'max-age=30')`

注意：

1. 首页(index.html)不要设置`Cache-Control`，因为如果连首页都被缓存了，用户没有办法获取所有的最新的资源

2. 一般设置html和css，可以设置10年；如果10年内要更新css和html，可以改变请求的url（比如加一个查询参数，或者文件名重新生成一个随机数），这样就会重新请求了


### Expires （缓存控制）

如果你设置了Cache-Control，那么Expires会被忽略

Expires响应头指定了一个日期/时间，在此之前，会读http缓存；在此之后，HTTP响应被认为是过时的，此时才会重新请求

`response.setHeader('Expires', 'Sun, 31 May 2020 02:11:38 GMT')`

### Cache-Control 和 Expires的区别

Cache-Control强调过多久过期，Expires强调什么时候过期

Expires设置的时间是用户计算机的本地时间，可以被更改。

一般使用Cache-Control来做http缓存


### ETag

MD5：是一个摘要算法，不是加密算法。

比如：你在下载某个资源的时候，如何知道这个资源没有被人篡改过呢？

假设有一个文件1.txt，里面的内容为11111

运行：md5 1.txt

结果为：fa8f294721ab3fbb37793c68ff2cf09b

现在将1.txt更改为11011

运行：md5 1.txt

结果为：5d991b9e4dc5e0515d8a8b026e95c482

md5算法的特点：如果两个资源差别很小，那么生成的md5字符串差别就越大

ETag：ETagHTTP响应头是资源的特定版本的标识符。这可以让缓存更高效，并节省带宽，因为如果内容没有改变，Web服务器不需要发送完整的响应。

代码演示ETag头的用法：

```js
if (path === '/js/main.js') {
  let string = fs.readFileSync('./js/main.js', 'utf8')
  response.setHeader('Content-Type', 'application/javascript;charset=utf8')
  let fileMd5 = md5(string)
  // 如果上一次的MD5值和当前的MD5是一样的
  if (request.headers['if-none-match'] === fileMd5) {
    // 只有响应头，告诉客户端拿以前的资源就好了，因为没有变化
    response.status = 304
  } else {
    // 有响应头，说明和上一次的MD5值不一样，需要重新返回新的资源给客户端
    response.setHeader('ETag', fileMd5)
    response.write(string)
  }
  response.end()
}
```

ETag和Cache-Control做缓存的区别：

ETag会发出请求，如果MD5一样就不下载；Cache-Control压根不会发请求


### If-Modified-Since

客户端还会通过If-Modified-Since头将先前服务器端发过来的最后修改时间戳发送给服务器，

服务器端通过这个时间戳判断客户端的页面是否是最新的，如果不是最新的，则返回最新的内容，如果是最新的，则返回304，客户端继续使用本地缓存。
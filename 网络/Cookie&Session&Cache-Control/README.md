# Cookie、Session、Cache-Control

Cookie、Session、Cache-Control都是http响应头

## cookie（曲奇饼干🍪）

运行demo：

node server.js

路由：
/signup：注册账号
/signin: 登录账号，成功后，自动跳转到首页

1. 服务器通过设置响应头`Set-Cookie`，来设置cookie

2. 浏览器得到cookie后，每次请求都要带上cookie

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


## cache-control（缓存控制）




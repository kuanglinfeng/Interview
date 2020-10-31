## 同源策略

问题：为什么form发请求不会有跨域的错误，而AJAX会有？

答：因为原页面用form提交到另一个域名之后，原页面的脚本无法获取新页面中的内容。
所以浏览器认为这是安全的。
而AJAX是可以读取响应内容的，因此浏览器不能允许你这样做。
如果你细心的话会发现，其实请求已经发送出了，你只是拿不到响应而已。
所以浏览器这个策略的本质是：一个域名的JS，在未经允许的情况下，不得读取另一个域名的内容。
但是，浏览器并不阻止你向另一个域名发送请求。

换个思路，如果你可以这样随意的访问别人的支付宝api，查看余额，那么别人还有什么安全和隐私可言

所以浏览器必须保证：只有协议、域名、端口一模一样才允许发AJAX请求。这就是浏览器的同源策略

所以，如果你不是xxx.com下面的js，你就不能向xxx.com发起AJAX请求，请求了你也拿不到响应
当然其它请求是可以的，如img、a、link、script等


1. http://baidu.com可以向http://www.baidu.com发AJAX请求吗？(域名不一致)

不可以

2. http://baidu.com:80可以向http://baidu.com:81AJAX请求吗？（端口不一致）

不可以

我如果是想用AJAX请求另一个域名呢？

可以和域名的后台打电话
比如我的域名是flinn.com，另一个域名是jack.com
现在我想获取jack.com域名下的一些数据，就可以和jack.com后台打个电话。
让他告诉浏览器，允许我访问。 这就是CORS

## CORS（Cross-origin resource sharing，跨域资源共享）

突破同源策略 === 跨域

CORS可以告诉浏览器，我俩是一家的，不要阻止他

相比于JSONP只能发送GET请求，这是一种比较好的跨域的方式

其实jack.com后端只需要在响应体里设置：

```js
response.setHeader('Access-Control-Allow-Origin', 'http://flinn.com')
```

这样flinn.com就可以访问了







## 如何发请求？

- 用form可以发请求，但是会刷新页面或者新开页面
- 用a可以发get请求，但是也会刷新页面或者新开页面
- 用img可以发get请求，但是只能以图片的形式展示
- 用link可以发get请求，但是只能以CSS、favicon的形式展示
- 用script可以发get请求，但是只能以脚本的形式运行

那么，有没有什么方式可以实现

1. get、post、put、delete请求都行
2. 想以什么形式展示就以什么形式展示

## 微软的突破

IE5率先在JS中引入ActiveX对象（API），使得JS可以直接发起HTTP请求。
随后，Mozilla、Safari、Opera也跟进了，取名XMLHttpRequest、并被纳入了W3C规范

## AJAX

Jesse James Garrett 将如下技术取名叫做AJAX：异步的JavaScript和XML

1. 使用XMLHttpRequest发请求
2. 服务器返回XML格式的字符串
3. JS解析XML，并更新局部页面

## 如何使用XMLHttpRequest

### JSON -- 一种新的数据格式语言

xml这种玩意用来表示数据格式实在是太繁琐了，当JSON这种新的数据格式出来后，xml自然就被淘汰了

1. JSON没有抄袭function和undefined
2. JSON的字符串首尾必须是 "
3. 对象的key必须是 "

JS VS JSON

undefined        没有
null              null
['a', 'b']        ["a", "b"]
function fn(){}   没有
{name: 'Flinn'}   {"name": "Flinn"}
'Flinn'            "Flinn"
var a = {}
a.sele = 'Flinn'   搞不定，没有变量
{__proto__}        没有原型链

有了这种数据格式，再配上浏览器的API，JSON.parse() 和 JSON.stringify()来转换，就很舒服了



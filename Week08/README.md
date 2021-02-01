学习笔记

浏览器

```javascript
URL--http--> HTML --parse--> DOM --css computing-->DOM with css --layout--> DOM with position --render--> Bitmap
```

有限状态机

```javascript
每一个状态都是一个机器
  在每一个机器里，我们可以做计算/存储/输出....
  所有的这些机器接受的输入是一致的
  状态机的每一个机器本身没有状态，如果我们用函数来表示的话，他应该是纯函数（无副作用）
每一个机器知道下一个状态
  每个机器都有确定的下一个状态(moore)
  每个机器根据输入决定下一个状态 (mealy)
JS中的有限状态机(mealy)
//每个函数是一个状态
function state(input){//函数参数就是输入
    //在函数中，可以自由地编写代码，处理每个状态的逻辑
    return next;//返回值作为下一个状态
}
//调用
while(input){
    //获取输入
    state=state(input);//把状态机的返回值作为下一个状态
}
```

```javascript
应用层
表示层
会话层                HTTP
传输层                 TCP
网络层                Internet
数据链路层             4G/5G/Wi-Fi
物理层

流                   包
端口                  IP地址
require("net")        libnet/labpcap
```

```javascript
第一步 HTTP请求总结
 设计一个HTTP请求的类
 content-type 是一个必要的字段，要有默认值
 body 是KV格式
 不同的content-type影响body的格式
```

```javascript
第二歩 send函数总结
在Request的构造器中收集必要的信息
设计一个send函数，把请求真实发送到服务器
send函数应该是异步的，所以返回Promise

```

```javascript
response Format
HTTP/1.1 200 OK
Content-Type:text/html
Date:".."
Connection:keep-alive
Transfer-Encoding:chunked

26
<html><body></body></html>
 0
```

```javascript
第三部 发送请求
设计支持已有的connection或者自己新建connection
收到数据传给parser
根据parser的状态resolve Promise
```

```javascript
第四步 ResponseParser总结
Response必须分段构造，所以我们要用一个ResponseParser来装配
ResponseParser分段处理ResponseText，我们用状态机来分析文本的结构
```

```javascript
第五步 BodyParser总结
Response的body可能根据Content-Type有不同的结构，因此我们会采用Parser的结构来解决问题
以TrunkedBodyParser为例，我们同样用状态机来处理body的格式
```


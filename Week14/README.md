学习笔记

| 对象       | 组件           |
| ---------- | -------------- |
| Properties | Properties     |
| Methods    | Methods        |
| Inherit    | Inherit        |
|            | Attribute      |
|            | Config & State |
|            | Event          |
|            | Lifecycle      |
|            | Children       |

Attribute

  Attribute强调描述性  property强调从属关系

```javascript
<a href="//m.taobao.com" />
    a.href// "http://m.taobao.com"
a.getAttribute("href")// "//m.taobao.com"
```

问题：properties和attribute应该等效吗？

如何设计组件状态

| Markup set | JS set | js change | User Input Change |           |
| ---------- | ------ | --------- | ----------------- | --------- |
| X          | O      | O         | ?                 | property  |
| O          | O      | O         | ?                 | attribute |
| X          | X      | X         | O                 | state     |
| X          | O      | X         | X                 | config    |



Children

Content型children与Template(可以遍历)型Children
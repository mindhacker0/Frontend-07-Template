学习笔记

HTML的定义：XML 和 SGML

DTD与XML namespace

https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd

https://www.w3.org/1999/xhtml/ 

合法元素

Element:<tagname>...</tagname>

Text:text

Comment:<!-- comments -->

DocumentType:<!Doctype html>

ProcessingInstruction:<?a 1?>

CDATA:<![CDATA[]]>

window

window.innerHeight,window.innerWidth

window.outerWidth,window.outerHeight

window.devicePixelRatio

window.screen

   window.screen.width

   window.screen.width

  window.screen.availWidth

  window.screen.availHeight

window.open("url","blank self","atrribute of this window")

moveTo(x,y)

moveBy(x,y)

resizeTo(x,y)

resizeBy(x,y)

DOM

| parentNode      | parentElement          |
| --------------- | ---------------------- |
| childNodes      | children               |
| firstChild      | firstElementChild      |
| lastChild       | lastElementChild       |
| nextSibling     | nextElementSibling     |
| previousSibling | previousElementSibling |

修改操作

  appendChild

  insertBefore

removeChild

replaceChild

高级操作

  compareDocumentPosition 是一个用于比较两个节点中关系的函数

  contains 检查一个节点是否包含另一个节点函数 

  isEqualNode 检查两个节点是否完全相同

  isSameNode 检查两个节点是否是同一个节点，实际上可以用 ===实现

  cloneNode 复制一个节点，如果参数为true，则会连同子 元素做深拷贝

 event

target.addEventListener(name,function,options);

options 

  Range API

var range  = new Range();

range.setStart(element,9)

range.setEnd(element,4)

var range = document.getSelection().getRangeAt(0)；

range.setStartBefore

range.setEndBefore

range.setStartAfter

range.setEndAfter

range.selectNode

range.selectNodeContents

var fragment = range.extractContents();

range.insertNode(document.createTextNode("aaaa")); 

  document.styleSheets

  document.styleSheets[0].cssRules

  document.styleSheets[0].insertRule("p{color:pink;}",0)

   document.styleSheets[0].removeRule(0)

Rule

CSSStyleRule

  selectorText String

  style K_V结构

getComputedStyle(elt,pseudoElt);

  elt  想要获取的元素

   pseudoElt 可选，伪元素

scroll

scrollTop 

scrollLeft

scrollWidth

scrollHeight

scroll(x,y)

scrollBy(x,y)

scrollIntoView()

window

  scrollX

  scrollY

scroll(x,y)

scrollBy(x,y)

layout

  getClientReacts()

  getBoundingClientRect()

标准化组织

khronos

  WebGL

ECMA

ECMAScript

WHATWG

HTML

W3C

webaudio

CG/WG
学习笔记
正常流排版
  收集盒进行
  计算盒在行中的排布
  计算行的排布
行模型
  基准线（1）line-top (2) text-top (3) base-line (4) text-bottom (5) line-bottom
BFC
  margin折叠
  BFC
  合并
Block
  Block container:里面有BFC的 
    能容纳正常流的盒，里面就有BFC，想想有哪些？
  Block-level Box:外面有BFC的
  Block Box = Block container + Block-level Box:里外都有BFC的
Block Container
  block
  linline-block
  table-cell
  flex item
  grid cell
  table-caption
Block-level Box
 Block level
   display:block
   display:flex
   display:table
   display:grid
   ...
 inline level
    display:inline-block
    display:inline-flex
    display:inline-table
    display:inline-grid
    ...
 display:run-in;
设立BFC
  floats
  absoultely positioned elements
  block containers(such as inline-blocks,table-cells,and table-captions)
  and block boxes with 'overflow' other than 'visible'
BFC合并
  block box && overflow:visible
    BFC合并与float
    BFC合并与边距折叠

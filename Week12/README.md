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
Flex排版
  收集盒进行
  计算盒在主轴方向的排布
  计算盒在交叉轴方向的排布
  分行
    根据主轴尺寸，把元素分进行
    若设置了no-wrap,则强行分配进第一行
Animation
  @keyFrames定义
  animation 使用
  animation-name 时间曲线
  animation-duration 动画的时长
  animation-timing-function 动画的时间曲线
  animation-iteration-count 动画的播放次数
  animation-direction 动画的方向
Transition
  transition-property 要变换的属性
  transition-duration 变换的时长
  transition-timing-function 时间曲线
  transition-delay 延迟

https://cubic-bezier.com

补色CMY，印刷行业常用CMYK，K是黑色油墨。
HSL和HSV 色相 纯度 亮度
绘制
  几何图形
    border
    box-shadow
    border-radius
    dataurl+svg
  文字
    font
    text-decoration
  位图
    background-image
  
学习笔记

非形式语言  自由，无固定形式，中文英文等

形式语言 形式化定义，严谨严格

形式语言分类：[乔姆斯基谱系](https://zh.wikipedia.org/wiki/乔姆斯基谱系)：是计算机科学中刻画形式文法表达能力的一个分类谱系，是由诺姆·乔姆斯基于 1956 年提出的。它包括四个层次：

- 0- 型文法（无限制文法或短语结构文法）包括所有的文法。
- 1- 型文法（上下文相关文法）生成上下文相关语言。
- 2- 型文法（上下文无关文法）生成上下文无关语言。
- 3- 型文法（正规文法）生成正则语言。

产生式： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句
[巴科斯诺尔范式](https://zh.wikipedia.org/wiki/巴科斯范式)：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。
(1)用尖括号括起来的名称来表示语法结构名
(2)语法结构分成基础结构和需要用其它语法结构定义的复合结构
    ·基础结构称终结符
    ·复合结构称非终结符
(3)引号和中间的字符表示终结符
(4)可以有括号
(5)*表示重复多次
(6)|表示或
(7)+表示至少一次
终结符： 最终在代码中出现的字符（[ https://zh.wikipedia.org/wiki/ 終結符與非終結符](https://zh.wikipedia.org/wiki/終結符與非終結符))

四则运算BNF：

```javascript
<BracketExpression>::=<AdditiveExpression>|
 <(><AdditiveExpression><)>
                        
<AdditiveExpression>::=
<MultiplicativeExpression>|
<AdditiveExpression><+><MultiplicativeExpression>|
<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression>::=
<Number>|
<MultiplicativeExpression><*><Number>|<MultiplicativeExpression></><Number>


    
```
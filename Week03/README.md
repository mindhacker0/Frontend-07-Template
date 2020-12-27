学习笔记
抽象语法树(Abstract Syntax Tree),AST
代码分词后构成AST，构建语法树算法LL和LR
四则运算
```javascript
TokenNumber:1 2 3 4 5 6 7 8 9 0 .的组合
Operator:+ - * /之一
WhiteSpace:<SP>
LineTerminator:<LF> <CR>
```
词法定义：
```javascript
<Expression>::=
<AdditiveExpression><EOF>

<AdditiveExpression>::=
<MultiplicativeExpression>|<AdditiveExpression><+><MultiplicativeExpression>|<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression>::=
<Number>|<MultiplicativeExpression><*><Number>|<MultiplicativeExpression></><Number>
```


学习笔记
JavaScript:

### Atom

#### Grammar

```javascript 
Tree vs Priority

Left hand side & Right hand side 
```

#### Runtime

```javascript 
Type Convertion
·Unboxing(装箱)
 ToPremitive
 toString vs valueOf
 Symbol.toPrimitive

Reference
Object
Key
delete
assign
```

### Express

```javajscript
·Member
a.b
a[b]
foo`string`
super.b
super[`b`]
new.target
new Foo()
·New
new FOO
·Call
 foo
 super()
 foo()['b']
 foo().b
 foo()`abc`
·Unary (单运算符)
delete a.b
void foo()
typeof a
+ a
- a
~ a
! a
await a
·Exponental(右结合)
 **
 ·Multiplicative
 */%
 ·Additive
 +-
 ·Shift
 <<>>>>>
 ·Relationship
 <><=>= instanceof in
 ·Equality
 ==
 !=
 ===
 !==
 ·Bitwise
 & ^ |
 ·Logical
 &&
 ||
 ·Conditional
 ?:
 

```

### Statement

```javascript
Grammar
简单语句
 ExpressionStateMent
 EmptyStatement
 DebuggerStatement
 ThrowStatement
 ContinueSatement
 BreakStatement
 ReturnSatement
组合语句
 BlockStatement
 IfStatement
 SwitchStatement
 IterationSatement
 WithStatement
 LabelledSatement
 TrySatement
声明
 FunctionDeclaration
 GeneratorDeclaration
 AsyncFunctionDeclaration
 AsyncGeneratorDeclaration
 VariableStatement
 ClassDeclaration
 LexicalDeclaration(let,const)
Runtime
Completion Record(完成状态,语句执行结果)
  [[type]]:normal,break,continue,return,or throw
  [[value]]：基本类型
  [[target]]:label
Lexical Environment
```



### Structure

### Program/Module

JS执行粒度（运行时）

```javascript
宏任务
微任务(Promise)
函数调用(Execution Context)
语句/声明 (Completion Record)
表达式 (Reference)
直接量/变量/this......
```

Execution Context

```javascript
code evaluation state
Function
Script or Module
Generator (in Generator Execution Contexts) 
Realm
LexicalEnvironment
VaribleEnvironment(处理var声明)

EnvironmentRecords
#Declarative EnvironmentRecords
##Function EnvironmentRecords
##module EnvironmentRecords
#Global EnvironmentRecords
#Object EnvironmentRecords
```






**Context**
上下文： context 表示做某一些事的环境
1. 当某个组件创建了上下文之后，上下文之中的数据，会被所有后代组件共享
2. 如果某个组件以来了上下文，会导致组件不在纯粹（外部数据进来源于属性props）
3. 一般情况用于第三方组件

## 旧的api（16版本前）

**创建上下文**
只有类组件可以创建上下文;

1. 给类组件书写静态属性 childContextTypes, 使用该属性对上下文中的数据类型进行约束
2. 添加实例方法 getChildContext(每次render后执行)，该方法返回的对象，即为上下文中的对象,该数据必须满足约束

**使用上下文**
如果要使用上下文，组件必须要有一个静态属性 contextTypes， 改属性描述了需要获取的上下文类型

1. 在组件的构造函数中，通过第二个参数获取到上下文数据
constructor(props, context){
  super(props, context)
}
this.context.XXX;


## 新版api（16版本后）
修复了旧版api严重的效率问题，并且容易导致滥用
新版的上下文是独立于组件的对象

**创建上下文**
1. 通过React.createContext创建上下文，且可以设置默认值
   React.createContext(xxx);/React.createContext({a: 0, b: abc})
   返回的是包含两个属性的对象；
   1. Provider属性： 一个组件，改组件会创建上下文;改组件有一个value值，将数据交给Provider的value
   2. Comsumer属性： 

**使用上下文对象**
要求：必须拥有静态属性contextTypes, 应赋值为创建的上下文对象(static contextType = ctx;),使用this.context.XXX

同一个provider不应该用到多个组件中。如果需要在其他组件中创建上下文对象，应该考虑将数据提升到跟高的层次
在类组件中，直接使用this.context获取上下文数据
在**函数组件**中，需要使用Consumer来获取

Comsumer 是一个组件
  1. 它的子节点是一个函数(props.children要传递一个函数)
  2. 函数返回的值会被渲染到页面上

**注意**
如果上下文提供者中的value属性发生变化，会导致使用上下问的所有组件去重新渲染，无论是否进行了渲染优化(无论shouldComponentUpdate返回的是什么)
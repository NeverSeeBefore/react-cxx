**渲染原理**

渲染： 生成用于显示的对象，以及将

- react元素： 通过react.createElement创建的（JSX）
  - <App />
  - <div><h1></h1></div>
- react节点
  - 并不是react元素 是另一个对象, 专门用于渲染到UI界面的对象；
  - react会通过react元素，创建react节点；
  - 节点类型
    - react DOM节点(React DOM Component)：
      - 创建该节点的react元素类型是一个字符串
    - react 组件节点
      - 创建该节点的react元素类型是一个类或 函数
    - react TextNode节点
      - 创建该节点的是字符串、数字
    - react 空结点
      - 由 null、undefined、false 创建
    - react 数组节点
      - 由数组创建
- 真实DOM
  - 通过document.createElement创建的DOM元素

**首次渲染**(新节点渲染)

1. 通过参数的值创建节点
2. 根据不同的节点做不同的事
  - 文本节点：通过document.createTextnode('text');创建真实的文本节点
  - 空结点：什么都不做
  - 数组节点：遍历数组，对每一项递归
  - DOM节点：通过document.createElement();创建真实DOM节点， 递归遍历children;
  - 组件节点
    - 函数组件： 调用函数(函数必须返回一个可以生成节点的内容)， 将该函数的返回结果递归生成节点
    - 类组件：
      1. 创建类实例
      2. 立即运行函数的生命周期方法: static getDerivedStateFromProps
      3. 运行render， 拿到节点
3. 生成虚拟dom树，讲述保存，一边后续使用
3. 子节点创建完毕后，将子节点添加到其容器
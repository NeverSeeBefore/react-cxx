16.0.0 旧版
  生命周期
1. constructor
  1. 只调用1次，不能使用setState
2. componentsWillMount（新版已移除）
  1. 只调用一次，不能使用setState, 
  2. 特定情况下会调用多次
3. render
  1. 返回的内容会被挂载到虚拟dom树上
  2. 需要重新渲染就会被运行
  3. 严禁使用setState，会溢出
4. componentDidMount
  1. 指挥调用一次
  2. 可以使用setState
  3. 通常会将 网络请求、启动计时器写在此函数中
  **此刻组件进入活跃状态**
5. shouldComponentUpdate
  1. 性能优化点
  2. 参数： 新的属性， 新的状态
  3. 返回值应为Boolean
6. componentWillUpdate
  1. 没什么用
  2. 参数： 新的属性， 新的状态
7. componentDidUpdate
  1. 参数： 更新前的属性， 更新前的状态
  2. 往往在这里使用dom操作，改变元素
  **属性发生变化后**
1. componentWillReceiveProps（新版已移除，因为可能导致一些bug）
  1. 参数： 新的属性值
  2. 此时当前的属性值还未改变。
  **状态发生变化后**

  **销毁阶段**
1.componentWillUnmount
  1. 销毁组件的以来资源，比如计时器




>= 16.0.0 新版
  生命周期

static getDerivedStateFromProps(props, state)
  1. 获取新的属性和状态
  2. 该函数时静态的
  3. 该函数的返回值会覆盖掉原来的状态
  4. 该函数几乎没有用
组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state；配合componentDidUpdate，可以覆盖componentWillReceiveProps的所有用法
getSnapshotBeforeUpdate(prevProps, prevState)
  1. 真是dom构建完成，但是还没有渲染到页面上
  2. 通常用于实现一些附加的dom操作（设置滚动条，添加动画。。。，即想要绕过react去操作dom的时候）
  3. 函数的返回值，会作为componentDidUpdate的第三个参数
触发时间: update发生的时候，在render之后，在组件dom渲染之前；返回一个值，作为componentDidUpdate的第三个参数；配合componentDidUpdate, 可以覆盖componentWillUpdate的所有用法

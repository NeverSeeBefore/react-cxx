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

**更新和卸载**
节点更新的场景
  1. 重新调用React.render；完全重新生成新的节点树
    - 触发根节点更新
  2. 在类组件的实例对象中调用setState
    - 实例所在的节点更新

节点的更新
  1. 如果*1*, 进入根节点的对比（diff）更新
  2. 如果*2*，
    1. 运行生命周期函数， static getDerivedStateFromProps
    2. 运行shouldComponentUpdate, 如果返回false，停止更新
    3. 运行render，得到一个新的节点，进入该节点的**对比更新**
    4. 将生命周期函数 getSnapShotBeforeUodate 加入执行队列
    5.              ComponentDidUpdate
后续步骤(都要做的)
  1. 完成真实DOM更新
  2. 一次执行 ComponentDidMount(可能有新的节点)
  3. 依次执行*4*getSnapShotBeforeUodate
  4. 依次执行*5*ComponentDidUpdate
  5. 依次执行 ComponentWillUnmount

**对比更新**
  将新产生的节点，对比虚拟DOM中的节点，发现差异，完成更新

Q: 对比之前的DOM树的哪个节点
A： 
  React为了提高效率，做出了以下假设
  - 假设节点不会出现层次移动(对比时，直接找到旧树中对应的位置的节点进行对比)
  - 不同的节点类型会生成不同结构
    1. 相同节点类型： 节点本身类型相同，如果是React元素，type值也要相同；其他情况都是不同节点类型
  - 多个兄弟节点通过唯一标识(key)来确定，对比新节点
Q: key的作用
A: 用于通过旧节点,寻找对应新节点;如果有key,直接找对应的key,不会找对应位置的旧节点对比;如果没有key值,找新节点对应旧节点的位置;
**找到了对比目标** 
  1. 判断节点类型是否一致？
    - 一致
      (1) 空结点：什么都不做
      (2) DOM节点：
        - 直接使用(*重用*)之前的真实DOM对象；
        - 记录属性的变化（现在不会更新，将来统一更新）
        - 遍历该新React元素的子元素，递归-对比更新
      (3) 函数组件节点
        -  重新调用函数，得到节点对象，递归-对比更新
      (4) 类组件节点
        - *重用*之前的实例
        - 调用生命周期方法
          - getDerivedStateFromProps
          - shouldComponentUpdate
          - 运行render，得到新节点，对比更新
          - getSnapShotBeforeUodate、ComponentDidUpdate加入队列
      (5) 数组节点
        - 遍历-对比更新
    - 不一致
      卸载旧的节点，创建全新的节点
  2. 
**没找到对比目标**
  创建新节--->卸载旧节点/多余节点
  直接放弃该节点，递归卸载子节点

   
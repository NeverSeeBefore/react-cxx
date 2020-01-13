#

- React: 组件化的UI界面处理方式
- React-Router: 根据地址匹配路由
- Redux: 处理数据以及数据变化的方案(主要处理 _共享数据_)

国外知名博主的定义，非官方定义
_展示组件_
> 如果一个组件，只用于渲染UI，而没有状态
_容器组件_
> 如果一个组件，只提供数据，并不渲染UI界面

react-redux 
> 官方提供的库，用于结合react和redux

- Provider 组件, 没有UI，作用：将redux的仓库放到一个上下文中

- connect 函数, 连接组件和数据仓库

const FinalCounter = connect(mapState2Props, mapDispatch2Props)(Counter)
  - 参数
    - 数据与属性的映射  如果是null，没有数据会被映射到属性
    - dispatch(action)与事件的映射  如果是null, 没有action会映射到事件上
  - 返回值
    - 高阶函数
      - 参数    展示组件
      - 返回值  容器组件

*细节*
1. 如果对返回的 _容器组件_ 传递额外的属性，这些属性会直接传递 _展示组件_ 上
2. _connect_
   第一个参数 
  mapState2Props(state, ownProps)
  - state
  - ownProps 使用者传递的属性
   第二个参数 (函数或对象)
  [function] mapDiapatch2Props(dispatch, ownProps)
  - dispatch
  - ownProps 使用者传递的属性
  - 返回的对象 会作为属性传递到展示组件中
  [object]
  - 对象的每一个属性是一个 action-creator， 当事件触发时，会自动dispatch
3. 通过connect连接的组件，会自动得到dispatch属性，使组件有能力自行触发action，但是不推荐这样做

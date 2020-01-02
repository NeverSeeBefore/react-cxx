# Redux 核心概念

action reducer store

最开始的是时候，访问一个站，服务端要做所有的事情，将一个完整的完整的页面包括数据一起返回浏览器
为了降低复杂度，出现了 MVC 模式，这是后端的 MVC，C 为控制器，服务端收到请求后，将请求分发到对应的控制器，返回对应信息

浏览器请求
↓
*C*ontroller: 产生数据
*M*odel: 组装数据，生成 UI 渲染的模型
*V*iew： 生成 HTML
↓
反馈浏览器

随后 Ajax 出现，产生前端的 MVC

后来发现 MVC 不适合前端 c 太复杂
flux 为什么会产生，就是为了解决前端的复杂度

## action

1. 必须是一个 plain-object(平面对象)

- 它的**proto**必须只想 Object.protoType

2. 必须有 type 属性

- 改属性用于描述操作类型
- 为了避免 hard code, 会将 action 的类型存到一个单独的文件中

3. 为方便 action 传递，通常使用 action 创建函数传递生成 action

- action 创建函数应为无任何副作用的纯函数

4. 利用 action 创建函数，触发分发函数

- redux 提供了 bindActionCreators
- 传入(action 创建函数，store 的分发函数)
- 返回值是与 action 创建函数绑定的函数
- 每次调用新的创建函数时，会自动触发分发

_hard code_

> 很多地方要修改某个数据，所以都要传入 action="update",当 action 可能要改变的时候，此时每个地方都要改变
> 解决方式，额外一个文件计入 action 的 type，每次改变只要修改这个文件就能改变所有的 action

## reducer

Reducer 时改变数据的函数

1. 1 个数据仓库，有且只有一个 reducer，并且通常情况下，一个工程只有一个仓库，因此，一个系统只有一个 reducer
2. Reducer 被调用的时机

- 通过 store.dispatch, 分发一个 action 时
- 当创建完一个 store 的时候，会调用一次 Reducer(reducer 参数中可以设置默认值，第一次会调用一次，因为可以初始化数据)
- Reducer 必须是一个没有副作用的纯函数(不能改变参数，不能有异步，不能对外部环境造成影响);

3. 在大中型项目中，操作比较复杂，因此应对 Reducer 进行细分。

- combineReducers({
    Reducer1,
    Reducer2
  })
  合并reducer，得到新的reducer。这个新的reducer管理一个对象，


## store
  用于保存数据
  const store = createStore(reducer)
  store对象的成员
    - dispatch: 分发action
    - getState: 得到当前仓库的状态
    - replaceReducer: 替换当前的reducer
    - subscribe: 注册一个监听器（可以注册多个监听），
      * 监听器是一个无参函数，在dispatch之后执行,
      * 该函数的返回值时一个取消监听函数
    - Symbal(ovservable): 内部调用

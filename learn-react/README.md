# redux-saga

**纯净** **强大** **灵活**

- saga 是一个生成器函数

  > 在最开始的时候，启动一个 saga 任务。
  > saga 任务： 生成器函数
  > saga 为任务提供了大量功能以供使用，这些功能是以任务的形式出现的，而且出现在 yield 的位置，因此可以被 saga 中间件控制它的执行

- 在 saga 任务中，如果 yield 一个普通数据，saga 不做任何处理，立即调用 next，并将数据传进去；
- saga 要求： 在 yield 后边放上合适的 saga 指令， saga 会根据指令做出对应的处理；

### 指令

- **take**: 监听某个 action，如果发生某个 action, 则会进行下一步处理._只发生一次_-_阻塞_

- **all**: 参数为数组，各种生成器 ，saga 会等待所有生成器完成之后才会处理，_阻塞_

- **takeEvery**: 不断监听某个 action， 当 action 到达之后， 运行一个函数, 永远不会结束当前的生成器 _不阻塞_

- **delay**: _阻塞_ 指定的毫秒数

  - 参数（ms, ?return)
  - 返回值 return ? return : true

- **put**: 重新触发 action，相当于 dispatch(action)

- **call**: 用于副作用函数调用，通常是异步 _Promise 会阻塞(基本都是 Promise)_

  - const resp = yield promiseFun();
  - 当 saga 发现 yield 一个 Promise, 会等待 Promise 返回值，将其传入 next
  - 如果 promise 被拒绝, 会把 reject 的 内容抛出;
  - 为了方便测试 和 风格的统一 ，使用 _call( promiseFun , canshu1, canshu2...)_
  - 绑定 this 时
    - _yield call( [ abc ,promiseFun ] , canshu1, canshu2...)_
    - _yield call( { context: abc, fn: promiseFun } , canshu1, canshu2...)_

- **apply**: 同 call

  - _yield apply( context, promiseFun, [canshu1, canshu2...] )_

- **cps**: 回调模式 _阻塞_

  - _yield( 函数， 参数)_
  - saga 会在最后传入一个回调, 回调执行之后, 才会继续向下走;

- **select**: 用于得到当前仓库的数据

  - _yield select()_ 不传参，得到所有数据
  - _yield select(state => state.student.condition)_ 传入函数，得到特定的数据

- **fork**: 创建一个 Effect 描述信息，用来命令 middleware 以 _非阻塞_ 调用 的形式执行 fn

- **cancel**:

- **cancelled**:

- **race**:

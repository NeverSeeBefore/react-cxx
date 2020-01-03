
# 中间件

类似于插件，可以在不影响原本功能，并且不改动原本代码的基础上，对其功能进行增强;
redux 中，主要用于增强 dispatch 函数

原理： 更改 dispatch 函数
中间见本身是一个函数，该函数接收一个 store 参数，表示创建的仓库，该仓库并非一个完整的仓库对象，仅包含 getstate，dispatch
运行时间： 在仓库创建之后 - 需要在创建仓库时，告知有哪些中间件要运行 applyMiddleware(中间件)

- 必须返回 dispatch 创建函数

  function middleware () {

    return function (next) {
      return function(action){
        // ..变化前
        next(action);
        // ..变化后
      }
    }
  }

  - applyMiddleware 记录所有的中间件

## redux-logger

  - 记录日志
  - 如果要使用一定要放在最后一个

## redux-thunk

  - 允许action是一个带有副作用的函数
  - 当 action 是一个函数时，thunk会阻止dispatch，而是直接调用函数
  - thunk还会在该函数调用的时候，向thunk中传入三个参数
    * dispatch  : store.dispatch
    * getState  : store.getState
    * extra     : 用户设置的额外参数(注册中间件时 使用 _thunk.withExtraArgument( args )_, args为额外参数)
  - thunk 放在其他中间件前边

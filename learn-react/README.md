## redux-actions

用于简化 actionTypes, actionCreator 以及 reducer
redux-actions.js.org

## createAction

帮助创建一个 action 创建函数(action-creator)

- 参数： action-type ?payloadCreator[function][返回payload] meta[function][返回meta]
- 返回值： action-creator

## createActions

创建多个 action 创建函数(action-creator)

- 参数
  - action-map  
     {
    actionType: null,
    actionType: payloadCreators,
    }
- 返回值 _属性名 会变成 action-creator 的名称， 属性值 会变成 payload-creator_
- 返回的 action-creator 的 toString 方法 会被重写，调用时返回 action-type

## handleAction

简化针对单个 action 类型的 reducer 处理

- 参数

  - action-type action 类型[string|如果 action-creator 是用 creationAction(s)创建的，可以传入 action 创建函数]
  - action-handle 处理函数[(state, action) => {//...}]
  - initialState 初始值

- 返回值 reducer

## handleActions

简化针对多个 action 类型的 reducer 处理

- 参数
  - reducer-map
    {
    [actionType|creationAction(actionType)]: state => {return state},
    [actionType|creationAction(actionType)]: (state, action) => {return state},
    }
  - initialState 初始值

## combineActions

配合 createActions 和 handleActions 两个函数, 用于处理多个 action-type, 对应相同的处理函数

---

createAction 必须传入的一个 actionType,
如果传第二个参数，需要是一个可以生成 payload 的函数
createActions 第一个参数 关于 actionType 和 payload 生成函数的映射对象
这两个方法返回的是 action 创建函数，并且会重写 toString 方法，让 toString 的方法返回值为当前的 actionType

---

handleAction 传入 actionType 、 对此 action 的处理函数、 仓库初始值， 返回的是一个 reducer 函数
handleActions 传入的是一个关于 actionType 和 对应的处理函数, 返回的也是 reducer
actionType 可以是一个 creatoAction(s)创建的函数，因为 _redux-actions 会自动调用 toString 方法_

--- 

最后的combineActions的作用， 出入的参数是actionType， 他们具有共同的特点，就是 _他们对应的reduce处理函数一样_ ，
                          这种情况下, 通过conbineActions, 返回的是一个方法，是一个actionCreator函数，
                          createActions({
                            [combineActions(increase, decrease, add)]: (state, {payload}) => (state + payload)
                          })
                          这样， 只要是这几个actionType， 都会执行后边对应的处理函数
                        
**这个redux-actions 大大简化了些action， reducer的复杂度**
**他只是简化了我们的写法，通过它，能做到我们按照整行的写法写的一样的效果**
**它的底层还是相当于按照正常的写法写了一遍，我们省了了力气，是因为这个库帮我们做了我们没做的事**
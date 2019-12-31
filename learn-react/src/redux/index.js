import { createStore } from "redux";

/**
 * reducer本质上就是一个函数
 *
 * state 之前仓库中的状态
 * action 动作（想要做的事）{type: '操作类型'， payload: '附加数据'}
 *
 * 返回新的状态；
 */
function reducer(state, action) {
  if (action.type === "increase") {
    return state + 1;
  } else if (action.type === "decrease") {
    return state - 1;
  }
  return state;
}

const store = createStore(reducer, 10);
console.log(store.getState());
store.dispatch({type: 'increase'});
console.log(store.getState());
store.dispatch({type: 'decrease'});
console.log(store.getState());
store.dispatch({type: 'dessssss'});
console.log(store.getState());


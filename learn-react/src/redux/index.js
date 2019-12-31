import { createStore, bindActionCreators } from "redux";
import * as numberActions from "./number-action";
import * as actionType from "./action-type";

/**
 * reducer本质上就是一个函数
 *
 * state 之前仓库中的状态
 * action 动作（想要做的事）{type: '操作类型'， payload: '附加数据'}
 *
 * 返回新的状态；
 */
function reducer(state, action) {
  if (action.type === actionType.INCREASE) {
    return state + 1;
  } else if (action.type === actionType.DECREASE) {
    return state - 1;
  } else if (action.type === actionType.SET){
    return action.payload;
  }
  return state;
}
const store = createStore(reducer, 10);
console.log(store.getState());

// 第一个参数，action产检函数， 第二个参数store的分发函数
const bindActions = bindActionCreators(numberActions, store.dispatch);
console.log(bindActions, numberActions);
// 创建action并直接自动分发；
bindActions.getDecreaseAction();
console.log(bindActions, numberActions);

store.dispatch(numberActions.getDecreaseAction());

console.log(store.getState());

store.dispatch(numberActions.getIncreaseAction());

console.log(store.getState());

store.dispatch(numberActions.getSetAction(100));

console.log(store.getState());

store.dispatch({ type: "dessssss" });

console.log(store.getState());

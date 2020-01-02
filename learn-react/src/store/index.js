// import { createStore, bindActionCreators } from "redux";
import * as numberActions from "./action/number-action";
import reducer from './reducer';
import { createStore, bindActionCreators } from "../redux";

// const store = createStore(reducer);
const store = createStore(reducer);

const unlisten0 = store.subscribe(() => {
  console.log('subscribe监听0');
  console.log(store.getState());
})

const unlisten1 = store.subscribe(() => {
  console.log('subscribe监听1');
  console.log(store.getState());
})
const unlisten2 = store.subscribe(() => {
  console.log('subscribe监听2');
  console.log(store.getState());
})
// // 第一个参数，action产生函数， 第二个参数store的分发函数
const bindActions = bindActionCreators(numberActions, store.dispatch);
console.log(bindActions, numberActions);
// 创建action并直接自动分发；
bindActions.getDecreaseAction();
unlisten2();
unlisten1();
bindActions.getIncreaseAction();

console.log(store.getState());

store.dispatch(numberActions.getDecreaseAction());

// console.log(store.getState());

store.dispatch(numberActions.getIncreaseAction());

// console.log(store.getState());

// store.dispatch(numberActions.getSetAction(100));

// console.log(store.getState());

// store.dispatch({ type: "dessssss" });

// console.log(store.getState());

bindActions.getIncreaseAction();
bindActions.getIncreaseAction();

bindActions.getIncreaseAction();

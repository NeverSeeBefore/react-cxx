// import { createStore, bindActionCreators } from "redux";
import * as numberActions from "./action/number-action";
import reducer from './reducer';
import { createStore } from "../redux";

// const store = createStore(reducer);
const store = createStore(reducer);

store.subscribe(() => {
  console.log('subscribe监听');
  console.log(store.getState());
})

// // 第一个参数，action产生函数， 第二个参数store的分发函数
// const bindActions = bindActionCreators(numberActions, store.dispatch);
// console.log(bindActions, numberActions);
// // 创建action并直接自动分发；
// bindActions.getDecreaseAction();
// bindActions.getIncreaseAction();

console.log(store.getState());

store.dispatch(numberActions.getDecreaseAction());

// console.log(store.getState());

store.dispatch(numberActions.getIncreaseAction());

// console.log(store.getState());

// store.dispatch(numberActions.getSetAction(100));

// console.log(store.getState());

// store.dispatch({ type: "dessssss" });

// console.log(store.getState());

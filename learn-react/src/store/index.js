import { createStore, bindActionCreators, applyMiddleware } from "redux";
import * as numberActions from "./action/number-action";
import reducer from "./reducer";
// import { createStore, bindActionCreators, applyMiddleware } from "../redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const loggerWithOptions = createLogger({
  collapsed: true
});

const store = createStore(reducer, applyMiddleware(thunk, loggerWithOptions));

const unlisten = store.subscribe(() => {
  // 输出之前的状态，新的状态，
  console.log("subscribe监听");
  console.log(store.getState());
});
unlisten();

// // 第一个参数，action产生函数， 第二个参数store的分发函数
const bindActions = bindActionCreators(numberActions, store.dispatch);
// console.log(bindActions, numberActions);
// 创建action并直接自动分发；
// bindActions.getDecreaseAction();
// bindActions.getDecreaseAction();

// bindActions.getIncreaseAction();
// bindActions.getIncreaseAction();
// bindActions.getIncreaseAction();


// 不用 thunk
// // 正在加载
// bindActions.getSetLoading(true);
// // 获取number
// setTimeout(() => {
//   bindActions.getSetAction(99);
//   bindActions.getSetLoading(false);
// }, 2000)

// thunk
bindActions.fetchNumber();



export default store;
// function middleware () {

//   return function (next) {
//     return function(action){
//       // ..变化前
//       next(action);
//       // ..变化后
//     }
//   }
// }
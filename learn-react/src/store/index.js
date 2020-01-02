import { createStore, bindActionCreators, applyMiddleware } from "redux";
import * as numberActions from "./action/number-action";
import reducer from './reducer';
// import { createStore, bindActionCreators, applyMiddleware } from "../redux";
import { logger, createLogger } from "redux-logger";

const loggerWithOptions = createLogger({
  
})

const store = createStore(reducer, applyMiddleware(logger, loggerWithOptions));

store.subscribe(() => {
  // 输出之前的状态，新的状态，
  console.log('subscribe监听');
  console.log(store.getState());
})

// // 第一个参数，action产生函数， 第二个参数store的分发函数
const bindActions = bindActionCreators(numberActions, store.dispatch);
// console.log(bindActions, numberActions);
// 创建action并直接自动分发；
bindActions.getDecreaseAction();

bindActions.getIncreaseAction();

// function middleware () {

//   return function (next) {
//     return function(action){
//       // ..变化前
//       next(action);
//       // ..变化后
//     }
//   }
// }
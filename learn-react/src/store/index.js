// import { createStore, bindActionCreators } from "redux";
import * as numberActions from "./action/number-action";
import reducer from './reducer';
import { createStore, bindActionCreators, applyMiddleware } from "redux";
// const store = createStore(reducer);


/**
 * 中间件函数
 * @param {*} state 
 */
function loggerMiddleWare(state){
  console.log("applyMiddleware1")

  return function (next) {
    // next 为 (old)ispatch 函数

    // 返回最终的dispatch函数
    return function (action){
      console.log('1oldState: ', state.getState())
      next(action);
      console.log('1newState: ', state.getState())

    };
  }
}
function loggerMiddleWare2(state){
  console.log("applyMiddleware2")

  // 返回最终的dispatch函数
  return function (next) {


    // 返回最终的dispatch函数
    return function (action){
      console.log('2oldState: ', state.getState())
      next(action);
      console.log('2newState: ', state.getState())

    };

  }
}
const store = createStore(reducer, applyMiddleware(loggerMiddleWare, loggerMiddleWare2));

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
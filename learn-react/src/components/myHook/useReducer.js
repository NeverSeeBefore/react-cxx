import { useState } from "react";

/**
 * 根据当前的数据， 生成一个新的数据
 * @param {*} state
 * @param {*} action
 */
function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      if (state === 0) {
        return 0;
      }
      return state - 1;
    default:
      return state;
  }
}

/**
 * useReducer
 * @param {function} reducer reducer函数,标准格式
 * @param {any} initalState 状态默认值
 * @param {function} func 用于通过第二个参数计算初始值,非必传
 */
export default function useReducer(reducer, initalState, initFunc) {
  const [state, setState] = useState(initFunc ? initFunc(initalState) : initalState);

  function dispatch(action) {
    const newState = reducer(state, action);
    console.log(`日志newState : ${newState}`);
    setState(newState);
  }
  return [state, dispatch];
}

/**
 *
 * @param {function} reducer reducer
 * @param {any} defaultState 默认状态
 */
export default function createStore(reducer, defaultState) {
  let currentReducer = reducer,
    currentState = defaultState;
  let listeners = [];
  function dispatch(action) {
    // console.log(action.type);
    if (!isPlainObject(action)) {
      throw new TypeError("action must be a plain object");
    }
    if (action.type === undefined) {
      throw new TypeError("action must has a property of type");
    }
    currentState = currentReducer(currentState, action);
    if (listeners.length > 0) {
      listeners.map(listener => {
        listener();
      });
    }
  }

  dispatch({
    type:
      "@@myredux/init" +
      getRandomStr(7)
        .split("")
        .join(".")
  });

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function() {
      listeners = listeners.filter(it => {
        return it !== listener;
      });
    };
  }

  function replaceReducer() {}

  return {
    dispatch,
    getState,
    subscribe,
    replaceReducer
  };
}

/**
 * 判断是否为平面对象
 */
function isPlainObject(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  // return obj.__proto__ === Object.prototype;
  return Object.getPrototypeOf(obj) === Object.prototype;
}

/**
 * 生成随机字符串
 */
function getRandomStr(len) {
  return Math.random()
    .toString(36)
    .substr(2, len);
}

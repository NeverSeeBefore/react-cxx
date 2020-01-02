export default function combineReducers(reducers) {
  if (typeof reducers !== "object" || !isPlainObject(reducers)) {
    throw new TypeError("validate reducer error");
  }
  for (const key in reducers) {
    if (reducers.hasOwnProperty(key)) {
      const reducer = reducers[key];
      let state = reducer(undefined, {
        type: "@@init....."
      });
      if (state === undefined) {
        throw new TypeError("validate reducer error");
      }
      state = reducer(undefined, {
        type: "@@UNKNOW....."
      });
      if (state === undefined) {
        throw new TypeError("validate reducer error");
      }
    }
  }
  return function(state = {}, action) {
    const newState = {};
    for (const key in reducers) {
      if (reducers.hasOwnProperty(key)) {
        const reducer = reducers[key];
        newState[key] = reducer(state[key], action);
      }
    }
    return newState;
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

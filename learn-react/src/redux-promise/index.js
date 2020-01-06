import { isString, isPlainObject } from "lodash";
import isPromise from "is-promise";

function reduxPromiseCreator() {
  return ({ dispatch }) => next => action => {
    if (!isFSA(action)) {
      // 如果不是标准的action， 判断是不是action
      // 如果action 是一个promise。 将reslove的值触发分发
      return isPromise(action) ? action.then(dispatch) : next(action);
    }
    return isPromise(action.payload) // action 的 payload 是不是Promise？
      ? action.payload
          .then(payload => dispatch({ ...action, payload })) // 将promise的返回值作为payload，触发action
          .catch(err => dispatch({ ...action, payload: err, error: true })) // 将错误的信息作为payload， error 设置为 true
      : next(action); // 直接向下传递
  };
}

/**
 * 判断是不是一个标准的 flux action
 * ["type", "payload", "error", "meta"]
 * 备注： 由于当前action的type是Symbol, 所以永远不是FSA
 */
function isFSA(action) {
  return (
    isPlainObject(action) &&
    isString(action.type) &&
    Object.keys(action).every(
      key => ["type", "payload", "error", "meta"].indexOf(key) > -1
    )
  );
}

const promise = reduxPromiseCreator();
export default promise;

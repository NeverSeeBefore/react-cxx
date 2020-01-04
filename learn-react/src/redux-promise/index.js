import { isString, isPlainObject, isPromise } from "lodash";

function reduxPromiseCreator() {
  return store => next => action => {
    if (isFSA(action)) {
      // 如果不是标准的action， 判断是不是action
      // 如果action 是一个promise。 将reslove的值触发分发
      isPromise(action) ? action.then(store.dispatch) : next(action);
    }
  };
}

/**
 * 判断是不是一个标准的 flux action
 * ["type", "payload", "error", "meta"]
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

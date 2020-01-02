export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators == "object") {
    const result = {};
    for (const prop in actionCreators) {
      if (actionCreators.hasOwnProperty(prop)) {
        result[prop] = getAutoDispatchActionCreator(actionCreators[prop], dispatch);
      }
    }
    return result;
  } else if (typeof actionCreators == "function") {
    return function () {
      actionCreators();
    }
  } else {
    throw new TypeError("actionCreators must be a function or object");
  }
}

function getAutoDispatchActionCreator(actionCreators, dispatch){
  return function(...args){
    dispatch(actionCreators(...args));
  }
}
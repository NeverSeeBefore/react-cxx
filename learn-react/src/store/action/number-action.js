import { INCREASE, DECREASE, SET, SETLOADING } from "./action-type";

function getIncreaseAction() {
  return {
    type: INCREASE,
    payload: ""
  };
}
function getDecreaseAction() {
  return {
    type: DECREASE,
    payload: ""
  };
}
function getSetAction(state) {
  return {
    type: SET,
    payload: state
  };
}
function getSetLoading(payload) {
  return {
    type: SETLOADING,
    payload
  };
}

// thunk 允许action是一个由副作用的函数
function fetchNumber() {
  return async function(dispatch) {
    dispatch(getSetLoading(true));
    // 获取number
    const num = await new Promise(reslove => {
      setTimeout(() => {
        reslove(999);
      }, 2000);
    }).then(num => {
      return num;
    });
    // console.log('outside', num);

    dispatch(getSetAction(num));
    dispatch(getSetLoading(false));
  };
}
export {
  getDecreaseAction,
  getIncreaseAction,
  getSetAction,
  getSetLoading,
  fetchNumber
};

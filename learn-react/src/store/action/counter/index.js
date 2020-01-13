import { createActions, handleActions, combineActions } from "redux-actions";
export const actionTypes = {
  increase: "INCREASE",
  asyncIncrease: "ASYNC_INCREASE",
  decrease: "DECREASE",
  asyncDecrease: "ASYNC_DECREASE",
  autoIncrease: "AUTO_INCREASE",
  stopAutoIncrease: "STOP_AUTO_INCREASE",
  add: "ADD"
};
// createAction
// export const getIncreaseAction = createAction(actionTypes.increase);
// createActions
// export const add = createAction(actionTypes.add, number => number);

export const {
  increase,
  decrease,
  asyncIncrease,
  asyncDecrease,
  autoIncrease,
  stopAutoIncrease,
  add
} = createActions({
  [actionTypes.increase]: () => 1,
  [actionTypes.decrease]: () => -1,
  [actionTypes.asyncIncrease]: null,
  [actionTypes.asyncDecrease]: null,
  [actionTypes.autoIncrease]: null,
  [actionTypes.stopAutoIncrease]: null,
  [actionTypes.add]: number => number
});
// console.log(increase.toString());

export default handleActions(
  {
    [combineActions(increase, decrease, add)]: (state, action) => state + action.payload,
    // [asyncIncrease]: state => state + 1,
    // [asyncDecrease]: state => state - 1
  },
  10
);

/**
 *
 * @param {*} type
 */
function myCreateAction(type, payloadCreator) {
  return function actionCreator(...args) {
    if (typeof payloadCreator === "function") {
      const payload = payloadCreator(...args);
      return { type, payload };
    } else {
      return { type };
    }
  };
}

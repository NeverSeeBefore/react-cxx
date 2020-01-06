import { actionTypes } from "../../action/counter";

export default function(state = 10, action) {
  switch (action.type) {
    case actionTypes.increase:
      return state + 1;
    case actionTypes.decrease:
      return state - 1;
    case actionTypes.asyncIncrease:
      return state + 1;
    case actionTypes.asyncDecrease:
      return state - 1;
    default:
      return state;
  }
}

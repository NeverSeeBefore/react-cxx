import * as actionType from "../action/action-type";

const initialState = {
  isLoading: false,
  number: 0
};
/**
 * reducer本质上就是一个函数
 *
 * state 之前仓库中的状态
 * action 动作（想要做的事）{type: '操作类型'， payload: '附加数据'}
 *
 * 返回新的状态；
 */

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionType.INCREASE:
      return { ...state, number: state.number + 1 };
    case actionType.DECREASE:
      return { ...state, number: state.number - 1 };
    case actionType.SET:
      return { ...state, number: payload };
    case actionType.SETLOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
}
export default reducer;

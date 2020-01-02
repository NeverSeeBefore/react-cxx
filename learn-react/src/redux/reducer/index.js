import * as actionType from '../action/action-type';
/**
 * reducer本质上就是一个函数
 *
 * state 之前仓库中的状态
 * action 动作（想要做的事）{type: '操作类型'， payload: '附加数据'}
 *
 * 返回新的状态；
 */
function reducer(state = 10, action) {
  switch(action.type){
    case actionType.INCREASE: 
      return state + 1;
    case actionType.DECREASE: 
      return state - 1;
    case actionType.SET:
      return action.payload;
    default: 
      return state;
  }
}
export default reducer;
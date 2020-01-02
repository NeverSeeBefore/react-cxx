import { INCREASE, DECREASE, SET } from "./action-type"

function getIncreaseAction(){
  return{
    type: INCREASE,
    payload: ''
  }
}
function getDecreaseAction(){
  return{
    type: DECREASE,
    payload: ''
  }
}
function getSetAction(state){
  return{
    type: SET,
    payload: state
  }
}
export {
  getDecreaseAction,
  getIncreaseAction,
  getSetAction
}
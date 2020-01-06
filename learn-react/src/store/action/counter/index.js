export const actionTypes = {
  increase: Symbol("increase"),
  asyncIncrease: Symbol("asyncIncrease"),
  decrease: Symbol("decrease"),
  asyncDecrease: Symbol("asyncDecrease")
}

export function getIncreaseAction() {
  return {
    type: actionTypes.increase
  }
}
export function getDecreaseAction() {
  return {
    type: actionTypes.decrease
  }
}
export function getAsyncIncreaseAction() {
  return {
    type: actionTypes.asyncIncrease
  }
}
export function getAsyncDecreaseAction() {
  return {
    type: actionTypes.asyncDecrease
  }
}
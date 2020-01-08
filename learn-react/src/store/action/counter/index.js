export const actionTypes = {
  increase: Symbol("increase"),
  asyncIncrease: Symbol("asyncIncrease"),
  decrease: Symbol("decrease"),
  asyncDecrease: Symbol("asyncDecrease"),
  autoIncrease: Symbol("autoIncrease"),
  stopAutoIncrease: Symbol("stopAutoIncrease"),
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

export function getAutoIncreaseAction() {
  return {
    type: actionTypes.autoIncrease
  }
}
export function getStopAutoIncreaseAction() {
  return {
    type: actionTypes.stopAutoIncrease
  }
}
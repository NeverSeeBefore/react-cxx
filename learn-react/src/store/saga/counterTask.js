import { take, takeEvery, delay, put } from "redux-saga/effects";
import { actionTypes, getIncreaseAction } from "../action/counter";

function* counterAsyncIncreaseTask() {
  
  // 延迟2s执行
  yield delay(2000);
  yield put(getIncreaseAction());
  console.log("counterTask");
}
function* counterAsyncDecreaseTask() {
  // yield 
  console.log("counterTask");
}

// counter task
export default function*() {
  console.log("counter main");
  let result = yield takeEvery(actionTypes.asyncIncrease, counterAsyncIncreaseTask);
  console.log("isListeningAsyncIncrease result", result);
  result = yield takeEvery(actionTypes.asyncDecrease, counterAsyncDecreaseTask);
  console.log("isListeningAsyncDecrease result", result);
}

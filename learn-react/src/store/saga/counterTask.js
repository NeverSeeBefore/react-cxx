import {
  take,
  takeEvery,
  takeLatest,
  delay,
  put,
  fork,
  cancel,
  race
} from "redux-saga/effects";
import {
  actionTypes,
  getIncreaseAction,
  getDecreaseAction
} from "../action/counter";

function myTakeEvery(actionType, saga) {
  return fork(function*() {
    while (true) {
      const action = yield take(actionType);
      yield fork(saga);
    }
  });
}

function* counterAsyncIncreaseTask() {
  // 延迟2s执行
  yield delay(2000);
  yield put(getIncreaseAction());
  console.log("counterTask");
}
function* counterAsyncDecreaseTask() {
  let task = null;
  while (true) {
    console.log("counterAsyncDecreaseTask");
    yield take(actionTypes.asyncDecrease);
    if (task) {
      yield cancel(task);
      console.log("取消之前的任务");
    }
    task = yield fork(function*() {
      yield delay(2000);
      yield put(getDecreaseAction());
      console.log("counterTask");
    });
    console.log("counterTask");
  }
}
// let task;
function* autoIncreaseTask() {
  let task;
  while (true) {
    console.log("autoIncreaseTask start");
    yield take(actionTypes.autoIncrease);

    if (task) {
      yield cancel(task);
    }

    task = yield fork(function*() {
      while (true) {
        yield delay(1000);
        yield put(getIncreaseAction());
      }
    });
    console.log("autoIncreaseTask done");
  }
}

let isStop = false;
function* autoIncrease() {
  isStop = false;
  while (true) {
    if(isStop){
      break;
    }
    yield delay(1000);
    yield put(getIncreaseAction());
  }
}
function stopAutoIncrease(){
  isStop = true;
}



/**
 * 流程控制
 *  监听增加 ---》 自动增加 --》 监听停止 ---- 停止 ---》 监听增加。。。
 */
function* autoTask() {
  while(true){
    // 监听 autoIncrease
    yield take(actionTypes.autoIncrease)
    // 开启新任务
    const task = yield fork(function* () {
      // 每隔两秒增加一次
      while(true){
        yield delay(2000);
        yield put(getIncreaseAction());
      }
    })
    yield take(actionTypes.stopAutoIncrease);
    yield cancel(task);
  }
}
/**
 * 另一种实现方式
 */
function* autoRace(){
  while(true){
    // 监听 autoIncrease
    yield take(actionTypes.autoIncrease)
    // 开启新任务
    yield race({
      autoIncrease: function* () {
        // 每隔两秒增加一次
        while(true){
          yield delay(2000);
          yield put(getIncreaseAction());
        }
      },
      cancel: take(actionTypes.stopAutoIncrease)
    })
  }
}


// counter task
export default function*() {
  console.log("counter main");
  // yield fork(counterAsyncDecreaseTask)
  // yield takeEvery(
  //   actionTypes.asyncIncrease,
  //   counterAsyncIncreaseTask
  // );
  // result = yield takeEvery(actionTypes.asyncDecrease, counterAsyncDecreaseTask);

  // yield fork(autoIncreaseTask);
  yield takeLatest(actionTypes.stopAutoIncrease, stopAutoIncrease);
  yield takeLatest(actionTypes.autoIncrease, autoIncrease);
  yield fork(autoTask);
  console.log("counter main done");


}

import { all } from "redux-saga/effects";

import counterTask from "./counterTask";
import studentTask from "./studentTask";

// saga 任务（生成器函数） 只能有一个
export default function* sagaTask() {
  console.log("saga 启动");
  // let action = yield take(actionTypes.asyncIncrease);
  // console.log(11111, action);
  yield all([counterTask(), studentTask()]);

  console.log("saga 完成");
}

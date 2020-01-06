import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const logger = createLogger({
  collapsed: true
});

// 创建一个saga中间件
const sagaMid = createSagaMiddleware();

// // saga 任务（生成器函数） 只能有一个
// function* sagaTask() {
//   console.log("saga 启动");
// }

// 使用中间件
const store = createStore(reducer, applyMiddleware(sagaMid, logger));

// 如果任务有参数，按序写在run的参数列表里；
sagaMid.run(rootSaga);

export default store;

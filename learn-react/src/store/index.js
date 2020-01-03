import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { logger } from "redux-logger";
import { createChangeAction } from "./action/student/searchCondition";
import {
  setIsLoadingAction,
  setStudentAndTotalAction
} from "./action/student/searchResult";

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;

store.dispatch(
  createChangeAction({
    key: "abc",
    page: 10
  })
);
store.dispatch(
  setIsLoadingAction({
    isLoading: true
  })
);
store.dispatch(
  setStudentAndTotalAction({
    student: [{ a: "sss" }],
    total: 1
  })
);

import store from "./index";
import { createChangeAction } from "./action/student/searchCondition";
import { getIncreaseAction, getDecreaseAction, getAsyncIncreaseAction, getAsyncDecreaseAction } from "./action/counter";

store.dispatch(
  createChangeAction({
    key: "abc",
    page: 10
  })
);
store.dispatch(getAsyncIncreaseAction());
// store.dispatch(getIncreaseAction());
// store.dispatch(getAsyncIncreaseAction());
// store.dispatch(getAsyncDecreaseAction());
// store.dispatch(getAsyncDecreaseAction());
// store.dispatch(getDecreaseAction());



// store.dispatch(
//   setIsLoadingAction({
//     isLoading: true
//   })
// );
// store.dispatch(
//   setStudentAndTotalAction({
//     student: [{ a: "sss" }],
//     total: 1
//   })
// );

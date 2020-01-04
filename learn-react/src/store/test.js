import store from './index';
import { createChangeAction } from "./action/student/searchCondition";
import {
  setIsLoadingAction,
  setStudentAndTotalAction,
  fetchStudents
} from "./action/student/searchResult";


// store.dispatch(
//   createChangeAction({
//     key: "abc",
//     page: 10
//   })
// );
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
store.dispatch(fetchStudents());

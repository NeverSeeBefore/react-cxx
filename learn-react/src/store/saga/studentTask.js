import { takeEvery, takeLatest, put, select, delay, call } from "redux-saga/effects";
import { fetchStudents, setIsLoading, setStudentAndTotal } from "../action/student/searchResult";
import { getStudentList } from "../../services/student";
// let count = 0
function* fetchStudentsTask() {
  // console.log(++count);
  yield put(setIsLoading(true));
  let condition = yield select(state => state.students.searchCondition);
  // console.log(condition);
  let result = yield call(getStudentList, condition);
  // console.log(result);
  if(result.msg === 'fail'){
    alert("查询失败");
    return;
  }
  yield put(setStudentAndTotal({total: result.total, student: result.data}))
  yield put(setIsLoading(false));
}

// student task
export default function*() {
  console.log("student task");
  yield takeEvery(fetchStudents, fetchStudentsTask);
}

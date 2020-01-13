
import { takeEvery } from "redux-saga/effects";
import { fetchStudents } from "../action/student/searchResult";
// import { actionTypes } from "../action/counter";

function* fetchStudentsTask() {
  while(true){
    
  }
}

// student task 
export default function* () {
  console.log("student task");
  yield takeEvery(fetchStudents, fetchStudentsTask)
}
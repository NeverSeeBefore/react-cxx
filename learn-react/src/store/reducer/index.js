import searchCondition from "./student/searchCondition";
import searchResult from "./student/searchResult";
import { combineReducers } from "redux";

const studentReducer = combineReducers({
  searchCondition,
  searchResult
});


// 最终的reducer
export default combineReducers({
  studentReducer
})

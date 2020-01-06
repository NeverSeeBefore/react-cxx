import searchCondition from "./student/searchCondition";
import searchResult from "./student/searchResult";
import counter from "./counter";
import { combineReducers } from "redux";


const studentReducer = combineReducers({
  searchCondition,
  searchResult
});

// 最终的reducer
export default combineReducers({
  students: studentReducer,
  counter
});

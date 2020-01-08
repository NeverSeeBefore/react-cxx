import store from "./index";
import * as counterActions from "./action/counter";
import { bindActionCreators } from "redux";
import * as searchConditionActions from "./action/student/searchCondition";
import * as searchResultActions from "./action/student/searchResult";

// console.log(counterActions, searchConditionActions, searchResultActions);
window.actions = bindActionCreators(
  { ...counterActions, ...searchConditionActions, ...searchResultActions },
  store.dispatch
);

console.log(window.actions);

import React from "react"
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { change as changeCondition } from "../../../store/action/student/searchCondition";
import {fetchStudents} from "../../../store/action/student/searchResult";

let mapStateToProps = state => ({
  defaultValue: {
    keys: state.students.searchCondition.keys,
    sex: state.students.searchCondition.sex,
    limit: state.students.searchCondition.limit,
    page: state.students.searchCondition.page
  }
});
let mapDispatchToProps = dispatch => ({
  onSearch: newCondition => {
    console.log("onsearch: ", newCondition);
    dispatch(changeCondition(newCondition));
    dispatch(fetchStudents());
  }
});
const StudentSearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
export default function StudentSearch() {
  return (
    <>
      <StudentSearchBar></StudentSearchBar>
    </>
  );
}

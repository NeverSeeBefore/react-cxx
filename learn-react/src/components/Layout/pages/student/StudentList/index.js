import React, { Component } from "react";
import { connect } from "react-redux";
import { change as changeCondition } from "../../../../../store/action/student/searchCondition";
import { fetchStudents } from "../../../../../store/action/student/searchResult";
import store from "../../../../../store";
import SearchBar from "../../../components/SearchBar";
import Table from "../../../components/Table";
import Paging from "../../../../paging/Paging";
import Modal from "../../../../Modal"
import "./index.scss";
import Loading from "../../../../Loading";

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
let StudentSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

mapStateToProps = state => ({
  datas: state.students.searchResult.student
});
let StudentTable = connect(mapStateToProps, null)(Table);

mapStateToProps = state => ({
  total: state.students.searchResult.total,
  panelNumber: 5,
  limit: state.students.searchCondition.limit,
  current: state.students.searchCondition.page
});
mapDispatchToProps = dispatch => ({
  onChangePage: target => {
    dispatch(changeCondition({ page: target }));
    dispatch(fetchStudents());
  }
});
let StudentPaging = connect(mapStateToProps, mapDispatchToProps)(Paging);

mapStateToProps = state => ({
  isLoading: state.students.searchResult.isLoading
})

let StudentLoading = connect(mapStateToProps, null)(Loading);


export default class StudentList extends Component {
  
  componentDidMount = () => {
    store.dispatch(fetchStudents());
  };
  
  render() {
    // console.log(this.state.students)
    return (
      <>
        <StudentSearchBar />
        <StudentTable />
        <div className="pager-container">
          <StudentPaging />
        </div>
        <StudentLoading></StudentLoading>
      </>
    );
  }
}

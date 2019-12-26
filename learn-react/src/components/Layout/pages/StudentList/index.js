import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import Table from "../../components/Table";
import { getStudentList } from "../../../../services/student";

export default class StudentList extends Component {
  state = {
    searchRequirement: {
      keys: "",
      sex: "-1"
    },
    students: {
      head: [],
      datas: []
    },
    page: 1
  };
  onSearch = newSearchRequirement => {
    // console.log(newSearchRequirement);
    this.setState({
      searchRequirement: newSearchRequirement
    });
    this.getStudentListRequest();
  };
  componentDidMount = () => {
    this.getStudentListRequest();
  };
  getStudentListRequest = () => {
    const params = {
      keys: this.state.searchRequirement.keys,
      sex: this.state.searchRequirement.sex,
      page: this.state.page
    };
    const data = getStudentList(params);
    // console.log(data);
    this.setState({
      students: { head: data.head, datas: data.data }
    });
  };
  render() {
    // console.log(this.state.students)
    return (
      <>
        <SearchBar
          defaultValue={this.state.searchRequirement}
          onSearch={this.onSearch}
        ></SearchBar>
        <Table
          head={this.state.students.head}
          datas={this.state.students.datas}
        ></Table>
      </>
    );
  }
}

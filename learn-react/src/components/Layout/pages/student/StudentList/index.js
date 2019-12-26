import React, { Component } from "react";
import SearchBar from "../../../components/SearchBar";
import Table from "../../../components/Table";
import { getStudentList } from "../../../../../services/student";
import Paging from "../../../../paging/Paging";

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
    pager: {
      total: 0,
      current: 1,
      limit: 15,
      panelNumber: 5
    }
  };
  onSearch = newSearchRequirement => {
    // console.log(newSearchRequirement);
    this.setState({
      searchRequirement: newSearchRequirement,
      pager: { ...this.state.pager, current: 1 }
    }, () => {
      this.getStudentListRequest();
    });
  };
  componentDidMount = () => {
    this.getStudentListRequest();
  };
  getStudentListRequest = () => {
    const params = {
      keys: this.state.searchRequirement.keys,
      sex: +this.state.searchRequirement.sex,
      page: +this.state.pager.current,
      limit: +this.state.pager.limit
    };
    console.log('请求参数', params);
    const data = getStudentList(params);
    // console.log(data, { ...this.state.pager, total: data.total });
    if (data.msg !== 'success') { return }
    this.setState({
      students: { head: data.head, datas: data.data },
      pager: { ...this.state.pager, total: data.total }
    });
  };
  onChangePage = (target) => {
    // console.log(target);
    this.setState({
      pager: {
        ...this.state.pager,
        current: target
      }
    }, () => {
      this.getStudentListRequest();
    })

  }
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
        <div className="pager-container">
          <Paging {...this.state.pager} onChangePage={this.onChangePage}></Paging>
        </div>
      </>
    );
  }
}

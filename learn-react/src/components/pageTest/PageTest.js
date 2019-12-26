import React, { Component } from "react";
import Paging from "../paging/Paging";
import StudentList from "../studentList/StudentList";
import Modal from "../modal/Modal";

class PageTest extends Component {
  state = {
    pagingState: {
      current: 5,
      total: 100,
      limit: 10,
      panelNumber: 5
    },
    isLoading: false,
    stus: [{ name: "cxx", id: 1 }]
  };

  constructor(props) {
    super();
    setTimeout(() => {
      this.fetchStudents();
    });
  }
  compo
  async fetchStudents() {
    let n = 0
    const stus = [
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n },
      { name: "cxx", id: ++n }
    ];
    const pagingState = Object.assign({}, this.state.pagingState, {
      total: stus.length,
      current: 1,
      panelNumber: 5,
      limit: 5
    });
    this.setState({
      pagingState,
      stus: stus
    });
    console.log(stus);
    // const stus = await fetch(
    //   `https://open.duyiedu.com/api/student/findByPage?page=${this.state.pagingState.current}&size=${this.state.pagingState.limit}&appkey=18743119027_1551866612751`
    // )
    //   .then(resp => resp.json())
    //   .then(resp => {
    //     console.log(resp);
    //     return resp.data;
    //   });
  }

  handlePageChange = newPage => {
    // console.log(newPage);
    const pagingState = Object.assign({}, this.state.pagingState, {
      current: newPage
    });
    this.setState({
      pagingState,
      isLoading: true
    });
  };

  render() {
    return (
      <div>
        <StudentList stus={this.state.stus}></StudentList>
        <Paging
          {...this.state.pagingState}
          onChangePage={this.handlePageChange}
        ></Paging>
        <Modal isLoading={this.state.isLoading}></Modal>
      </div>
    );
  }
}

export default PageTest;

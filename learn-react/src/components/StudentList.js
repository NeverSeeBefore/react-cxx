import React, { Component } from "react";
import Student from "./Student";

class StudentList extends Component {
  render() {
    const { stus } = this.props;
    return (
      <ul>
        { stus.map && stus.map((item) => {
          return <Student key={item.id} {...item}></Student>;
        })}
      </ul>
    );
  }
}

export default StudentList;

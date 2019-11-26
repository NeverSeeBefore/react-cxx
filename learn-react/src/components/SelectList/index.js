import React, { Component } from "react";

class SelectList extends Component {
  render() {
    return (
      <select name={this.props.name} value={this.props.chooseData} onChange={this.handleChange}>
        {this.getOptions()}
      </select>
    );
  }
  getOptions() {
    return this.props.datas.map(it => {
      return <option key={it.value} value={it.value}>{it.text}</option>;
    });
  }
  handleChange = e => {
    // console.log(e, e.target, e.target.value);
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
  }
}

export default SelectList;

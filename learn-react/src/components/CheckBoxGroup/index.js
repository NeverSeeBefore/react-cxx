import React, { Component } from "react";
import PorpTypes from "prop-types";
import types from "../../util/commonTypes.js";
/**
 * 一组多选框
 */
class CheckBoxGroup extends Component {
  static defaultProps = {
    datas: [],
    chooseDatas: []
  };

  static propTypes = {
    datas: types.groupDatas.isRequired,
    name: PorpTypes.string.isRequired,
    chooseDatas: PorpTypes.node,
    onChange: PorpTypes.func,
  };
  render() {
    // console.log(this.props);
    return <div>{this.getCheckBoxs()}</div>;
  }

  getCheckBoxs() {
    const bs = this.props.datas.map(it => {
      return (
        <label key={it.value}>
          <input
            type="checkbox"
            name={this.props.name}
            value={it.value}
            checked={this.props.chooseDatas.includes(it.value)}
            onChange={this.handleChange}
          ></input>
          {it.text}
        </label>
      );
    });
    return bs;
  }
  handleChange = e => {
    let newArr = null;
    if (e.target.checked) {
      newArr = [...this.props.chooseDatas, e.target.value];
    } else {
      newArr = this.props.chooseDatas.filter(it => it !== e.target.value);
    }
    this.props.onChange && this.props.onChange(newArr, this.props.name, e);
  };
}

export default CheckBoxGroup;

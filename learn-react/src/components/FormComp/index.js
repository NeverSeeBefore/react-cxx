import React, { Component } from "react";
import "./index.css";

class FormComp extends Component {
  state = {
    loginId: "",
    loginPwd: "",
    sex: "male",
    chooseLoves: [],
    loves: [
      {
        value: "football",
        text: "足球"
      },
      {
        value: "basketball",
        text: "篮球"
      },
      {
        value: "movie",
        text: "电影"
      },
      {
        value: "music",
        text: "音乐"
      },
      {
        value: "other",
        text: "其他"
      }
    ],
    city: "beijing"
  };

  render() {
    return (
      <div className="form-comp">
        <div>
          <div>
            <input
              name="loginId"
              type="text"
              value={this.state.loginId}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <input
              name="loginPwd"
              type="text"
              value={this.state.loginPwd}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="sex"
                value="male"
                checked={this.state.sex === "male"}
                onChange={this.handleChange}
              ></input>
              男
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="female"
                checked={this.state.sex === "female"}
                onChange={this.handleChange}
              ></input>
              女
            </label>
          </div>
          <div>
            {this.getLoveCheckBoxs()}
          </div>
          <div>
            <select
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            >
              <option value="beijing">北京</option>
              <option value="shanghai">上海</option>
              <option value="shenzhen">深圳</option>
            </select>
          </div>
        </div>
        <p>
          <button
            onClick={() => {
              console.log(this.state);
            }}
          >
            获取表单数据
          </button>
        </p>
      </div>
    );
  }
  handleChange = e => {
    console.log("change", e.target);
    let val = e.target.value;
    const newPartialState = e.target.name;
    if(e.target.type === "checkbox"){
      if(e.target.checked){
        val = [...this.state.chooseLoves, val];
      } else {
        val = this.state.chooseLoves.filter(it => it !== val)
      }
    }
    this.setState({
      [newPartialState]: val
    });
  };
  /**
   * 获取所有爱好多选框
   */
  getLoveCheckBoxs() {
    const bs = this.state.loves.map(it => {
      return (
        <label key={it.value}>
          <input
            type="checkbox"
            name="chooseLoves"
            value={it.value}
            checked={this.state.chooseLoves.includes(it.value)}
            onChange={this.handleChange}
          ></input>
          {it.text}
        </label>
      );
    });
    return bs;
  }
}

export default FormComp;

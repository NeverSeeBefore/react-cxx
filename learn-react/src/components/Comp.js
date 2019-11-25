import React, { Component } from "react";

class Comp extends Component {
  state = {
    n: 0,
    val: "",
    checked: true,
    loves: ["足球", "篮球", "音乐", "游戏", "其他"],
    chooseLoves: ["篮球"],
    selectVal: "beijing"
  };
  render() {
    // console.log("render ", this.state.n);
    return (
      <div>
        <input
          type="text"
          value={this.state.val}
          onChange={this.handleChange}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.onChecked}
        ></input>
        <div>
          {this.state.loves.map((item, index) => { 
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={this.state.chooseLoves.includes(item)}
                  onChange={e => {
                    if(e.target.checked){
                      this.setState({
                        chooseLoves: [...this.state.chooseLoves, item]
                      })
                    }else{
                      this.setState({
                        chooseLoves: this.state.chooseLoves.filter(l => l !== item)
                      })
                    }
                  }}
                ></input>{item}
              </label>
            );
          })}
        </div>
        <div>
          <select value={this.state.selectVal} onChange={e => {
            this.setState({
              selectVal: e.target.value
            })
          }}>
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="shenzhen">深圳</option>
          </select>
        </div>
      </div>
    );
  }
  handleChange = e => {
    // console.log(e.target,value);
    var val = e.target.value;
    val = val.replace(/\D/g, "");
    this.setState({
      val: val
    });
  };
  onChecked = e => {
    this.setState({
      checked: !this.state.checked
    });
  };
}

export default Comp;
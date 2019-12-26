import React, { PureComponent } from "react";
import "./index.css";

class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    // console.log("props", props);
    this.state = { defaultValue: props.defaultValue };
  }
  
  onSearch = () =>{
    // if(Object.is(this.state.defaultValue, this.props.defaultValue)){
    //   return;
    // }
    this.props.onSearch && this.props.onSearch(this.state.defaultValue);
  }
  onChange = (e) => {
    const value = e.target.value.trim();
    const name = e.target.name;
    this.setState({
      defaultValue: Object.assign({}, this.state.defaultValue, {[name]: value})
    })
  }
  render() {
    // console.log('render');
    return (
      <div className="search-bar">
        <div>
          <label htmlFor="key-words" className="title">
            关键字:
          </label>
          <input id="key-words" className="key-words-input" name="keys" value={this.state.defaultValue.keys} onChange={this.onChange}></input>
        </div>
        <div>
          <label htmlFor="sex" className="title">
            性别:
          </label>
          <select id="sex" className="sex-select" name="sex" value={this.state.defaultValue.sex} onChange={this.onChange}>
            <option className="sex-select-option" value="-1">不限</option>
            <option className="sex-select-option" value="0">男</option>
            <option className="sex-select-option" value="1">女</option>
          </select>
        </div>
        <button className="search-btn" onClick={this.onSearch}>查询</button>
      </div>
    );
  }
}

export default SearchBar;

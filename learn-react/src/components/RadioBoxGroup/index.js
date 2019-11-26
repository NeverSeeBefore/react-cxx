import React, { Component } from 'react';

/**
 * 一组多选框 
 */
class RadioBoxGroup extends Component {

  render () {
    // console.log(this.props);
    return (
      <div>
        {
          this.getRadioBox()
        }
      </div>
    )
  }

  getRadioBox(){
    const bs = this.props.datas.map(it => {
      return <label key={it.value}>
        <input 
          type="radio"
          name={this.props.name}
          value={it.value}
          checked={this.props.chooseData === it.value}
          onChange={this.handleChange}></input>
          {it.text}
      </label>
    })
    return bs;
  }
  handleChange = e => {
    // console.log(e.target, this.props.onChange);
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
  }

}

export default RadioBoxGroup;
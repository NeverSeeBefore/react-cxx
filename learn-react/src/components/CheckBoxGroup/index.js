import React, { Component } from 'react';

/**
 * 一组多选框 
 */
class CheckBoxGrop extends Component {

  render () {
    // console.log(this.props);
    return (
      <div>
        {
          this.getCheckBoxs()
        }
      </div>
    )
  }

  getCheckBoxs(){
    const bs = this.props.datas.map(it => {
      return <label key={it.value}>
        <input 
          type="checkbox"
          name={this.props.name}
          value={it.value}
          checked={this.props.chooseDatas.includes(it.value)}
          onChange={this.handleChange}></input>
          {it.text}
      </label>
    })
    return bs;
  }
  handleChange = e => {
    let newArr = null;
    if(e.target.checked){
      newArr = [...this.props.chooseDatas, e.target.value];
    }else{
      newArr = this.props.chooseDatas.filter( it => it !== e.target.value);
    }
    this.props.onChange && this.props.onChange(newArr, this.props.name, e);
  }

}

export default CheckBoxGrop;
import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'

class SwitchDots extends Component {

  static propTypes = {
    total: PropTypes.number.isRequired,
    curIndex: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {
    const dots = [];
    for (let i = 0; i < this.props.total; i++) {
      dots.push(<span key={i} className={i === this.props.curIndex ? 'active': ''} onClick={() => {
        this.props.onChange && this.props.onChange(i);
      }}></span>)     
    }
    return (
      <div className="dots">
        {
          dots
        }
      </div>
    )
  }
}

export default SwitchDots
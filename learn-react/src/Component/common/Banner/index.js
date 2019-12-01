import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'
import ImgContainer from './ImgContainer'
import SwitchArrow from './SwitchArrow'
import SwitchDots from './SwitchDots'

class Banner extends Component {

  static defaultProps = {
    width: 960,
    height: 540,
    imgSrcs: [],
    autoDuration: 2000,
    duration: 500
  }

  static proTypes = {
    width: PropTypes.number.isRequired, // 容器高度
    height: PropTypes.number.isRequired, // 容器高低
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired, //图片路径数组
    autoDuration: PropTypes.number.isRequired, // 自动切换间隔时间
    duration: PropTypes.number.isRequired, // 完成一次切换需要的时间
  }

  state = {
    curIndex: 0
  }

  imgsRef = el => {
    this.imgContainer = el;
  }
  componentDidMount(){
    this.autoSwitch();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="banner-container" style={{ width: this.props.width, height: this.props.height }} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <ImgContainer imgSrcs={this.props.imgSrcs} imgWidth={this.props.width} imgHeight={this.props.height} duration={this.props.duration} ref={this.imgsRef}></ImgContainer>
        <SwitchArrow onChange={this.handleChange}></SwitchArrow>
        <SwitchDots total={this.props.imgSrcs.length} curIndex={this.state.curIndex} onChange={this.handleChange}></SwitchDots>
      </div>
    )
  }
  handleChange = type => {
    // console.log(type);
    let curIndex = this.state.curIndex;
    if (type === 'left') {
      curIndex--;
      if (curIndex < 0) {
        curIndex = this.props.imgSrcs.length - 1;
      }
    } else if (type === 'right') {
      curIndex++;
      if (curIndex > this.props.imgSrcs.length - 1) {
        curIndex = 0;
      }
    }else{
        if(curIndex === type){
          return;
        }
      curIndex = type;
    }
    this.setState({
      curIndex
    })
    // console.log(this.imgContainer);
    this.imgContainer.switchTo(curIndex);
  }
  timer= null
  autoSwitch = () => {
    this.timer = setInterval(() => {
      this.handleChange((this.state.curIndex + 1) % this.props.imgSrcs.length);
    }, this.props.autoDuration)
  }
  onMouseEnter = () => {
    clearInterval(this.timer);
  }
  onMouseLeave = () => {
    this.autoSwitch();
  }
}

export default Banner
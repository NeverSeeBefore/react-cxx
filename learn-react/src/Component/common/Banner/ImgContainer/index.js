import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css';

class ImgContainer extends Component {

  static defaultProps = {
    imgWidth: 960,
    imgHeight: 540,
    imgSrcs: [],
    duration: 500
  }

  static propTypes = {
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired, // 图片路径
    imgWidth: PropTypes.number.isRequired, // 单张图片的宽度
    imgHeight: PropTypes.number.isRequired, // 单张图片的高度
    duration: PropTypes.number.isRequired // 单张图片过度时间
  }

  tick = 16;
  timer = null;
  /**
   *  index 切换到第几张图片
   */
  switchTo(index){
    console.log('switchTo', index)
    if(index < 0){
      index = 0;
    }else if(index > this.props.imgSrcs.length - 1){
      index = this.props.imgSrcs.length - 1
    }
    const targetLeft = -(index * this.props.imgWidth);
    let currentLeft = parseFloat(getComputedStyle(this.div).marginLeft);
    // console.log('aaaaa', targetLeft, currentLeft);
    // 计算运动多少次
    const times = Math.ceil(this.props.duration / this.tick);
    let curTimes = 0;
    // 计算每次运动的距离
    const totalDis = targetLeft - currentLeft;
    const dis = totalDis / times;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      curTimes ++;
      if(curTimes === times){
        clearInterval(this.timer);
      }
      currentLeft += dis;
      this.div.style.marginLeft = currentLeft + 'px';
    }, this.tick)
    
  }

  containerRef = el => {
    this.div = el;
  }
  render() {
    const imgs = this.props.imgSrcs.map( (src, index) => <img key={index} src={src} alt="" style={{
      width: this.props.imgWidth,
      height: this.props.imgHeight,
      float: "left"
    }}></img>)
    return (
      <div className="img-container" ref={this.containerRef} style={{
        width: this.props.imgWidth * this.props.imgSrcs.length + 'px',
        height: this.props.imgHeight + 'px',
      }}>
        {
          imgs
        }
      </div>
    )
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

}

export default ImgContainer
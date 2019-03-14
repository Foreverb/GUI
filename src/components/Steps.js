import React, { Component } from 'react';
import '../App.css';
import './Steps.css';
import '../index.css';
class Steps extends Component{
  props = {
    title : '',     //附属信息
    item  : '',     //每部分对应的第几项的值
    icon  : '',     //图标名
    direction : '', //steps的方向
    progressDot : '' //完成度用实心点表示
  }
  render(){
      let { title,item,icon,direction,progressDot } = this.props;
      let cls = ['cir'];
      let iconName = "";
      let isShowIconEl = false;
      let isProgressDot = false;
      let isShowItem = false;
      if( icon ){
        isShowIconEl = true;
        iconName = icon;
      }
      if( item ){
        isShowItem = true;
      }
      if( progressDot ){
        isProgressDot = true;
        cls = ['Dot'];
      }
      cls = cls.join(' ');
      return(
        <div className="line-box">
        {isProgressDot?<span className={cls}>{item}</span>:null}
        {isShowItem?<span><span className="cir">{item}</span><i className={title}>{title}</i></span>:null}
        {isShowIconEl?<span className={`iconfont icon-${iconName}`}></span>:null}
          <i className="In-progress">{title}</i>
          <div className="line"></div>
        </div>
      )
    }
  }
export default Steps;

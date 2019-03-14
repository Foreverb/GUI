import React, { Component } from 'react';
import './Breabcrumb.css';
import '../App.css';
import '../index.css';
class Breabcrumb extends Component{
  props = {
    text : '',      //文本内容
    key : '',       //对应的key值
    icon : '',      //图标名
    separator : '', //分割符
  }
  render(){
    let {text,key,icon,separator} = this.props;
    let iconName = '';
    let isIconEl = false;
    let isSeparator = false;
    if( separator ){
      isSeparator = true;
    }
    if( icon ){
      isIconEl = true;
      iconName = icon
    }
    return (
      <div className="breabcrumb">
        <span>
          {isIconEl ? <i className={`iconfont icon-${iconName}`}></i> : null}
          <a href=''>{text}</a>
          {isSeparator?<span> {separator}</span>:null}
        </span>
      </div>
    );
  }
}
export default Breabcrumb;

import React, { Component } from 'react';
import '../App.css';
import './Input.css';
import '../index.css';
class Input extends Component{
  props = {
    placeholder : "",         //输入框中的提示信息
    size        : "normal",   //输入框的大小
    icon        : "",         //是否有图标
  }
  render(){
    let { placeholder,size,icon } = this.props;
    let cls = ['Input-default'];
    let isShowIconEl = false;
    let iconName = "";
    if( size ){
      cls.push('Input-'+size)
    }
    if( icon ){
      isShowIconEl = true;
      iconName = icon;
    }
    cls = cls.join(' ')
    console.log(cls);
    return(
      <div className="wrap-ifont">
        <div className={cls}>{placeholder}</div>
        <span className='Input-icon'>{isShowIconEl?<i className={`iconfont icon-${iconName}`}></i>:null}</span>
      </div>
    )
  }
}
export default Input;

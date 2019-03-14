import React, { Component } from 'react';
import '../App.css';
import './Switch.css';
import '../index.css';
export class Switch extends Component{
  constructor(props){
    super(props)
    props = {
      defaultChecked : true,         //初始是否选中
      disabled : false,              //开关禁用
      checkedChildren : '',          //开关打开时显示的内容
      unCheckedChildren : '',        //开关关闭时显示的内容
      size : '',                     //开关的大小
      onChange : function(){},       //开关
    }
  }
  state = {
    isClose : false,        //开关是否被关闭
  }
  changeState(isClose){
    this.setState({isClose : !isClose})
  }
  render(){
    let {defaultChecked,disabled,checkedChildren,unCheckedChildren,size,onChange,loading} = this.props;
    let {isClose} = this.state;
    let cls_switch_wrap = 'switch-wrap';
    let cls_circle = 'circle-default';
    let checked_word = 'checked-word'
    let unChecked_word = 'unChecked-word'
    let hasCheckedChildren = false;
    if( checkedChildren ){
      hasCheckedChildren = true
    }
    if( defaultChecked ){
      cls_switch_wrap += ' wrap-checked'
      cls_circle += ' circle-checked'
    }
    if( !isClose ){
      cls_switch_wrap += ' wrap-checked'
      cls_circle += ' circle-checked'
      unChecked_word += ' word-hide'
    }else{
      cls_circle += ' circle-unChecked'
      cls_switch_wrap = 'switch-wrap';
      checked_word += ' word-hide'
    }
    if( disabled === true ){
      cls_switch_wrap += ' switch-disabled'
    }
    if( size === 'small' ){
      cls_switch_wrap += ' switch-small'
      cls_circle += ' circle-small'
    }
    if( loading ){
      cls_circle += ' iconfont icon-loading1'
    }
    return(
      <div className={cls_switch_wrap} onClick={()=>{!disabled&&this.changeState(isClose)}}>
        {hasCheckedChildren?<a className={checked_word}>{checkedChildren}</a>:null}
        <span className={cls_circle}></span>
        {hasCheckedChildren?<a className={unChecked_word}>{unCheckedChildren}</a>:null}
      </div>
    )
  }
}
export class Icon extends Component{
  render(){
    let {icon} = this.props;
    let iconName = '';
    if( icon ){
      iconName = icon;
    }
    return(
      <i className={`iconfont icon-${iconName}`}></i>
    )
  }
}
export default Switch;

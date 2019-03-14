import React, { Component } from 'react';
import '../App.css';
import './Checkbox.css';
import '../index.css';
class Checkbox extends Component{
  props = {
    type     : 'checkbox', //多选框的默认类型
    disabled : false,      //多选框是否为禁用状态
    checked  : '',         //多选框是否为选中状态
    title : '',            //多选框内容
    onClick : function(){},
  }
  state = {
    isChecked : false
  }
  changeChecked(isChecked){
    this.setState({isChecked:!isChecked})
  }
  render(){
    let { type,disabled,checked,title,onClick } = this.props;
    let {isChecked}=this.state;
    let cls = ['input-default'];
    let isDisabled = false;
    // let isClick = false;
    if( disabled ){
      isDisabled = true;
      cls.push('check-disabled');
    }
    if( disabled && checked ){
      isChecked = true
    }
    if( checked === true ){
      isChecked = true
    }
    // if( onClick ){
    //   isClick = true;
    // }
    cls = cls.join(' ')
    // console.log(isChecked);
    return (
      <div className='check-inline'>
        {isDisabled?<div className='wrap'>
          <span className={cls}>
            {isChecked?<i className='iconfont icon-queren change'></i>:null}
          </span>
          <span>{title}</span>
        </div>:<div className='wrap' onClick={()=>{this.changeChecked(isChecked)}}>
          <span className={cls}>
            {isChecked?<i className='iconfont icon-queren change'></i>:null}
          </span>
          <span>{title}</span>
        </div>}
      </div>
    )
  }
}
export default Checkbox;

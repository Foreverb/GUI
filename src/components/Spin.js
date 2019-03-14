import React, { Component } from 'react';
import '../App.css';
import './Spin.css';
import '../index.css';

export class Spin extends Component{
  constructor(props){
    super(props)
    props = {
      size : '',        //spin的大小,默认default
      tip : '',         //提示
      indicator : '',   //自定义图标
    }
  }
  render(){
    let {size,tip,indicator} = this.props;
    let cls_wrap = 'spin-wrap';
    if( size === 'small' ){
      cls_wrap += ' spin-small'
    }else if( size === 'large' ){
      cls_wrap += ' spin-large'
    }
    return(
      <div style={{display: 'inline-block'}} className={tip?'icon-wrap':null}>
        {
          indicator ? <div>{indicator}</div> : <div className={cls_wrap}>
            {
              new Array(4).fill(0).map((item,index)=>{
                return <i key={index}></i>
              })
            }
          </div>
        }
        <div style={{color:'#1890ff'}}>{tip}</div>
      </div>
    )
  }
}
export class Icon extends Component{
  render(){
    let {type} = this.props;
    let iconName = '';
    if( type ){
      iconName = type;
    }
    return(
      <i className={`iconfont icon-${iconName}`}></i>
    )
  }
}

export default Spin;

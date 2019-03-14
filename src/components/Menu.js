import React, { Component } from 'react';
import '../App.css';
import './Menu.css';
import '../index.css';
export class Menu extends Component{
  render(){
    let {children} = this.props;
    let titles = [];
    let isIconShow = false;
    let iconName = '';//图标名
    let isDisabled = false;
    let cls = ['menu-item']
    children.map((item,index)=>{
      titles.push(item.props.title)
      if( item.props.icon ){
        isIconShow = true;
        iconName = item.props.icon;
        // debugger
      }
      if( item.props.disabled ){
        // debugger
        isDisabled = true;
        cls.push('menu-disabled')
      }
    })
    cls = cls.join(' ');
    // debugger
    return(
      <div>
        <div className='menu-head'>
          {
            titles.map((item,index)=>{
              return <div className={cls}>
                {isIconShow ? <i className={`iconfont icon-${iconName}`}></i>:null}
                <span>{item}</span>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}
export class MenuItem extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

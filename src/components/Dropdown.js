import React, { Component } from 'react';
import '../App.css';
import './Button.css';
import './Dropdown.css';
import '../index.css';
export class Dropdown extends Component{
  constructor(props){
    super(props)
    props = {
      title : '',       //文本内容
      overlay : '',     //菜单
      placement : '',   //菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight
      type : '',        //鼠标移入的内容区域的显示类型
      trigger : 'click',     //菜单弹出是由click控制的
    }
  }
  state = {
    cls_menu : ['wrap-menu','allSimial'],
    isClick : true,
  }
  changeStateShow(){
    this.setState({cls_menu : ['allSimial','drop-show']})
    // debugger
  }
  changeStateHide(){
    this.setState({cls_menu : ['wrap-menu','allSimial']})
  }
  clickChangeState(isClick){
    this.setState({isClick:!isClick})
    if( this.state.isClick ){
      this.setState({cls_menu : ['allSimial','drop-show']})
    }else{
      this.setState({cls_menu : ['wrap-menu','allSimial']})
    }
  }
  render(){
    let {title,overlay,placement,type,trigger,disabled} = this.props;
    let {cls_menu,isClick} = this.state;
    let cls_wrap = "menu-group";
    let cls_btn = 'button drop-button';
    let cls_icon = "iconfont icon-xiala down-normal";
    let wayOfHover = true;
    if( trigger === 'click' ){
      wayOfHover = false
    }
    if( disabled ){
      cls_btn += ' wrap-disabled'
    }
    cls_menu = cls_menu.join(' ');
    switch (placement) {
      case 'bottomLeft':
        cls_menu += ' drop-bottomLeft'
        break;
      case 'bottomCenter':
        cls_menu += ' drop-bottomCenter'
        break;
      case 'bottomRight':
        cls_menu += ' drop-bottomRight'
        break;
      case 'topLeft':
        cls_menu += ' drop-topLeft'
        break;
      case 'topCenter':
        cls_menu += ' drop-topCenter'
        break;
      case 'topRight':
        cls_menu += ' drop-topRight'
        break;
      default:
    }
    return(
      <div className={cls_wrap}
      onMouseEnter={()=>{trigger==='hover'&&!disabled&&this.changeStateShow()}}
      onMouseLeave={()=>{this.changeStateHide()}}
      onClick={()=>{trigger==='click'&&this.clickChangeState(isClick)}}
      >{type==='button'?<button className={cls_btn}>
      {title}</button>:<a className={cls_icon}>
      {title}</a>}<div className={cls_menu}>{overlay}</div>
      </div>
    )
  }
}
export class Item extends Component{
	render(){
		return(
			<div></div>
		)
	}
}
export class Menu extends Component{
	render(){
    let {children} = this.props;
    let cls_menu = '';
		return(
			<div>
        {
          children.map((item,index)=>{
            if(item.props.disabled){
              cls_menu = 'menu-disabled'
            }
            return <div className={cls_menu}>{item.props.children}</div>
          })
        }
      </div>
		)
	}
}

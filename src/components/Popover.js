import React, { Component } from 'react';
import '../App.css';
import './Popover.css';
import '../index.css';
class Popover extends Component{
  state = {
    cls_popover : ['popover-wrap'],
    visible : true,
  }
  showCard(){
    this.setState({cls_popover:['popover-wrap','popover-show']})
  }
  hideCard(){
    this.setState({cls_popover:['popover-wrap']})
  }
  clickChangeState(visible){
    this.setState({visible:!visible});
    if( visible ){
      this.setState({cls_popover:['popover-wrap','popover-show']})
    }else{
      this.setState({cls_popover:['popover-wrap']})
    }
  }
  render(){
    let {children,content,title,placement,arrowPointAtCenter,trigger} = this.props;
    let {cls_popover,visible} = this.state;
    let cls_popover_btn = 'popover-btn';
    let cls_title = 'popover-title'
    if( placement && !arrowPointAtCenter ){
      cls_popover.push(`popover-${placement}`)
    }
    // if( arrowPointAtCenter ){
    //   cls_popover.push('popover-center')
    // }
    cls_popover = cls_popover.join(' ');
    return(
      <div className={cls_popover_btn}
      onClick={()=>{trigger==='click'&&this.clickChangeState(visible)}}
      onMouseEnter={()=>{trigger==='hover'&&this.showCard()}}
      onMouseLeave={()=>{this.hideCard()}}
      >{children}
      <div className={cls_popover}><p className={cls_title}>{title}</p>{content}</div>
      </div>
    )
  }
}
export default Popover;

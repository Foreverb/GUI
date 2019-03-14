import '../App.css';
import '../index.css';
import React, { Component } from 'react';
class Tag extends Component{
  props = {
    title : '',         //标签内的内容
    closable : '',      //可关闭标签
    color : '',         //标签的颜色
  }
  state = {
    cls : ['tag-normal'],
  }
  changeState(){
    let name = this.state.cls.push('tag-style')
    this.setState({name})
    // console.log(this);
    // debugger
  }
  render(){
    let {title,closable,color} = this.props;
    let {cls} = this.state;
    let hasClose = false;
    let thisColor = false;
    if( closable ){
      hasClose = true
    }
    if( color ){
      thisColor = true;
    }
     cls = cls.join(' ')
     // console.log(cls);
    return(
      <div className='tag-wrap'>
        {hasClose ? <span className={cls} onClick={()=>{this.changeState()}}>{title}
        <i className='iconfont icon-close'></i>
        </span>:<div>{thisColor ? <span className={cls} style={{color:color,borderColor:color}}>
        {title}</span>:<span className={cls}>{title}</span>}</div>}
      </div>
    )
  }
}
export default Tag

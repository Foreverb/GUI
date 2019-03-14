import React, { Component } from 'react';
import '../App.css';
import './Alert.css';
import '../index.css';
class Alert extends Component{
  constructor(props){
    super(props);
    props = {
      message : '',         //警告框的标题内容
      type :  '',           //警告框的类型
      closable : '',        //是否有关闭按钮
      description : '',     //警告框的描述内容
      closeText : '',       //是否有关闭文字
      showIcon : '',        //是否有图标提示
    }
  }
  state = {
    cls : ['alert-normal']
  }
  changeState(){
    // this.state.cls.push('alert-hide')
    this.setState({cls:['alert-normal','alert-hide']})
    // debugger
  }
  render(){
    let {message,type,closable,description,closeText,showIcon} = this.props;
    let {cls} = this.state;
    // console.log(cls)
    let isClose = false;
    let isDescription = false;
    let isTitleStrong = false;
    let isCloseText = false;
    let isShowIcon = false;
    if( type ){
      cls.push(`alert-${type}`)
    }
    if( closable ){
      isClose = true;
      isCloseText = false;
    }
    if( closeText ){
      isCloseText = true;
      isClose = false;
    }
    if( showIcon ){
      isShowIcon = true;
    }
    if( description ){
      isDescription = true;
      isTitleStrong = true;
    }
    cls = cls.join(' ');
    return(
      <div className={cls}>
        <div>
          {isShowIcon ? <i className={`iconfont icon-${type} iconStyle`}></i>:null}
          {isTitleStrong?<span className="title-strong">{message}</span>:<span>{message}</span>}
          {isClose ? <a className='close' onClick={()=>{this.changeState()}}><i className='iconfont icon-close'></i></a>:null}
          {isCloseText ? <a className='close' onClick={()=>{this.changeState()}}>Close Now</a>:null}
        </div>
        {isDescription ? <div>{description}</div>:null}
      </div>
    )
  }
}
export default Alert;

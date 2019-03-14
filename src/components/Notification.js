import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import './Notification.css';
import '../index.css';
class NotificationCard extends Component {//NotificationCard继承component的类

  componentDidMount(){//componentDidMount阶段
    const {removeSelf , time} = this.props;//从NotificationCard实例中获取当中的属性
    if( time !== 0 ){//此处执行一个判断，如果传入的time部不为0的话，则执行一个定时器任务
      setTimeout( ()=>{//定时器任务的时间设为传入的time（如果有的情况下，没有则默认设为4.5秒）
        removeSelf && removeSelf()//定时器中执行传入的removeSelf函数（在有的情况下）
      },time || 4500)
    }
  }
  removeCard(){//此函数调用之后执行传入的removeSelf函数（在有的情况下）
    const {removeSelf} = this.props;
    // console.log(removeSelf);
    // debugger
    removeSelf && removeSelf()
  }
  render() {//生成结构
      const {message,title,time,btn,type,style,position} = this.props;
      let cls_con = 'notification-con';
      let cls_head = 'notification-head';
      let cls_foot = 'notification-foot';
      let cls_title = 'notification-title';
      let cls_icon  = 'notification-icon iconfont icon-close';
      let cls_card = 'notification-card';
      return (
        <div className={cls_card} style={style}>
          <div className={cls_head}>
            {type?<span className={`iconfont icon-${type}`} style={{marginRight:'10px',fontSize:'25px'}}></span>:null}
            <div className={cls_title}>{title}</div>
            <span className={cls_icon} onClick={()=>{this.removeCard()}}></span>
          </div>
          <div className={cls_foot}>{message}</div>
          {btn?<button className='button button-type-normal confim' onClick={()=>{this.removeCard()}}>{btn}</button>:null}
        </div>
      )
  }
}

//Notification类中有noodList（数组），open方法由PageNotification里传出，remove函数和render函数
class Notification {//接受PageNotification里传出的参数
  nodeList = [[],[],[],[]]
  open( args ){
    autoCheckContainer();
    if( args.position === 'topLeft' ){
      let index = this.nodeList[1].length;
      this.nodeList[1].push(<NotificationCard removeSelf={ ()=>{
        this.remove( index );
      }} time={args.duration} message={args.message} title={args.title}
      btn={args.btn} type={args.type} style={args.style} position='topLeft'/>)
    }else if( args.position === 'topRight' ){
      let index = this.nodeList[0].length;
      this.nodeList[0].push( <NotificationCard removeSelf={ ()=>{
        this.remove( index );
      }} time={args.duration} message={args.message} title={args.title}
      btn={args.btn} type={args.type} style={args.style} position='topRight'/> )
    }else if( args.position === 'bottomRight' ){
      let index = this.nodeList[2].length;
      this.nodeList[2].push( <NotificationCard removeSelf={ ()=>{
        this.remove( index );
      }} time={args.duration} message={args.message} title={args.title}
      btn={args.btn} type={args.type} style={args.style} position='bottomRight'/> )
    }else if( args.position === 'bottomLeft' ){
      let index = this.nodeList[3].length;
      this.nodeList[3].push( <NotificationCard removeSelf={ ()=>{
        this.remove( index );
      }} time={args.duration} message={args.message} title={args.title}
      btn={args.btn} type={args.type} style={args.style} position='bottomLeft'/> )
    }else{
      let index = this.nodeList[0].length;
      this.nodeList[0].push( <NotificationCard removeSelf={ ()=>{
        this.remove( index );
      }} time={args.duration} message={args.message} title={args.title}
      btn={args.btn} type={args.type} style={args.style}/> )
    }
    this.render(args.position);
  }
  remove( index ){//传入一个参数index，将noodList中的第index个换成null，然后执行一次render函数
    this.nodeList.splice(index,1,null);
    this.render();
  }
  render(placement){//render函数，将noodList中的每一项渲染到‘notification-wrap’中
    let topRight = document.getElementsByClassName('notification-wrap')[0];
    let topLeft = document.getElementsByClassName('topLeft')[0];
    let bottomRight = document.getElementsByClassName('bottomRight')[0];
    let bottomLeft = document.getElementsByClassName('bottomLeft')[0];
    // debugger
    switch (placement) {
      case 'topRight':  
        ReactDOM.render( this.nodeList[0] , topRight )
        break;
      case 'topLeft':
        ReactDOM.render( this.nodeList[1] , topLeft )
        break;
      case 'bottomRight':
        ReactDOM.render( this.nodeList[2] , bottomRight )
        break;
      case 'bottomLeft':
        ReactDOM.render( this.nodeList[3] , bottomLeft )
        break;    
      default:
        ReactDOM.render( this.nodeList[0] , topRight )
        break;
    }
  }
}
function autoCheckContainer(){//生成弹出的notification；
  let size = document.getElementsByClassName('notification-wrap').length;
  if( size > 0 ){
    return false;
  }
  let topRight = document.createElement('div');
  topRight.className = 'notification-wrap'

  let topLeft = document.createElement('div');
  topLeft.className = 'topLeft'

  let bottomRight = document.createElement('div');
  bottomRight.className = 'bottomRight'

  let bottomLeft = document.createElement('div');
  bottomLeft.className = 'bottomLeft'
  
  document.getElementsByTagName('body')[0].appendChild( topRight );
  document.getElementsByTagName('body')[0].appendChild( topLeft );
  document.getElementsByTagName('body')[0].appendChild( bottomRight );
  document.getElementsByTagName('body')[0].appendChild( bottomLeft );
}
export default new Notification();

//<NotificationCard/>  reactElement对象、jsx对象
//NotificationCard如何实现定时删除自己
// 首先初始化NotificationCard时传入time和removeSelf属性，其中time类型是number
//removeSelf类型是function  然后在NotificationCard实例化后的componentDidMount阶段
//执行一个定时器任务，执行的是由NotificationCard传入的removeSelf函数

//removeSelf函数由notifition类提供当执行时传入一个index参数，会替换类的变量nodeList对应index下标的元素
//为null，随后执行一次notification类的render操作（render操作会将nodeList内的所有成员挂在到指定的容器内）
//（ReactDom.render时如果其元素为null则会跳过该元素）
//替换为null完成了对该元素（NotificationCard）的删除的操作

//如何实现不自动删除

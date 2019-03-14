import React, { Component } from 'react';
import Button from '../components/Button.js';
import Notification from '../components/Notification.js';
import Demo from '../components/Demo.js';


console.log( Notification );


class PageNotification extends Component{
  state = {
    show : false,     //控制Notification的显示隐藏
  }
  onClick(){
    Notification.open(
      {
        title:'Notification Title',
        duration:  4500,
        message:  'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      }
    );
  }
  clearDuration(){
    Notification.open(
      {
        title:'Notification Title',
        message:'This is the content of the notification. This is the content of the notification. This is the content of the notification',
        duration:  0,
      }
    )
  }
  selfName(){
    Notification.open(
      {
        title:'Notification Title',
        message:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        duration: 4500,
        btn:'Confirm',
      }
    )
  }
  Success(){
    Notification.open(
      {
        title:'Notification Title',
        message:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        duration: 4500,
        type:'success',
      }
    )
  }
  Info(){
    Notification.open(
      {
        title:'Notification Title',
        message:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        duration: 4500,
        type:'info',
      }
    )
  }
  Warning(){
    Notification.open(
      {
        title:'Notification Title',
        message:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        duration: 4500,
        type:'warning',
      }
    )
  }
  Error(){
    Notification.open(
      {
        title:'Notification Title',
        message:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        duration: 4500,
        type:'error',
      }
    )
  }
  topRight(){
    Notification.open(
      {
        title:'Notification Title',
        message:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        duration: 0,
        position: 'topRight'
      }
    )
  }
  topLeft(){
    Notification.open(
      {
        title:'Notification Title',
        message:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        duration: 0,
        position: 'topLeft'
      }
    )
  }
  bottomRight(){
    Notification.open(
      {
        title:'Notification Title',
        message:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        duration: 0,
        position: 'bottomRight'
      }
    )
  }
  bottomLeft(){
    Notification.open(
      {
        title:'Notification Title',
        message:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        duration: 0,
        position: 'bottomLeft'
      }
    )
  }
  render(){
    let {show} = this.state;
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Notification通知提醒框</h2>
        <p style={{textAlign:'left'}}>全局展示通知提醒信息。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <p style={{textAlign:'left'}}>在系统四个角显示通知提醒信息。经常用于以下情况：</p>
        <br/>
        <ul style={{textAlign:'left'}}>
          <li>较为复杂的通知内容。</li>
          <br/>
          <li>带有交互的通知，给出用户下一步的行动点。</li>
          <br/>
          <li>系统主动推送。</li>
          <br/>
        </ul>
        <br/>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='基本' desc='最简单的用法，4.5 秒后自动关闭。' instance={
          <div>
            <Button type='normal' text='Open the notification box' onClick={()=>{this.onClick()}}/>
          </div>
        }/>
        <Demo title='自动关闭的延时' desc='自定义通知框自动关闭的延时，默认4.5s，取消自动关闭只要将该值设为 0 即可。' instance={
          <Button type='normal' text='Open the notification box' onClick={()=>{this.clearDuration()}}/>
        }/>
        <Demo title='自定义按钮' desc='自定义关闭按钮的样式和文字。' instance={
          <Button type='normal' text='Open the notification box' onClick={()=>{this.selfName()}}/>
        }/>
        <Demo title='带有图标的通知提醒框' desc='通知提醒框左侧有图标。' instance={
          <div>
            <Button text='Success' onClick={()=>{this.Success()}}/>
            <Button text='Info' onClick={()=>{this.Info()}}/>
            <Button text='Warning' onClick={()=>{this.Warning()}}/>
            <Button text='Error' onClick={()=>{this.Error()}}/>
          </div>
        }/>
        <Demo title='自定义样式' desc='使用 style 和 className 来定义样式。' instance={
          <Button type='normal' text='Open the notification box' onClick={()=>{this.changeStyle()}}/>
        }/>
        <Demo title='位置' desc='可以设置通知从右上角、右下角、左下角、左上角弹出。' instance={
          <div>
            <Button text='topRight' onClick={()=>{this.topRight()}}/>
            <Button text='topLeft' onClick={()=>{this.topLeft()}}/>
            <Button text='bottomRight' onClick={()=>{this.bottomRight()}}/>
            <Button text='bottomLeft' onClick={()=>{this.bottomLeft()}}/>
          </div>
        }/>
      </div>
    )
  }
  changeStyle(){
    Notification.open(
      {
        title:'Notification Title',
        message:'This is the content of the notification. This is the content of the notification. This is the content of the notification',
        duration:  4500,
        style: {
          width: 600,
          marginLeft: 335 - 600,
        },
      }
    )
  }
};
export default PageNotification;

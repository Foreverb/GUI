import React, { Component } from 'react';
import Popover from '../components/Popover.js';
import Button from '../components/Button.js';
import Demo from '../components/Demo.js';
class PagePopover extends Component{
  render(){
    const content = (
      <div className='popover-con'>
        <p>Content</p>
        <p>Content</p>
      </div>
    );
    const content2 = (
      <div className='popover-con'>
        <p style={{color:'#189ff0',cursor:'pointer'}}>close</p>
      </div>
    );
    const text = <span>Title</span>;
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Popover气泡卡片</h2>
        <h3 style={{textAlign:'left'}}>此组件调用了Button组件，使用方式见Button.js</h3>
        <p style={{textAlign:'left'}}>点击/鼠标移入元素，弹出气泡式的卡片浮层。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <p style={{textAlign:'left'}}>当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。</p>
        <br/>
        <p style={{textAlign:'left'}}>和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。</p>
        <br/>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='基本' desc='最简单的用法，浮层的大小由内容区域决定。' instance={
          <div>
          <Popover content={content} title="Title" trigger='hover'>
            <Button type="normal" text='Hover me'/>
          </Popover>
          </div>
        }/>
        <Demo title='三种触发方式' desc='鼠标移入、聚集、点击。' instance={
          <div>
          <Popover content={content} title="Title" trigger='hover'>
            <Button text='Hover me'/>
          </Popover>
          {
            // <Popover content={content} title="Title" trigger="focus">
            //   <Button text='Focus me'/>
            // </Popover>
          }
          <Popover content={content} title="Title" trigger="click">
            <Button text='Click me'/>
          </Popover>
          </div>
        }/>
        <Demo title='箭头指向' desc='设置了 arrowPointAtCenter 后，箭头将指向目标元素的中心。' instance={
          <div>
          <Popover placement="topLeft" title={text} content={content} trigger='hover'>
            <Button text='Align edge / 边缘对齐'/>
          </Popover>
          <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter trigger='hover'>
            <Button text='Arrow points to center / 中心对齐'/>
          </Popover>
          </div>
        }/>
      </div>
    )
  }
}
export default PagePopover;

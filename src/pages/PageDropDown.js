import React, { Component } from 'react';
import {Dropdown,Item,Menu} from '../components/Dropdown.js';
import Button from '../components/Button.js';
import Demo from '../components/Demo.js';
class PageDropDown extends Component{
  render(){
    const menu = (
      <Menu>
        <Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Item>
        <Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Item>
        <Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Item>
      </Menu>
    );
    const menu2 = (
      <Menu>
        <Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Item>
        <Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Item>
        <Item disabled>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Item>
      </Menu>
    );
    return(
      <div>
        <h2 style={{textAlign:'left'}}>DropDown下拉菜单</h2>
        <h3 style={{textAlign:'left'}}>此组件调用了Button组件，使用方式见Button.js</h3>
        <br/>
        <p style={{textAlign:'left'}}>向下弹出的列表。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <p style={{textAlign:'left'}}>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</p>
        <br/>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='基本' desc='最简单的下拉菜单。传入参数"title=key"即可使用' instance={
          <Dropdown title='Hover me' overlay={menu}  trigger='hover'/>
        }/>
        <Demo title='弹出位置' desc='支持 6 个弹出位置。只需添加“placement”属性=一个方向值即可' instance={
          <div>
          <Dropdown overlay={menu} placement="bottomLeft" type='button' title='bottomLeft'  trigger='hover'/>
          <Dropdown overlay={menu} placement="bottomCenter" type='button' title='bottomCenter'  trigger='hover'/>
          <Dropdown overlay={menu} placement="bottomRight" type='button' title='bottomRight'  trigger='hover'/>
          <Dropdown overlay={menu} placement="topLeft" type='button' title='topLeft'  trigger='hover'/>
          <Dropdown overlay={menu} placement="topCenter" type='button' title='topCenter'  trigger='hover'/>
          <Dropdown overlay={menu} placement="topRight" type='button' title='topRight'  trigger='hover'/>
          </div>
        }/>
        <Demo title='其他元素' desc='不可用菜单项。' instance={
          <Dropdown title='Hover me' overlay={menu2}  trigger='hover'/>
        }/>
        <Demo title='触发方式' desc='默认是移入触发菜单，可以点击触发。' instance={
          <Dropdown title='Click me' overlay={menu} trigger='click'/>
        }/>
        <Demo title='带下拉框的按钮' desc='左边是按钮，右边是额外的相关功能菜单。' instance={
          <div>
          <Button text='Dropdown'/>
          <Dropdown overlay={menu2} type='button' title='...' trigger='hover'/>
          <Dropdown overlay={menu2} type='button' title='Button' trigger='hover'/>
          <Button text='Dropdown' disabled/>
          <Dropdown overlay={menu2} type='button' title='...' trigger='hover' disabled/>
          </div>
        }/>
      </div>
    )
  }
}
export default PageDropDown;

import React, { Component } from 'react';
import {Menu,MenuItem} from '../components/Menu.js';
import Demo from '../components/Demo.js';
class PageMenu extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Menu导航菜单</h2>
        <p style={{textAlign:'left'}}>为页面和功能提供导航的菜单列表。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <p style={{textAlign:'left'}}>导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导<br/>
        航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。</p>
        <br/>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='顶部导航' desc='水平的顶部导航菜单。' instance={
          <div>
          <Menu>
            <MenuItem title='Navigation One' icon='mail'></MenuItem>
            <MenuItem title='Navigation Two' icon='window1' disabled></MenuItem>
            <MenuItem title='Navigation Three - Submenu' icon='setting'></MenuItem>
            <MenuItem title='Navigation Four - Link'></MenuItem>
          </Menu>
          </div>
        }/>
      </div>
    )
  }
}
export default PageMenu;

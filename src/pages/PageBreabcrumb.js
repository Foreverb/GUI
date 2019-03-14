import React, { Component } from 'react';
import Breabcrumb from '../components/Breabcrumb.js'
import Demo from '../components/Demo.js'
class PageBreabcrumb extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Breadcrumb面包屑</h2>
        <p style={{textAlign:'left'}}>显示当前页面在系统层级结构中的位置，并能向上返回。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <ul style={{textAlign:'left'}}>
          <li>当系统拥有超过两级以上的层级结构时；</li>
          <br/>
          <li>当需要告知用户『你在哪里』时；</li>
          <br/>
          <li>当需要向上导航的功能时。</li>
          <br/>
        </ul>
        <br/>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <hr/>
        <Demo title='基本' desc='最简单的用法。' instance={
          <div>
            <Breabcrumb text="Home" key='1'/> /
            <Breabcrumb text="Application Center" key='2'/> /
            <Breabcrumb text="Application List" key='3'/> /
            <Breabcrumb text="An Application" key='4'/>
          </div>
        }/>
        <Demo title='带有图标的' desc='图标放在文字前面。' instance={
          <div>
          <Breabcrumb key='1' icon='home'/> /
          <Breabcrumb text="Application List" key='2' icon='people'/> /
          <Breabcrumb text="Application" key='3'/>
          </div>
        }/>
        <Demo title='分隔符' desc='使用 separator=">" 可以自定义分隔符。' instance={
          <div>
          <Breabcrumb text="Home" key='1' separator=">"/>
          <Breabcrumb text="Application Center" key='2' separator=">"/>
          <Breabcrumb text="Application List" key='3' separator=">"/>
          <Breabcrumb text="An Application" key='4'/>
          </div>
        }/>
      </div>
    )
  }
}
export default PageBreabcrumb;

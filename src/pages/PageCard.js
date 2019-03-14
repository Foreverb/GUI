import React, { Component } from 'react';
import Card from '../components/Card.js'
import Demo from '../components/Demo.js'
class PageCard extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Card卡片</h2>
        <p style={{textAlign:'left'}}>通用卡片容器。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <p style={{textAlign:'left'}}>最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。</p>
        <br/>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='典型卡片' desc='包含标题、内容、操作区域。包含title属性和extra属性' instance={
          <div>
            <Card title="Card title" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        }/>
        <Demo title='无边框' desc='在灰色背景上使用无边框的卡片。' instance={
          <div style={{ background: '#ECECEC', padding: '30px' }}>
           <Card title="Card title" bordered={false}>
             <p>Card content</p>
             <p>Card content</p>
             <p>Card content</p>
           </Card>
         </div>
        }/>
        <Demo title='简洁卡片' desc='只包含内容区域。' instance={
          <div>
            <Card style={{ width: 300 }}>
             <p>Card content</p>
             <p>Card content</p>
             <p>Card content</p>
            </Card>
          </div>
        }/>
      </div>
    )
  }
}
export default PageCard

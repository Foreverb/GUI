import React, { Component } from 'react';
import Pagination from '../components/Pagination.js';
import Demo from '../components/Demo.js';
class PagePagination extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Pagination分页</h2>
        <br/>
        <p style={{textAlign:'left'}}>采用分页的形式分隔长列表，每次只加载一个页面。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <ul style={{textAlign:'left'}}>
          <li>当加载/渲染所有数据将花费很多时间时；</li>
          <br/>
          <li>可切换页码浏览数据。</li>
          <br/>
        </ul>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='基本' desc='基础分页。total控制总条数' instance={<Pagination  total={5}/>}/>
        <Demo title='简洁' desc='简单的翻页。' instance={<Pagination  total={5} simple/>}/>
        <Demo title='受控' desc='受控制的页码。' instance={<Pagination  total={5}/>}/>
        <Demo title='上一步和下一步' desc='输入type为word即可改变切换图标为汉字' instance={<Pagination  total={5} type='word'/>}/>
        <Demo title='总数' desc='通过设置 showTotal 展示总共有多少数据。' instance={<Pagination  total={5} showTotal/>}/>
        <Pagination  total={50}/>
      </div>
    )
  }
}
export default PagePagination;

import React, { Component } from 'react';
import Carousel from '../components/Carousel.js'
import Demo from '../components/Demo.js'
class PageCarousel extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Carousel走马灯</h2>
        <br/>
        <p style={{textAlign:'left'}}>旋转木马，一组轮播的区域。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <ul style={{textAlign:'left'}}>
          <li>当有一组平级的内容。</li>
          <br/>
          <li>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</li>
          <br/>
          <li>常用于一组图片或卡片轮播。</li>
          <br/>
        </ul>
        <br/>
          <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='基本' desc='最简单的用法。' instance={
          <div>
            <Carousel>
              <div style={{width:'100%',display:'inline-block'}}><h3>1</h3></div>
              <div style={{width:'100%',display:'inline-block'}}><h3>2</h3></div>
              <div style={{width:'100%',display:'inline-block'}}><h3>3</h3></div>
              <div style={{width:'100%',display:'inline-block'}}><h3>4</h3></div>
            </Carousel>
          </div>
        }/>
      </div>

    )
  }
}
export default PageCarousel;

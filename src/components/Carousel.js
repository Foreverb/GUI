import React, { Component } from 'react';
import '../App.css';
import './Carousel.css';
import '../index.css';
class Carousel extends Component{
  constructor(props){
    super(props);
    props = {
      autoplay : false,              //是否自动切换
      dots : true,                   //是否显示面板指示点
      vertical : false,              //垂直显示
    }
  }
  render(){
    let {autoplay,dots,vertical,children} = this.props;
    let cls_dot_item = 'dot-item '
    let cls_wrap = 'carousel-wrap';
    let cls_dots = 'carousel-dots';
    let cls_item_wrap = 'item-wrap';
    if( vertical ){
      cls_item_wrap = 'vertical-carousel'
      cls_dots += ' vertical-dots'
    }
    return(
      <div className={cls_wrap} style={{width:'386px'}}>
        <div className={cls_item_wrap}>
          {
            children.map((item,index)=>{
              return item
            })
          }
        </div>
        <ul className={cls_dots}>
          {
            children.map((item,index)=>{
              return <li className={cls_dot_item} key={index}></li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default Carousel;

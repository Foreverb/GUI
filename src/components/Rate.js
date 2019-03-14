import React, { Component } from 'react';
import '../App.css';
import './Rate.css';
import '../index.css';
class Rate extends Component{
  state ={
    highlightTo:-1,//鼠标移出之后亮的星星的下标
    lightColor:-1,//鼠标点击之后亮的星星的下标
  }
  render(){
    let { highlightTo,lightColor } = this.state;
    let { change,allowHalf,text } = this.props;
    // let isallowHalf = false;
    // if( allowHalf ){
    //   isallowHalf = true;
    // }
    let hasText = false;
    if( text ){
      hasText = true
    }
    return(
      <div className='rate-wrap'>
      {
        (new Array(5)).fill('0').map( (item,i)=>{
          let cls = 'iconfont icon-star star ';
          if( i <= highlightTo){
            cls+= ' star-hover';
          }
          if( hasText ){
            cls = 'star-hover'
            return <i key={i}
            onMouseLeave={()=>{this.mouseleave(lightColor)}}
            onClick={()=>{
              change && change(i+1);
              this.onclick(i);
            }}
            onMouseEnter={()=>{this.mouseenter(i)}} className={cls}
            >{text}</i>
          }
          return <i key={i}
          onMouseLeave={()=>{this.mouseleave(lightColor)}}
          onClick={()=>{
            change && change(i+1);
            this.onclick(i);
          }}
          onMouseEnter={()=>{this.mouseenter(i)}} className={cls}
          ></i>;
        })
      }
      </div>
    )
  }
  mouseenter( highlightTo ){
    this.setState( {highlightTo} )
  }
  onclick(lightColor){

    this.setState({lightColor})
  }
  mouseleave(lightColor){
    this.setState( {highlightTo:lightColor} )
  }
}
export default Rate;

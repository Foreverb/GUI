import React, { Component } from 'react';
import './Button.css';
import '../index.css';
import '../App.css';
class Button extends Component{
  constructor(props){
    super(props)
    props = {
      icon       : '' ,       //  所有icon name都支持
      loading    : false ,    //  icon 失效，为一个 loading 状态，且  diabled 为 true
      disabled   : false,     //  是否禁用，禁用状态下不响应点击，且有特殊样式
      shape      : 'rect' ,   //  默认为矩形，取值为 circle 时，  text 失效
      type       : 'normal',  //  按钮的类型，取值范围为： normal、dashed、danger
      size       : 'small',   //  按钮的尺寸
      text       : ''   ,     //  文本内容
      onClick    : function(){},
    }
  }
  render(){
    let cls = ['button'];
    let { icon, loading , disabled,shape,type,size,text,onClick } = this.props;

    let isShowIconEl = false;
    let iconName = '';
    let isShowText = true;

    if( icon && !loading ){
      iconName = icon;
      isShowIconEl = true;
    }
    if( loading ){
      iconName = icon+' icon-animate-rotated';
      isShowIconEl = true;
    }
    if( disabled ){
      cls.push('button-disabled');
    }
    if( shape === 'circle' ){
        cls.push('button-circle');
        isShowText = false;
    }
    if( type ){
      cls.push('button-type-'+type);
    }
    if( size ){
      cls.push('button-size-'+size);
    }
    cls = cls.join(' ');
    return (
        <button className={cls} onClick={ ()=>{
          // console.log(disabled,onClick)
          // debugger
          !disabled && (typeof onClick ==='function') && onClick();
        }}>
        <div className="wrap">
          {isShowIconEl?<i className={`iconfont icon-${iconName}`}></i>:null}
          {isShowText?<span>{text}</span>:null}
        </div>
        </button>
    );
  }
}
export default Button;

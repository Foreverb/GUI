import React, { Component } from 'react';
import './Card.css';
import '../index.css';
import '../App.css';
class Card extends Component{
  render(){
    let {title,extra,children,bordered} = this.props;
    let lineHas = false;
    if( title ){
      lineHas = true;
    }
    return(
      <div className='card-wrap'>
        <h3>{title}</h3>
        <span className='extra'>{extra}</span>
        {lineHas?<div className='card-line'></div>:null}
        <div>
          {
            children.map((item,index)=>{
              return <div>{item}</div>
            })
          }
        </div>
      </div>
    )
  }
}
export default Card

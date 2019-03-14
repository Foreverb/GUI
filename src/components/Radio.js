import React, { Component } from 'react';
import '../App.css';
import './Radio.css';
import '../index.css';
class Radio extends Component{
  state={
    value:1
  }
  changeValue = (e)=>{
    this.setState({value:e.target.value})
  }
  render(){
    console.log(this.state);
    let radio = this.props.type;
    let text = this.props.text;
    let cls = "input radio-default"
    let value = this.props.value;
    if( this.props.disabled ){
      cls = "disabled";
    }
    let disabled = this.props.disabled || "";
    // console.log(value);
    return(
      <div>
        <input type={radio}
        className={cls}
        disabled={disabled}
        value={value}
        onClick={this.changeValue}
        />
        <span className="radio-word">{text}</span>
      </div>
    )
  }
}
export default Radio;

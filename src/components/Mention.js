import React, { Component } from 'react';
import '../App.css';
import './Mention.css';
import '../index.css';
class Mention extends Component{
  state = {
    cls : ['metion-normal']
  }
  props = {
    defaultValue : '',      //默认内容
  }
  render(){
    let {cls} = this.state;
    let {defaultValue} = this.props;
    return(
      <div>
        <input className={cls} value={defaultValue}/>
      </div>
    )
  }
}
export default Mention;

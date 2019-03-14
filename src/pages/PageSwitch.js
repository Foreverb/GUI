import React, { Component } from 'react';
import {Switch,Icon} from '../components/Switch.js';
import Button from '../components/Button.js';
import Demo from '../components/Demo.js';
class PageSwitch extends Component{
  state = {
    disabled : false,       //开关是否为禁用状态
  }
  toggle(disabled){
    this.setState({disabled : !disabled})
  }
  render(){
    let {disabled} = this.state;
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Switch开关</h2>
        <Demo title='基本' desc='最简单的用法。' instance={
          <Switch defaultChecked/>
        }/>
        <Demo title='不可用' desc='Switch 失效状态。' instance={
          <div>
            <Switch defaultChecked disabled={disabled}/>
            <br/>
            <Button text='Toggle disabled' onClick={()=>{this.toggle(disabled)}} type='normal'/>
          </div>
        }/>
        <Demo title='两种大小' desc='size="small" 表示小号开关。' instance={
          <div>
            <Switch defaultChecked />
            <br />
            <Switch size="small" defaultChecked />
          </div>
        }/>
        <Demo title='文字和图标' desc='size="带有文字和图标。' instance={
          <div>
            <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
            <br />
            <Switch checkedChildren="1" unCheckedChildren="0" />
            <br />
            <Switch checkedChildren={<Icon icon="check" />} unCheckedChildren={<Icon icon="cross_no" />} defaultChecked />
          </div>
        }/>
        <Demo title='加载中' desc='标识开关操作仍在执行中。' instance={
          <div>
            <Switch loading defaultChecked disabled/>
            <br />
            <Switch size="small" loading disabled/>
          </div>
        }/>
      </div>
    )
  }
}
export default PageSwitch;

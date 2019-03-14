import Checkbox from '../components/Checkbox.js';
import React, { Component } from 'react';
import Demo from '../components/Demo.js';
class PageCheckbox extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign: 'left'}}>Checkbox多选框</h2>
        <p style={{textAlign: 'left'}}>多选框。</p>
        <br/>
        <h3 style={{textAlign: 'left'}}>何时使用</h3>
        <br/>
        <ul style={{textAlign: 'left'}}>
          <li>在一组可选项中进行多项选择时；</li>
          <br/>
          <li>单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</li>
          <br/>
        </ul>
        <h2 style={{textAlign: 'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='' desc='简单的 checkbox。' instance={<Checkbox title='checkbox'/>}/>
        <Demo title='' desc='checkbox 不可用。只需要传入参数disabled即可，同时为选中状态可以添加一个checked属性' instance={
          <div>
            <Checkbox disabled/>
            <br/>
            <Checkbox disabled checked/>
          </div>
        }/>
        <Demo title='' desc='' instance={
          <div>
          <Checkbox title='Apple'/>
          <Checkbox title='Pear'/>
          <Checkbox title='Orange'/>
          <br/>
          <br/>
          <Checkbox title='Apple'/>
          <Checkbox title='Pear'/>
          <Checkbox title='Orange'/>
          <br/>
          <br/>
          <Checkbox title='Apple' disabled checked/>
          <Checkbox title='Pear' disabled checked/>
          <Checkbox title='Orange' disabled checked/>
          </div>
        }/>
        <Demo title='' desc='' instance={
          <div>
          <Checkbox title='Apple'/>
          <Checkbox title='Pear'/>
          <Checkbox title='Orange'/>
          <br/>
          <br/>
          <Checkbox title='Apple'/>
          <Checkbox title='Pear'/>
          <Checkbox title='Orange'/>
          <br/>
          <br/>
          <Checkbox title='Apple' disabled checked/>
          <Checkbox title='Pear' disabled checked/>
          <Checkbox title='Orange' disabled checked/>
          </div>
        }/>
        <Demo title='' desc='有全选和取消全选功能' instance={
          <div>
          <Checkbox title='Check all'/>
          <hr/>
          <Checkbox title='Apple'/>
          <Checkbox title='Pear'/>
          <Checkbox title='Orange'/>
          </div>
        }/>
        <Demo title='' desc='' instance={
          <div>
          <Checkbox title='A'/>
          <Checkbox title='B'/>
          <Checkbox title='C'/>
          <Checkbox title='D'/>
          <Checkbox title='E'/>
          </div>
        }/>
      </div>
    )
  }
}
export default PageCheckbox

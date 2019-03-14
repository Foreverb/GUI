import React, { Component } from 'react';
import Radio from '../components/Radio.js'
import Demo from '../components/Demo.js'
class PageRadio extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Radio单选框</h2>
        <p style={{textAlign:'left'}}>单选框。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <ul style={{textAlign:'left'}}>
          <li>用于在多个备选项中选中单个状态。</li>
          <br/>
          <li>和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</li>
          <br/>
        </ul>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='基本' desc='最简单的用法。只需要在Radio组件中添加type属性且属性值为radio便可使用' instance={
          <Radio type="radio" text="Radio"/>
        }/>
        <Demo title='不可用' desc='不可用。只需要在Radio组件中添加disabled属性便可使用' instance={
          <div>
            <Radio type="radio" disabled text="disabled"/>
            <Radio type="radio" disabled text="disabled"/>
          </div>
        }/>
        <Demo title='单选组合' desc='一组互斥的 Radio 配合使用。' instance={
          <div>
            <Radio type="radio" text="A" value="1"/>
            <Radio type="radio" text="B" value="2"/>
            <Radio type="radio" text="C" value="3"/>
            <Radio type="radio" text="D" value="4"/>
          </div>
        }/>
      </div>
    )
  }
}
export default PageRadio;

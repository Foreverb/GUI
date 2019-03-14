import React, { Component } from 'react';
import Input from '../components/Input.js';
import Demo from '../components/Demo.js';
class PageInput extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Input输入框</h2>
        <p style={{textAlign:'left'}}>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <ul style={{textAlign:'left'}}>
          <li>需要用户输入表单域内容时。</li>
          <br/>
          <li>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li>
          <br/>
        </ul>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='基本使用' desc='基本使用。' instance={<Input placeholder='Basic usage'/>}/>
        <Demo title='三种大小' desc='我们为 Input 输入框定义了三种尺寸（大、默认、小），高度分别为
        "40px"、"32px" 和 "24px"。注意： 在表单里面，我们只使用大尺寸的输入框。我们只需要传入
        size参数和对应的值就可以得到三种不同大小的输入框' instance={
          <div>
          <Input placeholder="large size" size="large"/>
          <Input placeholder="default size" size="default"/>
          <Input placeholder="small size" size="small"/>
          </div>
        }/>
        <Demo title='搜索框' desc='带有搜索按钮的输入框' instance={
          <div>
          <Input icon='search' size="large" placeholder="input search text" word="search"/>
          <Input icon='search' size="default" placeholder="input search text"/>
          <Input icon='search' size="small" placeholder="input search text"/>
          </div>
        }/>
      </div>
    )
  }
}
export default PageInput;

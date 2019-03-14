import React, { Component } from 'react';
import Tag from '../components/Tag.js';
import Demo from '../components/Demo.js';
class PageTag extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Tag标签</h2>
        <br/>
        <p style={{textAlign:'left'}}>进行标记和分类的小标签。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <ul style={{textAlign:'left'}}>
          <li>用于标记事物的属性和维度。</li>
          <br/>
          <li>进行分类。</li>
          <br/>
        </ul>
        <br/>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='基本' desc='基本标签的用法，可以通过添加 closable 变为可关闭标签。可关闭标签具有 onClose afterClose 两个事件。' instance={
          <div>
            <Tag title='Tag1'/>
            <Tag title='Link'/>
            <Tag title='Tag2' closable/>
            <Tag title='Prevent Default' closable/>
          </div>
        }/>
        <Demo title='多彩标签' desc='我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。' instance={
          <div>
          <h4 style={{ marginBottom: 16 }}>Presets:</h4>
          <Tag color="magenta" title='magenta'></Tag>
          <Tag color="red" title='red'></Tag>
          <Tag color="volcano" title='volcano'></Tag>
          <Tag color="orange" title='orange'></Tag>
          <Tag color="gold" title='gold'></Tag>
          <Tag color="lime" title='lime'></Tag>
          <Tag color="green" title='green'></Tag>
          <Tag color="cyan" title='cyan'></Tag>
          <Tag color="blue" title='blue'></Tag>
          <Tag color="geekblue" title='geekblue'></Tag>
          <Tag color="purple" title='purple'></Tag>
          <h4 style={{ margin: '16px 0' }}>Custom:</h4>
          <Tag color="#f50" title='#f50'></Tag>
          <Tag color="#2db7f5" title='#2db7f5'></Tag>
          <Tag color="#87d068" title='#87d068'></Tag>
          <Tag color="#108ee9" title='#108ee9'></Tag>
          </div>
        }/>
        <Demo title='可选择' desc='可通过 CheckableTag 实现类似 Checkbox 的效果，点击切换选中效果。' instance={
          <div>
          <Tag title='Tag1'></Tag>
          <Tag title='Tag2'></Tag>
          <Tag title='Tag3'></Tag>
          </div>
        }/>
      </div>
    )
  }
}
export default PageTag

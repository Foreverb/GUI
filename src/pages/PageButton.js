import React, { Component } from 'react';
import Button from '../components/Button.js';
import Demo from '../components/Demo.js';
class PageButton extends Component{
  state = {
    size :'normal'
  }
  render(){

    let {size} = this.state;

    let size1 = 'large';
    let size2 = 'normal';
    let size3 = 'small';

    return(
      <div className="page-button">
        <h2 style={{textAlign:'left'}}>Button按钮</h2>
        <p style={{textAlign:'left'}}>按钮用于开始一个即时操作。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <p style={{textAlign:'left'}}>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
        <br/>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='按钮类型' desc='按钮有四种类型：主按钮(normal)、虚线按钮(dashed)、
        点虚线按钮(dotted)、危险按钮(danger)。主按钮在同一个操作区域最多
        出现一次。' instance={
          <div>
            <Button text="normal"/>
            <Button type="dashed" text="dashed"/>
            <Button type="dotted" text="dotted"/>
            <Button type="danger" text="danger"/>
          </div>
        }/>
        <Demo title='图标按钮' desc='当需要在 Button 内嵌入 Icon 时，可以设
        置 icon 属性，或者直接在 Button 内使用
         Icon 组件。如果想控制 Icon 具体的位置，
         只能直接使用Icon 组件，而非 icon 属性。' instance={
           <div>
             <Button shape="circle" icon="search" type="normal"/>
             <Button icon="search" text="search" type="dashed"/>
             <Button icon="search" text="search" type="dotted"/>
             <Button icon="search" text="search" type="danger"/>
             <Button shape="circle" icon="search" type="dashed"/>
             <Button icon="xiazai" type="normal" text="DownLoad"/>
           </div>
         }/>
         <Demo title='不可用状态' desc='添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。'
         instance={<div>
           <Button type="dotted" disabled text="dotted(disabled)"/>
           <Button type="dashed" disabled text="dashed(disabled)"/>
           </div>}/>
         <Demo title='按钮尺寸' desc='按钮有大、中、小三种尺寸。
         通过设置 size 为 large small
          分别把按钮设为大、小尺寸。若不设
          置 size，则尺寸为中。'
         instance={<div>
           <Button size="large"  onClick={ ()=>{ this.changeSize( size1 ) } } text="large"/>
           <Button size="normal" onClick={ ()=>{ this.changeSize( size2 ) } }  text="normal"/>
           <Button size="small"  onClick={ ()=>{ this.changeSize( size3 ) } }  text="small"/>
           <br/>
           <br/>
           <Button size={size} text="大小尺寸受控制按钮" type="normal"/>
           <Button size={size} text="大小尺寸受控制按钮" type="danger"/>
           <Button size={size} text="大小尺寸受控制按钮" type="dashed"/>
           </div>}/>
        <Demo title='加载中状态' desc='添加 loading 属性即可让按钮处于加载状态
        ，最后两个按钮演示点击后进入加载状态。' instance={
          <div>
            <Button loading text="loading" disabled icon="loading"/>
            <Button loading icon="loading" type="dashed" shape="circle"/>
          </div>
        }/>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <p style={{color:'#000',textAlign:'left',opacity:'.5'}}>demo1</p>
        <div className='code' style={{backgroundColor:'#ccc'}}>

        </div>
      </div>
    )
  }
  changeSize( size ){
    size = size || 'lalalala'
      this.setState({size})
  }
}
export default PageButton;

import React, { Component } from 'react';
import {Tab,TabPane,Button} from '../components/Tabs';
import Demo from '../components/Demo.js';
class PageTab extends Component{
  state = {
    panes:[
      { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
      { title: 'Tab 3', content: 'Content of Tab Pane 3', key: '3' },
    ],
    size : 'Default',
    mode : 'Horizontal',
  }
  add(panes){
    panes = this.state.panes;
    panes.push({title: 'New Tab', content: 'Content of Tab Pane 3'})
    this.setState({panes})
  }
  changeSize(size){
    this.setState({size})
  }
  changeMode(mode){
    this.setState({mode});
  }
  render(){
    // debugger
    let {panes,size,mode} = this.state;
    // console.log(size);
    let size1 = 'Small';
    let size2 = 'Default';
    let size3 = 'Large';
    let mode1 = 'Horizontal';
    let mode2 = 'Vertical';
    return(
    	<div>
        <h2 style={{textAlign:'left'}}>Tabs标签页</h2>
        <br/>
        <p style={{textAlign:'left'}}>选项卡切换组件。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <p style={{textAlign:'left'}}>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</p>
        <br/>
        <p style={{textAlign:'left'}}>Ant Design 依次提供了三级选项卡，分别用于不同的场景。</p>
        <br/>
        <ul style={{textAlign:'left'}}>
          <li>卡片式的页签，提供可关闭的样式，常用于容器顶部。</li>
          <br/>
          <li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。</li>
          <br/>
          <li>RadioButton 可作为更次级的页签来使用。</li>
          <br/>
        </ul>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='基本' desc='默认选中第一项。' instance={
          <div>
          <Tab defaultActive={0}>
            <TabPane Tab='tab1'>Content of Tab Pane 1</TabPane>
            <TabPane Tab='tab2'>Content of Tab Pane 2</TabPane>
            <TabPane Tab='tab3'>Content of Tab Pane 3</TabPane>
          </Tab>
          </div>
        }/>
        <Demo title='禁用' desc='禁用某一项。' instance={
          <div>
          <Tab defaultActive={0}>
            <TabPane Tab='tab1' disabled>Content of Tab Pane 1</TabPane>
            <TabPane Tab='tab2'>Content of Tab Pane 2</TabPane>
            <TabPane Tab='tab3'>Content of Tab Pane 3</TabPane>
          </Tab>
          </div>
        }/>
        <Demo title='图标' desc='有图标的标签。' instance={
          <div>
            <Tab defaultActive={0}>
              <TabPane Tab='tab1' icon='Apple'>Content of Tab Pane 1</TabPane>
              <TabPane Tab='tab2' icon='andorid'>Content of Tab Pane 2</TabPane>
            </Tab>
          </div>
        }/>
        <Demo title='滑动' desc='可以左右、上下滑动，容纳更多标签。' instance={
          <div>
          <Button title='Horizontal' onClick={()=>{this.changeMode(mode1)}}/>
          <Button title='Vertical' onClick={()=>{this.changeMode(mode2)}}/>
          <hr/>
          <Tab defaultActive='1' mode={mode}>
            <TabPane Tab='tab1'>Content of Tab Pane 1</TabPane>
            <TabPane Tab='tab2'>Content of Tab Pane 2</TabPane>
            <TabPane Tab='tab3'>Content of Tab Pane 3</TabPane>
            <TabPane Tab='tab4'>Content of Tab Pane 4</TabPane>
            <TabPane Tab='tab5'>Content of Tab Pane 5</TabPane>
            <TabPane Tab='tab6'>Content of Tab Pane 6</TabPane>
            <TabPane Tab='tab7'>Content of Tab Pane 7</TabPane>
            <TabPane Tab='tab8'>Content of Tab Pane 8</TabPane>
            <TabPane Tab='tab9'>Content of Tab Pane 9</TabPane>
            <TabPane Tab='tab10'>Content of Tab Pane 10</TabPane>
            <TabPane Tab='tab11'>Content of Tab Pane 11</TabPane>
          </Tab>
          </div>
        }/>
        <Demo title='卡片式页签' desc='另一种样式的页签，不提供对应的垂直样式。只需在tab组件内加入' instance={
          <div>
          <Tab defaultActive={0} border={true}>
            <TabPane Tab='tab1'>Content of Tab Pane 1</TabPane>
            <TabPane Tab='tab2'>Content of Tab Pane 2</TabPane>
            <TabPane Tab='tab3'>Content of Tab Pane 3</TabPane>
          </Tab>
          </div>
        }/>
        <Demo title='自定义新增页签触发器' desc='隐藏默认的页签增加图标，给自定义触发器绑定事件。' instance={
          <div>
            <Button title='ADD' onClick={()=>{this.add()}}/>
            <hr/>
            <Tab defaultActive={0} border={true}>
    	      	{
                panes.map((item,index)=>{
                  return <TabPane Tab={item.title} key={index} closable={true}>{item.content}</TabPane>
                })
              }
    	      </Tab>
          </div>
        }/>
        <Demo title='大小' desc='大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。' instance={
          <div>
            <Button title='Small' onClick={()=>{this.changeSize(size1)}}/>
            <Button title='Default' onClick={()=>{this.changeSize(size2)}}/>
            <Button title='Large' onClick={()=>{this.changeSize(size3)}}/>
            <hr/>
            <Tab defaultActive={0}>
              <TabPane Tab='tab1' size={size}>Content of Tab Pane 1</TabPane>
              <TabPane Tab='tab2' size={size}>Content of Tab Pane 2</TabPane>
              <TabPane Tab='tab3' size={size}>Content of Tab Pane 3</TabPane>
            </Tab>
          </div>
        }/>
	    </div>
      )
  }
}
export default PageTab;

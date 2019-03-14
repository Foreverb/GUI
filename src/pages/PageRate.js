import React, { Component } from 'react';
import Rate from '../components/Rate.js'
import Demo from '../components/Demo.js'
class PageRate extends Component{
  state = {
    current : 0
  }
  render(){
    const { current } = this.state;
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Rate评分</h2>
        <br/>
        <p style={{textAlign:'left'}}>评分组件。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <ul style={{textAlign:'left'}}>
          <li>对评价进行展示。</li>
          <br/>
          <li>对事物进行快速的评级操作。</li>
          <br/>
        </ul>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>

        <Demo title='基本' desc='最简单的用法。' instance={<Rate/>}/>
        <Demo title='文案展现' desc='给评分组件加上文案展示。' instance={
          <div>
          <Rate change={ ( current )=>{
            this.setState( {current} );
          }  }/>
          <span>{current}stars</span>
          </div>
        }/>
        <Demo title='半星' desc='支持选中半星。' instance={<Rate allowHalf />}/>
        <Demo title='' desc='支持选中半星。' instance={
          <div>
          <Rate allowHalf/>
          <Rate text='A' allowHalf/>
          <Rate text='好' allowHalf/>
          </div>
        }/>
      </div>
    )
  }
}
export default PageRate;

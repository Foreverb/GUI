import React, { Component } from 'react';
import Mention from '../components/Mention.js'
class PageMention extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Mention提及</h2>
        <p style={{textAlign:'left'}}>提及组件。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <p style={{textAlign:'left'}}>用于在输入中提及某人或某事，常用于发布、聊天或评论功能。</p>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Mention defaultValue='@afc163'/>
      </div>
    )
  }
}
export default PageMention

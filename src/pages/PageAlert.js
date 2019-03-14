import React, { Component } from 'react';
import Alert from '../components/Alert.js';
import Demo from '../components/Demo.js';
class PageAlert extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Alert警告提示</h2>
        <p style={{textAlign:'left'}}>警告提示，展现需要关注的信息。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <ul>
          <li style={{textAlign:'left'}}>当某个页面需要向用户显示警告的信息时。</li>
          <br/>
          <li style={{textAlign:'left'}}>当某个页面需要向用户显示警告的信息时。</li>
        </ul>
        <br/>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <hr/>
        <Demo title='基本' desc='最简单的用法，适用于简短的警告提示。'
        instance={<Alert message="Success Text" type="success" />}/>

        <Demo title='四种样式' desc='共有四种样式 success、info、warning、error。' instance={
          <div>
            <Alert message="Success Text" type="success" />
            <Alert message="Info Text" type="info" />
            <Alert message="Warning Text" type="warning" />
            <Alert message="Error Text" type="error" />
          </div>
        }/>
        <Demo title='可关闭的警告提示' desc='显示关闭按钮，点击可关闭警告提示。' instance={
          <div>
            <Alert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
            type="warning" closable/>
            <Alert message="Error Text" description="Error Description Error Description Error Description Error Description Error Description Error Description"
            type="error" closable/>
          </div>
        }/>
        <Demo title='含有辅助性文字介绍' desc='含有辅助性文字介绍的警告提示。' instance={
          <div>
            <Alert message="Success Text" type="success" description='Success Description Success Description Success Description'/>
            <Alert message="Info Text" type="info" description='Info Description Info Description Info Description Info Description'/>
            <Alert message="Warning Text" type="warning" description='Success Description Success Description Success Description'/>
            <Alert message="Error Text" type="error" description='Error Description Error Description Error Description Error Description'/>
          </div>
        }/>
        <Demo title='自定义关闭' desc='可以自定义关闭，自定义的文字会替换原先的关闭 Icon。' instance={<Alert message="Info Text" type="info" closeText="Close Now"/>}/>
        <Demo title='图标' desc='可口的图标让信息类型更加醒目。' instance={
          <div>
            <Alert message="Success Tips" type="success" showIcon />
            <Alert message="Informational Notes" type="info" showIcon />
            <Alert message="Warning" type="warning" showIcon />
            <Alert message="Error" type="error" showIcon />
            <Alert
              message="Success Tips"
              description="Detailed description and advices about successful copywriting."
              type="success"
              showIcon
            />
            <Alert
              message="Informational Notes"
              description="Additional description and informations about copywriting."
              type="info"
              showIcon
            />
            <Alert
              message="Warning"
              description="This is a warning notice about copywriting."
              type="warning"
              showIcon
            />
            <Alert
              message="Error"
              description="This is an error message about copywriting."
              type="error"
              showIcon
            />
          </div>
        }/>
      </div>
    )
  }
}
export default PageAlert

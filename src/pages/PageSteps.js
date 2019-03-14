import React, { Component } from 'react';
import Steps from '../components/Steps.js';
import Demo from '../components/Demo.js';
class PageSteps extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Steps步骤条</h2>
        <br/>
        <p style={{textAlign:'left'}}>引导用户按照流程完成任务的导航条。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <p style={{textAlign:'left'}}>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p>
        <br/>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='基本用法' desc='简单的步骤条。' instance={
          <div>
          <Steps title="Finished" item="1"/>
          <Steps title="In Progress" item="2"/>
          <Steps title="Waiting" item="3"/>
          </div>
        }/>
        <Demo title='带图标的步骤条' desc='通过添加icon属性并且值为对应的icon名，就可以使用带有图标的步骤条' instance={
          <div>
          <Steps title='Login' icon="fonts-user"/>
          <Steps title='Verification' icon='solution'/>
          <Steps title='Pay' icon='loading'/>
          <Steps title='Done' icon='smile'/>
          </div>
        }/>
        <Demo title='点状步骤条' desc='包含步骤点的进度条。' instance={
          <div>
          <Steps title="Finished" progressDot/>
          <Steps title="In Progress" progressDot/>
          <Steps title="Waiting" progressDot/>
          </div>
        }/>

      </div>
    )
  }
}
export default PageSteps;

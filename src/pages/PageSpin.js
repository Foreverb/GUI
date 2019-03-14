import React, { Component } from 'react';
import {Spin,Icon} from '../components/Spin.js';
import Demo from '../components/Demo.js';
import Alert from '../components/Alert.js';
import Switch from '../components/Switch.js';

class PageSpin extends Component{
  state = {
    loading : false
  }
  toggle(loading){
    this.setState({loading : !loading})
  }
  render(){
    let {loading} = this.state;
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }}/>;
    return(
      <div>
        <h2 style={{textAlign:'left'}}>Spin加载中</h2>
        <br/>
        <p style={{textAlign:'left'}}>用于页面和区块的加载中状态。</p>
        <br/>
        <h3 style={{textAlign:'left'}}>何时使用</h3>
        <br/>
        <p style={{textAlign:'left'}}>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</p>
        <br/>
        <h2 style={{textAlign:'left'}}>代码演示</h2>
        <br/>
        <hr/>
        <Demo title='基本用法' desc='一个简单的 loading 状态。' instance={<Spin />}/>
        <Demo title='各种大小' desc='小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。' instance={
          <div>
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </div>
        }/>
        <Demo title='容器' desc='放入一个容器中。' instance={
          <div className="example">
            <Spin />
          </div>
        }/>
        <Demo title='自定义描述文案' desc='自定义描述文案。' instance={
          <div style={{position:'relative'}}>
            <Spin tip="Loading..."/>
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </div>
        }/>
        <Demo title='自定义指示符' desc='使用自定义指示符。' instance={
          <Spin indicator={antIcon} />
        }/>
      </div>
    )
  }
}

export default PageSpin;

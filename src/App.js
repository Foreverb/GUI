import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageButton from './pages/PageButton.js'
import PageDropDown from './pages/PageDropDown.js'
import PageSteps from './pages/PageSteps.js'
import PageCheckbox from './pages/PageCheckbox.js'
import PageInput from './pages/PageInput.js'
import PageRate from './pages/PageRate.js'
import PageTabs from './pages/PageTabs.js'
import PageBreabcrumb from './pages/PageBreabcrumb.js'
import PagePagination from './pages/PagePagination.js'
import PageMenu from './pages/PageMenu.js'
import PageSwitch from './pages/PageSwitch.js'
import PageRadio from './pages/PageRadio.js'
import PageMention from './pages/PageMention.js'
import PageCard from './pages/PageCard.js'
import PageCarousel from './pages/PageCarousel.js'
import PagePopover from './pages/PagePopover.js'
import PageTag from './pages/PageTag.js'
import PageAlert from './pages/PageAlert.js'
import PageDemo from './pages/PageDemo.js'
import PageSpin from './pages/PageSpin.js'
import PageNotification from './pages/PageNotification.js'
import PageMain from './pages/PageMain.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      defaulted : true
    }
  }
  render() {
    let style = {
      color:'#189ff0',
      borderBottom:'3px solid #1890ff',
    }
    let {defaulted} = this.state;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className='log'>
              <img src={logo} className='App-logo'/>
              <p className='logoName'>YGB UI MOBILE</p>
            </div>
            <p className='title'>An React UI Component Library</p>
            <div className='main_Nav'>
              <Link to="/main" onClick={()=>this.setState({defaulted:false})}>首页</Link>
              <Link to="/component" onClick={()=>this.setState({defaulted:false})}>组件</Link>
              <Link to="/create" onClick={()=>this.setState({defaulted:false})}>设计</Link>
            </div>
          </header>
          {
            defaulted ? null : <div className="content">
              <div className="left">
                <Link to="/button">Button<span>按钮</span></Link>
                <Link to="/down">Dropdown<span>下拉菜单</span></Link>
                <Link to="/steps">Steps<span>步骤条</span></Link>
                <Link to="/check">Checkbox<span>多选框</span></Link>
                <Link to="/input">Input<span>输入框</span></Link>
                <Link to="/rate">Rate<span>评分</span></Link>
                <Link to="/tabs">Tabs<span>标签页</span></Link>
                <Link to="/breabcrumb">Breabcrumb<span>面包屑</span></Link>
                <Link to="/pagination">Pagination<span>分页</span></Link>
                <Link to="/menu">Menu<span>导航菜单</span></Link>
                <Link to="/switch">Switch<span>开关</span></Link>
                <Link to="/radio">Radio<span>单选框</span></Link>
                <Link to="/mention">Mention<span>提及</span></Link>
                <Link to="/card">Card<span>卡片</span></Link>
                <Link to="/carousel">Carousel<span>走马灯</span></Link>
                <Link to="/popover">Popover<span>气泡卡片</span></Link>
                <Link to="/tag">Tag<span>标签</span></Link>
                <Link to="/alert">Alert<span>警告提示</span></Link>
                <Link to="/demo">Demo<span>小组件</span></Link>
                <Link to="/spin">Spin<span>加载</span></Link>
                <Link to="/notification">Notification<span>通知提醒框</span></Link>
              </div>
              <div className="right">
                <Route path="/main" component={PageMain}/>
                <Route path="/button" component={PageButton}/>
                <Route path="/down" component={PageDropDown}/>
                <Route path="/steps" component={PageSteps}/>
                <Route path="/check" component={PageCheckbox}/>
                <Route path="/input" component={PageInput}/>
                <Route path="/rate" component={PageRate}/>
                <Route path="/tabs" component={PageTabs}/>
                <Route path="/breabcrumb" component={PageBreabcrumb}/>
                <Route path="/pagination" component={PagePagination}/>
                <Route path="/menu" component={PageMenu}/>
                <Route path="/switch" component={PageSwitch}/>
                <Route path="/radio" component={PageRadio}/>
                <Route path="/mention" component={PageMention}/>
                <Route path="/card" component={PageCard}/>
                <Route path="/carousel" component={PageCarousel}/>
                <Route path="/popover" component={PagePopover}/>
                <Route path="/tag" component={PageTag}/>
                <Route path="/alert" component={PageAlert}/>
                <Route path="/demo" component={PageDemo}/>
                <Route path="/spin" component={PageSpin}/>
                <Route path="/notification" component={PageNotification}/>
              </div>
          </div>
          }
        </div>
      </Router>
    );
  }
}
export default App;

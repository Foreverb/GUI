import React, { Component } from 'react';
import Main from '../components/Main.js';
import Demo from '../components/Demo.js';
class PageMain extends Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'left' }}>Ant Design of React</h1>
                <h2 style={{ textAlign: 'left' }}>介绍</h2>
                <div style={{ textAlign: 'left' }}>该库是模仿ant design来设计的，只为了解其中的工作原理，不适合用在项目开发上</div>
                <br />
                <h2 style={{ textAlign: 'left' }}>地址</h2>
                <div style={{ textAlign: 'left' }}>
                    <p>想要了解与使用UI组件库的可以进入ant design 官方网站</p>
                    <br />
                    <a href='https://ant.design/index-cn' style={{ color: 'blue' }}>点击进入 ant design 官网</a>
                </div>
                {/* <img src='https://gw.alipayobjects.com/zos/rmsportal/DEaRdiYbAyVNRelJpwXx.png'/> */}
                <img src='https://gw.alipayobjects.com/zos/rmsportal/FpKOqFadwoFFIZFExjaf.png'/>
            </div >
        )
    }
}
export default PageMain;
import React, { Component } from 'react';
import '../index.css';
import '../App.css';
import './Tabs.css';
export class Tab extends Component{
	constructor(props){
		super(props)
		props = {
			size : 'Default',			//标签页的大小状态，默认Default
			tabPosition : 'top',	//标签页的显示位置默认top，有：left/right/top/bottom
			border : false,				//标签的类型，是否含有边框，默认false
			className : '',				//用于改变tab组件的大小的属性，可以自定义一个class名并写下相应的样式
			defaultActive : 0,	//默认选中的标签的下标
			mode : 'Horizontal',	//标签排列方式，默认水平排列
		}
	}
	state = {
		current : this.props.defaultActive,
		tabHeadSize : null,
		viewportSize : null,
		items : null,
	}
	changeCurrent(index){
		this.setState({current : index})
	}
	changeCloseState(index){
		this.props.children.splice(index,1)
	}

	componentDidMount(){
		setTimeout(()=>{
			let items = this.refs.items.clientWidth;
			this.setState({items})
			let tabHeadSize = items*this.props.children.length;
			this.setState({tabHeadSize})
			let viewportSize = this.refs.viewport.clientWidth;
			this.setState({viewportSize})
			// debugger
			// console.log(tabHeadSize,viewportSize);
		},100)
	}
	render(){
		let {children,size,tabPosition,border,className,defaultActive,mode} = this.props;
		let {current,tabHeadSize,viewportSize,items} = this.state;
		console.log(tabHeadSize,viewportSize);
		let iconName = '';
		let isClose = false;
		// let tabHeadSize;//所有标签的宽度和
		// let viewportSize;//可视区宽度
		// let items;//一个标签的宽度
		let isShowIcon = false;
		// console.log(current);

		let cls_root = 'tab-wrap';
		let cls_head = 'tab-head';

		let cls_head_viewport = 'tab-head-viewport';
		let cls_head_wrap = 'tab-head-wrap';
		let cls_head_item = 'tab-head-item ';

		let cls_main = 'tab-main';

		let cls_icon_prev = 'icon-shangyige icon';
		let cls_icon_next = 'icon-xiayige icon';
		if( mode === 'Vertical'){
			cls_root += ' tab-wrap-vertical';
			cls_icon_prev = 'icon-xiangshang iconS';
			cls_icon_next = 'icon-xiangxia iconS';
		}
		if( tabHeadSize > viewportSize ){
			isShowIcon = true
		}
		children.map((item,index)=>{
			if( item.props.disabled ){
				cls_head_item += ' tab-disabled'
			}else{
				cls_head_item = 'tab-head-item'
			}
			if( item.props.icon ){
				iconName = item.props.icon;
				cls_head_item += ` iconfont icon-${iconName}`
			}
			// if( index === current ){
			// 	cls_head_item += ' tab-checked'
			// }
			if( item.props.size ){
				let sizeName = item.props.size;
				cls_head_item += ` tab-${sizeName} `
			}
			if( item.props.closable === true ){
				isClose = true;
			}
		})
		if( border === true ){
			cls_head_item += ' hasBorder'
		}
		return (<div className={cls_root}>
			<div className={cls_head}>
			{isShowIcon?<span className={'iconfont '+cls_icon_prev}></span>:null}
			<div className={cls_head_viewport} ref="viewport">
				<div className={cls_head_wrap} ref='headWrap'>
					{
						children.map((item,index)=>{
							return <span key={index} className={cls_head_item}
							onClick={()=>{this.changeCurrent(index)}} ref='items'
							>{item.props.Tab}
							{isClose?<i className='iconfont icon-close'
							onClick={()=>{this.changeCloseState(index)}}></i>:null}
							</span>
						})
					}
				</div>
			</div>
			{isShowIcon ? <span className={'iconfont '+cls_icon_next}></span>:null}
			</div>
			<div className={cls_main}>
				{
					children.map((item,index)=>{
						return current === index ? <span key={index}>{item.props.children}</span>:null
					})
				}
			</div>
			</div>);
	}
}
export class TabPane extends Component{
	render(){
		return(
			<div></div>
			)
	}
}
export class Button extends Component{
	constructor(props){
		super(props)
		props = {
			title : '',
			onClick : function(){},
		}
	}
	render(){
		let {title,onClick} = this.props;
		return(
			<div className='tab-button' onClick={()=>{
				onClick()
			}}>{title}</div>
			)
	}
}

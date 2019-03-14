import React,{Component} from 'react';
import './Demo.css';
class Demo extends Component{
  constructor(props){
    super(props)
    props = {
      title : '',       //标题
      desc : '',        //相关描述
      instance : '',    //实例
      height : '',      //实例区高度，默认100px,若传了参数，则高度取决于传入参数
    }
  }
  render(){
    let {title,desc,instance,height} = this.props;
    let cls_demo = 'demo-wrap';
    let cls_instance = 'instance-con';
    let cls_desc = 'desc-con';
    let cls_title = 'demo-title';
    let cls_content = 'demo-con';
    return(
      <div className={cls_demo}>
        <div className={cls_instance} style={{height}}>
          {
            instance?<div>{instance}</div>:null
          }
        </div>
        <div className={cls_desc}>
          <div className={cls_title}>
            <a href='#'>{title}</a>
            <a href='#'><i className='iconfont icon-edit demo-icon'></i></a>
          </div>
          <div className={cls_content}>{desc}</div>
        </div>
      </div>
    )
  }
}
export default Demo;

import React, { Component } from 'react';
import '../App.css';
import './Pagination.css';
import '../index.css';
class Pagination extends Component{
  state = {
    current:1
  }
  props = {
    key : '',     //组件内的key值
    total : '',   //数据总数
    simple : '',  //简单的翻页
  }
  subtractCurrent(){//上一个
    if( this.state.current === 1 ){
      return
    }
    this.setState({current:this.state.current-1})
    // console.log(this.state);
  }
  addCurrent(){//下一个
    if( this.state.current === this.props.total ){
      return
    }
    this.setState({current:this.state.current+1})
    // console.log(this.state);
  }
  render(){
    let {current} = this.state;
    let {key,total,simple,type,showTotal} = this.props;
    let isSimple = false;
    if( simple ){
      isSimple = true;
    }
    let isTypeWord = false;
    if( type ){
      isTypeWord = true;
    }
    let isshowTotal = false;
    if( showTotal ){
      isshowTotal = true;
    }
    let als = ['menuNum','iconfont','icon-shangyige'];
    let xls = ['menuNum','iconfont','icon-xiayige']
    if( current === 1 ){
      als.push('paginationDisL')
    }
    als = als.join(' ');
    if( current === total ){
      xls.push('paginationDisL')
    }
    xls = xls.join(' ');
    return(
        <div>
          {
            isshowTotal?<span>{current} of {total} items</span>:null
          }
          {
            isTypeWord?<span className='Previous'
            onClick={()=>{this.subtractCurrent()}}
            >Previous</span>:<span className={als}
            onClick={()=>{this.subtractCurrent()}}
            ></span>
          }
          {
            isSimple ? <span><span className="menuNum">{current}</span><span>/5</span></span> : (new Array(total)).fill('0').map((item,index)=>{
              let cls = ['menuNum']
              if( index+1 === current ){
                cls.push('checked')
              }
              cls = cls.join(' ');
              return <span className={cls}>{index+1}</span>
            })
          }
          {
            isTypeWord?<span className='Next'
            onClick={()=>{this.addCurrent()}}
            >Next</span>:<span className={xls}
            onClick={()=>{this.addCurrent()}}
            ></span>
          }
        </div>
    )
  }
}
export default Pagination;

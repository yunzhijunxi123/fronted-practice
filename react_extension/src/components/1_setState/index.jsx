import React, { Component } from "react";

export default class Demo extends Component {
  state={count:0}
  add = () =>{
/*  //对象式的setState
    const {count} = this.state
    // this.setState({count:count+1})
    this.setState({count:count+1},()=>{
        console.log("回调,render调用后才调用",this.state.count);//1
    })
    console.log("12行的输出",this.state.count);//0 异步更新 */
    //不依赖原状态 对象式
    //this.setState({count:99})

    //函数式的setState 依赖原对象
    /*     this.setState((state,props)=>{
        console.log(state,props);
        return {count:state.count+1}
    }) */

    // this.setState(() => ({ count: 99 }))
    this.setState(() => ({ count: this.state.count+1 }))

    
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    );
  }
}

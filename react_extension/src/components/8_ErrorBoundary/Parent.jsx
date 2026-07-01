import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state ={
    hasError:""
  }
  //Parent的子组件报错时触发 
  static getDerivedStateFromError(error){
    console.log(error);
    return {hasError:error}
  }
  componentDidCatch(){
    console.log("统计错误");
    
  }
  render() {
    return (
      <div>
        <h2>Parent</h2>
        {this.state.hasError?<h2>当前网络不稳定,请稍后再试</h2>:<Child/>}
      </div>
    );
  }
}

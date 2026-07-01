import React, { Component } from "react";
import "./index.css";
import C from "../1_setState"

export default class extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {/* A与B是父子关系 */}
        <A render={(name) => <C name={name}/>}/>
      </div>
    );
  }
}
class A extends Component{
    state = {name:"tom"}
    render(){
        console.log(this.props);
        const {name} = this.state
        return(
            <div className="a">
                <h3>我是A组件</h3>
                {/* 放啥东西 11行负责 */}
                {this.props.render(name)}
                {/* <B name={this.state.name}/> */}
            </div>
        )
    }
}
class B extends Component{
    render(){
        console.log("B---render");
        return(
            <div className="b" >
                <h3>我是B组件 {this.props.name}</h3>
            </div>
        )
    }
}
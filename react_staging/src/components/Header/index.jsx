import React, { Component } from "react";
import "./index.css"
import { nanoid } from "nanoid";
export default class Header extends Component {

  handleKeyUp = (event)=>{
    const {keyCode,target} = event
    //不是回车就停掉
    if(keyCode !== 13) return
    //添加的todo名字不能为空
    if(target.value.trim() === ''){
      alert("输入不能为空")
      return
    }
    //准备好todo对象
    const todoObj={id:nanoid(),name:target.value,done:false}
    //将todoObj传递给App
    this.props.addTodo(todoObj)//赋值语句加箭头函数 子调用函数  找到父亲App传过来的a
    //清空输入的内容
    target.value = ""
  }

  render() {
    console.log(this.props.a);
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    );
  }
}

import React, { Component } from "react";
import Item from "../Item";
import "./index.css"
export default class List extends Component {
  
  render() {
    const {todos} = this.props
    console.log(this.props.b);
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
            //return <Item key={todo.id} name={todo.name} done={this.done}/>//前面是数据属性 后面是方法属性
            return <Item key={todo.id} {...todo}/>
          })
        }
      </ul>
    );
  }
}

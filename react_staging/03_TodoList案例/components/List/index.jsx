import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";
export default class List extends Component {
  //对接收的props进行 类型与必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    
  };
  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          //return <Item key={todo.id} name={todo.name} done={this.done}/>//前面是数据属性 后面是方法属性
          return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>; //也是从外面接进来的
        })}
      </ul>
    );
  }
}

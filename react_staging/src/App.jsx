import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";
export default class App extends Component {
  //状态在哪里 操作状态的方法就应该在哪里
  //初始化状态
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true }, //done为true是已经完成
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
      { id: "004", name: "购物", done: false },
    ],
  };
  //用于添加todo 接收的参数是todo对象
  addTodo = (todoObj) => {
    //获取原todos
    const { todos } = this.state;
    //追加一个todo
    const newTodos = [todoObj, ...todos]; //数组最前方是新传进来的
    //更新状态
    this.setState({ todos: newTodos });
  };
  //用于更新todo对象
  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };
  //用于删除Todo对象
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          {/*父亲App通过props给子Header传递一个函数 */}
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer />
        </div>
      </div>
    );
  }
}

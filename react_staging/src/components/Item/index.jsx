import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = { mouse: false };
  //鼠标移入移出的回调
  handleMouse = (flag) => {
    //函数体
    return () => {
      this.setState({ mouse: flag });
    };
  };
  //勾选或取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };
  //删除一个Todo的回调
  handleDelete = (id) =>{
    this.props.deleteTodo(id);
  }
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)} //立即执行返回一个函数
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          {/* defaultChecked后续可更改 */}
          <input
            type="checkbox"
            defaultChecked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={()=>this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}

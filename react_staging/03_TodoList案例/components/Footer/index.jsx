import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  //全选回调  ---- 切换
  handleCheckAll = (event) => {
    this.props.checkAllToDo(event.target.checked);
  };

  //清除已完成任务的回调
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };

  render() {
    const { todos } = this.props;
    //已完成个数 对数组做条件统计 起始值为零
    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0);
    }, 0);
    //总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          {/*defaultChecked 第一次有效  */}
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneCount === total && total !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}

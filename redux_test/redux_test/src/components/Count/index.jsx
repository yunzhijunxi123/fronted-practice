import React, { Component } from "react";
//获取redux中保存的状态
import store from "../../redux/store";

export default class Count extends Component {
  state = { carName: "奔驰" };

/*   componentDidMount() {
    //检测redux中状态的变化 只要变化 就调用render
    store.subscribe(() => {
      this.setState({}); //更新状态 帮忙调render     })
    });
  } */

  //加法
  increment = () => {
    const { value } = this.selectNumber;
    //通知redux加value
    store.dispatch({ type: "increment", data: value * 1 });
    //this.setState({count:count+value*1})
  };
  //减法
  decrement = () => {
    const { value } = this.selectNumber;
    //通知redux加value
    store.dispatch({ type: "decrement", data: value * 1 });
    //this.setState({count:count-value*1})
  };
  //奇数再加
  incrementIfOdd = () => {
    const  count  = store.getState();//store.getState()拿到的已经是数字 不是对象
    const { value } = this.selectNumber;
    if (count % 2 != 0) {
      store.dispatch({ type: "increment", data: value * 1 });
    }
  };
  //异步加
  incrementAsync = () => {
    const  count  = store.getState();
    const { value } = this.selectNumber;
    setTimeout(()=>{
        store.dispatch({ type: "increment", data: value * 1 });
    },500)
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select
          ref={(c) => {
            this.selectNumber = c;
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

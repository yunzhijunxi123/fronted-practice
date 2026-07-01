import React, { PureComponent } from "react";
import index from "./index.css";

export default class Parent extends PureComponent {
  state = { carName: "奔驰c63",students:["小王，小张，小李 "] };
  changeCar = () => {
    //地址不一样
    // this.setState({ carName: "迈巴赫" });
    //地址一样
    const obj = this.state
    obj.carName = "迈巴赫测试"
    this.setState(obj)
  };
  addStu = () =>{
/*     const {students} = this.state
    students.unshift("小刘")
    this.setState({students}) */
    const {students} = this.state 
    this.setState({students:["小刘, ",...students]})
  }

/*   shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.props, this.state);
    // console.log(nextProps, nextState);
    return !this.state.carName === this.state.carName;
  } */
  render() {
    console.log("parent-render");
    const { carName } = this.state;
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {this.state.students}&nbsp;
        <span>我的车名字是：{carName}</span>
        <br />
        <button onClick={this.changeCar}>点我换车</button>
        <button onClick={this.addStu}>点我添加学生</button>
        <Child carName={carName} />
      </div>
    );
  }
}

class Child extends PureComponent {
/*   shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props, this.state);
    console.log(nextProps, nextState);
    return !this.props.carName === nextProps.carName;
  } */
  render() {
    console.log("child-render");
    return (
      <div className="child">
        <h3>我是Child组件</h3>
        <span>我接到的车是：{this.props.carName}</span>
      </div>
    );
  }
}

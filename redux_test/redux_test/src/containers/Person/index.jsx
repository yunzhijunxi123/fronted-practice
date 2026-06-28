import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value*1;
    const personObj = { id: nanoid(), name, age };
    this.props.addPerson(personObj)
    this.nameNode.value = ""
    this.ageNode.value = ""
  };
  render() {
    return (
      <div>
        <h2>我是Person组件,上方求和为{this.props.sum}</h2>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="输入名字"
        ></input>
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="输入年龄"
        ></input>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.personArr.map((p) => {
            return (
              <li key={p.id}>
                {p.name}---{p.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default connect(
  (state) => ({ personArr: state.people ,sum:state.num}), //映射状态
  {addPerson,}
)(Person);

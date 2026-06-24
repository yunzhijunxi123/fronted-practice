import React, { Component } from "react";
// import qs from "querystring"; 
let obj = { name: "tom", age: 18 };
console.log(new URLSearchParams(obj).toString()); //stringify与parse

const DetailData = [
  { id: "01", content: "你好，中国" },
  { id: "02", content: "你好，CHINA" },
  { id: "03", content: "你好，china" },
];

export default class index extends Component {
  render() {
    console.log(this.props);

    //接收params参数
    // const {id,title} =this.props.match.params

    //接收search参数
    // const { search } = this.props.location;
    // const { id, title } = Object.fromEntries(new URLSearchParams(search)); //干掉第一个字
    //接收state参数
    const {id,title} = this.props.location.state ||{}
    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id;
    }) || {};

    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    );
  }
}

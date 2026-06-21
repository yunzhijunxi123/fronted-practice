import React, { Component } from "react";
import axios from "axios"

export default class index extends Component {
  search = () => {
    //获取用户的输入
    const {keyWordElement:{value:keyWord}} = this
    //发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response => {
        this.props.saveUsers(response.data.items)
      },
      error => console.log("失败了",error),
    )
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}//c即输入框 this.keyWordElement=输入框DOM元素
            type="text"
            placeholder="输入关键词点击搜索"
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

import React, { Component } from "react";
import axios from "axios"

export default class index extends Component {
  search = () => {
    //获取用户的输入
    const {keyWordElement:{value:keyWord}} = this
    this.props.updateAppState({isFirst:false,isLoading:true})
    //发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response => {
        this.props.updateAppState({isLoading:false,users:response.data.items})
      },
      error =>{
        this.props.updateAppState({isLoading:false,err:error.message})//不要存错误对象 要存对象上的属性
      },
    )
  };
  render() {
    return (
      <section className="jumbotron">
        <h2 className="jumbotron-heading">搜索github用户</h2>
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

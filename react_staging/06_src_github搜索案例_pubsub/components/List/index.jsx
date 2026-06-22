import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";
export default class extends Component {
 
  state = {//初始化状态
    users:[],//users初始值为数组
    isFirst:true,
    isLoading:false,
    err:"",
  }
  //消息订阅与发布 谁接消息谁订阅消息 
  componentDidMount(){
    this.token = PubSub.subscribe("atguigu",(_,stateObj)=>{
      this.setState(stateObj)
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (
      <div>
        <div className="row">
          {
            isFirst?<h3>欢迎使用，输入关键字，随后点击搜索</h3>:
            isLoading?<h3>Loading...</h3>:
            err?<h3 style={{color:"red"}}>{err}</h3>:
            users.map((userObj) => {
            return (
              <div key = {userObj.id} className="card">
                <a href={userObj.html_url} target="_blank">
                  <img
                    src={userObj.avatar_url}
                    style={{width:"100px"}}
                  />
                </a>
                <p class="card-text">{userObj.login}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

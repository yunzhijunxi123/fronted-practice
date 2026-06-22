import React, { Component } from "react";
import "./index.css";
export default class extends Component {
  render() {
    const {users,isFirst,isLoading,err} = this.props
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

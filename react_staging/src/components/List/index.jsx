import React, { Component } from "react";
import "./index.css";
export default class extends Component {
  render() {
    return (
      <div>
        <div className="row">
          {this.props.users.map((userObj) => {
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

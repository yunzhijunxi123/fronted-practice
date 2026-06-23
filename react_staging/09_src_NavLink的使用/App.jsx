import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import Header from "./components/Header";//一般组件
import Home from "./pages/Home";//路由组件
import About from "./pages/About";//路由组件

export default class App extends Component {
  /*
      1.点击链接，影响路径
      2.路径变化
  */
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              {/* 一般组件不传就什么也收不到 */}
              <Header a={1}/>
            </div>
          </div>
        </div>

          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 原生html 靠a标签跳转不同页面 */}
                {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}

                {/* 在React中靠路由链接实现切换组件 编写路由链接 */}
                {/* 用了NavLink 给谁加active 谁就高亮 */}
                <NavLink activeClassName="atguigu" className="list-group-item" to="./about">
                  {" "}
                  About
                </NavLink>
                <NavLink activeClassName="atguigu"  className="list-group-item" to="./home">
                  {" "}
                  Home
                </NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/*注册路由  Home是路由组件*/}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

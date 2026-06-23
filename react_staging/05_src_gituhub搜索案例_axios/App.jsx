import React, { Component } from "react";

import Search from "./components/Search"
import List from './components/List'
export default class App extends Component {
  state = {//初始化状态
    users:[],//users初始值为数组
    isFirst:true,
    isLoading:false,
    err:"",
  } 
  updateAppState = (stateObj) =>{
    this.setState(stateObj)
  }

  render() {
    const {users} = this.state
    return (
      <div>
        <div className="container">
          <Search updateAppState = {this.updateAppState}/>
          <List {...this.state}/>
        </div>
      </div>
    );
  }
}

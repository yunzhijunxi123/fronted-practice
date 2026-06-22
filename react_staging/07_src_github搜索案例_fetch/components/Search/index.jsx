import React, { Component } from "react";
import PubSub from "pubsub-js";
//import axios from "axios"

export default class index extends Component {
  search = async() => {
    //获取用户的输入
    const {keyWordElement:{value:keyWord}} = this
    //发送请求前通知List更新状态  谁传消息谁发布消息
    //this.props.updateAppState({isFirst:false,isLoading:true}) 
    PubSub.publish("atguigu",{isFirst:false,isLoading:true})
    //发送网络请求
    //#region 使用axios发送
    // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
    //   response => {
    //     //this.props.updateAppState({isLoading:false,users:data.items||[]}) 
    //     PubSub.publish("atguigu",{isLoading:false,users:data.items||[]})
    //   },
    //   error =>{
    //     //this.props.updateAppState({isLoading:false,err:error.message})//不要存错误对象 要存对象上的属性
    //     PubSub.publish("atguigu",{isLoading:false,err:error.message})
    //   },
    // ) 
    //#endregion

    //使用fetch发送

    /*
      如果 .then() 的回调返回一个 Promise，那么链上的下一个 .then() 
      会等待这个 Promise 有结果后再执行。
    */
    // 1. 回调正常结束 → 下一个 then 走成功。
    // 2. 回调报错或没写失败回调 → 错误穿透到下一个 then 的失败回调。
    // 3. 返回 Promise → 等它完成再给下一个 then；返回普通值 → 直接传给下一个 then。
    //只要 .then() 的某个回调执行时没有抛出错误，它返回的 Promise 就是“成功”状态。

    //未优化
    // fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
    //   response =>{
    //     console.log("联系服务器成功了");
    //     return response.json()
    //   },
    //   error =>{
    //     console.log("联系服务器失败了",error);
    //     return new Promise(()=>{})//返回初始化状态的promise实例 服务器失败就不往下走了 
    //   }
    // ).then(
    //   response =>{console.log("获取数据成功了",response);
    //   },
    //   error =>{console.log("获取数据失败了",error);
    //   }
    // )


    // fetch().then(
    //   response =>{
    //     console.log("联系服务器成功了");
    //     return response.json()
    //   },
    // ).then(
    //   response =>{console.log("获取数据成功了",response);
    //   },
    // ).catch(
    //   (error)=>{console.log("请求出错",error);
    //   }
    // )

    try{
      const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish("atguigu",{isLoading:false,users:data.items||[]})    
    }catch(error){
      PubSub.publish("atguigu",{isLoading:false,err:error.message})
    }

    

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
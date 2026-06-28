//index.js入口文件
//引入react核心库
import React from "react";
//引入ReactDOM
import ReactDOM from "react-dom/client";
//引入
import { BrowserRouter } from "react-router-dom";
//引入App组件
import App from "./App";

import store from "./redux/store";

import { Provider } from "react-redux";

//渲染App到页面
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/*用Provider包裹App 让App所有的后代容器组件都能接收到store  */}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);

//检测redux中状态的改变 若redux的状态发生了改变 重新渲染App组件
//用上react-redux 不用检测
/* store.subscribe(()=>{
    // const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render( <BrowserRouter><App/></BrowserRouter>)
}) */

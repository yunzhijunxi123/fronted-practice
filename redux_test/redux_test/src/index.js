//index.js入口文件
//引入react核心库
import React from "react"
//引入ReactDOM
import ReactDOM from "react-dom/client"
//引入
import { BrowserRouter } from "react-router-dom"
//引入App组件
import App from "./App"

import store from "./redux/store"

//渲染App到页面
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render( <BrowserRouter><App/></BrowserRouter>)

store.subscribe(()=>{
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render( <BrowserRouter><App/></BrowserRouter>)
})
// import React from "react";
// import ReactDOM from "react-dom"
// import App from "./App";

// ReactDOM.render(<App/>,document.getElementById("root"))
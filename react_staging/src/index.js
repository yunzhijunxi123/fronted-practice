import 'antd/dist/reset.css';
//index.js入口文件
//引入react核心库
import React from "react"
//引入ReactDOM
import ReactDOM from "react-dom/client"
//引入
import { BrowserRouter } from "react-router-dom"
//引入App组件
import App from "./App"


//渲染App到页面
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render( <BrowserRouter><App/></BrowserRouter>)


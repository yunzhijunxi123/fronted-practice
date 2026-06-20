//创建所有组件的外壳组件 App.js
import React,{Component} from "react";//默认导入
import Hello from "./components/Hello";//components/Hello/index.jsx
import Welcome from "./components/Welcome";
//const{Component} = React//从React身上获取Component
//创建并暴露App组件
export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
                <Welcome/>                
            </div>
        )
    }
}
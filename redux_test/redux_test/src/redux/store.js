/*
    该文件专门用于暴露store对象
*/ 
//创建最核心的store对象
import {createStore} from "redux"
//引入为Count组件服务的reducer
import countReducer from "./count_reducer"

// const store = createStore(reducer)
// export default store
export default createStore(countReducer)
 
/*
    该文件专门用于暴露store对象
*/ 
//创建最核心的store对象
import {createStore,applyMiddleware} from "redux"
//引入为Count组件服务的reducer
import countReducer from "./count_reducer"
//引入redux-thunk 用于支持异步action 不用给reducer自己执行�?
import { thunk } from "redux-thunk"

// const store = createStore(reducer)
// export default store
export default createStore(countReducer,applyMiddleware(thunk))
 
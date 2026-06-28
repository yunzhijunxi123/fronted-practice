/*
    该文件专门用于暴露store对象
*/ 
//创建最核心的store对象
import {createStore,applyMiddleware} from "redux"

import reducer from "./reducers/index"

//引入redux-thunk 用于支持异步action 不用给reducer自己执行
import { thunk } from "redux-thunk"

//引入 redux-devtools-extension
import { composeWithDevTools } from '@redux-devtools/extension';

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
 
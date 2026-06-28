/*
    该文件专门用于暴露store对象
*/ 
//创建最核心的store对象
import {createStore,applyMiddleware,combineReducers} from "redux"
//引入为Count组件服务的reducer
// import countReducer from "./reducers/count"
// import personReducer from "./reducers/person"

//引入redux-thunk 用于支持异步action 不用给reducer自己执行
import { thunk } from "redux-thunk"
import countReducer from "./reducers/count"
import personReducer from "./reducers/person"
//引入 redux-devtools-extension
import { composeWithDevTools } from '@redux-devtools/extension';
//combineReducers传入的对象 就是Redux中保存的总状态对象
const allReducer = combineReducers({
    num:countReducer,
    people:personReducer,    
})
// const store = createStore(reducer)
// export default store
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
 
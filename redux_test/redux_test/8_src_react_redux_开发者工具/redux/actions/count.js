/*
    该文件专门为Count组件生成action对象
*/
import { INCREMENT,DECREMENT } from "../constant"

//同步action 直接返回普通对象
export const createIncrementAction = data =>({type:INCREMENT,data})//前面是接到data
export const createDecrementAction = data =>({type:DECREMENT,data})
//异步action 返回函数 因为它能开启异步任务 异步中一般会调同步 非必要
export const createIncrementAsyncAction = (data,time) => {
    return (dispatch)=>{//接到dispatch
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}

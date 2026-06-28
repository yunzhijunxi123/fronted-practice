/*
    1.用于创建一个为Count组件服务的reducer 其本质是一个函数
    2.reducer函数会接到两个参数 分别是之前的状态与动作对象
*/
import { INCREMENT,DECREMENT } from "../constant"
const initState = 0
export default function countReducer(preState=initState,action){//形参默认值
    // console.log("count@#@#");
    
    //console.log(preState,action);
    const {type,data}=action
    //根据type决定如何加工数据
    //reducer相当于执行者 只管加减
    switch (type) {
        case INCREMENT://如果是加
            return preState + data
        case DECREMENT://如果是减
            return preState - data
        default:
            return preState
    }
}
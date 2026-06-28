import { ADD_PERSON } from "../constant";
//初始化人的列表
const initState = [{id:"001",name:"tom",age:18}]

export default function personReducer(preState=initState,action){
    //console.log("person@#@#");
    
    const {type,data} = action
    switch(type){
        case ADD_PERSON://若是添加一个人
            //preState.unshift(data)//改写了参数 redux中的reducer纯函数 同样输入 同样输出
            //浅比较 
            return [data,...preState]
            // return [data,...preState]
        default:
            return preState
    }
}
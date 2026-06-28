/* 
    该文件用于汇总所有的reducer为一个总的reducer
*/
import {combineReducers} from "redux"

import count from "./count"
import person from "./person"

export default combineReducers({
    num:count,
    people:person,    
})

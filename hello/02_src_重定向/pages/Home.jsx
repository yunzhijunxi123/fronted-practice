import React,{useState}from 'react'
import { Navigate } from 'react-router-dom' 

export default function Home() {
  const [sum,setSum] = useState(1)
  return (
    <div>
        <h3>我是Home的内容</h3>
        {/* <h4>当前sum的值是：{sum}</h4> */}
        {/*  onClick={setSum(2)} 这样会立即执行*/}
        {/* 下面这么写 是为了把一个函数引用传给onClick */}
        {/* onClick需要函数引用 而非函数的执行结果 */}
        {/* push会留下痕迹 */}
        {sum===2 ? <Navigate to="/about" replace={true}/> : <h4>当前sum的值是：{sum}</h4> }
        <button onClick={()=>setSum(2)}>把sum变成2</button>

    </div>
  )
}

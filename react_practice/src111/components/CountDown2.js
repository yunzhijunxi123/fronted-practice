import React, { useState,useRef, useEffect } from 'react'

export default function CountDown2() {
  const [second,setSecond] = useState(10)
  const timerRef = useRef(null)
  useEffect(()=>{
    const delay = setTimeout(()=>{
      timerRef.current = setInterval(()=>{
        setSecond((prev)=>{
          if(prev<1){
            return 10
          }else{
            return prev-1
          }
        })
      },1000)
    },2000)

    return()=>{
      delay.clearTimeOut()
      timerRef.current.clearInterval()
    }
    
  },[])
  return (
    <div>
      <h2>定时器</h2>
      <h3>当前剩余时间：{second}秒</h3>
    </div>
  )
}

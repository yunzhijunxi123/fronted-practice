import React, { useState, useEffect, useRef } from "react";

export default function CountDown() {

  const [second, setSecond] = useState(10);
  //装定时器 ID 的小盒子 启动时塞进去，清理时取出来
  const timerRef = useRef(null);


  //组件渲染完成后 额外帮我做这件事
  useEffect(() => {
    //2秒后启动倒计时
    const delay = setTimeout(() => {
      timerRef.current = setInterval(() => {
        setSecond((prev) => {
          if (prev < 1) {
            return 10;
          }
          return prev - 1;
        });
      }, 1000);
    }, 2000);
    return () => {
      clearTimeout(delay);
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <div>
      <h2>倒计时</h2>
      <h3>倒计时：{second}秒</h3>
    </div>
  );
}

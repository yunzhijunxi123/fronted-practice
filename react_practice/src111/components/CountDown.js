import React, { useState, useEffect, useRef } from "react";

export default function CountDown() {
  //useState数据变了要刷新页面
  const [second, setSecond] = useState(10);
  //装定时器 ID 的小盒子 启动时塞进去，清理时取出来

  //useRef存着东西不刷新 在整个组件都能访问
  const timerRef = useRef(null);

  //组件渲染完成后 额外帮我做这件事
  useEffect(() => {
    //2秒后启动倒计时 变量名和存储地址的绑定关系不变
    const delay = setTimeout(() => {
      //内层定时器在另一个作用域，需要用 useRef 这座桥把值传到清理函数那里
      timerRef.current = setInterval(() => {
        //setSecond 是修改 second 值的唯一方法
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

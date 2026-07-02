import React, { useEffect } from "react";
import { useLocation } from "react-router";

export default function Detail() {
  const location = useLocation();
  const { id, title, content } = location.state || {};

  useEffect(() => {
    console.log("当前路由信息：", location);
    console.log("pathname:", location.pathname);
    console.log("state:", location.state);
  }, [location]);

  return (
    <ul>
      <li>消息编号：{id}</li>
      <li>消息标题：{title}</li>
      <li>消息内容：{content}</li> 
    </ul>
  );
}

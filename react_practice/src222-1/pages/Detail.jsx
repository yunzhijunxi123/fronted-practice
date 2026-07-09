import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";

export default function Detail() {
  const { id } = useParams();
  const location = useLocation();
  const { title, content } = location.state || {};


  return (
    <ul>
      <li>消息编号：{id}</li>
      <li>消息标题：{title}</li>
      <li>消息内容：{content}</li> 
    </ul>
  );
}

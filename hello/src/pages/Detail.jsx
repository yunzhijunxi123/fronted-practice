import { useLocation } from "react-router-dom";

export default function Detail() {
  const {state} = useLocation();
  const {id, title, content} = state || {};

  return (
    <ul>
      <li>消息编号：{id}</li>
      <li>消息标题：{title}</li>
      <li>消息内容：{content}</li> 
    </ul>
  );
}

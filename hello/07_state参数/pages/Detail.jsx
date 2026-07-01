import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const {state:{id,title,content}} = useLocation()
  console.log(a);
  
  return (
    <ul>

      <li>消息编号：{id}</li>
      <li>消息标题：{title}</li>
      <li>消息内容：{content}</li> 
    </ul>
  );
}

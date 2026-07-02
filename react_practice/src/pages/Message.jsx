import { Outlet, useNavigate } from "react-router"
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Message() {
  const [messages] = useState([
    { id: "001", title: "标题1", content: "内容1" },
    { id: "002", title: "标题2", content: "内容2" },
    { id: "003", title: "标题3", content: "内容3" },
  ]);
  const navigate = useNavigate();

  function showDetail(m) {
    navigate("detail", {
      state: { id: m.id, title: m.title, content: m.content },
    });
  }

  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            <li key={m.id}>
              {/* 声明式跳转 */}
              <Link
                to="detail"
                state={{ id: m.id, title: m.title, content: m.content }}
              >
                {m.title}
              </Link>
              &nbsp;&nbsp;
              {/* 编程式跳转 */}
              <button onClick={() => showDetail(m)}>查看详情</button>
            </li>
          );
        })}
      </ul>
      <hr />
      {/* 渲染子路由 */}
      <Outlet />
    </div>
  );
}

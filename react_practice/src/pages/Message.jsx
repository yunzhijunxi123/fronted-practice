import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
//重要
export default function Message() {
  const [messages] = useState([
    { id: "001", title: "标题1", content: "内容1" },
    { id: "002", title: "标题2", content: "内容2" },
    { id: "003", title: "标题3", content: "内容3" },
  ]);
  const navigate = useNavigate();
  function showDetail(m) {
    navigate(`detail/${m.id}`, {
      state: { id: m.id, title: m.title, content: m.content },
    });
  }
  
  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            <li key={m.id}>
              <Link
                to={`detail/${m.id}`}
                state={{ id: m.id, title: m.title, content: m.content }}
              >
                {m.title}
              </Link>
              &nbsp;&nbsp;
              <button onClick={() => showDetail(m)}>查看信息</button>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

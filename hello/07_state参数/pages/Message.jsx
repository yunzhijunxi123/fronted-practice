import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Message() {
  const [messages] = useState([
    { id: "001", title: "标题1", content: "内容1" },
    { id: "002", title: "标题2", content: "内容2" },
    { id: "003", title: "标题3", content: "内容3" },
  ]);
  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            <li key={m.id}>
              <Link
                to="detail"
                state={{ id: m.id, title: m.title, content: m.content }}
              >
                {m.title}
              </Link>
              &nbsp;&nbsp;
            </li>
          );
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}

import { Outlet } from "react-router"
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            {/*相对路径进行跳转  */}
            <NavLink className="list-group-item" to="news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink className="list-group-item " to="message">
              Message
            </NavLink>
          </li>
        </ul>
        {/* 指定路由组件呈现的位置  如果剩余路径/news */}
        {/* 把<News/>塞进<Outlet/>中 */}
        <Outlet/>
      </div>
    </div>
  );
}

import React from "react";
import { NavLink, useRoutes, useInRouterContext } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";

export default function App() {
  const element = useRoutes(routes);
  
  return (
    <div>
      <div className="row">
      
        <Header/>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/*路由连接*/}
            <NavLink className="list-group-item" to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" end to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/*注册路由 一个匹配上了 剩下的不会匹配*/}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

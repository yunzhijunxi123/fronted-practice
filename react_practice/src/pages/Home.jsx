import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <h3>Home</h3>
        <div>
            <ul className='nav nav-tabs'>
                <li>
                    <NavLink className="list-group-item" to="news">
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink className="list-group-item" to="message">
                        Message
                    </NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    </div>
  )
}

import React from 'react'
import {Link} from "react-router-dom"
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <h1>dashboard</h1>
        <p>Lorem ipsum dolor sit.</p>


        <nav>
            <Link to="profile">Profile</Link>
            <Link to="settings">Settings</Link>

        </nav>


     <Outlet/>


    </div>
  )
}

export default Dashboard
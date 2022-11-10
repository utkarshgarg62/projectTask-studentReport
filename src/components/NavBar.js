import React from "react"
import "./NavBar.css"
import { NavLink } from "react-router-dom"
const NavBar = () => {
    return <div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><a href="https://utkarshhgarg.netlify.app/">About Me</a></li>
            <li><NavLink to="/adminlogin">Admin Login</NavLink></li>
        </ul>
    </div>
}
export default NavBar;
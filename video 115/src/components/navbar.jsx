import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
      <nav>
       <NavLink className={(e)=>{return e.isActive ? "red": ""}} to="/"> <li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive ? "red": ""}} to="/About"><li>Aboutus</li></NavLink>
        <NavLink className={(e)=>{return e.isActive ? "red": ""}} to="/Login"><li>Login</li></NavLink>
        <NavLink className={(e)=>{return e.isActive ? "red": ""}} to="/Contactus"><li>Contactus</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar

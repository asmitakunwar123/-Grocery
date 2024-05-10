import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
 
  


  return (
  <>
  <div className='topnav'> 
    <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <a className="logo" ><img  src='../img/images.png' alt='Grocery'/></a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
        <li className="nav-item  ">
          <Link className="nav-link " to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Service">Product</Link>
        </li>
        
      </ul>
      
      <div className='topnav'> 
    <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to="/Signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Login">Login</Link>
        </li>
        
      </ul>

    </div>

</nav>
</div>
 </div>
   

  
</nav>
</div>
  </>
  )
}

export default Navbar
import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="navbar">
                <div className="top">
            <li><a href="#"><i class="fa fa-user"></i> About Us </a>
                <div class="sub-menu-1">
                    <ul>
                        <li><a href="#"> Mission </a></li>      
                        <li><a href="#"> Vision </a></li>
                        <li><a href="#"> Team </a></li>
                    </ul>
                </div>
            </li>
                </div>
                <div className="bottom"></div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
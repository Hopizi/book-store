import React from 'react'
import { useState, useEffect } from 'react'
import Button from './Button'
import "./styles/Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    const menuClass = menuOpen ? "open" : "" ;
    const navCon = menuOpen ? "navCon" : "" ;
    const navItem = menuOpen ? "navItemOpen" : "navItemClose";

    function handleClick() {
      setMenuOpen(!menuOpen);
    }

  return (
    <div className={`navbar-main-container ${navCon}`}>
            <div className='navbar-logo'>
                <h1>Booker</h1>
            </div>
            <div className={`nav-items-continer ${navItem}`}>
                <ul>
                    <Link to='/insertbook'><li>Insert Book</li></Link>
                    <Link to='/searchbook'><li>Search Book</li></Link>
                    <li><Button btnTitle="Login" style='borderBlack'/></li>
                </ul>
            </div>
            <div className={`nav-btn-container ${menuClass}`} 
                onClick={handleClick}>
                <div className='menu-btn'></div>
            </div>
    </div>
  )
}

export default Navbar
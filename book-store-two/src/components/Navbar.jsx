import React from 'react'
import { useState, useEffect } from 'react'
import Button from './Button'
import "./styles/Navbar.css"
import {Link} from "react-router-dom"

function Navbar({style}) {

    const [menuOpen, setMenuOpen] = useState(false)

    const menuClass = menuOpen ? "open" : "" ;
    const navCon = menuOpen ? "navCon" : "" ;
    const navItem = menuOpen ? "navItemOpen" : "navItemClose";

    function handleClick() {
      setMenuOpen(!menuOpen);
    }

  return (
    <>
    <div className={`navbar-main-container ${navCon} ${style}`}>
            <div className='navbar-logo'>
                <Link to='/'><h1>Booker</h1></Link>
            </div>
            <div className={`nav-items-continer ${navItem}`}>
                <ul>
                    <Link to='/allbooks'><li>All Books</li></Link>
                    <Link to='/insertbook'><li>Add Book</li></Link>
                    <Link to='/searchbooks'><li>Search Book</li></Link>
                    {/* <li><Button btnTitle="Login" style='borderBlack'/></li> */}
                </ul>
            </div>
    </div>
    <div className={`nav-btn-container ${menuClass}`} 
                onClick={handleClick}>
                <div className='menu-btn'></div>
    </div>
    </>
  )
}

export default Navbar
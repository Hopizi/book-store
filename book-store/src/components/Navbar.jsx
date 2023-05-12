import React from 'react'
import Button from './Button'
import "./styles/Navbar.css"

function Navbar() {
  return (
    <div className='navbar-main-container'>
            <div className='navbar-logo'>
                <h1>Booker</h1>
            </div>
            <div className='nav-items-continer'>
                <ul>
                    <li>Insert Book</li>
                    <li>Search Book</li>
                    <li><Button btnTitle="Login"/></li>
                </ul>
            </div>
    </div>
  )
}

export default Navbar
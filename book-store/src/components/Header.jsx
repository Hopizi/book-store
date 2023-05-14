import React from 'react'
import { HeaderBackground } from '../assets'
import Navbar from './Navbar'
import Button from './Button'
import "./styles/Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-main'>
        <Navbar style='white'/>
        <img src={HeaderBackground}/>
        <div className='header-text-container'>
            <h1>Books You'll Love, Right at Your Fingertips</h1>
        </div>
        <div className='header-textbtn-container'>
            <Link to='/searchbooks'><Button btnTitle='Search Our Books' style='pad-increase'/></Link>
        </div>
    </div>
  )
}

export default Header
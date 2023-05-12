import React from 'react'
import { HeaderBackground } from '../assets'
import Navbar from './Navbar'
import Button from './Button'
import "./styles/Header.css"

function Header() {
  return (
    <div className='header-main'>
        <Navbar />
        <img src={HeaderBackground}/>
        <div className='header-text-container'>
            <h1>Books You'll Love, Right at Your Fingertips</h1>
            <div className='header-textbtn-container'>
                <Button btnTitle='Search Our Books' style='pad-increase'/>
            </div>
        </div>
    </div>
  )
}

export default Header
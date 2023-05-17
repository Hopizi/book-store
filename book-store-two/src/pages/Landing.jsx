import React from 'react'
import "./styles/Landing.css"
import {Button,SideBar} from "../components"
import { LandingBackground } from '../assets'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <div className='landing-main-page'>
        <div className="overlay-home"></div>
        <div className='landing-inner-img-container'>
            <img src={LandingBackground} alt='BookShelf That Contains Books'/>
        </div>
        <div className='landing-display-text'>
            <h1>Unleash your imagination with books from Book Haven</h1>
            <div className='landing-button-container'>
                <Link to='/allbooks'><Button btnTitle='Check Out Our Books' style='font-red'/></Link>
                <Link to='/searchbooks'><Button btnTitle='Search For a Book' style='font-red'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Landing
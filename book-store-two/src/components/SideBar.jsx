import React from 'react'
import './styles/SideBar.css'
import {Add, Search, Book, Logo} from "../assets"
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

function DocSideBar() {

  const sideBar = useRef(null)

  useEffect(() => {
    const sidebar = sideBar.current;
    const sidebarOffsetTop = sidebar.offsetTop;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= sidebarOffsetTop) {
        sidebar.classList.add('fixed');
      } else {
        sidebar.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='doc-side-bar-main' ref={sideBar}>
      <Link to='/' className='margin-rmv'><div className="side-logo-container"><img src={Logo}/></div></Link>
        <div className='doc-side-bar-inner'>
            <ul>
                <Link to='/allbooks'><li><Book className='doc-side-icons'/></li></Link>
                <Link to='/addbook'><li><Add className='doc-side-icons'/></li></Link>
                <Link to='/searchbooks'><li><Search className='doc-side-icons'/></li></Link>
            </ul>
        </div>
    </div>
  )
}

export default DocSideBar
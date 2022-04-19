import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <i className="fa-brands fa-korvue"></i>
        <nav className='navbar__container'>
            <ul className='navbar__info'>
                <li>About</li>
                <li>Projects</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
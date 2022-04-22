import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <section className='navbar'>
        <i className="fa-brands fa-korvue"></i>
        <nav className='navbar__container'>
            <ul className='navbar__info'>
              {/* You can create a href link to identifiers */}
                <li>About</li>
                <li>Projects</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </nav>
    </section>
  )
}

export default Navbar
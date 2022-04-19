import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        {/* Logo */}
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
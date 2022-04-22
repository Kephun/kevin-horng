import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <section className='experience'>
      <h3>Skills</h3>
      {/* Logos of the stack I use */}
      <ul className='experience_skills'>
        <li><i class="fa-brands fa-html5"></i></li>
        <li><i class="fa-brands fa-css3"></i></li>
        <li><i class="fa-brands fa-js"></i></li>
        <li><i class="fa-brands fa-react"></i></li>
        <li><i class="fa-brands fa-node"></i></li>
      </ul>
    </section>
  )
}

export default Experience
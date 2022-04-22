import React from 'react';
import './About.css';

function About() {
  return (
    <section className='about'>
      <section className='about_main'>
        <img src='' alt='Self-portrait'/>
        <div className='about__description'>
          <h4>Hello! My name is Kevin Horng</h4>
          <p>I am an Electrical Engineer from NJIT. I started my development journey in the beginning of 2022 on a whim and haven't been able to stop since.</p>
        </div>
      </section>
      <ul className='about_socials'>
        <li>Linkden</li>
        <li>Github</li>
        <li>Resume</li>
      </ul>
      
    </section>
  )
}

export default About;
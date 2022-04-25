import React from 'react';
import './About.css';

function About() {
  return (
    <section className='about'>
      <div className='about_container'>
        <img src='src/components/me.jpg' alt='me'/>
        <section className='about_main'>
          <div className='about_description'>
            <h4>Hello! My name is Kevin Horng</h4>
            <p>I am an Electrical Engineer from NJIT. I started my development journey in the beginning of 2022 on a whim and haven't been able to stop since.</p>
          </div>
        <ul className='about_socials'>
          <a href='https://www.linkedin.com/in/kevin-horng/' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
          <a href='https://github.com/Kephun' target='_blank' rel='noreferrer'><i className="fa-brands fa-github"></i></a>
        </ul>
        </section>
      </div>
    </section>
  )
}

export default About;
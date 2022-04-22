import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <section className='contact'>
      <form className='contact_form'>
        Name<input/>
        Email<input/> 
        Message<input/>
      </form>
    </section>
  )
}

export default Contact
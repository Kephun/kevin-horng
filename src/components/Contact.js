import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <section className='contact'>
      <div className='contact_info'>
        <div>862-485-4599</div>
        <div>kevin.horng422@gmail.com</div>
        <div>Livingston, NJ</div>
      </div>
      <form className='contact_form'>
        Name<input/>
        Email<input/>
        Message<input/>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Contact
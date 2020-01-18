import React from 'react'
import { Link } from 'react-router-dom'

import './Contact.css'

export default function Contact() {
  return (
    <section>
      <h1>Contact Us</h1>
      <div className='contact_info'>
        <label htmlFor="phone_number">Phone number:</label>
        <p className='contact_info_p' id='phone_number'>(856) 562 - 2046</p>
      </div>
      <div className='contact_info'>
        <label htmlFor="email">Email:</label>
        <p className='contact_info_p' id='email'>skippystoy@outlook.com</p>
      </div>
      <div className='contact_info'>
        <label htmlFor="youtube">YouTube:</label>
        <p className='contact_info_p' id='youtube'>
          <Link to='https://www.youtube.com/user/MrKporter136/videos'>
            https://www.youtube.com/user/MrKporter136/videos
          </Link>
        </p>
      </div>
    </section>
  )
}

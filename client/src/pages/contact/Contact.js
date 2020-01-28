import React from 'react'

import './Contact.css'

export default function Contact() {
  return (
    <section>
      <h1>Contact Us</h1>
      <div className='info_container'>
        <div className='contact_info'>
          <label htmlFor="phone_number">Phone number:</label>
          <i className="fas fa-phone" id='phone'></i>
          <p className='contact_info_p' id='phone_number'>(856) 562 - 2046</p>
        </div>
        <div className='contact_info'>
          <label htmlFor="email">Email:</label>
          <i className="fas fa-envelope-open-text" id="email"></i>
          <p className='contact_info_p'>skippystoy@outlook.com</p>
        </div>
      </div>
      <div className='form_container'>
        <form 
          className='form'
          onSubmit={e => e.preventDefault()}>
          <input 
            type="text"
            className='form_control'
            placeholder='Name'
            required
          />
          <input 
            type="email"
            className='form_control'
            placeholder='Email'
            required
          />
          <textarea 
            name="message" 
            className='form_control'
            id="" 
            cols="50" 
            rows="1"
            placeholder='Message'
          ></textarea>
          <button
            type='submit'
            className='submit_btn'
            onClick={() => console.log('Hello World!')}
          >Say Hi!</button>
        </form>
      </div>
      <div className='info_container'>
        <div className='contact_info_div'>
          <label htmlFor="youtube"></label>
          YouTube
          <a href='https://www.youtube.com/user/MrKporter136/videos' target='_blank' rel='noopener noreferrer'>
            <i className="fab fa-youtube icons" id='youtube'></i>
          </a>
        </div>
        <div className='contact_info_div'>
          <label htmlFor="facebook"></label>
          facebook
          <a href='https://www.facebook.com/SkippysRock/' target='_blank' rel='noopener noreferrer'>
            <i className="fab fa-facebook-f icons" id='facebook'></i>
          </a>
        </div>
      </div>
    </section>
  )
}

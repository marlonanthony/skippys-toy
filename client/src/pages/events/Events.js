import React from 'react'
import './Events.css'

export default function Events() {
  return (
    <section>
      <h1>Events</h1>
      <div id='calendar'>
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=skippystoyband%40gmail.com&ctz=America%2FNew_York" 
          id='calendar_iframe'
          frameBorder="0" 
          scrolling="yes"
          title='google calendar'
        ></iframe>
      </div>
    </section>
  )
}

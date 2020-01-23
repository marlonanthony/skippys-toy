import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <section className='home' style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ padding: 10, marginTop: 100 }}>
        <h1>Skippy's Toy</h1>
      </div>
    </section>
  )
}

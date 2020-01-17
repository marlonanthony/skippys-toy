import React from 'react'
import './About.css'

export default function About() {
  return (
    <section>
      <h1>About</h1>
      <div className='about'>
        <img src={require('../../images/gdup.jpg')} alt="hi" className='about-pics'/>
        <h2>What We Play</h2>
        <p style={{ padding: 20 }}>We play everything from Pretenders, Janice, Jefferson Airplane and Fleetwood Mac to The Beatles, Crosby Stills and Nash, The Stones, Bob Seger and Badfinger to name a few.  We even have some Sonny & Cher and some Monkees! You name the decade and genre, and we most likely have it.</p>
        <h2>Who We Are</h2>
        <div className='avatar_bio_container'>
          <img className='avatar' src={require('../../images/skippys_logo.jpg')} alt=""/>
          <p>Jimmy Mannix - guitar & vocals 
            <br /><br />
            Jimmy Mannix is a founding member of Big Bang, a local band that survived over 20 years. He was also in Cheap Sunglasses, Outloud, and various other bands. Jimmy's incredible guitar playing and stunning vocals make him one of the best and most respected performers around the area.
          </p>
        </div>
        <img className='avatar' src={require('../../images/skippys_logo.jpg')} alt=""/>
        <p>Kathy Mattson - vocals & keyboard
          <br /><br />
          Kathy Mattson has been involved in various bands throughout her life, and is currently in a duo with Jimmy that performs all over South Jersey and Philly.  She was classically trained in high school on piano and studied opera as well.
        </p>
        <img className='avatar' src={require('../../images/skippys_logo.jpg')} alt=""/>
        <p>Jay MacLean - drums, vocals 
          <br /><br />
          Jay MacLean started playing professionally at a young age when his brother picked him out of a garage band to play in the acclaimed MacLean Affair. From there he put together the highly talented progressive rock band Prodigy. Then he played for several years in the very successful band Energized. He was a founding member of The Blitz and enjoyed several years with them. After that came a 20-year run playing R&B with the Soul Survivors of “Expressway to Your Heart” fame. Now he’s back where he belongs with his first love playing rock n roll with the powerhouse Skippy’s Toy.
        </p>
        <img className='avatar' src={require('../../images/skippys_logo.jpg')} alt=""/>
        <p>Zuff - vocals, guitar, harmonica Rj Bozzuffi 
          <br /><br />
          (Zuff) has been with  SKIPPY'S TOY since 2016 and has been the drummer for various South  Jersey rock bands including $MONEY$, BIG EYES, CAGNEY, and CRY WOLF.   The "Drum Doctor" was one of the first ROCK drum teachers in the  tri-state area, and taught for 20 years.  Zuff has extensive recording  experience including national commercials.  He has been playing guitar  as long as drums and plays with the Rod & Zuff Duo.  His solo music  and originals can be heard on his YouTube page.
        </p>
        <img className='avatar' src={require('../../images/skippys_logo.jpg')} alt=""/>
        <p>Kevin “Ace” Porter - bass, sound, vocals
          <br /><br />
          Kevin "Ace" Porter founded Skippy's Toy.  Ace started off in a band called Sinner where he played bass for 5 years.  After Sinner, Ace got involved in sound engineering, and spent decades providing sound for popular touring bands. Ace has a great ear, and is well known for his talent in the music industry. Ace was also involved in the fine art of Italian Rum Cake, cannolis and other fine pastries!
        </p>
      </div>
    </section>
  )
}

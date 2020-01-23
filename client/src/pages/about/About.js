import React from 'react'
import './About.css'

export default function About() {
  return (
    <section className='about-section'>
      <h1>About</h1>
      <div className='about'>
        <img src={require('../../images/gdup.jpg')} alt="hi" className='about-pic'/>
        <p>We're a 5 piece band, female and male vocalists. Covering a variety of tunes from the 60's and up. Top 20 semi-finalist for WMGK 102.9 house band competition 2018</p>
        <h2>What We Play</h2>
        <p>We play everything from Pretenders, Janice, Jefferson Airplane and Fleetwood Mac to The Beatles, Crosby Stills and Nash, The Stones, Bob Seger and Badfinger to name a few.  We even have some Sonny & Cher and some Monkees! You name the decade and genre, and we most likely have it.</p>
        <h2>The Band</h2>
        <div className='avatar_bio_container'>
          <img className='avatar' src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/28575984_10214481840133797_6430062679029051248_n.jpg?_nc_cat=105&_nc_ohc=MT31BNUvBSYAX-mDq1h&_nc_ht=scontent-lga3-1.xx&oh=e353c132fe8f74e4ede75a90e0992f04&oe=5E91B731' alt=""/>
          <p><span className='bio-title'>Jimmy Mannix - guitar & vocals</span>
            <br /><br />
            Jimmy Mannix is a founding member of Big Bang, a local band that survived over 20 years. He was also in Cheap Sunglasses, Outloud, and various other bands. Jimmy's incredible guitar playing and stunning vocals make him one of the best and most respected performers around the area.
          </p>
        </div>
        <div className='avatar_bio_container'>
          <img className='avatar' src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/p720x720/71045410_10215523077963682_1865111040304349184_o.jpg?_nc_cat=108&_nc_ohc=z-P2EdIrQR0AX81hHz-&_nc_ht=scontent-lga3-1.xx&_nc_tp=1002&oh=cae03ba68e1b2f6f0db36c6fd78ae2ff&oe=5E997681' alt="Kathy Mattson"/>
          <p><span className='bio-title'>Kathy Mattson - vocals & keyboard</span>
            <br /><br />
            Kathy Mattson has been involved in various bands throughout her life, and is currently in a duo with Jimmy that performs all over South Jersey and Philly.  She was classically trained in high school on piano and studied opera as well.
          </p>
        </div>
        <div className='avatar_bio_container'>
          <img className='avatar' src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/75210261_489371274981725_1951903279860416512_n.jpg?_nc_cat=103&_nc_ohc=1CiDBtYoR_gAX-bpIVk&_nc_ht=scontent-lga3-1.xx&oh=240cddb110954a8c42f64aab4a8ed4c1&oe=5EA027D3' alt=""/>
          <p><span className='bio-title'>Jay MacLean - drums, vocals</span>
            <br /><br />
            Jay MacLean started playing professionally at a young age when his brother picked him out of a garage band to play in the acclaimed MacLean Affair. From there he put together the highly talented progressive rock band Prodigy. Then he played for several years in the very successful band Energized. He was a founding member of The Blitz and enjoyed several years with them. After that came a 20-year run playing R&B with the Soul Survivors of “Expressway to Your Heart” fame. Now he’s back where he belongs with his first love playing rock n roll with the powerhouse Skippy’s Toy.
          </p>
        </div>
        <div className='avatar_bio_container'>
          <img className='avatar' src='https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/s960x960/25299953_1511958398922571_7181912016116212525_o.jpg?_nc_cat=108&_nc_ohc=p0OQAGbvITYAX_Doma8&_nc_ht=scontent-lga3-1.xx&_nc_tp=1002&oh=fd409facacb5512c484ecf325d012ea9&oe=5E97E660' alt=""/>
          <p><span className='bio-title'>Zuff - vocals, guitar, harmonica Rj Bozzuffi</span>
            <br /><br />
            (Zuff) has been with  SKIPPY'S TOY since 2016 and has been the drummer for various South  Jersey rock bands including $MONEY$, BIG EYES, CAGNEY, and CRY WOLF.   The "Drum Doctor" was one of the first ROCK drum teachers in the  tri-state area, and taught for 20 years.  Zuff has extensive recording  experience including national commercials.  He has been playing guitar  as long as drums and plays with the Rod & Zuff Duo.  His solo music  and originals can be heard on his YouTube page.
          </p>
        </div>
        <div className='avatar_bio_container'>
          <img className='avatar' src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-0/p206x206/45271554_2321919184493884_8272436307238584320_n.jpg?_nc_cat=106&_nc_ohc=fecjFGt0e_kAX_EkoBx&_nc_ht=scontent-lga3-1.xx&_nc_tp=1002&oh=6efc96a5efdc16cd990f6a18d5f0eba7&oe=5E9D0484' alt=""/>
          <p><span className='bio-title'>Kevin “Ace” Porter - bass, sound, vocals</span>
            <br /><br />
            Kevin "Ace" Porter founded Skippy's Toy.  Ace started off in a band called Sinner where he played bass for 5 years.  After Sinner, Ace got involved in sound engineering, and spent decades providing sound for popular touring bands. Ace has a great ear, and is well known for his talent in the music industry. Ace was also involved in the fine art of Italian Rum Cake, cannolis and other fine pastries!
          </p>
        </div>
      </div>
    </section>
  )
}

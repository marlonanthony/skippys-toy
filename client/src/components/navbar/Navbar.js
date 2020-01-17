import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'

import { MEQUERY } from '../../graphql/queries/me'
import Logout from '../auth/Logout'
import './Navbar.css'

const Navbar = props => {
  const { data, loading } = useQuery(MEQUERY)

  if(loading) return <p>Loading....</p>

  return (
    <section className='navigation'
      style = { props.location.pathname === '/' ? { 
        backgroundColor: 'rgba(0,0,0,0.1)',
          zIndex: 2 
      } : null }
    >
      <header>
        <NavLink exact to='/'>
          <img src={require('../../images/skippys_logo.jpg')} alt="logo" height='40' width='40' />
        </NavLink></header>
      { !data || !data.me ? (
        <ul>
          <li><NavLink exact to='/about'>About</NavLink></li>
          <li><NavLink exact to='/events'>Events</NavLink></li>
          <li><NavLink exact to='/music'>Music</NavLink></li>
          <li><NavLink exact to='/contact'>Contact</NavLink></li>
          <li><NavLink exact to='/login'>Login</NavLink></li>
          <li><NavLink exact to='/register'>SignUp</NavLink></li>
        </ul> ) 
      : (
        <ul>
          <li><NavLink exact to='/about'>About</NavLink></li>
          <li><NavLink exact to='/events'>Events</NavLink></li>
          <li><NavLink exact to='/music'>Music</NavLink></li>
          <li><NavLink exact to='/contact'>Contact</NavLink></li>
          <li><Logout /></li>
        </ul>
      )}
    </section>
  )
}

export default withRouter(Navbar)
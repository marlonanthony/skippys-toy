import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'

import { MEQUERY } from '../../graphql/queries/me'
import Logout from '../auth/Logout'
import './Navbar.css'

const Navbar = props => {
  const { data, loading } = useQuery(MEQUERY),
        [toggleNav, setToggleNav] = useState(false)
        
  if(loading) return <p>Loading....</p>

  return (
    <nav className={props.location.pathname !== '/' 
      ? 'navigation'
      : 'homepage_nav'
    }
    >
      <NavLink exact to='/'><h4 id='logo'>Skippy's Toy</h4></NavLink>
      { !data || !data.me ? (
        <ul id={toggleNav ? 'nav-active' : ''}>
          <li style={toggleNav ? { 
            animation: `navLinkFade 0.5s ease forwards .2s`}: {}}
            onClick={() => setToggleNav(false)}
          >
            <NavLink exact to='/about'>About</NavLink>
          </li>
          <li style={toggleNav ? {
            animation: `navLinkFade 0.5s ease forwards .2s`}: {}}
            onClick={() => setToggleNav(false)}
          >
            <NavLink exact to='/events'>Events</NavLink>
          </li>
          <li style={toggleNav ? {
            animation: `navLinkFade 0.5s ease forwards .4s`}: {}}
            onClick={() => setToggleNav(false)}
          >
            <NavLink exact to='/music'>Music</NavLink>
          </li>
          <li style={toggleNav ? {
            animation: `navLinkFade 0.5s ease forwards .6s`}: {}}
            onClick={() => setToggleNav(false)}
          >
            <NavLink exact to='/contact'>Contact</NavLink>
          </li>
          <li style={toggleNav ? {
            animation: `navLinkFade 0.5s ease forwards .8s`}: {}}
            onClick={() => setToggleNav(false)}
          >
            <NavLink exact to='/login'>Login</NavLink>
          </li>
          <li style={ toggleNav ? {
              animation: `navLinkFade 0.5s ease forwards 1s`}: {}}
              onClick={() => setToggleNav(false)}
          >
            <NavLink exact to='/register'>SignUp</NavLink>
          </li>
        </ul> ) 
      : (
        <ul id={toggleNav ? 'nav-active' : ''}>
          <li style={toggleNav ? { 
            animation: `navLinkFade 0.5s ease forwards .2s`}: {}}
            onClick={() => setToggleNav(false)}
          >
            <NavLink exact to='/about'>About</NavLink>
          </li>
          <li style={toggleNav ? {
            animation: `navLinkFade 0.5s ease forwards .2s`}: {}}
            onClick={() => setToggleNav(false)}
          >
            <NavLink exact to='/events'>Events</NavLink>
          </li>
          <li style={toggleNav ? {
            animation: `navLinkFade 0.5s ease forwards .4s`}: {}}
            onClick={() => setToggleNav(false)}
          >
            <NavLink exact to='/music'>Music</NavLink>
          </li>
          <li style={toggleNav ? {
            animation: `navLinkFade 0.5s ease forwards .6s`}: {}}
            onClick={() => setToggleNav(false)}
          >
            <NavLink exact to='/contact'>Contact</NavLink>
          </li>
          <li style={toggleNav ? {
            animation: `navLinkFade 0.5s ease forwards .8s`}: {}}
            onClick={() => setToggleNav(false)}
          >
            <NavLink exact to='/navlinkstylesbruh'><Logout /></NavLink>
          </li>
        </ul>
      )}
      <div className='burger' onClick={() => {
        setToggleNav(() => !toggleNav)
        console.log(toggleNav)  
      }}
      >
        <div id='line1'></div>
        <div id='line2'></div>
        <div id='line3'></div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
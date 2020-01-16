import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'

import { MEQUERY } from '../../graphql/queries/me'
import Logout from '../auth/Logout'
import './Navbar.css'

const Navbar = () => {
  const { data, loading, error } = useQuery(MEQUERY)

  if(loading) return <p>Loading....</p>
  if(error) return <Redirect to='/' />
  if(!data) return <p>This is unfortunate</p>

  return (
    <div className='navigation'>
      <header><NavLink exact to='/'>Skippy's Toy</NavLink></header>
      { !data.me ? (
        <ul>
          <li><NavLink exact to='/login'>Login</NavLink></li>
          <li><NavLink exact to='/register'>SignUp</NavLink></li>
          <li><NavLink exact to='/about'>About</NavLink></li>
          <li><NavLink exact to='/events'>Events</NavLink></li>
          <li><NavLink exact to='/music'>Music</NavLink></li>
          <li><NavLink exact to='/contact'>Contact</NavLink></li>
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
    </div>
  )
}

export default Navbar
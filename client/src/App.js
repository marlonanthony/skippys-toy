import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import About from './pages/about/About'
import Events from './pages/events/Events'
import Music from './pages/music/Music'
import Contact from './pages/contact/Contact'

const App = () => (
  <main>
    <div className='navbar'><Navbar /></div>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/login' component={ Login } />
      <Route path='/register' component={ Register } />
      <Route path='/about' component={ About } />
      <Route path='/events' component={ Events } />
      <Route path='/music' component={ Music } />
      <Route path='/contact' component={ Contact } />
    </Switch>
  </main>
)

export default App

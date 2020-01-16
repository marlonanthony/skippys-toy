import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => (
  <Switch>
    <Route path='/login' component={ Login } />
    <Route path='/' render={() => (
      <main>
        <div className='navbar'><Navbar /></div>
        <Route exact path='/' component={ Home } />
        <Route path='/register' component={ Register } />
      </main>
    )} />
  </Switch>
)

export default App

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import Register from './pages/Register'

const App = () => (
  <main>
    <div className='navbar'><Navbar /></div>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/register' component={ Register} />
    </Switch>
  </main>
)

export default App

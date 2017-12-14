import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './Pages/main'
import SignUp from './Pages/SignUp'
import Feed from './Pages/feed'
import Profile from './Pages/profile'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route exact path='/Signup' component={SignUp} />
    <Route exact path='/Feed' component={Feed} />
    <Route exact path='/Profile' component={Profile} />
  </Switch>
)

export default Routes
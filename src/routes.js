import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './Pages/main'
import SignUp from './Pages/SignUp'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route exact path='/Signup' component={SignUp} />
  </Switch>
)

export default Routes
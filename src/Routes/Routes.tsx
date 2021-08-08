import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Index from 'Pages/Index/Index'

const Routes = () => (
  <Switch>
    <Route path="/" component={Index} />
  </Switch>
)

export default Routes

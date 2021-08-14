import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Index from 'Pages/Index/Index'
import Institucional from 'Pages/Institucional/Institucional'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Institucional} />
    <Route path="/fecomercio" component={Index} />
    <Route path="/institucional" component={Institucional} />
  </Switch>
)

export default Routes

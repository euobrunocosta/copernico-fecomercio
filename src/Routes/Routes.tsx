import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Fecomercio from 'Pages/Fecomercio/Fecomercio'
import Index from 'Pages/Index/Index'
import Adesao from 'Pages/Adesao/Adesao'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/fecomercio" component={Fecomercio} />
    <Route path="/institucional" component={Index} />
    <Route path="/adesao" component={Adesao} />
  </Switch>
)

export default Routes

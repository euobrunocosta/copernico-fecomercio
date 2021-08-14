import React from 'react'

import Header from './Components/Header'
import Location from 'Components/Pages/Location'
import Simulador from 'Components/Pages/Simulador'
import Contato from 'Components/Pages/Contato'
import Chamada from './Components/Chamada'
import Footer from 'Components/Footer/Footer'
import Escolha from './Components/Escolha'
import Migrar from './Components/Migrar'

const Index = () => (
  <>
    <Header />
    <Escolha />
    <Migrar />
    <Location />
    <Simulador />
    <Contato />
    <Chamada />
    <Footer />
  </>
)

export default Index

import React from 'react'
import GlobalStyles from './style'
import Providers from 'Providers/Providers'
import Routes from 'Routes/Routes'

function App() {
  return (
    <Providers>
      <Routes />
      <GlobalStyles />
    </Providers>
  )
}

export default App

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastProvider } from 'react-toast-notifications'
import { theme } from '../theme'

type TProps = {
  children: React.ReactNode
}

const Providers = ({ children }: TProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  </BrowserRouter>
)

export default Providers

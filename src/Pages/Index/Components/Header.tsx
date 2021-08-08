import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

import Navbar from 'Components/Navbar/Navbar'
import solarEnergyBoards from 'Assets/images/solarEnergyBoards.jpg'

const HeaderContainer = styled.header`
  background: url(${solarEnergyBoards}) no-repeat;
  background-size: cover;
  padding-top: 60px;
  margin-bottom: -10px;
`

const HeaderTitle = styled.h2`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.WHITE};
  padding: 130px 0;
`

const Header = () => (
  <HeaderContainer>
    <Container>
      <Navbar />
      <HeaderTitle>Parceria Fecomércio MG</HeaderTitle>
    </Container>
  </HeaderContainer>
)

export default Header

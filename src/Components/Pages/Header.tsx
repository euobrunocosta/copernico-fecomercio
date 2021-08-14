import React from 'react'
import styled from 'styled-components'

import Container from 'Components/Container/Container'
import Navbar from 'Components/Navbar/Navbar'
import solarEnergyBoards from 'Assets/images/solarEnergyBoards.jpg'

const HeaderContainer = styled.header`
  background: url(${solarEnergyBoards}) no-repeat;
  background-size: cover;
  padding-top: 60px;
`

const HeaderTitle = styled.h2`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.WHITE};
  padding: 130px 0;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    padding: 70px 0;
  }
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

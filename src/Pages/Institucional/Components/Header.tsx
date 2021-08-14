import React from 'react'
import styled from 'styled-components'

import Container from 'Components/Container/Container'
import Navbar from './Navbar'
import sunRiseImage from 'Assets/images/sunRise.jpg'

const HeaderContainer = styled.header`
  background: url(${sunRiseImage}) no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 60px;
`

const HeaderTitle = styled.h2`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.WHITE};
  padding: 130px 0;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    padding: 70px 0;
  }
`

const Header = () => (
  <HeaderContainer>
    <Container>
      <Navbar />
      <HeaderTitle>
        Leve energia sustentável para sua família e seus negócios
      </HeaderTitle>
    </Container>
  </HeaderContainer>
)

export default Header

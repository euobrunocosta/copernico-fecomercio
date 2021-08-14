import React from 'react'
import Container from 'Components/Container/Container'
import styled from 'styled-components'

import solarEnergySunRisingImage from 'Assets/images/solarEnergySunRising.jpg'

const InnerWrapper = styled.div`
  padding: 200px 135px;
  padding-right: 600px;
  background: url(${solarEnergySunRisingImage}) no-repeat;
  background-size: 500px auto;
  background-position: right center;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    background: unset;
    padding: 0;
    text-align: center;
  }
`

const Text = styled.p`
  font-size: 26px;
  margin-bottom: 40px;
`

const ChamadaText = styled.h2`
  color: ${({ theme }) => theme.colors.RED};
  font-size: 50px;
`

const Chamada = () => (
  <Container>
    <InnerWrapper>
      <Text>
        A energia solar é o que nos move e nos impulsiona a levar soluções
        fotovoltaica, limpa e renovável para a sua família e seus negócios.
      </Text>
      <ChamadaText>Venha para a Copérnico!</ChamadaText>
    </InnerWrapper>
  </Container>
)

export default Chamada

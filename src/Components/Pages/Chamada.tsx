import React from 'react'
import Container from 'Components/Container/Container'
import styled from 'styled-components'

import friendsImage from 'Assets/images/friends.png'

const InnerWrapper = styled.div`
  padding: 200px 135px;
  padding-left: 600px;
  background: url(${friendsImage}) no-repeat;
  background-position: left center;

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
        Não existe melhor sinergia do que energia elétrica que preserva o meio
        ambiente e deixa mais dinheiro no bolso do consumidor!
      </Text>
      <Text>O mundo precisa de energia boa. Use a do sol!</Text>
      <ChamadaText>Venha para a Copérnico!</ChamadaText>
    </InnerWrapper>
  </Container>
)

export default Chamada

import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

import friendsImage from 'Assets/images/friends.png'

const ChamadaContainer = styled(Container)`
  padding: 200px 135px;
  padding-left: 600px;
  background: url(${friendsImage}) no-repeat;
  background-position: left center;
`

const Text = styled.p`
  font-size: 26px;
  margin-bottom: 40px;
`

const ChamadaText = styled.h2`
  color: ${({ theme }) => theme.colors.RED};
  font-size: 50px;
`

const Chamada = () => {
  return (
    <ChamadaContainer>
      <Text>
        Não existe melhor sinergia do que energia elétrica que preserva o meio
        ambiente e deixa mais dinheiro no bolso do consumidor!
      </Text>
      <Text>O mundo precisa de energia boa. Use a do sol!</Text>
      <ChamadaText>Venha para a Copérnico!</ChamadaText>
    </ChamadaContainer>
  )
}

export default Chamada

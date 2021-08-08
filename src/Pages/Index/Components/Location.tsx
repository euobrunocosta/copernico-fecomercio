import React from 'react'
import { Container as ContainerBS } from 'react-bootstrap'
import styled from 'styled-components'

import mapaImage from 'Assets/images/map.png'

const LocationContainer = styled.section`
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.LIGHT_GRAY} 27%,
    ${({ theme }) => theme.colors.WHITE} 27%
  );
  padding: 80px 0;
`

const Container = styled(ContainerBS)`
  padding-right: 700px;
  background: url(${mapaImage}) no-repeat;
  background-position: right center;
  min-height: 659px;
  display: flex;
  align-items: center;
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.RED};
  margin-bottom: 30px;
`

const Text = styled.p`
  font-size: 16px;
`

const Location = () => {
  return (
    <LocationContainer>
      <Container>
        <div>
          <Title>
            Estamos sempre onde o sol aponta e acreditamos no poder da energia
            solar para a manutenção e desenvolvimento de vida.{' '}
          </Title>
          <Text>
            A Copérnico é a maior empresa de fornecimento de energia
            fotovoltaica do país, presente em 18 estados e conectada a 27
            distribuidoras. E não paramos de crescer.
          </Text>
          <Text>
            Além disso, somos a única empresa no mercado que oferece todos os
            tipos de soluções para a geração de energia fotovoltaica. Com a
            gente, você pode adquirir seu gerador fotovoltaico, financiá-lo, ou
            optar por adesão à geração compartilhada de energia, sem nenhum
            investimento.
          </Text>
        </div>
      </Container>
    </LocationContainer>
  )
}

export default Location

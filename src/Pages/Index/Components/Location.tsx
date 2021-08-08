import React from 'react'
// import { Container as ContainerBS } from 'react-bootstrap'
import Container from 'Components/Container/Container'
import styled from 'styled-components'

import mapImage from 'Assets/images/map.png'

const LocationContainer = styled.section`
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.LIGHT_GRAY} 50%,
    ${({ theme }) => theme.colors.WHITE} 50%
  );

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    background: unset;
  }
`

const InnerWrapper = styled.div`
  background-image: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.LIGHT_GRAY} 25%,
    ${({ theme }) => theme.colors.WHITE} 25%
  );
  background-repeat: no-repeat;
  background-position: right center;
  padding: 50px 30px;
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    flex: 1;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    background: unset;
    flex-direction: column-reverse;
    padding: 30px;
  }
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.RED};
  margin-bottom: 30px;
`

const Text = styled.p`
  font-size: 16px;
`

const Image = styled.img`
  width: 100%;
`

const Location = () => {
  return (
    <LocationContainer>
      <Container padding={0}>
        <InnerWrapper>
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
              gente, você pode adquirir seu gerador fotovoltaico, financiá-lo,
              ou optar por adesão à geração compartilhada de energia, sem nenhum
              investimento.
            </Text>
          </div>
          <div>
            <Image src={mapImage} />
          </div>
        </InnerWrapper>
      </Container>
    </LocationContainer>
  )
}

export default Location

import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import sunIcon from 'Assets/images/icons/sun.png'

const BeneficiosContainer = styled.section`
  padding: 140px 0 93px 0;
  background-color: ${({ theme }) => theme.colors.LIGHTER_GRAY};
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.RED};
  font-size: 50px;
`

const SubTitle = styled.h3`
  font-size: 30px;
  margin: 120px 0 40px 0;
  font-weight: 300;

  strong {
    color: ${({ theme }) => theme.colors.YELLOW};
    font-weight: bold;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;

  li {
    display: flex;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.MEDIUM_GRAY};

    strong {
      color: ${({ theme }) => theme.colors.DARK_GRAY};
      font-size: 22px;
      font-weight: 700;
    }

    &:first-child p {
      margin-left: -7px;
    }

    &::before {
      display: block;
      content: '';
      width: 30px;
      height: 30px;
      background: url(${sunIcon}) no-repeat;
      background-size: 20px 20px;
      background-position: center left;
      margin-right: 19px;
    }
  }
`

const Ephasis = styled.span`
  color: ${({ theme }) => theme.colors.YELLOW};
  font-size: 22px;
  font-weight: 700;
`

const Beneficios = () => (
  <BeneficiosContainer>
    <Container>
      <Title>
        Fecomércio MG e Copérnico unem-se em uma parceria incrível para ajudar o
        planeta e reduzir sua tarifa de energia
      </Title>
      <SubTitle>
        Confira os <strong>benefícios imperdíveis</strong> que esta parceria vai
        te trazer
      </SubTitle>
      <List>
        <li>
          <p>
            <Ephasis>15% de desconto</Ephasis> sobre a tarifa de energia - sem
            fidelidade
          </p>
        </li>
        <li>
          <p>
            <Ephasis>15% de desconto</Ephasis> sobre a tarifa de energia e{' '}
            <strong>cliente não paga</strong> 100% da energia gerada por ele na
            usina da Copernico <strong>no primeiro mês</strong> - 24 meses de
            fidelidade
          </p>
        </li>
        <li>
          <p>
            <Ephasis>15% de desconto</Ephasis> sobre a tarifa de energia e
            cliente não paga 100% da energia gerada por ele na usina da
            Copernico <strong>nos primeiros 2 meses</strong> - 48 meses de
            fidelidade
          </p>
        </li>
      </List>
    </Container>
  </BeneficiosContainer>
)

export default Beneficios

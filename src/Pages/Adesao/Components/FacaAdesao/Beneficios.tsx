import React from 'react'
import styled from 'styled-components'
import Container from 'Components/Container/Container'

import sunIcon from 'Assets/images/icons/sun.png'

const BeneficiosContainer = styled.section`
  padding: 50px 0 50px 0;
  background-color: ${({ theme }) => theme.colors.LIGHTER_GRAY};

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    padding: 0;
  }
`

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 50px;
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

    &::before {
      display: block;
      content: '';
      width: 30px;
      height: 30px;
      min-width: 30px;
      background: url(${sunIcon}) no-repeat;
      background-size: 20px 20px;
      background-position: center left;
      margin-right: 19px;
    }
  }
`

const Beneficios = () => (
  <BeneficiosContainer>
    <Container>
      <Title>
        Mude para a Copérnico com investimento zero e economize na conta de
        energia
      </Title>
      <List>
        <li>
          <p>
            A Copérnico desenvolve, constrói e opera usinas fotovoltaicas em
            todo território nacional.
          </p>
        </li>
        <li>
          <p>
            O cliente adere à quota da usina solar suficientes para gerar a
            energia de que precisa.
          </p>
        </li>
        <li>
          <p>
            Sem investimento em placas, sem obras, sem burocracia e sem
            fidelidade.
          </p>
        </li>
        <li>
          <p>
            A Copérnico injeta a energia necessária na rede da distribuidora que
            já te atende e a energia injetada é descontada da sua conta.
          </p>
        </li>
        <li>
          <p>
            Você deixa de pagar a energia consumida para a distribuidora e passa
            a pagar um valor menor à Copérnico.
          </p>
        </li>
        <li>
          <p>
            Você não sofre com o aumento de bandeiras tarifárias e consome
            energia sustentável, preservando nosso meio ambiente.
          </p>
        </li>
      </List>
    </Container>
  </BeneficiosContainer>
)

export default Beneficios

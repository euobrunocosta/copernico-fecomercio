import React from 'react'
import styled from 'styled-components'
import solarEnergyBoards from 'Assets/images/solarEnergyBoards.jpg'
import moneyBagIcon from 'Assets/images/icons/moneyBag.png'
import treesIcon from 'Assets/images/icons/trees.png'
import arrowDownIcon from 'Assets/images/icons/arrowDown.png'

const HeaderContainer = styled.header`
  padding: 185px 30px 95px 30px;
  background: url(${solarEnergyBoards}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`

const Box = styled.div`
  width: 100%;
  max-width: 970px;
  padding: 35px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-around;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 22px;
    text-align: center;

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 300;

      &::before {
        display: block;
        content: '';
        width: 95px;
        height: 95px;
        border-radius: 50%;
        background-color: white;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    &:first-child {
      span::before {
        background-image: url(${moneyBagIcon});
      }
    }

    &:last-child {
      span::before {
        background-image: url(${treesIcon});
      }
    }

    strong {
      padding-top: 25px;
      background: url(${arrowDownIcon}) no-repeat;
      background-position: top center;
    }
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Box>
        <Title>Migrar para a Copérnico é:</Title>
        <Content>
          <div>
            <span>Economia na conta de energia</span>
            <strong>Mais dinheiro no seu bolso</strong>
          </div>
          <div>
            <span>Preservação do meio ambiente</span>
            <strong>Sustentabilidade</strong>
          </div>
        </Content>
      </Box>
    </HeaderContainer>
  )
}

export default Header

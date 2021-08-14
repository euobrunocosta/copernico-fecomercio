import React from 'react'
import styled from 'styled-components'
import Container from 'Components/Container/Container'
import usinaSerraSalitre from 'Assets/images/usinaSerraSalitre.jpg'
import dollarSignIcon from 'Assets/images/icons/dollarSign.png'
import treeIcon from 'Assets/images/icons/tree.png'
import arrowRightIcon from 'Assets/images/icons/arrowRight.png'
import chatBallon from 'Assets/images/icons/chatBallon.png'

const Wrapper = styled.section`
  background: url(${usinaSerraSalitre}) no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    background: unset;
  }
`

const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.WHITE};
  text-align: center;
  margin: 80px 0 40px 0;
`

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 40px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BoxTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 43px;
  text-align: center;
`

const Info = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;

  li {
    padding-left: 45px;
    background-repeat: no-repeat;
    font-size: 20px;

    &:first-child {
      background-image: url(${dollarSignIcon});
      margin-bottom: 10px;
    }

    &:last-child {
      background-image: url(${treeIcon});
    }

    span:last-child {
      padding-left: 30px;
      background: url(${arrowRightIcon}) no-repeat;
      background-position: left center;
      margin-left: 5px;
    }
  }
`

const Button = styled.button`
  font-size: 22px;
  background: url(${chatBallon}) no-repeat;
  background-position: center left 15px;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  color: ${({ theme }) => theme.colors.WHITE};
  border: 0;
  padding: 10px 30px 10px 50px;
  border-radius: 6px;
`

const Picture = styled.div`
  background: url(${usinaSerraSalitre}) no-repeat;
  background-position: center;
  background-size: cover;
  height: 200px;
  display: none;
  color: ${({ theme }) => theme.colors.WHITE};
  justify-content: center;
  align-items: center;
  font-size: 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    display: flex;
  }
`

const Migrar = () => {
  const onClickGoToWhatsapp = () => {
    window.location.href =
      'https://wa.me/551126263932?text=Fale com nossos especialistas'
  }
  return (
    <Wrapper>
      <Picture>Usina Copérnico Serra do Salitre</Picture>
      <Container>
        <Box>
          <BoxTitle>Migrar para a Copérnico é escolher:</BoxTitle>
          <Info>
            <li>
              <span>Economia na conta de energia</span>
              <span>Mais dinheiro no seu bolso</span>
            </li>
            <li>
              <span>Preservação do meio ambiente</span>
              <span>Sustentabilidade</span>
            </li>
          </Info>
          <Button onClick={onClickGoToWhatsapp}>
            Fale com nossos especialistas
          </Button>
        </Box>
        <Subtitle>Usina Copérnico Serra do Salitre</Subtitle>
      </Container>
    </Wrapper>
  )
}

export default Migrar

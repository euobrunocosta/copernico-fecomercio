import Container from 'Components/Container/Container'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

import arrowIcon from 'Assets/images/icons/blackArrow.png'

const InnerWrapper = styled.div`
  padding: 137px 0;
`

const Title = styled.h2`
  font-size: 50px;
  margin-bottom: 38px;
`

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.YELLOW};
  padding: 54px;
  border-radius: 6px;
  text-align: center;
  margin-bottom: 30px;
`

const BoxTitle = styled.h3`
  color: ${({ theme }) => theme.colors.RED};
  margin-bottom: 24px;
  min-height: 100px;
`

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 60px;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.WHITE};
  background-image: url(${arrowIcon});
  background-repeat: no-repeat;
  background-position: center right 15px;
  border: none;
  padding: 5px 50px 5px 40px;
  border-radius: 6px;
  font-size: 15px;
`

const Escolha = () => {
  const onClickGoToPage = (url: string) => () => {
    window.location.href = url
  }
  return (
    <Container>
      <InnerWrapper>
        <Title>Escolha a melhor solução</Title>
        <Row>
          <Col lg={4}>
            <Box>
              <BoxTitle>Adesão à geração compartilhada</BoxTitle>
              <Text>
                Reduza sua conta de energia sem investimento algum com Energia
                Solar
              </Text>
              <Button
                onClick={onClickGoToPage('https://copernico.com.br/alugar')}
              >
                Saiba mais
              </Button>
            </Box>
          </Col>
          <Col lg={4}>
            <Box>
              <BoxTitle>Compra de gerador Fotovoltaico</BoxTitle>
              <Text>
                Substitua sua conta de energia por investimento em seu próprio
                sistema de geração solar
              </Text>
              <Button
                onClick={onClickGoToPage('https://vendas.copernico.com.br')}
              >
                Saiba mais
              </Button>
            </Box>
          </Col>
          <Col lg={4}>
            <Box>
              <BoxTitle>Financiamento de gerador Fotovoltaico</BoxTitle>
              <Text>
                Viabilize seu investimento financiando seu próprio sistema de
                geração solar
              </Text>
              <Button
                onClick={onClickGoToPage('https://copernico.com.br/financiar')}
              >
                Saiba mais
              </Button>
            </Box>
          </Col>
        </Row>
      </InnerWrapper>
    </Container>
  )
}

export default Escolha

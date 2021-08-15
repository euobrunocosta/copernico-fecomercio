import React from 'react'
import styled from 'styled-components'
import guysHoldingSunImage from 'Assets/images/guysHoldingSun.png'

const Wrapper = styled.div`
  background: white url(${guysHoldingSunImage}) no-repeat;
  background-position: center right 35px;
  padding: 35px 80px;
  padding-right: 570px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    background: white;
    padding: 35px;
  }
`

const Title = styled.h3`
  font-size: 40px;
  margin-bottom: 50px;
`

const Text = styled.p`
  font-size: 25px;
`

const FootNote = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  margin-top: 100px;
`

const Parabens = () => {
  return (
    <Wrapper>
      <Title>Parabéns!</Title>
      <Text>
        Agora falta apenas 1 etapa para você fazer parte da mudança e
        economizar!
      </Text>
      <Text>
        Basta acessar seu e-mail e assinar o contrato eletronicamente.
      </Text>
      <FootNote>
        Caso não tenha recebido nosso e-mail, verifique sua caixa de spam.
      </FootNote>
    </Wrapper>
  )
}

export default Parabens

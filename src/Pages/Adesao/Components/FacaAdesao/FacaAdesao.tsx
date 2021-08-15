import React, { useState } from 'react'
import styled from 'styled-components'
import FormContrato from './FormContrato'
import FormSimulador from './FormSimulador'
import Parabens from './Parabens'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  padding-bottom: 110px;
`

const FacaAdesaoContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  background: white;
  padding: 35px 130px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    background: white;
    padding: 35px;
  }
`

const Title = styled.h2`
  padding: 40px;
  font-size: 40px;
  text-align: center;
`

const FaseIndicator = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  border-bottom: 3px solid #c4c4c4;
  margin-bottom: 57px;
  padding: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_MD}) {
    margin-bottom: 32px;
  }
`

type TFaseItemProps = {
  active: boolean
}

const FaseItem = styled.li<TFaseItemProps>`
  width: 105px;
  height: 105px;
  font-size: 68px;
  background-color: ${p => (p.active ? '#c4c4c4' : 'white')};
  color: ${p => (p.active ? 'white' : '#c4c4c4')};
  border-radius: 50%;
  border: 3px solid #c4c4c4;
  margin-bottom: -57px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_MD}) {
    width: 60px;
    height: 60px;
    font-size: 30px;
    margin-bottom: -32px;
  }
`

const Spacer = styled.div`
  height: 30px;
`

type TProps = {
  handlePrevChangeFase(fase: number): void
}

const FacaAdesao = (props: TProps) => {
  const { handlePrevChangeFase } = props
  const [fase, setFase] = useState(1)

  const handleFaseChange = (_fase: number) => setFase(_fase)
  return (
    <Wrapper>
      <FacaAdesaoContainer>
        <Title>Faça sua adesão e comece a economizar!</Title>
        <FaseIndicator>
          <FaseItem active={fase === 1}>1</FaseItem>
          <FaseItem active={fase === 2}>2</FaseItem>
          <FaseItem active={fase === 3}>3</FaseItem>
        </FaseIndicator>
        <Spacer />
        {fase === 1 && (
          <FormContrato
            handlePrevChangeFase={handlePrevChangeFase}
            handleFaseChange={handleFaseChange}
          />
        )}
        {fase === 2 && <FormSimulador handleFaseChange={handleFaseChange} />}
        {fase === 3 && <Parabens />}
      </FacaAdesaoContainer>
    </Wrapper>
  )
}

export default FacaAdesao

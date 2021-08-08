import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

type TContentProps = {
  padding: number
}

const Content = styled.div<TContentProps>`
  width: 100%;
  max-width: 1200px;
  padding: ${p => `${p.padding}px`};
`

type TProps = {
  children: React.ReactNode
  padding?: number
}

const Container = (props: TProps) => {
  const { children, padding = 30 } = props

  return (
    <Wrapper>
      <Content padding={padding}>{children}</Content>
    </Wrapper>
  )
}

export default Container

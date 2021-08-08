import React from 'react'
import {
  Container as ContainerBS,
  Form as FormBS,
  InputGroup,
} from 'react-bootstrap'
import styled from 'styled-components'

import arrowIcon from 'Assets/images/icons/arrow.png'

const ContatoContainer = styled.section`
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.WHITE} 62%,
    ${({ theme }) => theme.colors.YELLOW} 62%
  );
`

const Container = styled(ContainerBS)`
  display: flex;
`

const Info = styled.div`
  padding-right: 80px;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h2`
  padding-right: 100px;
  color: ${({ theme }) => theme.colors.RED};
  margin-bottom: 50px;
`

type TTextProps = {
  spaced?: boolean
}

const Text = styled.p<TTextProps>`
  color: ${({ theme }) => theme.colors.WHITE};
  margin-bottom: ${p => (p.spaced ? '50px' : 'unset')};
`

const Form = styled.form`
  flex: 3;
  padding: 100px 130px;
`

const FormInfo = styled.p`
  font-size: 20px;
`

const InputsContainer = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Input = styled(FormBS.Control)`
  &::placeholder {
    color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  }
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.YELLOW};
  background-image: url(${arrowIcon});
  background-repeat: no-repeat;
  background-position: center right 15px;
  color: ${({ theme }) => theme.colors.WHITE};
  border: none;
  padding: 5px 50px 5px 40px;
  margin-top: 30px;
  border-radius: 6px;
  font-size: 15px;
`

const Contato = () => {
  return (
    <ContatoContainer>
      <Container>
        <Info>
          <Title>Nossas escolhas moldam o destino do planeta.</Title>
          <Text spaced>
            O futuro é energia limpa e sustentável para todos os brasileiros,
            com respeito e preservação da natureza.
          </Text>
          <Text>
            O futuro é Copérnico. O mundo precisa de energia boa. Use a do sol.
          </Text>
        </Info>
        <Form>
          <FormInfo>
            Para darmos sequência à adesão, preencha os dados abaixo que
            entraremos em contato
          </FormInfo>

          <InputsContainer>
            <FormBS.Group>
              <FormBS.Label>Nome / Razão Social</FormBS.Label>

              <InputGroup>
                <Input
                  name="nome"
                  type="text"
                  placeholder="Digite o nome aqui"
                />

                <FormBS.Control.Feedback type="invalid">
                  kdjfksjd
                </FormBS.Control.Feedback>
              </InputGroup>
            </FormBS.Group>

            <FormBS.Group>
              <FormBS.Label>E-mail</FormBS.Label>

              <InputGroup>
                <Input
                  name="email"
                  type="email"
                  placeholder="Seu endereço de e-mail"
                />

                <FormBS.Control.Feedback type="invalid">
                  kdjfksjd
                </FormBS.Control.Feedback>
              </InputGroup>
            </FormBS.Group>

            <FormBS.Group>
              <FormBS.Label>Telefone com DDD</FormBS.Label>

              <InputGroup>
                <Input
                  name="telefone"
                  type="text"
                  placeholder="(00) 00000-0000"
                />

                <FormBS.Control.Feedback type="invalid">
                  kdjfksjd
                </FormBS.Control.Feedback>
              </InputGroup>
            </FormBS.Group>

            <FormBS.Group>
              <FormBS.Label>CEP</FormBS.Label>

              <InputGroup>
                <Input name="cep" type="text" placeholder="00000-000" />

                <FormBS.Control.Feedback type="invalid">
                  kdjfksjd
                </FormBS.Control.Feedback>
              </InputGroup>
            </FormBS.Group>
          </InputsContainer>
          <Button type="submit">Enviar</Button>
        </Form>
      </Container>
    </ContatoContainer>
  )
}

export default Contato

import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import emailjs from 'emailjs-com'
import { useToasts } from 'react-toast-notifications'
import { Form as FormBS, InputGroup, Spinner } from 'react-bootstrap'
import Container from 'Components/Container/Container'
import InputMask from 'react-input-mask'
import styled from 'styled-components'

import arrowIcon from 'Assets/images/icons/arrow.png'

const ContatoContainer = styled.section`
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.WHITE} 62%,
    ${({ theme }) => theme.colors.YELLOW} 62%
  );

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    background: unset;
  }
`

const InnerWrapper = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    flex-direction: column;
  }
`

const Info = styled.div`
  padding-right: 80px;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.YELLOW};

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    padding: 30px;
  }
`

const Title = styled.h2`
  padding-right: 100px;
  color: ${({ theme }) => theme.colors.RED};
  margin-bottom: 50px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    padding: 0;
  }
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

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    padding: 30px;
  }
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

const MaskedInput = styled(InputMask)`
  &::placeholder {
    color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  }
`

const validationSchema = yup.object().shape({
  nome: yup.string().required('Por favor informe seu nome'),
  email: yup
    .string()
    .required('Por favor informe seu e-mail')
    .email('Insira um e-mail válido'),
})

const sendEmailErrorMessage =
  'Algo de errado aconteceu ao termarmos enviar seus dados. Favor tentar novamente mais tarde'
const sendEmailSuccessMessage =
  'Seus dados foram enviados com sucesso! Aguarde nosso contato em breve'

type TForm = {
  nome: string
  email: string
  telefone: string
  cep: string
}

const initialValues: TForm = {
  nome: '',
  email: '',
  telefone: '',
  cep: '',
}

const Contato = () => {
  const [isSending, setIsSending] = useState(false)

  const { addToast } = useToasts()

  const onSubmit = async () => {
    const serviceId = process.env.REACT_APP_MAILJS_SERVICE_ID || ''
    const templateId = process.env.REACT_APP_MAILJS_TEMPLATE_FECOMERCIO_ID || ''
    const userId = process.env.REACT_APP_MAILJS_USER_ID || ''

    console.log('chegou aqui')

    setIsSending(true)
    const response = await emailjs.send(
      serviceId,
      templateId,
      formik.values,
      userId
    )
    setIsSending(false)

    if (!response) {
      addToast(sendEmailErrorMessage, {
        appearance: 'error',
        autoDismiss: true,
      })
      return
    }

    addToast(sendEmailSuccessMessage, {
      appearance: 'success',
      autoDismiss: true,
    })
    formik.resetForm()
  }

  const formik = useFormik<TForm>({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    validateOnChange: true,
    onSubmit,
  })

  return (
    <ContatoContainer>
      <Container padding={0}>
        <InnerWrapper>
          <Info>
            <Title>Nossas escolhas moldam o destino do planeta.</Title>
            <Text spaced>
              O futuro é energia limpa e sustentável para todos os brasileiros,
              com respeito e preservação da natureza.
            </Text>
            <Text>
              O futuro é Copérnico. O mundo precisa de energia boa. Use a do
              sol.
            </Text>
          </Info>
          <Form onSubmit={formik.handleSubmit} id="form">
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
                    isInvalid={Boolean(
                      formik.touched.nome && formik.errors.nome
                    )}
                    value={formik.values.nome}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />

                  <FormBS.Control.Feedback type="invalid">
                    {formik.errors.nome}
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
                    isInvalid={Boolean(
                      formik.touched.email && formik.errors.email
                    )}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />

                  <FormBS.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </FormBS.Control.Feedback>
                </InputGroup>
              </FormBS.Group>

              <FormBS.Group>
                <FormBS.Label>Telefone com DDD</FormBS.Label>

                <InputGroup>
                  <MaskedInput
                    className="form-control"
                    name="telefone"
                    mask="(99) 99999-9999"
                    type="text"
                    placeholder="(00) 00000-0000"
                    value={formik.values.telefone}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
              </FormBS.Group>

              <FormBS.Group>
                <FormBS.Label>CEP</FormBS.Label>

                <InputGroup>
                  <MaskedInput
                    className="form-control"
                    name="cep"
                    mask="99999-999"
                    type="text"
                    placeholder="00000-000"
                    value={formik.values.cep}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
              </FormBS.Group>
            </InputsContainer>
            <Button type="submit">
              {isSending ? (
                <Spinner animation="border" size="sm" />
              ) : (
                <span>Enviar</span>
              )}
            </Button>
          </Form>
        </InnerWrapper>
      </Container>
    </ContatoContainer>
  )
}

export default Contato

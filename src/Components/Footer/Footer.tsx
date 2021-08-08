import React from 'react'
import styled from 'styled-components'

import Container from 'Components/Container/Container'
import logoBlackText from 'Assets/images/logoBlackText.png'
import facebookLogo from 'Assets/images/social/facebook.png'
import instagramLogo from 'Assets/images/social/instagram.png'
import linkedinLogo from 'Assets/images/social/linkedin.png'

const Top = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.MEDIUM_GRAY};
  padding-bottom: 25px;
`

const Logo = styled.h1`
  a {
    display: block;
    width: 178px;
    height: 47px;
    text-indent: -99999px;
    overflow: hidden;
    background: url(${logoBlackText}) no-repeat;
    background-size: 178px 47px;
  }
`

const Bottom = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  padding: 25px 0 100px 0;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    padding: 25px 0;
  }
`

const Text = styled.p`
  font-size: 10px;
`

const SocialMedia = styled.div`
  display: flex;
  gap: 20px;
  height: 43px;
  align-items: center;

  span {
    font-size: 15px;
    white-space: nowrap;
  }
`

const SocialMediaLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;

  li a {
    display: block;
    width: 43px;
    height: 43px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 43px 43px;
    text-indent: -99999px;
    overflow: hidden;
  }
`

const FacebookLink = styled.a`
  background-image: url(${facebookLogo});
`

const InstagramLink = styled.a`
  background-image: url(${instagramLogo});
`

const LinkedInLink = styled.a`
  background-image: url(${linkedinLogo});
`

const Footer = () => (
  <Container>
    <Top>
      <Logo>
        <a href="/">Copérnico - Energia que renova</a>
      </Logo>
    </Top>
    <Bottom>
      <div>
        <Text>
          A Copérnico Energia Solar Tecnologia e Serviços Financeiros Ltda.
          ("Copérnico") é pessoa jurídica registrada sob o CNPJ nº
          xx.xxx.xxx/xxx-xx.
        </Text>
        <Text>
          A Copérnico não é uma instituição financeira e não realiza operações
          de crédito diretamente, mas é uma correspondente bancária do Safra –
          Crédito, Financiamento e Investimento S.A. (“Safra”), registrada sob o
          CNPJ nº xx.xxx.xxx/xxx-xx que, nos termos da Resolução nº 3954 da CMN
          de 24 de fevereiro de 2011, firmaram um acordo entre si. Telefone da
          ouvidoria da Copérnico: 0800 000 0000.
        </Text>
        <Text>© Copérnico 2021 - Todos os direitos reservados</Text>
      </div>
      <SocialMedia>
        <span>Nos siga:</span>
        <SocialMediaLinks>
          <li>
            <FacebookLink
              href="https://www.facebook.com/Copernico-103735801775378"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </FacebookLink>
          </li>
          <li>
            <InstagramLink
              href="https://www.instagram.com/copernicoenergia/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </InstagramLink>
          </li>
          <li>
            <LinkedInLink
              href="https://www.linkedin.com/company/cop%C3%A9rnico-energia-renov%C3%A1vel/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </LinkedInLink>
          </li>
        </SocialMediaLinks>
      </SocialMedia>
    </Bottom>
  </Container>
)

export default Footer

import React from 'react'
import styled from 'styled-components'
import logoWithSlogan from 'Assets/images/logoWithSlogan.png'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 67px;
    align-items: center;
  }
`

const Logo = styled.h1`
  a {
    display: block;
    width: 133px;
    height: 35px;
    text-indent: -99999px;
    overflow: hidden;
    background: url(${logoWithSlogan}) no-repeat;
    background-size: 133px 35px;
  }
`

const Menu = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;

  li a {
    color: ${({ theme }) => theme.colors.WHITE};
    text-decoration: none;
  }
`

const Button = styled.button`
  height: 40px;
  border: none;
  padding: 0 30px;
  font-weight: 400;
  border-radius: 6px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    font-size: 12px;
    padding: 0 15px;
  }
`

const Navbar = () => {
  const onClickGoToPage = () => {
    window.location.href = 'https://vendas.copernico.com.br/login'
  }
  return (
    <NavContainer>
      <div>
        <Logo>
          <a href="/">Copérnico - Energia que renova</a>
        </Logo>
        {/* <Menu>
          <li>
            <a href="/">Copérnico</a>
          </li>
          <li>
            <a href="/">Serviços</a>
          </li>
          <li>
            <a href="/">Vantagens</a>
          </li>
          <li>
            <a href="/">Mídia</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Fale conosco</a>
          </li>
        </Menu> */}
      </div>
      <Button onClick={onClickGoToPage}>Sou integrador</Button>
    </NavContainer>
  )
}

export default Navbar

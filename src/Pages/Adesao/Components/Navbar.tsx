import React from 'react'
import styled from 'styled-components'
import logoWithSlogan from 'Assets/images/logoWithSlogan.png'
import menuTogglerIcon from 'Assets/images/icons/menu.png'
import Container from 'Components/Container/Container'

const NavCotainer = styled.nav`
  height: 90px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
`

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  li a {
    color: ${({ theme }) => theme.colors.WHITE};
    text-decoration: none;
  }
`

const Logo = styled.h1`
  a {
    display: block;
    width: 222px;
    height: 58px;
    text-indent: -99999px;
    overflow: hidden;
    background: url(${logoWithSlogan}) no-repeat;
    background-size: 222px 58px;
  }
`

const SideMenuToggler = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: transparent url(${menuTogglerIcon}) no-repeat;
  background-position: center;
`

const Navbar = () => {
  return (
    <NavCotainer>
      <Container padding={0}>
        <InnerWrapper>
          <div>
            <Logo>
              <a href="/">Copérnico - Energia que renova</a>
            </Logo>

            <Menu>
              <li>
                <a href="/">Adesão às usinas Copérnico</a>
              </li>
              <li>
                <a href="/">Compra de gerador fotovoltaico</a>
              </li>
              <li>
                <a href="/">Financiamento</a>
              </li>
            </Menu>
          </div>
          <SideMenuToggler />
        </InnerWrapper>
      </Container>
    </NavCotainer>
  )
}

export default Navbar

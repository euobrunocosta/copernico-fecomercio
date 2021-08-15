import React, { useState } from 'react'
import styled from 'styled-components'
import Container from 'Components/Container/Container'
import logoWithSlogan from 'Assets/images/logoWithSlogan.png'
import menuTogglerIcon from 'Assets/images/icons/menu.png'
import closeIcon from 'Assets/images/icons/close.png'

const NavCotainer = styled.nav`
  width: 100vw;
  height: 90px;
  background: rgba(0, 0, 0, 0.4);
  padding: 12px 0;
  position: fixed;
  z-index: 1000;

  padding: 12px;
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
  gap: 30px;

  li a {
    color: ${({ theme }) => theme.colors.WHITE};
    text-decoration: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    display: none;
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
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.BS_LG}) {
    display: block;
  }
`

type TSideMenuProps = {
  visible: boolean
}

const SideMenu = styled.aside<TSideMenuProps>`
  width: 300px;
  height: 100vh;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: ${p => (p.visible ? 0 : '-300px')};
  transition: all 300ms ease-in;
  padding: 30px;
`

const Overlay = styled.div<TSideMenuProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${p => (p.visible ? 0 : '-100vw')};
`

const CloseMenu = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 22px;
    height: 22px;
    background: transparent url(${closeIcon}) no-repeat;
    background-position: center;
    border: none;
    cursor: pointer;
    text-indent: -99999px;
    overflow: hidden;
  }
`

const SideMenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;

  li {
    margin-bottom: 20px;
    a {
      color: white;
      text-decoration: none;
      font-size: 18px;
    }
  }
`

const Navbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false)

  const toggleSideMenu = () => setShowSideMenu(!showSideMenu)
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
          <SideMenuToggler onClick={toggleSideMenu} />
          <Overlay visible={showSideMenu} onClick={toggleSideMenu} />
          <SideMenu visible={showSideMenu}>
            <CloseMenu>
              <button type="button" onClick={toggleSideMenu}>
                Close Menu
              </button>
            </CloseMenu>
            <SideMenuItems>
              <li>
                <a href="/">Adesão às usinas Copérnico</a>
              </li>
              <li>
                <a href="/">Compra de gerador fotovoltaico</a>
              </li>
              <li>
                <a href="/">Financiamento</a>
              </li>
            </SideMenuItems>
          </SideMenu>
        </InnerWrapper>
      </Container>
    </NavCotainer>
  )
}

export default Navbar

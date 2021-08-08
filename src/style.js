import { createGlobalStyle } from 'styled-components'
import neogroteskBold from 'Assets/fonts/NeogroteskProBold.otf'
import neogroteskRegular from 'Assets/fonts/NeogroteskProRegular.otf'
import neogroteskLight from 'Assets/fonts/NeogroteskProLight.otf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Neogrotesk Pro';
    src: url(${neogroteskBold}) format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Neogrotesk Pro';
    src: url(${neogroteskRegular}) format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Neogrotesk Pro';
    src: url(${neogroteskLight}) format('opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Neogrotesk Pro', sans-serif;
    color: ${({ theme }) => theme.colors.DARK_GRAY};
  }
`
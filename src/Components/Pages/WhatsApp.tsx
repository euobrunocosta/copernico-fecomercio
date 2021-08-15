import React from 'react'
import styled from 'styled-components'
import whatsAppIcon from 'Assets/images/icons/whatsApp.png'

const Link = styled.a`
  display: block;
  width: 78px;
  height: 78px;
  text-indent: -99999px;
  overflow: hidden;
  background: url(${whatsAppIcon}) no-repeat;
  position: fixed;
  bottom: 50px;
  right: 50px;
`

const WhatsApp = () => {
  return (
    <Link
      href="https://wa.me/551126263932?text=Fale com nossos especialistas"
      target="_blank"
    >
      Link para WhatsApp (11) 2626-3932
    </Link>
  )
}

export default WhatsApp

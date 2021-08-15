import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Simuador from './Components/Simulador'
import Footer from 'Components/Footer/Footer'
import FacaAdesao from './Components/FacaAdesao/FacaAdesao'
import Contato from 'Components/Pages/Contato'
import Beneficios from './Components/FacaAdesao/Beneficios'
import FAQ from 'Components/Pages/FAQ'
import WhatsApp from 'Components/Pages/WhatsApp'

const Adesao = () => {
  const [fase, setFase] = useState(1)

  const handleChangeFase = (fase: number) => setFase(fase)

  return (
    <>
      <Navbar />
      <Header />
      {fase === 1 && <Simuador handleChangeFase={handleChangeFase} />}
      {fase === 2 && <FacaAdesao handlePrevChangeFase={handleChangeFase} />}
      <Beneficios />
      <Contato />
      <FAQ />
      <WhatsApp />
      <Footer />
    </>
  )
}

export default Adesao

import AboutTitle from '@/about-components/about-title'
import AboutUs from '@/about-components/aboutUs/about'
import './index.scss'
import MainDirection from '@/about-components/direction'
import Head from 'next/head'

function ABOUT() {
  return (
    <section className='about-container'>
      <title>Haqqımızda-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>

      <AboutTitle/>
      <div className='about-wrapper'> 
      <AboutUs/>
      <MainDirection/>
      </div>
    </section>
  )
}

export default ABOUT

import React from 'react'
import Slider from '@/components/slider/slider'
import AboutComponent from '@/components/aboutComponent'
import MAP from '@/components/map/map'
import ProdComponent from '@/components/productComponent'
import ReferenceComponent from '@/components/refComponent'
function Homepage() {
  return (
    <section style={{ display:'flex',flexDirection:'column', gap:"100px"}}>

      <title>LALETECH MMC | Mühəndislik Şirkəti</title>
      <Slider/>
      <div style={{margin:'0 100px',display:'flex',flexDirection:'column', gap:"100px"}}>
        <AboutComponent/>
        <ProdComponent/>
        <ReferenceComponent/>
        <MAP/>
      </div>
    </section>
  )
}

export default Homepage

import { Grid } from '@mui/material'
import'./index.scss'
import EkinMakina from './images/ekin-120-orion.jpg'
import Sogutma from './images/sogutma.png'
import SoleyMakina from './images/soley.png'
import Other from './images/unlu.png'
import Link from 'next/link'
import Image from 'next/image'

function ProdComponent() {
  return (
    <section className='prod-container'>
          <h1 className='product-category'>Geniş Məhsul Çeşidi</h1>
          <span className='product-category-txt'>Müxtəlif proseslər və sektorlar üçün müasir dizaynlı  makinalar...</span>
          <div className='line' style={{marginBottom:'25px'}}></div>

        <div className='prod-wrapper'>
        <Grid  style={{display:'flex',justifyContent:'center', alignItems:'center'}}container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       
        {/* CARD 1 */}
        <Grid  item lg={3}>
        <Link className='dropLink' href='/products/ekin-makina'>
           {/* Reference Card */}
           <div className='card-home'>
             {/* Image */}
             <div>
             <Image
              className='reference-image-home'
              src={EkinMakina}
              alt='Ekin Makina'
             />
             {/* Card Text */}
             <div className='card-txt-home'>
               <div><p className='card-title-home'>EKIN MAKINA</p></div>
             </div>
           </div>
           </div>
         </Link>
        </Grid>

         {/* CARD 2 */}
         <Grid  item lg={3}>
         <Link className='dropLink' href='/products/atlasics'>
         <div className='card-home'>
             {/* Image */}
             <div style={{padding:'40px 0 0 0'}} >
             <Image
              className='reference-image-home'
              src={Sogutma}
              alt='Sogutma'
             />
             </div>
             {/* Card Text */}
             <div className='card-txt-home'>
               <div><p className='card-title-home'>LALETECH SOGUTMA SISTEMLERI</p></div>
             </div>
           </div>
         </Link>
         </Grid>

         {/* CARD 3 */}
         <Grid  item lg={3}>
         <Link className='dropLink' href='/products/soley-makina'>
         <div className='card-home'>
             {/* Image */}
             <div style={{padding:'40px 0 0 0'}}>
             <Image
              className='reference-image-home'
              src={SoleyMakina}
              alt='Soley Makina'
             />
             </div>
             {/* Card Text */}
             <div className='card-txt-home'>
               <div><p className='card-title-home'>SOLEY KAĞIZ PAKET MAKİNA</p></div>
             </div>
           </div>
         </Link>
         </Grid>

          {/* CARD 4 */}
          <Grid  item lg={3}>
         <Link  className='dropLink' href='/products/elave-mehsullar'>
         <div className='card-home'>
             {/* Image */}
             <div>
             <Image
              className='reference-image-home'
              src={Other}
              alt='Elave Mehsullar'
             />              
             </div>
             {/* Card Text */}
             <div className='card-txt-home'>
               <div><p className='card-title-home'> ƏLAVƏ MƏHSUL SATIŞI</p></div>
             </div>
           </div>

         </Link>
         </Grid>

        </Grid>

        </div>
        {/* BUTTON */}
        <div class="wrapper">
  <div class="link_wrapper">
    <Link  className='Link' href='products/ekin-makina'>Bütün Məhsullar</Link>
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
  </div>
        </div>
      
    </section>
  )
}

export default ProdComponent

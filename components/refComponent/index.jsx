import Link from 'next/link'
import './index.scss'
import Image from 'next/image'
import { Grid } from '@mui/material'
import EkinServis from './images/ekinservis.jpg'
import Service from './images/servis.jpg'
import Haknersan from './images/haknersan.webp'
import Agriculture from './images/agriculture.webp'

function ReferenceComponent() {
  return (
    <section className='ref-container'>
        <h1 className='ref-category'>LALETECH MMC Services</h1>
        <span className='ref-category-txt'>Uzaqda deyilik. Bir göz qırpımında yanınızdayıq....</span>
        <div className='line' style={{marginBottom:'25px'}}></div>

        <div className='ref-wrapper'>

        <Grid  style={{display:'flex',justifyContent:'center', alignItems:'first baseline'}}container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         
          {/* CARD 1 */}
        <Grid  item lg={3}>
        <div className='service-cards'>
        <Image
          src={EkinServis}
          alt="Ekin Servive"
          width={300}
          height={232}
        />
          <div>
            <h1 className='service-cards-title'>Qablaşdırma Avadanlıqlarının Qurulması</h1>
            {/* <span className='service-cards-span'>  məkanın funksional və estetik olaraq təchiz edilməsində əhəmiyyətli bir mərhələdir.</span> */}

            
          </div>
        </div>
        </Grid>

        {/* CARD 2 */}
        <Grid  item lg={3}>
        <div className='service-cards'>
        <Image
          src={Service}
          alt="Ekin Servive"
          width={300}
          height={232}
        />
          <div>
            <h1 className='service-cards-title'>Quraşdırdığımız Avadanlıqlara Texniki dəstək və servis xidməti</h1>
            {/* <span className='service-cards-span'>Biz sizin üçün ən sürətli və ən etibarlı şəkildə həllər istehsal etmək üçün çalışırıq.</span> */}

            
          </div>
        </div>
        </Grid>

        {/* CARD 3 */}
        <Grid  item lg={3}>
        <div className='service-cards'>
        <Image
          src={Haknersan}
          alt="Haknersan"
          width={300}
          height={232}
        />
          <div>
            <h1 className='service-cards-title'>Müasir Bağların Qurulması Bağların Üzərinin Tüllə Örtülməsi</h1>
            {/* <span className='service-cards-span'> Bağların üzəri tüllə örtülərək bitki sağlamlığı və məhsul verimliliyi artırılır.</span> */}

            
          </div>
        </div>
        </Grid>

        {/* CARD 4 */}
        <Grid  item lg={3}>
        <div className='service-cards'>
        <Image
          src={Agriculture}
          alt="Agriculture"
          width={300}
          height={232}
        />
          <div>
            <h1 className='service-cards-title'>Müasir Layihələrin Tətbiqi Həyata Keçirilməsi</h1>
            {/* <span className='service-cards-span'> Biz müştərilərimizə yenilikçi xidmətlər sunmaqla üstün keyfiyyət və fərqlilik nəticələri əldə edirik.</span> */}

            
          </div>
        </div>
        </Grid>

        </Grid>

        </div>

        {/* BUTTON */}
        <div class="wrapper">
  <div class="link_wrapper">
    <Link  className='Link' href='products/ekin-makina'>XİDMƏTLƏRİMİZ</Link>
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

export default ReferenceComponent

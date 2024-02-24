import XidmetTitle from '@/components/xidmet-title'
import './xidmet.scss'
import { Grid } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole, faBoxesPacking, faChevronRight, faGear, faScrewdriverWrench, faSliders, faSnowflake, faTentArrowLeftRight, faTractor } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function Xidmet() {
  return (
    <section className='xidmet-container'>
            <title>Xidmətlərimiz-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>

      <XidmetTitle/>

      <div style={{textAlign:'center',marginTop:'50px'}}>
          <span className='xidmet-category-txt'>Texniki Xidmətlərimiz Müasir Texnologiyaların Tətbiqindən Avadanlıq Təminatına Qədər Genişdir </span>
        <h1 className='xidmet-category'>Xidmət Çeşidlərimiz</h1>

        </div>

      <div className='xidmet-wrapper'>

      <Grid className='grid'  container spacing={{ xs: 12, sm:6, md:4, lg:3 }}>

        {/* CARD 1 */}
        <Grid item lg={3}>
          <div className='card-body'>
            <div className='card-wrapper'>
              <div className='main-content'>
              <FontAwesomeIcon className='service-card-icon' icon={faTractor} />
              <span className='service-card-txt'>Kənd Təsərrüfatı</span>

              </div>
              <div className='secondary-content'>
                <span className='secondary-content-txt'>Kənd Təsərrüfatının İnkişafı üçün istehsal Olunan Müasir Texnologiyaların Tətbiqi</span>
                <Link className='secondary-content-link' href='./contact'>Bizimlə Əlaqə <FontAwesomeIcon icon={faChevronRight} /></Link>
              </div>
            </div>
          </div>
        </Grid>


        {/* CARD 2 */}
        <Grid item lg={3}>
          <div className='card-body'>
            <div className='card-wrapper'>
              <div className='main-content2'>
              <FontAwesomeIcon className='service-card-icon' icon={faGear} />
              <span className='service-card-txt'>Köməkçi Qurğular</span>

              </div>
              <div className='secondary-content2'>
                <span className='secondary-content-txt'>Quraşdırdığımız Avadanlıqların Köməkçi Qurğular və Xammal ilə Təmini</span>
                <Link className='secondary-content-link' href='./contact'>Bizimlə Əlaqə <FontAwesomeIcon icon={faChevronRight} /></Link>
              </div>
            </div>
          </div>
        </Grid>


        {/* CARD 3 */}
        <Grid item lg={3}>
          <div className='card-body'>
            <div className='card-wrapper'>
              <div className='main-content'>
              <FontAwesomeIcon className='service-card-icon' icon={faScrewdriverWrench} />
              <span className='service-card-txt'>Servis</span>

              </div>
              <div className='secondary-content'>
                <span className='secondary-content-txt'>Quraşdırdığımız Avadanlıqlara Texniki dəstək və servis xidməti</span>
                <Link className='secondary-content-link' href='./contact'>Bizimlə Əlaqə <FontAwesomeIcon icon={faChevronRight} /></Link>
              </div>
            </div>
          </div>
        </Grid>


        {/* CARD 4 */}
        <Grid item lg={3}>
          <div className='card-body'>
            <div className='card-wrapper'>
              <div className='main-content'>
              <FontAwesomeIcon className='service-card-icon' icon={faSnowflake} />
              <span className='service-card-txt'>Soyuducu Depo</span>

              </div>
              <div className='secondary-content'>
                <span className='secondary-content-txt'>Soyuq Hava Deposunun Layihələndirilməsi Tam Tikilib Təhvil Verilməsi</span>
                <Link className='secondary-content-link' href='./contact'>Bizimlə Əlaqə <FontAwesomeIcon icon={faChevronRight} /></Link>
              </div>
            </div>
          </div>
        </Grid>


        {/* CARD 5 */}
        <Grid item lg={3}>
          <div className='card-body'>
            <div className='card-wrapper'>
              <div className='main-content main-content5'>
              <FontAwesomeIcon className='service-card-icon' icon={faBoxesPacking} />
              <span className='service-card-txt'>Qablaşdırma</span>

              </div>
              <div className='secondary-content'>
                <span className='secondary-content-txt'>Qablaşdırma Avadanlıqlarının Qurulması</span>
                <Link className='secondary-content-link' href='./contact'>Bizimlə Əlaqə <FontAwesomeIcon icon={faChevronRight} /></Link>
              </div>
            </div>
          </div>
        </Grid>


        {/* CARD 6 */}
        <Grid item lg={3}>
          <div className='card-body'>
            <div className='card-wrapper'>
              <div className='main-content'>
              <FontAwesomeIcon className='service-card-icon' icon={faTentArrowLeftRight} />
              <span className='service-card-txt'>Müasir Bağlar</span>

              </div>
              <div className='secondary-content'>
                <span className='secondary-content-txt'>Müasir Bağların Qurulması Bağların Üzərinin Tüllə Örtülməsi</span>
                <Link className='secondary-content-link' href='./contact'>Bizimlə Əlaqə <FontAwesomeIcon icon={faChevronRight} /></Link>
              </div>
            </div>
          </div>
        </Grid>


        {/* CARD 7 */}
        <Grid item lg={3}>
          <div className='card-body'>
            <div className='card-wrapper'>
              <div className='main-content'>
              <FontAwesomeIcon className='service-card-icon' icon={faAppleWhole} />
              <span className='service-card-txt'>Meyvə Çeşidlənməsi</span>

              </div>
              <div className='secondary-content'>
                <span className='secondary-content-txt'>Meyvə Çeşidlənməsi Üçün istifadə Olunan Qurğuların Quraşdırılması</span>
                <Link className='secondary-content-link' href='./contact'>Bizimlə Əlaqə <FontAwesomeIcon icon={faChevronRight} /></Link>
              </div>
            </div>
          </div>
        </Grid>


        {/* CARD 8 */}
        <Grid item lg={3}>
          <div className='card-body'>
            <div className='card-wrapper'>
              <div className='main-content8'>
              <FontAwesomeIcon className='service-card-icon' icon={faSliders} />
              <span className='service-card-txt'>Əlavə Məhsullar</span>

              </div>
              <div className='secondary-content8'>
                <span className='secondary-content-txt'>Avtokar,Viol Ağac İpi,Karton Kleyi,Karton Makina Qəlibi Plastik Yeşik Makina Qəlibi Qurğuları Ehtiyat Hissələrinin Təmini Və Servis</span>
                <Link className='secondary-content-link' href='./contact'>Bizimlə Əlaqə <FontAwesomeIcon icon={faChevronRight} /></Link>
              </div>
            </div>
          </div>
        </Grid>



        
      </Grid>

      </div>
    </section>
  )
}

export default Xidmet

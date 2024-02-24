import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faQrcode, faSitemap, faWrench } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import { Grid } from '@mui/material';
import Link from 'next/link';


function AboutComponent() {
  return (
    <section className='info-container'>
        <div style={{textAlign:'center'}}>
        <h1 className='about-category'>Bizi Seçmək üçün Dörd Səbəb</h1>
          <div className='line' style={{margin:' 40px auto'}}></div>
          <span className='about-category-txt'>Haqqımızda ətraflı məlumat üçün bu səhifəyə daxil ola bilərsiniz.</span>

        </div>
      <div className='info-wrapper'>

      <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }}>
        {/* CARD 1 */}
        <Grid item lg={3}>
      <div className='info-content'>
        <FontAwesomeIcon style={{padding:'30px 25px'}} className='fa-info' icon={faSitemap}/> 
        <h3 className='info-title'>MÜTƏXƏSSİS HEYƏTİ</h3>
        <p className='info-text'>LALETECH MMC Expert 4 mühəndis və 10 texniki xidmət personalı ilə xidmət göstərir.</p>
        </div>
        </Grid>

        {/* CARD 2 */}
        <Grid item lg={3}>
        <div className='info-content'>
           <FontAwesomeIcon className='fa-info' icon={faWrench}/> 
           <h3 className='info-title'>TEXNİKİ SERVİS</h3>
           <p className='info-text'>LALETCH MMC təcrübəli  mütəxəssis heyəti ilə  24 saat aktiv texniki xidmət göstərir.</p>
         </div>
         </Grid>

        {/* CARD 3 */}
        <Grid item lg={3}>
        <div className='info-content'>
           <FontAwesomeIcon style={{padding:'25px 30px'}} className='fa-info' icon={faQrcode}/> 
           <h3 className='info-title'style={{'textAlign':'center'}}>STOKTAN MƏHSUL TƏSLİMİ</h3>
           <p className='info-text'>LALETECH MMC inkişaf edən güclü məhsul çeşidi sayəsində məhsulları anbardan təhvil verir.</p>
         </div>
         </Grid>

        {/* CARD 4 */}
        <Grid item lg={3}>        
        <div className='info-content'>
           <FontAwesomeIcon style={{padding:'25px 20px'}} className='fa-info' icon={faGears}/> 
           <h3 className='info-title'style={{'textAlign':'center'}}>KÖMƏKÇİ QURĞULARIN  TƏMİNİ</h3>
           <p className='info-text'>LALETECH MMC idxal etdiyi bütün makinlar üçün böyük ehtiyat hissələri ehtiyatına malikdir.</p>
         </div>
         </Grid>

         </Grid>

      </div>
          {/* BUTTON */}
     <div class="wrapper">
  <div class="link_wrapper">
    <Link   className='Link' href="/about">Haqqımızda</Link>
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

export default AboutComponent

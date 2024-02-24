'use client'
// SWIPER IMPORTS
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import AWETA from './images/aweta (2).png'
import AWETALOGO from './images/awetalogobg.png'
import EKINMAKINA from './images/ekin-makina.png'
import EKINLOGO from './images/ekinmakinabg.png'
import SOLEYLOGO from './images/soley-1.jpg'
import SOLEYMAKINA from './images/soley.png'
import SERILOGO from './images/serimakinabg.png'
import SERIMAKINA from './images/seri-makina.png'
import KARADUMANLOGO from './images/karadumanbg.png'
import KARADUMANMAKINA from './images/karaduman.png'
import LOGO from './images/Logo.png'
import PRODUCTS from './images/products.png'



function Slider() {
  return (
    <section className='swiper'>
              <Swiper
        spaceBetween={30}
        effect={'fade'}

        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        modules={[EffectFade,Autoplay ]}
        className="mySwiper"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className="slide-container">
            <div className="slide-wrapper">
              <div className='right-side'>
              <Image
                className='aweta-logo'
                src={AWETALOGO}
                alt='Aweta Logo'
               />
              <span className='slide-text'>
                Aweta, yeni tərəfdaşlar üçün  meyvə və tərəvəzlərin sinifləndirilməsi və paketlənməsi üçün tam həllər üzrə liderdir. 
                55 ildən çox təcrübə və dünya üzrə 45-dən çox ölkədə satış və xidmət nümayəndəliyindən istifadə ilə, Aweta lokal bazarı, 
                onun məhsulları və ehtiyacları barədə dərin anlayışa malik olmuşdur.</span>
              </div>
                <Image
                className='slide1-image'
                src={AWETA}
                alt='Aweta Machine'
               />
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="slide-container">
            <div className="slide-wrapper2">
              <div className='right-side' id='right-side2'>
              <Image
                className='ekin-logo'
                src={EKINLOGO}
                alt='Aweta Logo'
               />
              <span className='slide-text2' id='slide-text-ekin'>
              Ekin Makina, müştərilərinə ən sürətli və ən etibarlı şəkildə həllər təmin etmək üçün fəaliyyət göstərir.
              Şirkətin xidmət keyfiyyəti, davamlı Ar-Ge fəaliyyəti, yüksək iş etikası, həllərə mərkəziləşmə 
              və güclü münasibətlərin qurulması kimi əsas mərhələləri əhatə edir. Şirkətin mühəndis, texnik və texniki işçiləri,
              öz sahələrində mütəxəssis kimi özəlliklərinə diqqət yetirir və ən son texnologiyalara yönəlir.
              </span>
              </div>
                <Image
                className='slide2-image'
                src={EKINMAKINA}
                alt='Aweta Machine'
               />
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
        <div className="slide-container">
            <div className="slide-wrapper2">
              <div className='right-side3'>
              <Image
                className='soley-logo'
                src={SOLEYLOGO}
                alt='Soley Logo'
               />

               <div className='soley-txt-parent'>
               <span className='slide-title'>
                 Perforeli Kese Kağıdı Makinası
                 
                 Perforated Paper Bag Machine</span>
              
              <ul className='slide-list'>
                <li>Otomatik Kullanım</li>
                <li>Hızlı Üretim</li>
                <li>Pencere Filmi Takma</li>
                <li>Servo Motor</li>
                <li>PLC Ekran</li>
                <li>Max Dk 600</li>                        
              </ul> 
               </div>                          
              </div>
                <Image
                className='slide3-image'
                src={SOLEYMAKINA}
                alt='SOLEY MAKINA'
               />
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 4 */}
        <SwiperSlide>
        <div className="slide-container">
            <div className="slide-wrapper4">
              <div className='right-side4'>
              <Image
                className='seri-logo'
                src={SERILOGO}
                alt='Aweta Logo'
               />
              <span className='slide-text4'>
              Təcrübəli işçi heyəti, satış sonrası xidmət və xidmətdə məsuliyyəti keyfiyyəti ilə dünya miqyasında böyük uğurlar qazanmışdır
              </span>
              </div>
                <Image
                className='slide4-image'
                src={SERIMAKINA}
                alt='Aweta Machine'
               />
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 5 */}
        <SwiperSlide>
        <div className="slide-container">
            <div className="slide-wrapper5">
              <div className='right-side5'>
              <Image
                className='seri-logo'
                src={KARADUMANLOGO}
                alt='Aweta Logo'
               />
              <span className='slide-text2' id='slide-tex-5'>
              Plastik qutu qəlibləri ilə yanaşı qəlib istehsalı sektorunda injeksiya qəlib istehsalında da qabaqcıl olan Karaduman Kalıp, 40 illik təcrübəsi və peşəkar komandası ilə sizə yüksək keyfiyyətli xidmət göstərməyə davam edir.              </span>
              </div>
                <Image
                className='slide5-image'
                src={KARADUMANMAKINA}
                alt='Aweta Machine'
               />
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 6 */}
        <SwiperSlide>
        <div className="slide-container">
            <div className="slide-wrapper6">
              <div className='right-side6'>
              <Image
                className='tech-logo'
                src={LOGO}
                alt='Laletech'
               />
               <span className='slide-text2' id='slide-text6'>Biz LALETECH-MMC şirkəti olaraq Layihələndirmə,müasir texnologiyanın araşdırılması,
                 qurulması, istehsal prosesinin düzgün idarə olunması, Xammal təminatı və servis həyata keçirməkdəyik.</span>
              </div>
                <Image
                className='slide6-image'
                src={PRODUCTS}
                alt='Products'
               />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Slider

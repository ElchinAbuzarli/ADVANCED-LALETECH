'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.scss'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { useEffect } from 'react'


function Footer() {
  
  useEffect(() => {
    // Load JivoSite widget script
    const script = document.createElement('script');
    script.src = "//code.jivosite.com/widget/rX7TRzBd6Z";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section>

      <div className='footer'>
      {/* CONTACT */}
      <div className='contact-foot'>
        <h3 className='contact_title'>Əlaqə Məlumatları</h3>
        <ul className='contact-txt'>
          <li className='adres'><FontAwesomeIcon icon={faLocationDot}/> 
          Bakı şəhəri,Binəqədi rayonu,
          <br />
           Dərnəgül yaşayış sahəsi 3117
          </li>
          <li><FontAwesomeIcon icon={faPhone}/><Link style={{color:'white'}}  href="tel:+994-50-555-25-50">+994 (50) 555 25 50</Link></li> 
          <li><FontAwesomeIcon icon={faPhone}/><Link style={{color:'white'}}  href="tel:+994-70-555-55-90">+994 (70) 555 55 90</Link></li>  
          <li><FontAwesomeIcon icon={faEnvelope}/><Link style={{textDecoration:'none',color:'white'}} href="mailto:laletech4@gmail.com">laletech4@gmail.com</Link></li>
          <li><FontAwesomeIcon icon={faFacebookF}/>
           <Link style={{textDecoration:'none', color:'white'}} href="https://www.facebook.com/profile.php?id=100094357220772&mibextid=ZbWKwL">Laletech Mmc</Link>
           </li>
          <li><FontAwesomeIcon icon={faInstagram}/>
           <Link style={{textDecoration:'none', color:'white'}}  href="https://www.instagram.com/laletech.mmc/?igshid=MzRlODBiNWFlZA%3D%3D">laletech.mmc</Link>
          </li>

        </ul>
      </div>

      {/* LINKS */}
      <div  className='link-foot'>
        <h3 className='contact_title'>MƏHSULLARIMIZ</h3>
        <ul className='footlist'>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' href='/products/ekin-makina'>İnjeksion Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' href='/products/seri-makina'>Karton Qutu Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' href='/products/tur-var-makina'>Karton Köşəbənt Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' href='/products/ileri-makina'>Karton Qatlama Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' href='/products/soley-makina'>Kağız Klok Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' href='/products/aweta'>Çeşidləmə Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' href='/products/ceylift'>Avtokar ElektroKar</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' href='/products/elave-mehsullar'>Karton Kleyi</Link>
      </li>
      <li>
        <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' href='/products/elave-mehsullar'>Rezin İp</Link>
      </li>
      <li>
        <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' href='/products/elave-mehsullar'>Meyvə Violu</Link>
      </li>
      <li>
        <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' href='/products/karaduman-kalip'>Karaduman Kalip</Link>
      </li>
    </ul>
      </div>

      {/* ABOUT */}
      <div className='about-foot'>
        <h3 className='contact_title'>HAQQIMIZDA</h3>
        <p className='foot-about-content'>
        LALETECH-MMC şirkəti olaraq fəaliyyətimiz dünyada inkişaf edən texnologiyanın Kənd təsərrüfatının inkişafına tətbiqində mühəndislik etməkdir.
        Ölkə rəhbərliyinin Kənd Təssərrüfatına göstərdiyi böyük diqqət və dəstəyi nəticəsində kənd təsərrüufatı sahələri sürətlə genişlənir.
        Bu zaman kənd təsərrüfatının artım templərinə cavab verən, 
        effektivliyi təmin edəcək müasir texnika və texnologiyaların tətbiqinə zərurət yaranır
        Biz LALETECH-MMC şirkəti olaraq Layihələndirmə,müasir texnologiyanın araşdırılması, qurulması, istehsal prosesinin düzgün idarə olunması, Xammal təminatı və servis həyata Keçirməkdəyik.
        </p>
      </div>

      </div>

        <div className='copyright'>
          <p className='copyright-text'>Copyright © 2023 Laletech MMC. Created by <Link style={{color:'red'}} href="https://www.linkedin.com/in/elchin-abuzarli-6769b427a/" target="_blank">Elchin Abuzarli</Link></p>
        </div>

    </section>
    
  )
}

export default Footer

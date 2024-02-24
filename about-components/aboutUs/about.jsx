import Image from 'next/image'
import './about.scss'
import Tech from './images/tech.jpg'


function AboutUs() {
  return (
    <section className='aboutUs-container'>
        <div className='aboutUs-wrapper'>
            <div className='aboutUs-txt'>
                <span className='about-content'>LALETECH-MMC şirkəti kənd təsərrüfatının inkişafına texnologiya ilə mühəndislik xidmətləri təqdim edir. 
                    Ölkədə kənd təsərrüfatının önəmli bir diqqət mərkəzi olması nəticəsində, bu sahədəki potensialın genişlənməsi müşahidə edilir. 
                    Bu baxımdan, kənd təsərrüfatının effektivliyini artırmaq və inkişafına dəstək olmaq üçün müasir texnika və texnologiyaların tətbiqinə ehtiyac var.
                </span>

                <span className='about-content'>Biz LALETECH-MMC şirkəti olaraq, layihələndirmə, müasir texnologiyaların araşdırılması, qurulması, 
                        istehsal prosesinin idarə olunması, xammal təminatı və servislərin təmin edilməsi ilə məşğul oluruq. 
                        Bizim əsas məqsədimiz, kənd təsərrüfatında effektivliyi artırmaq və yeni texnologiyaların tətbiqinə kömək etməkdir.
                         Bu sahədə müştərilərimizə optimal həllər təklif etmək üçün fəaliyyət göstəririk və müştərilərimizin texnologiya ilə 
                         inkişafını dəstəkləyirik.

                </span>


            </div>
            <div className="aboutUs-img">
            <Image
        className='tech-image'
        src={Tech}
        alt='Modernization'
      />
            </div>
        </div>
      
    </section>
  )
}

export default AboutUs

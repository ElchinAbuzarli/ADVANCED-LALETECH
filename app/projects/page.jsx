'use client'
import ProjectTitle from '@/components/project-title'
import './index.scss'
import AqroInvest from './images/aqroinvest.jpg'
import CennetAqro from './images/banan.png'
import Bio from './images/biommc.jpg'
import TovuzAqro from './images/TovuzAqropark.jpg'
import Naxcivan from './images/naxcivan.png'
import Azersun from './images/azersun.png'
import Fiber from  './images/Fiber.jpg'
import Serur from './images/serur.jpg'
import Miran from './images/miran.jpg'
import Siyezen from './images/siyezen.png'

// import AwetaVideo from '../public/videos/Aweta.mp4'
// import Ekin from '@/app/projects/videos/Ekin.mp4'

// import VideoPlayer from '@/components/Video'
import Video from 'next-video'
import Image from 'next/image'


function Projects() {
  return (
    <section>
      <ProjectTitle/>

       <div className='all-projects'>

        {/* PROJECT 1 */}
        <div className='projects' id='project-1'>
          <div>
          <Image
                  className='project-image'
                   id='project-image-1'
                  src={AqroInvest}
                  alt='Packing'
                />
          </div>
          <div  className='projects-content'>
            <h4 className='projects-title'>AQRO INVEST & ISTEHSALAT MMC</h4>
            <h1>KARTON QUTU FABRIKININ TAM QURULMASI</h1>
            <p>Azərbaycanda Aqro invest şirkətində dünya standartlarına cavab verən <b> 2.15 </b> enində <b> BÜZMƏLİ KARTON MAKİNASINI </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className='projects' id='project-2'>
          <div className='projects-content'>
            <h4>CƏNNƏT AQRO MMC.</h4>
            <h1>Banan Saraltma Soyuducusunun Qurulması.</h1>
            <p>Azərbaycanda Cənnət Aqro MMC şirkətində dünya standartlarına cavab verən <b> BANAN SARALTMA SOYUDUCUSUNU </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
          <div>
          <Image
                  className='project-image'
                   id='project-image-2'
                  src={CennetAqro}
                  alt='Packing'
                />        
                </div>
        </div>

       {/* PROJECT 3 */}
       <div className='projects' id='project-3'>
          <div>
            
          <Image
                  className='project-image'
                   id='project-image-3'
                  src={Bio}
                  alt='Packing'
                />  
          </div>
          <div className='projects-content'>
            <h4>BİO MMC</h4>
            <h1>Karton Qutu və Qutu Yapışdırma Avadanlıqlarının Qurulması</h1>
            <p>Azərbaycanda BİO MMC şirkətində dünya standartlarına cavab verən <b> Büzməli karton -3 və 5 laylı | Karton qutular – 3 və 5 laylı, rəngli və rəngsiz</b>  <b> BÜZMƏLİ KARTON MAKİNASINI </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
       </div>

        {/* PROJECT 4 */}
        <div className='projects' id='project-4'>
          <div className='projects-content'>
            <h4> TOVUZ AQROPARK</h4>
            <h1>Heyvandarlıq Kompleksinin Qurulması</h1>
            <p> Ən müasir ət kəsimi və baytarlıq məntəqələri  İstənilən şəxs istədiyi vaxt heyvanını gətirib burada kəsdirdikdən sonra baytarlıq sertifikatı ala biləcək. Bir sözlə, əhalini <b> EKOLOJI TƏMİZ MƏHSULLARI</b> ilə təmin etmək üçün bütün şərait yaradılır.</p>
          </div>
          <div>
          <Image
                  className='project-image'
                   id='project-image-4'
                  src={TovuzAqro}
                  alt='Packing'
                />
          </div>
        </div>
 
        {/* PROJECT 5 */}
        <div className='projects' id='project-5'>
          <div>
          <Image
                  className='project-image'
                   id='project-image-7'
                  src={Azersun}
                  alt='Packing'
                />
          </div>
          <div className='projects-content'>
            <h4 className='projects-title'>AZERSUN HOLDING MMC</h4>
            <h1>ÇÖRƏK ZAVODU</h1>
            <p>Azərbaycanda <b>Azersun Holding MMC</b> şirkətində dünya standartlarına cavab verən <b> Çörək Zavodunu </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div>

                {/* PROJECT VIDEO */}
                {/* <div className='projects' id='project-4'>
          <div className='projects-content'>
            <h4> GRAND GARDEN</h4>
            <h1>Aweta Çeşidləmə Makinası</h1>
            <p>LALETECH MMC şirkəti olaraq qubada 3-cü layihəmizi həyata keçirdik qeyd edək ki <b>AWETA</b> demək olarki bütün məhsullar üçün çeşidləmə gücünə malikdir</p>
          </div>
          <div> 
            </div>
        </div> */}

                {/* PROJECT VIDEO */}
        {/* <div className='projects' id='project-5'>
                <div>
                <Video
              autoPlay={true}
              id="v0"
              autobuffer="autobuffer"
              preload="preload"
              className=" bg-black shadow-2xl rounded-full flex flex-row justify-between items-center p-3 sticky top-0 w-11/12 md:ml-12"
              muted
              style={{ filter: "grayscale(0.3)" }}
            >
              <source type="video/mp4" src="../public/videos/Aweta.mp4"></source>
            </Video>
                </div>
          <div className='projects-content'>
            <h4 className='projects-title'>ŞƏMKİR</h4>
            <h1>FIZIKI ŞƏXS</h1>
            <p>Şəmkirdə dünya standartlarına cavab verən <b> EKİN MAKİNAMIZI </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div> */}

        {/* PROJECT 6 */}
        <div className='projects' id='project-6'>
          <div className='projects-content'>
            <h4> FIBER KARTON MMC</h4>
            <h1>Viol,Karton qutu və Köşəbənd Avadanlığının Qurulması</h1>
            <p> Azərbaycanda <b>FIBER KARTON MMC</b> şirkətində dünya standartlarına cavab verən <b> Viol | Karton qutu  və Köşəbənd</b> Makinasını uğurla Çalışdıraraq təhvil verdik</p>
          </div>
          <div> 
          <Image
                  className='project-image'
                   id='project-image-4'
                  src={Fiber}
                  alt='Packing'
                />
          </div>
        </div>

        {/* PROJECT 7 */}
        <div className='projects' id='project-5'>
          <div>
          <Image
                  className='project-image'
                   id='project-image-7'
                  src={Serur}
                  alt='Packing'
                />
          </div>
          <div className='projects-content'>
            <h4 className='projects-title'>Şərur 3 MMC</h4>
            <h1>Karton qutu və Kağız Klok makinasının qurulması</h1>
            <p>Azərbaycanda <b>Şərur 3 MMC</b> şirkətində dünya standartlarına cavab verən <b> Karton qutu və Kağız Klok makinasını </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div>

        {/* PROJECT 8 */}
        <div className='projects' id='project-6'>
          <div className='projects-content'>
            <h4>MİRAN 19 ÇİYƏLƏK ŞİRKƏTİ</h4>
            <h1>Plastik yeşik makinasının Qurulması </h1>
            <p> Azərbaycanda <b>MİRAN 19</b> şirkətində dünya standartlarına cavab verən <b> Plastik yeşik</b> Makinasını uğurla Çalışdıraraq təhvil verdik</p>
          </div>
          <div>
          <Image
                  className='project-image'
                   id='project-image-4'
                  src={Miran}
                  alt='Packing'
                />
             </div>
        </div>

        {/* PROJECT 9 */}
        <div className='projects' id='project-7'>
          <div>
          <Image
                  className='project-image'
                   id='project-image-7'
                  src={Naxcivan}
                  alt='Packing'
                />
            </div>
          <div className='projects-content'>
            <h4 className='projects-title'>NAXÇIVAN</h4>
            <h1>REGİONAL 
              SOYUQ ANBARLAR</h1>
            <p>Azərbaycanda <b>NAXÇIVANDA</b> dünya standartlarına cavab verən <b> SOYUDUCULARI </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div>

                {/* PROJECT 10 */}
                <div className='projects' id='project-6'>
           <div className='projects-content'>
              <h4>SIYƏZƏN BROYLER ASC</h4>
              <h1>Toyuq Kəsimxanası </h1>
              <p> Azərbaycanda <b>Siyəzən Broyler</b> şirkətində dünya standartlarına cavab verən <b> TOYUQ KƏSİMXANASINI</b> uğurla təhvil verdik</p>
           </div>
          <div> 
          <Image
                  className='project-image'
                   id='project-image-4'
                  src={Siyezen}
                  alt='Packing'
                />
          </div>
        </div>

        </div>

    </section>
  )
}

export default Projects


/*
          <Image
                  className='project-image'
                   id='project-image-1'
                  src={Bio}
                  alt='Packing'
                />

*/
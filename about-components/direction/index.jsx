import './index.scss'
import Image from 'next/image'
import Packing from './images/packing.jpg'
import Carton from './images/carton.webp'
import Tovuz from './images/TovuzAqropark.jpg'
import Haknersan from './images/haknersan.webp'


function MainDirection() {
  return (
    <section className='direction-container'>
        <h1 className='component-title'>ƏSAS İSTİQAMƏTLƏRİMİZ </h1>
        <div className='direction-wrapper'>

            {/* DİRECTİON 1 */}
            <div className='direction-1'>
                <div>
                <h1 className='direction-title'>Plastik Qablaşdırma</h1>
                <span className='direction-main-span'> Müştəri Tələblərinə Uyğun Plastik Qablaşdırma Avadanlığının Qurulması </span>
                <span className='direction-secodary-span'>
                     Şirkətimiz, kənd təsərrüfatı sahəsində plastik qablaşdırma avadanlığının qurulması sahəsində müştəri tələblərinə uyğun və keyfiyyətli xidmətlər
                     təmin edir. Müştəri məmnuniyyəti və məhsulların effektivliyi bizim əsas məqsədimizdir və bu məqsədə nail olmaq üçün 
                     səmərəli və innovativ həllər təklif edirik. Şirkətimiz, müştərilərimizin məhsullarını keyfiyyətli şəkildə qablaşdırmaq və
                      saxlamaq üçün ən yaxşı texnologiya və mühəndislik həllərini təklif edir.

                     <ul className='direction-list'>
                        <li>1. Müştəri Tələblərinin Qiymətləndirilməsi</li>
                        <li>2. Avadanlığın Dizaynı və Material Seçimi</li>
                        <li>3. Qurulma və Sınaq İşləri</li>
                        <li>4. Təchizat və Texniki Dəstək</li>
                     </ul>
                </span>

                </div>
                <Image
                  className='direction-image'
                  src={Packing}
                  alt='Packing'
                />
            </div>

            {/* DİRECTİON 2 */}
            <div className='direction-2'>

              <Image
                className='direction-image2'
                src={Carton}
                alt='Packing'
              />

                <div>
                <h1 className='direction-title'>Karton Qablaşdırma</h1>
                <span className='direction-main-span'>  Məhsullarınızı Mühafizə etmək üçün Təhlükəsiz və Sərfəli Yol </span>
                <span className='direction-secodary-span'>
                     Şirkətimiz, müştəri tərəfindən istənilən karton qablaşdırma avadanlığının effektiv şəkildə qurulması üçün 
                     keyfiyyətli və yenilikçi xidmətləri təklif edir. Müştəri tələblərinə uyğun dizayn və material seçimi, avadanlığın 
                     düzgün qurulması, sınaq işləri və texniki dəstək, məhsullarınızın mühafizəsini və keyfiyyətini təmin etməyə kömək edir.
                      Müştəri tərəfindən məhsullarınızın qablaşdırılması və depolanması üçün ən yaxşı həlləri təmin etməyə kömək etmək üçün buradayıq.

                     <ul className='direction-list'>
                        <li>1. Müştəri Tələblərinin Qiymətləndirilməsi</li>
                        <li>2. Karton Materialın Seçimi və Dizaynı</li>
                        <li>3. Avadanlığın Qurulması və Təchizatı</li>
                        <li>4. Sınaq İşləri və Texniki Dəstək</li>
                        <li>5. İstifadəçi Təlimatları və Servis</li>

                     </ul>
                </span>

                </div>

            </div>

            {/* DİRECTİON 3 */}
            <div className='direction-1'>
                <div>
                <h1 className='direction-title'>Heyvandarlıq Kompleksinin Qurulması</h1>
                <span className='direction-main-span'> Müştəri Tələblərinə Uyğun Komplekslərin Qurulması: Şirkətimizin İnovativ Xidmətləri </span>
                <span className='direction-secodary-span'>
                     Şirkətimiz, müştəri tərəfindən istənilən heyvandarlıq kompleksinin effektiv şəkildə qurulması üçün yenilikçi və keyfiyyətli 
                     xidmətləri təklif edir. Müştəri tələblərinə uyğun dizayn, material seçimi, avtomatlaşdırma və təchizat, kompleksin effektiv
                      işləməsini və heyvanların sağlamlığını təmin edir. Müştəri tərəfindən heyvandarlıq kompleksinin qurulması 
                      və idarə edilməsi üçün ən yaxşı həlləri təmin etmək üçün buradayıq.

                     <ul className='direction-list'>
                        <li>1. Müştəri Tələblərinin Qiymətləndirilməsi</li>
                        <li>2. Dizayn və Planlaşdırma</li>
                        <li>3. Material Seçimi və İnşa Etmə</li>
                        <li>4. Təchizat və Avtomatlaşdırma</li>
                        <li>5. Təlimatlar və Texniki Dəstək</li>

                     </ul>
                </span>

                </div>
                <Image
                  className='direction-image'
                  src={Tovuz}
                  alt='Heyvandarlıq Kompleksi'
                />
            </div>

            {/* DIRECTION 4 */}
            <div className='direction-1'>

              <Image
                className='direction-image4'
                src={Haknersan}
                alt='Packing'
              />

                <div>
                <h1 className='direction-title'>Meyvə-Tərəvəz Bağları və Soyuducu Anbarların Qurulması</h1>
                <span className='direction-main-span'> Bağlar və Soyuducu Anbarlarının Qurulması: Şirkətimizin Yenilikçi Xidmətləri </span>
                <span className='direction-secodary-span'>
                     Şirkətimiz, müştəri tərəfindən istənilən meyvə-tərəvəz bağları və soyuducu anbarlarının effektiv şəkildə qurulması üçün
                     yenilikçi və keyfiyyətli xidmətləri təklif edir. Müştəri tələblərinə uyğun dizayn, material seçimi, avtomatlaşdırma və
                     təchizat, bağ və anbarın effektiv işləməsini və məhsulların təzəliyini təmin edir. Müştəri tərəfindən 
                     bağ və soyuducu anbarın qurulması və idarə edilməsi üçün ən yaxşı həlləri təmin etmək üçün buradayıq.
                     <ul className='direction-list'>
                        <li>1. Müştəri Tələblərinin Qiymətləndirilməsi</li>
                        <li>2. Bağ və Anbarın Dizaynı və Planlaşdırılması</li>
                        <li>3. Material Seçimi və İnşa Etmə</li>
                        <li>4. Təchizat və Avtomatlaşdırma</li>
                        <li>5. Təlimatlar və Texniki Dəstək</li>

                     </ul>
                </span>

                </div>

            </div>

        </div>
      
    </section>
  )
}

export default MainDirection

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faGem, faHandshake, faStar, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

function AboutTitle() {
  return (
    <section >
      <div className='about-title-container'>
      <div className='about-title-wrapper'>
      <h1 className='about-title'>BİZ KİMİK</h1>
      </div>
      </div>

      <div className='about-container-2'>
        <div className='about-wrapper-2'>
          <div className='child'>
          <div>
           <FontAwesomeIcon className='fa-service' icon={faThumbsUp}/> 
           <span>Mükəmməl keyfiyyət təqdim edirik</span>
          </div>

          <div>
          <FontAwesomeIcon className='fa-service' icon={faStar}/>
          <span>Ölkənin lider şirkətlərindənik</span>
          </div>
          </div>

          <div className='child'>
          <div>
          <FontAwesomeIcon className='fa-service' icon={faHandshake}/> 
          <span>Müştərilərimizə hər zaman dəyər veririk</span>
          </div>
          <div>
          <FontAwesomeIcon className='fa-service' icon={faGem}/> 
          <span>Məhsullarımıza zəmanət veririk</span>
          </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutTitle

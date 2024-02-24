import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


function HeadFooter() {
  return (
    <section className='headFoot-container'>

<div className='contact-us-foot'>
      <div className='contact-us-foot-main'>
        <div className='contact-us-contact'>
        <div><FontAwesomeIcon className='phoneIcon' icon={faPhone}/><a style={{color:'white'}}></a></div>
        <div className='contact-us-foot-content'>
          <div><h4 className='foot-content-h4'>Suallarınız üçün Bizimlə Əlaqə Saxlayın.</h4></div>
          <div className='foot-content-text'>Ən qısa zamanda mütəxəssis komandamızla sizə dəstək olaq.</div>
        </div>
        </div>
        <div>
        <Link  className='foot-content-link' href='/contact'>Əlaqə</Link>

        </div>
      </div>
      </div>

    </section>
  )
}

export default HeadFooter

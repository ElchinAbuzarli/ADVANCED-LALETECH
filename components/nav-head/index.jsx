import React from 'react'
import './index.scss'
import Image from 'next/image'
import LOGO from './images/Logo.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone,} from '@fortawesome/free-solid-svg-icons'


function NavbarHead() {
  return (
    <section className='head-container'>
        <div className='head-wrapper'>
            <div className='nav-logo'>
             <Link href='/'>
                <Image
                src={LOGO}
                alt=''
                width={170}
                height={90}
               />
             </Link>

            </div>
            <div className='nav-contact'>

               {/* CONTACT NUMBER */}
                <div className='contact'>
                 <Link className='contact' href="tel:+994-50-555-25-50">
                   <div className='icon-div'><FontAwesomeIcon className='nav-icon' icon={faPhone} /></div>
                   <span  className='txt'>+994 (50) 555 25 50</span>
                 </Link>
                </div>

               {/* GMAIL */}
               <div className='contact'>
                 <Link className='contact' style={{textDecoration:'none',color:'black'}} href="mailto:laletech4@gmail.com">
                   <div className='icon-div'> <FontAwesomeIcon className='nav-icon' icon={faEnvelope} /> </div>
                   <span  className='txt'>laletech4@gmail.com</span>
                 </Link>
                </div>
          {/* LOCATION ADDRESS */}
          <div className='contact'>
            <a className='contact' href="https://goo.gl/maps/Tb971sNrbD1xb4TV8">
            <div className='icon-div'><FontAwesomeIcon className='nav-icon'  icon={faLocationDot} /></div>
            <span  className='txt'>Laletech,
             <br />
             Sattar Bahulul-Zadeh, Baku
             </span>
            </a>
          </div>

          
            </div>
        </div>
    </section>
  )
}

export default NavbarHead

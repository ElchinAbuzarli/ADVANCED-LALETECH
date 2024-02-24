'use client'
import React, { useRef } from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';

import Link from 'next/link';
import LALETECH_WHITE from './images/whiteLogo.png'
import Image from 'next/image';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


function Navbar() {

  const navRef = useRef()

  const showNavbar = ()=>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
<header className='nav-container' style={{zIndex:'999'}} >
      
      <div className='social-div-responsive'>
      <Link className='social' target='_blank' href="https://www.facebook.com/profile.php?id=100094357220772&mibextid=ZbWKwL">
          <FontAwesomeIcon className='fbicon' icon={faFacebookF} />
        </Link>

        <Link className='social' target='_blank' href="https://instagram.com/laletech.mmc?igshid=MzRlODBiNWFlZA==">
        <FontAwesomeIcon className='inicon' icon={faInstagram} />
        </Link>

        <Link className='social' target='_blank' href="#">
        <FontAwesomeIcon className='linkicon' icon={faLinkedinIn} />
        </Link>

        <Link className='social' target='_blank' href="mailto:laletech4@gmail.com">
        <FontAwesomeIcon className='mailicon' icon={faEnvelope} />
        </Link>
      </div>

       <Link href='/'>
         <Image
           className='logos'
           src={LALETECH_WHITE}
           alt='Laletech'
          //  width={270}
          //  height={70}

         />
       </Link>


       <nav ref={navRef}>
          
       <Image
           className='logos2'
           src={LALETECH_WHITE}
           alt='Laletech'
           width={170}
           height={90}
       />  
          <ul className='nav-list' >
              <li>
                <Link  onClick={showNavbar}  className='link' href='/'>Ana Səhifə</Link>
              </li>
              <li>
                <Link  onClick={showNavbar}  className='link' href='/about'>Haqqımızda</Link>
              </li>
              <li>
                <Link onClick={showNavbar}  className='link' href='/references'>Referanslar</Link>
              </li>
              <li>
                <Link onClick={showNavbar}  className='link' href='/service'>Servis</Link>
              </li>
              <li>
                <Link onClick={showNavbar} target='blank' className='link' href="https://drive.google.com/file/d/1ZgNkngNKhE4nMs98THcS9gIyuydM_hS0/view?usp=sharing">Kataloq</Link>
              </li>
              <li>
                <Link onClick={showNavbar}  className='link' href='/xidmet'>Xidmətlər</Link>
              </li>
              <li>
                <Link onClick={showNavbar}  className='link' id='product' href='/products/ekin-makina'>Məhsullar</Link>
              </li>
              <li>
                <Link onClick={showNavbar}  className='link' href='/projects'>Layihələr</Link>
              </li>
              <li>
                <Link onClick={showNavbar}  className='link' href='/contact'>Əlaqə</Link>
              </li>
            </ul>

            <div className='social-div-nav'>
      <Link className='social' target='_blank' href="https://www.facebook.com/profile.php?id=100094357220772&mibextid=ZbWKwL">
          <FontAwesomeIcon className='fbicon naviconf' icon={faFacebookF} />
        </Link>

        <Link className='social' target='_blank' href="https://instagram.com/laletech.mmc?igshid=MzRlODBiNWFlZA==">
        <FontAwesomeIcon className='inicon navicon ' icon={faInstagram} />
        </Link>

        <Link className='social' target='_blank' href="#">
        <FontAwesomeIcon className='linkicon navicon' icon={faLinkedinIn} />
        </Link>

        <Link className='social' target='_blank' href="mailto:laletech4@gmail.com">
        <FontAwesomeIcon className='mailicon navicon' icon={faEnvelope} />
        </Link>
      </div>

  
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </nav>

          <div className='social-div'>
        <Link className='social' target='_blank' href="https://www.facebook.com/profile.php?id=100094357220772&mibextid=ZbWKwL">
          <FontAwesomeIcon className='fbicon' icon={faFacebookF} />
        </Link>

        <Link className='social' target='_blank' href="https://instagram.com/laletech.mmc?igshid=MzRlODBiNWFlZA==">
        <FontAwesomeIcon className='inicon' icon={faInstagram} />
        </Link>

        <Link className='social' target='_blank' href="#">
        <FontAwesomeIcon className='linkicon' icon={faLinkedinIn} />
        </Link>

        <Link className='social' target='_blank' href="mailto:laletech4@gmail.com">
        <FontAwesomeIcon className='mailicon' icon={faEnvelope} />
        </Link>


          </div>

          <button className='nav-btn' onClick={showNavbar}>
           <FontAwesomeIcon icon={faBars} />
          </button>


    </header>
  );
}

export default Navbar;







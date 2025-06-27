import React from 'react'
import styles from '../styles'
import Logo from '../assets/img/Logo.png'
import Phone from '../assets/icons/phone.svg'
import Location from '../assets/icons/location.svg'
import Email from '../assets/icons/email.svg'
import { Element } from 'react-scroll'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";


const Footer = () => {
  return (
    <div className='bg-dark-900 w-screen'>
      <div className='w-full lg:w-[90%] sm:max-w-[1138px] lg:mx-auto text-light-900 flex flex-col lg:flex-row gap-10 py-8 px-8 sm:px-16 xl:px-0 lg:justify-between'>
        <div className={`${styles.p2} tracking-wider flex flex-col lg:w-[25%]  gap-6 `}>
        <Element name='phone-no'>
        <div className='flex gap-2 items-center group hover:cursor-pointer' onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}}>
            <img id='logo1' className='w-[50px] h-[50px] group-hover:cursor-pointer' src={Logo} alt="Graysol Logo"  />
            <h1 htmlFor='logo1' className={`text-light-900 font-medium text-[38px] group-hover:pointer`}>Graysol</h1>
          </div>
          </Element>
          <p className={`${styles.p2}`} >Serving clients globally.</p>
          
          <div className='flex items-end gap-2'>
            <img className='w-[19px] h-[19px]' src={Phone} alt="phone-icon" />
            <p>+1 (646) 631-7977</p>
          </div>
          
          <div className='flex items-center gap-2'>
            <img className='w-[19px] h-[25px]' src={Location} alt="location-icon" />
            <p>Office #02, NSTP H12, Islamabad, Pakistan</p>
          </div>
          <div className='flex items-center gap-2'>
            <img className='w-[19px] h-[17px]' src={Email} alt="email-icon" />
            <p>contact@graysol.co</p>
          </div>
        </div>
        <div className='space-y-8 lg:w-[25%]  '>
          <div>
            <p className={`${styles.p2Heavy} text-primary-default`}>INFORMATION</p>
            <ul className={`${styles.p2} space-y-3 list-disc list-inside mt-5`}>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Acceptable Use Policy</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>GDPR</li>
            </ul>
          </div>
        </div>

        <div className='lg:w-[25%]  space-y-8'>
          <div  className={`${styles.p2} space-y-6`}>
            <p className={`${styles.p2} text-primary-default`}>WE ARE AT</p>
            <ul className='space-y-3 list-disc list-inside'>
              <li className=''>United States</li>
              <li className=''>Pakistan</li>
              <li className=''>Qatar</li>
            </ul>
          </div>
          <div>
            <p className={`${styles.p2Heavy} text-primary-default`}>SOCIAL MEDIA</p>
            <div className={`flex md:ml-4 mt-6 gap-5`}>
            <a href="https://www.linkedin.com/company/graysol-llc/" target='_blank'>
                    <ImLinkedin 
                        size={30} 
                        onClick={()=>{
                        setIsOpen(!isOpen);
                        }}
                    />
                  </a>
                  <a href="" target='_blank'><FaFacebook  size={30} /></a>
                  <a href="" target='_blank'><FaInstagram size={30} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-[90%] sm:max-w-[1138px]  mx-auto bg-dark-900 text-light-900  pl-[8vw] sm:pl-16 xl:pl-0   py-4 lg:py-6 lg:mt-8'>
              <p className={`font-light ${styles.p2}`}>
                <span className=' text-dark-100'>&copy; </span>
                2025 Graysol LLC. All Rights Reserved
              </p>
      </div>
    </div>
  )
}

export {Footer}
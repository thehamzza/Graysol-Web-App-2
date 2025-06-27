import React,{useEffect,useState} from 'react'
import MobileBanner from "../assets/img/MobileBanner.png";
import BannerImg from "../assets/img/BannerImg.png";
import styles from '../styles.js'
import useWindowSize from '../hooks/windowSize.js'
import {Button} from '../Components/Button.jsx';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

const HomeBanner = () => {
  const windowSize = useWindowSize();

  //take the name of the section to scroll to as an argument and scroll to that section after 100ms delay to allow the page to render
  const scrollToSection = (sectionName) => {
    setTimeout(() => {
        scroller.scrollTo(sectionName, {
          duration: 100,
          smooth: 'easeInOutQuart',
          offset:30
        });
      }, 100);
  }
  return (
    <div className='flex flex-col sm:w-screen sm:h-[25rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem]  sm:justify-end md:justify-around md:pt-12 bg-secondary-500 pb-12 sm:bg-cover bg-right   bg-no-repeat bg-center ' style={{backgroundImage:windowSize >= 640 ? `url(${BannerImg})` : 'none' }}>
        <img className='w-screen sm:hidden' src={windowSize <'640'? MobileBanner : BannerImg} alt="" />
        <div className='flex flex-col sm:w-[75%] md:w-[70%]  text-center sm:text-start gap-8 sm:gap-5 lg:gap-10 px-8 md:pl-[10%] ' >
            <h1 className={`${styles.h1} text-[37px]`}>Bring Your Idea to Life<br/>With <span className='text-primary-default uppercase'>Graysol</span></h1>
            <h6 className={`${styles.h6} leading-5 md:w-[85%]`}>
            {/* Gray Solutions is a leading software agency that provides web app development, custom software development, cloud solutions, and IT consultation. Our team of experienced professionals uses cutting-edge technology to optimize business processes, boost productivity, and drive growth for our clients. We're committed to building long-term relationships with our clients and delivering outstanding results. */}
            Graysol is a full-service software development agency.<br/>
            We turn ideas into powerful digital products — fast, simple, and tailored to you.
            </h6>
            <Link 
              to='/contact'
              onClick={() => scrollToSection('contact-form')}
            >
              <Button name='GET A QUOTE' className={`${windowSize < 768 ? 'hidden' : 'visible'} px-4 rounded-lg`}/>
            </Link>
        </div>
    </div>
  )
}

export { HomeBanner}
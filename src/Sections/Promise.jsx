import React from 'react'
import styles from '../styles'
import {PromiseCard} from '../Components/PromiseCard'
import Like from "../assets/icons/like.svg";
import Shield from "../assets/icons/shield.svg"; 
import Heart from "../assets/icons/heart.svg";
import Office from '../assets/img/office.png';
import {Button} from '../Components/Button';
import useWindowSize from '../hooks/windowSize';
import {scroller} from 'react-scroll';
import { Link } from 'react-router-dom';

const Promise = () => {
  const windowSize = useWindowSize();

/**
 * Scrolls immediately to a section identified by its ID on the page.
 *
 * @param {string} sectionId - The ID of the section to scroll to.
 */
  const scrollToSection = (sectionName) => {
    setTimeout(() => {
        scroller.scrollTo(sectionName, {
          duration: 100,
          smooth: 'easeInOutQuart',
          offset:-100
        });
      }, 500);
  }


  const promiseCard1 ="To offer professional and helpful support. You would not need to go anywhere else.";
  const promiseCard2 ="Customers can get help at any time of day or night. We offer free support for a limited time.";
  const promiseCard3 ="High-quality, data-driven solutions that are efficient, scalable, and customized to your exact needs.";


  return (
    <div className='w-screen bg-dark-900 flex flex-col items-center justify-center gap-12 xl:gap-24 md:gap-16 py-10 xl:py-24'>
        <h1 className={styles.h1}>Our Promise</h1>
        <div className='w-[80%] py-8 lg:py-16 xl:py-32 px-6 md:px-10 xl:px-16 bg-light-900 rounded-2xl lg:rounded-3xl xl:rounded-[40px] flex flex-col lg:flex-row  items-center justify-evenly gap-5 xl:gap-5 2xl:gap-10'>
            <PromiseCard icon={Like} detail={promiseCard1} iconStyling='w-[45px] h-[43px]' cardStyling='h-[13rem] xl:h-[16rem] '/>
            <PromiseCard icon={Heart} detail={promiseCard2} iconStyling='w-[45px] h-[42px]' cardStyling='h-[13rem] xl:h-[16rem]'/>
            <PromiseCard icon={Shield} detail={promiseCard3} iconStyling='w-[35px] h-[47px]' cardStyling='h-[13rem] xl:h-[16rem]'/>
        </div>
        <div className='flex w-[80%] gap-10 lg:gap-16 justify-center md:mt-10'>
            <img className={`${windowSize < 768 ? 'hidden': 'visible'} w-[50%] lg:w-[45%] h-64 lg:h-72 xl:w-[38rem] xl:h-[25rem] object-cover mt-8`} src={Office} alt="" />
            <div className='flex flex-col md:w-[40%] xl:w-[45%] gap-8 items-center md:items-start'>
                <h1 className={`${styles.h1} text-center md:text-start`}>Ensuring 100% Satisfaction</h1>
                <div>
                    <p className={`${styles.p2} mb-4 text-center md:text-start`}>Our team of software engineers and IT support experts makes sure that you get un-interrupted service.</p>
                    <ul className={`${styles.p2} list-disc list-outside space-y-2 ml-4`}>
                        <li>Experienced team of engineers and designers with a combined experience of 10 years.</li>
                        <li>Proven track record of delivering useful software solutions.</li>
                        <li>Use of the latest technologies and best practices</li>
                        <li>Agile development process to ensure timely delivery and regular updates</li>
                        <li>Access around the clock and support.</li>
                        <li>Reasonable costs and flexible engagement models.</li>
                        <li>Commitment to client satisfaction.</li>
                    </ul>
                </div>
                <Link
                    to='contact'
                    onClick={()=> scrollToSection('contact-form')}
                >
                    <Button name='Talk To us' className='px-4 rounded-lg'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export {Promise}
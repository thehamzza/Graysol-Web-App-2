import React from 'react'
import AboutUsBanner from '../assets/img/aboutUsBanner.png'
import styles from '../styles'

const AboutPageBanner = () => {
  return (
    <div className={`bg-dark-900 text-light-900 py-8 space-y-8 text-center`}>
        <div className='w-[95%] sm:w-[90%] lg:w-[90%] max-w-[1220px] h-64 md:h-80 lg:h-96 xl:h-[30rem] mx-auto relative flex flex-col items-center justify-center gap-5 md:gap-8 px-[2%] md:px-[8%] after:absolute after:bg-primary-700 after:inset-0  after:opacity-80 after:z-20'>
            <img
            className='absolute inset-0 h-full w-full object-cover object-center z-10' 
            src={AboutUsBanner}
            alt="Banner Image of  About Page" 
            />
            <h1 className={`${styles.h1} relative z-30`}>
                REBELS WITH A CAUSE
            </h1>
            <p className={`${styles.p3} relative z-30`}>
                Graysol is a group of unconventional thinkers who thrive on pushing boundaries and accepting challenges that others avoid. From assembling a team of audacious solutioneers to handpicking partners with cutting-edge technology, we are proud of the company we keep and the work we do.     
            </p>
        </div>
        <h5 className={`${styles.h5}`}>
            We’re Here To 
            <span className='text-primary-default'>
               &nbsp; Revolutionize Digital Industry.
            </span>
        </h5>
    </div>
  )
}

export {AboutPageBanner}
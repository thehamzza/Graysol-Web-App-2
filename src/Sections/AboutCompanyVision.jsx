import React,{useState,useRef} from 'react'
import styles from '../styles'
import Commas from '../assets/icons/commas.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const AboutCompanyVision = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  return (
    <div className='bg-dark-900 pt-12  md:pt-16 pb-8 md:pb-10 sm:px-[10%] lg:px-[5%] text-light-900 space-y-16 lg:space-y-20'>

      <div className='space-y-3 '>
        <h2 className={`${styles.h2} capitalize text-center`}>
            what we believe in
        </h2>
        <h3 
          className={`${styles.h3} text-center capitalize tracking-wide`}>
          Trust, safety, and <span className='text-primary-default'>
            people-first
            </span> collaboration always.
        </h3>
      </div>

      <div className='grid grid-cols-3 w-[90%] max-w-[1250px] mx-auto '>
        <div className='grid grid-cols-subgrid col-span-3 border-y-[3px] place-items-center  border-primary-default'>
          <h3 className={`${styles.h3} col-span-1 tracking-wide `}>
            Our Values
          </h3>
          <div className='col-span-2 border-l-[3px] border-primary-default pl-6 md:pl-10 lg:pl-16 lg:pr-2 pb-3 md:pb-5 lg:pb-7 pt-5 space-y-4'>
            <p className={styles.p2}>
              As a company within the Gray family, we share and live by these values each day.
            </p>
            <ul className={`${styles.p2} list-disc space-y-2 md:space-y-4`}>
              <li>
                We put safety and quality of life first.
              </li>
              <li>
                We are customer and relationship driven.
              </li>
              <li>
                We treat others the way we want to be treated, where everyone is welcome and respected.
              </li>
            </ul>
          </div>
        </div>

        <div className='grid grid-cols-subgrid col-span-3 border-b-[3px] border-primary-default'>
          <h3 className={`${styles.h3} col-span-1 text-center my-auto tracking-wide `}>
            Our Vision
          </h3>
          <div className='col-span-2 border-l-[3px] border-primary-default pl-6 md:pl-10 lg:pl-16 lg:pr-2 py-5 md:py-10 lg:py-14'>
            <p className={styles.p2}>
              The trusted leader in process innovation where the best want to belong.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-subgrid col-span-3 border-b-[3px] border-primary-default place-items-center'>
          <h3 className={`${styles.h3} col-span-1 text-center tracking-wide `}>
            Our Vision
          </h3>
          <div className='col-span-2 border-l-[3px] border-primary-default pl-6 md:pl-10 lg:pl-16 lg:pr-2 py-5 md:pt-10 lg:pt-12 lg:pb-8'>
            <p className={styles.p2}>
              Trusted advisors delivering outcome based solutions through deep collaboration and lasting partnerships, while providing fulfilling team experiences.
            </p>
          </div>
        </div>
      </div>

      <div className='space-y-8 lg:space-y-16 max-w-[1250px] mx-auto'>
        <h2 className={`${styles.h2} text-center`}>
          Our Histroy
        </h2>
        <div className={`relative flex flex-col lg:flex-row w-[90%] xl:w-full mx-auto gap-12 lg:gap-6 xl:gap-12`}>
            <div className='space-y-6 lg:w-2/5 text-center lg:text-start'>
              <h3 className={`${styles.h3} font-medium tracking-wide`}>
                Where it Began
              </h3>
              <p className={`${styles.p2} capitalize `}>
                When CEO Walker Mattox founded Gray Solutions, he set out to shake up an industry that relies too heavily on inside-the-box thinking. Fast forward to today, and we’re a thriving system integrator who is revolutionizing business for our customers and ourselves.
              </p>
              <div className='space-y-3 flex flex-col items-center lg:items-start lg:pt-5'>
                <img
                  className='w-6'
                  src={Commas}
                  alt="The commas icons" 
                />
                <p className={`${styles.p2}`}>
                  There’s nothing more inspiring than seeing a product out in the world that our Solutioneers have influenced or helped bring to market with innovative thinking.
                </p>
                <p className={`${styles.p4} tracking-wider`}>
                  Walker Mattox
                </p>
              </div>
              
            </div>
            <div className='w-full lg:w-3/5  border-2 border-primary-default'>
                <Slider 
                  ref={slider => {sliderRef = slider;}}
                  {...settings}>
                    {/* 1st slide */}
                  <div className=' p-6 md:p-8 space-y-10 lg:space-y-16'>
                    <h4 className={`${styles.h4}`}>
                      Gray Solution Is Founded
                    </h4>
                    <div className='space-y-3 lg:space-y-5'>
                      <div className={`flex items-center gap-2 tracking-wide ${styles.p4}`}>
                          <span 
                          className='w-2 h-2 static inline-block bg-primary-default rounded-full'>
                          </span> 
                          2018
                      </div>
                      <p className={`capitalize ${styles.p3}`}>
                        When CEO Walker Mattox founded Gray Solutions, he set out to shake up an industry that relies too heavily on Inside-the-box thinking. Backed by Gray, a global leader recognized for services spanning engineering, design, construction, and specialty equipment manufacturing, Gray Solutions earned its stripes on a world-class pet food operation. Fast forward to today, and we're a thriving system integrator who is revolutionizing business for our customers and ourselves.
                      </p>
                    </div>
                  </div>
                  {/* 2nd Slide */}
                  <div className=' p-6 md:p-8 space-y-10 lg:space-y-16'>
                    <h4 className={`${styles.h4}`}>
                      Gray Solution Is Founded
                    </h4>
                    <div className='space-y-3 lg:space-y-5'>
                      <div className={`flex items-center gap-2 tracking-wide ${styles.p4}`}>
                          <span 
                          className='w-2 h-2 static inline-block bg-primary-default rounded-full'>
                          </span> 
                          2018
                      </div>
                      <p className={`capitalize ${styles.p3}`}>
                        When CEO Walker Mattox founded Gray Solutions, he set out to shake up an industry that relies too heavily on Inside-the-box thinking. Backed by Gray, a global leader recognized for services spanning engineering, design, construction, and specialty equipment manufacturing, Gray Solutions earned its stripes on a world-class pet food operation. Fast forward to today, and we're a thriving system integrator who is revolutionizing business for our customers and ourselves.
                      </p>
                    </div>
                  </div>
                  {/* 3rd slide */}
                  <div className=' p-6 md:p-8 space-y-10 lg:space-y-16'>
                    <h4 className={`${styles.h4}`}>
                      Gray Solution Is Founded
                    </h4>
                    <div className='space-y-3 lg:space-y-5'>
                      <div className={`flex items-center gap-2 tracking-wide ${styles.p4}`}>
                          <span 
                          className='w-2 h-2 static inline-block bg-primary-default rounded-full'>
                          </span> 
                          2018
                      </div>
                      <p className={`capitalize ${styles.p3}`}>
                        When CEO Walker Mattox founded Gray Solutions, he set out to shake up an industry that relies too heavily on Inside-the-box thinking. Backed by Gray, a global leader recognized for services spanning engineering, design, construction, and specialty equipment manufacturing, Gray Solutions earned its stripes on a world-class pet food operation. Fast forward to today, and we're a thriving system integrator who is revolutionizing business for our customers and ourselves.
                      </p>
                    </div>
                  </div>
                  {/* 4th slide */}
                  <div className=' p-6 md:p-8 space-y-10 lg:space-y-16'>
                    <h4 className={`${styles.h4}`}>
                      Gray Solution Is Founded
                    </h4>
                    <div className='space-y-3 lg:space-y-5'>
                      <div className={`flex items-center gap-2 tracking-wide ${styles.p4}`}>
                          <span 
                          className='w-2 h-2 static inline-block bg-primary-default rounded-full'>
                          </span> 
                          2018
                      </div>
                      <p className={`capitalize ${styles.p3}`}>
                        When CEO Walker Mattox founded Gray Solutions, he set out to shake up an industry that relies too heavily on Inside-the-box thinking. Backed by Gray, a global leader recognized for services spanning engineering, design, construction, and specialty equipment manufacturing, Gray Solutions earned its stripes on a world-class pet food operation. Fast forward to today, and we're a thriving system integrator who is revolutionizing business for our customers and ourselves.
                      </p>
                    </div>
                  </div>
                  {/* 5th slide */}
                  <div className=' p-6 md:p-8 space-y-10 lg:space-y-16'>
                    <h4 className={`${styles.h4}`}>
                      Gray Solution Is Founded
                    </h4>
                    <div className='space-y-3 lg:space-y-5'>
                      <div className={`flex items-center gap-2 tracking-wide ${styles.p4}`}>
                          <span 
                          className='w-2 h-2 static inline-block bg-primary-default rounded-full'>
                          </span> 
                          2018
                      </div>
                      <p className={`capitalize ${styles.p3}`}>
                        When CEO Walker Mattox founded Gray Solutions, he set out to shake up an industry that relies too heavily on Inside-the-box thinking. Backed by Gray, a global leader recognized for services spanning engineering, design, construction, and specialty equipment manufacturing, Gray Solutions earned its stripes on a world-class pet food operation. Fast forward to today, and we're a thriving system integrator who is revolutionizing business for our customers and ourselves.
                      </p>
                    </div>
                  </div>
                  {/* 6th slide */}
                  <div className=' p-6 md:p-8 space-y-10 lg:space-y-16'>
                    <h4 className={`${styles.h4}`}>
                      Gray Solution Is Founded
                    </h4>
                    <div className='space-y-3 lg:space-y-5'>
                      <div className={`flex items-center gap-2 tracking-wide ${styles.p4}`}>
                          <span 
                          className='w-2 h-2 static inline-block bg-primary-default rounded-full'>
                          </span> 
                          2018
                      </div>
                      <p className={`capitalize ${styles.p3}`}>
                        When CEO Walker Mattox founded Gray Solutions, he set out to shake up an industry that relies too heavily on Inside-the-box thinking. Backed by Gray, a global leader recognized for services spanning engineering, design, construction, and specialty equipment manufacturing, Gray Solutions earned its stripes on a world-class pet food operation. Fast forward to today, and we're a thriving system integrator who is revolutionizing business for our customers and ourselves.
                      </p>
                    </div>
                  </div>
                </Slider>
            </div>
        </div>
        <div className={`${styles.h5Heavy} text-center flex justify-center items-center gap-3  tracking-wider`}>
             <IoIosArrowBack className='hover:fill-primary-default hover:cursor-pointer' onClick={previous} size={30}/>
             <h5>{currentSlide+1} / 6</h5> 
             <IoIosArrowForward className='hover:fill-primary-default hover:cursor-pointer ' onClick={next} size={30}/>
        </div>
      </div>

    </div>
  )
}

export {AboutCompanyVision}
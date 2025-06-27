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
                Customer First: We prioritize relationships and exceed expectations.
              </li>
              <li>
                Innovation: Our solutions are driven by bold ideas.
              </li>
              <li>
                Integrity: We operate with trust and confidentiality.
              </li>
              <li>
               Quality of Life: We improve people's lives by providing meaningful digital experiences.
              </li>
              <li>
                Inclusion: Everyone is valued, respected, and heard.
              </li>
              <li>
                Growth: We value learning and continuous improvement.
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
              Empower businesses with innovative software solutions that create meaningful change and long-term impact.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-subgrid col-span-3 border-b-[3px] border-primary-default place-items-center'>
          <h3 className={`${styles.h3} col-span-1 text-center tracking-wide `}>
            Our Mission
          </h3>
          <div className='col-span-2 border-l-[3px] border-primary-default pl-6 md:pl-10 lg:pl-16 lg:pr-2 py-5 md:pt-10 lg:pt-12 lg:pb-8'>
            <p className={styles.p2}>
              Provide customized technology solutions that simplify processes, solve real-world challenges, and accelerate business growth.
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
                Graysol was born from a bold idea in a dorm room at NUST, with the goal of changing the software industry by providing simple, efficient solutions to solve customer issues. From the beginning, we were committed to making an impact through innovative thinking and providing free consultations to assist businesses in taking the first steps toward growth. What started as a product-based initiative quickly grew into a full-service development agency, motivated by a desire to help businesses across industries.
              </p>
              <div className='space-y-3 flex flex-col items-center lg:items-start lg:pt-5'>
                <img
                  className='w-6'
                  src={Commas}
                  alt="The commas icons" 
                />
                <p className={`${styles.p2}`}>
                  Nothing inspires me more than seeing our solutions thrive in the real world, bringing ideas to life and making an actual difference.  </p>
                <p className={`${styles.p4} tracking-wider`}>
                  Jordan Blake
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
                      Graysol Is Founded
                    </h4>
                    <div className='space-y-3 lg:space-y-5'>
                      <div className={`flex items-center gap-2 tracking-wide ${styles.p4}`}>
                          <span 
                          className='w-2 h-2 static inline-block bg-primary-default rounded-full'>
                          </span> 
                          2019
                      </div>
                      <p className={`capitalize ${styles.p3}`}>
                      Founded in a university dorm room with the goal of changing the industry by offering quick, easy solutions and free consultations.
                      </p>
                    </div>
                  </div>
                  {/* 2nd Slide */}
                  <div className=' p-6 md:p-8 space-y-10 lg:space-y-16'>
                    <h4 className={`${styles.h4}`}>
                       Built and Shipped Products
                    </h4>
                    <div className='space-y-3 lg:space-y-5'>
                      <div className={`flex items-center gap-2 tracking-wide ${styles.p4}`}>
                          <span 
                          className='w-2 h-2 static inline-block bg-primary-default rounded-full'>
                          </span> 
                          2020
                      </div>
                      <p className={`capitalize ${styles.p3}`}>
                      Built and launched SaaS products; some were successful, others failed, and a few were sold. Lessons from failed ventures shaped our growth and refined our strategy.
                      </p>
                    </div>
                  </div>
                  {/* 3rd slide */}
                  <div className=' p-6 md:p-8 space-y-10 lg:space-y-16'>
                    <h4 className={`${styles.h4}`}>
                    Transitioned to Service-Based Operations
                    </h4>
                    <div className='space-y-3 lg:space-y-5'>
                      <div className={`flex items-center gap-2 tracking-wide ${styles.p4}`}>
                          <span 
                          className='w-2 h-2 static inline-block bg-primary-default rounded-full'>
                          </span> 
                          2021
                      </div>
                      <p className={`capitalize ${styles.p3}`}>
                      Completed the transition to service-based operations, growing the team and establishing itself as a trustworthy partner to businesses across industries.
                      </p>
                    </div>
                  </div>
                  {/* 4th slide */}
                  <div className=' p-6 md:p-8 space-y-10 lg:space-y-16'>
                    <h4 className={`${styles.h4}`}>
                       Grew Global Presence Through Key Partnerships
                    </h4>
                    <div className='space-y-3 lg:space-y-5'>
                      <div className={`flex items-center gap-2 tracking-wide ${styles.p4}`}>
                          <span 
                          className='w-2 h-2 static inline-block bg-primary-default rounded-full'>
                          </span> 
                          2022
                      </div>
                      <p className={`capitalize ${styles.p3}`}>
                        Partnered with over 30 US businesses, mainly in the wellness and healthcare sectors, and formed new alliances to expand our services globally.

                      </p>
                    </div>
                  </div>
                  {/* 5th slide */}
                  <div className=' p-6 md:p-8 space-y-10 lg:space-y-16'>
                    <h4 className={`${styles.h4}`}>
                      Expanded to Qatar, USA, Pakistan
                    </h4>
                    <div className='space-y-3 lg:space-y-5'>
                      <div className={`flex items-center gap-2 tracking-wide ${styles.p4}`}>
                          <span 
                          className='w-2 h-2 static inline-block bg-primary-default rounded-full'>
                          </span> 
                          2023
                      </div>
                      <p className={`capitalize ${styles.p3}`}>
                       International operations expanded, with a presence in Qatar, the United States, and Pakistan.
                      </p>
                    </div>
                  </div>
                  {/* 6th slide */}
                  <div className=' p-6 md:p-8 space-y-10 lg:space-y-16'>
                    <h4 className={`${styles.h4}`}>
                      Our Work Featured in Times Square and Forbes
                    </h4>
                    <div className='space-y-3 lg:space-y-5'>
                      <div className={`flex items-center gap-2 tracking-wide ${styles.p4}`}>
                          <span 
                          className='w-2 h-2 static inline-block bg-primary-default rounded-full'>
                          </span> 
                          2024
                      </div>
                      <p className={`capitalize ${styles.p3}`}>
                        Reached a major milestone with a feature on the iconic Times Square billboard, while our clients were recognized in Fortune 500 and Forbes, highlighting our journey and shared success.
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
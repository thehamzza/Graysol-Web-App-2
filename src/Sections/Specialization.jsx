import React, { useState } from 'react'
import styles from '../styles'
import { IoIosArrowDown } from "react-icons/io";
import {Button} from '../Components/Button';
import useWindowSize from '../hooks/windowSize';
import { Link } from 'react-router-dom';
import {scroller} from 'react-scroll';

const Specialization = ({pageType=''}) => {
  const technologies = pageType.technologies;

  const [visibility,setVisibility] = useState(Array(technologies.length).fill(false));
  const [arrowFillColor,setArrowFillColor] = useState(Array(technologies.length).fill(false));
  const windowSize = useWindowSize();

//   this function is only changing the visibilty to block of hovered specialized field
  const handleMouseEnter = (index) => {
    if (windowSize <= 768) return; // to not show the hover effect on smaller screen
    const newVisibility = visibility.map((v, i) => (i === index ? true : v));
    setVisibility(newVisibility);
  };

//   this function is only changing the visibilty to hidden of hovered specialized field
  const handleMouseLeave = (index) => {
    if (windowSize <= 768) return;// to not show the hover effect on smaller screen
    const newVisibility = visibility.map((v, i) => (i === index ? false : v));
    setVisibility(newVisibility);
  };

//   this function is only changing the visibilty of hovered specialized field by toggling, this is for small screen upto 768px
  const handleClick= (index) => {
    const newVisibility = visibility.map((v, i) => (i === index ? !visibility[i] : v));
    setVisibility(newVisibility);
  }

// used for changing the arrow color whenever hovered or clicked
  const handleArrowColor= (index) => {
    const newColor = arrowFillColor.map((v, i) => (i === index ? !arrowFillColor[i] : v));
    setArrowFillColor(newColor);
  }

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
      }, 100);
  }

  return (
    <div className='bg-dark-900 py-10 space-y-8'>
        <h1 className={`${styles.h1} text-center`}>We specialize in</h1>
        <div className='bg-dark-700 mx-auto max-w-[1267px] rounded-2xl flex flex-col w-[85%] gap-y-12 md:gap-y-16 lg:gap-y-24 pb-10 md:pt-5 md:pb-20 lg:pt-8'>
            <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 md:gap-y-10 lg:gap-y-16'>
                {pageType.technologies.map((item,index)=>(
                    <div key={index} className='flex flex-col items-center'>
                      <div className=' relative flex items-center justify-center py-5 border-b-2 border-primary-default w-44 xl:w-72 h-24'>
                        <h4 className={`${styles.h4} text-center `}>{item.name}</h4>
                        <div
                            key={index} 
                            className='absolute bottom-2 right-2' 
                            // onMouseEnter={()=>handleMouseEnter(index)}
                            // onMouseLeave={() => handleMouseLeave(index)}
                            onClick={()=>handleClick(index)}
                        >
                            <IoIosArrowDown className={`${arrowFillColor[index] ? 'max-md:fill-primary-default scale-150': 'scale-100'} md:hover:fill-primary-default md:hover:scale-150 duration-150 cursor-pointer`} size={22} color='#686767' onClick={()=>handleArrowColor(index)} />
                        </div>
                      </div>
                        <div className={`${styles.p4} ${visibility[index] ? 'visible h-[16.5rem] md:h-[21rem] pt-3':'collapse h-0 pt-0'} overflow-hidden duration-1000 transition-all w-52 md:w-56 lg:w-60 xl:w-72  bg-dark-200 z-50  px-3 rounded-b-md tracking-wide`} style={{fontWeight:300}}>
                        <ul className='space-y-2 lg:space-y-3 list-disc custom-list pl-4'>
                          {Object.keys(item.description).map((key)=>(
                            <li>
                              <span className={`${styles.p4Heavy } font-normal capitalize  pr-2`}>{key}:</span>
                              {item.description[key]}
                            </li>
                          ))}
                        </ul>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='flex justify-center'>
              <Link to='/contact' onClick={()=> scrollToSection('contact-form')}>
                <Button name='Chat with Us' className='px-5 py-3 rounded-lg' />
              </Link>
            </div>
           
        </div>
        
    </div>
  )
}

export {Specialization}
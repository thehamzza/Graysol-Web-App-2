import React from 'react'
import styles from '../styles'
import Input from '../Components/Input'
import Button from '../Components/Button'

const ContactForm = () => {
  return (
    <div className='bg-dark-900 pt-10 pb-16 space-y-8 text-light-900'>
        <h1 className={`${styles.headingText} text-center`}>Reach us</h1>
        <form className={`bg-dark-300 w-[90%] flex flex-col items-center mx-auto rounded-2xl py-10 gap-4`}>
            <div className='flex flex-col md:flex-row md:justify-around items-center w-full gap-4 md:gap-0 '>
                    <Input className='w-11/12 md:w-5/12 py-[9px]' placeholder='First Name'/>
                    <Input className='w-11/12 md:w-5/12' placeholder='Last Name'/>
            </div>
            <div className='flex flex-col md:flex-row md:justify-around items-center w-full gap-4 md:gap-0 '>
                    <Input className='w-11/12 md:w-5/12' placeholder='Email'/>
                    <Input className='w-11/12 md:w-5/12' placeholder='Phone Number'/>
            </div>
            <Input className='w-11/12 ' placeholder='Company Name'/>
            <textarea className='w-11/12 h-32  bg-light-300 text-dark-700 rounded px-2 py-[8px] placeholder-dark-900 placeholder:opacity-70 focus:placeholder-opacity-50 text-[12px] resize-none font-light md:font-normal lg:font-medium tracking-wide' placeholder='What You are working on?' resize name="" id=""></textarea>
            <div className='w-11/12 flex items-start space-x-3'>
                <input type="checkbox" id='checkbox1' className='mt-[3px]'  />
                <label htmlFor="checkbox1" className='text-[12px] md:text-[15px] lg:text-[18px]'>
                    I UNDERSTAND THE INFORMATION I PROVIDE IN THIS FORM WILL BE HANDLED IN ACCORDANCE WITH GRAY SOLUTIONS PRIVACY POLICY, AND I AGREE TO ITS TERMS.
                </label>
            </div>
            <div className='w-11/12 flex items-start space-x-3'>
                <input type="checkbox" id='checkbox2' className='mt-[3px]'  />
                <label htmlFor="checkbox2" className='text-[12px] md:text-[15px] lg:text-[18px]'>
                    I WOULD LIKE TO RECEIVE MARKETING COMMUNICATIONS FROM GRAY SOLUTIONS.
                </label>
            </div>

            <Button name='Submit' className='px-10 rounded-lg mt-5 text-sm'/>
            
        </form>
    </div>
  )
}

export default ContactForm
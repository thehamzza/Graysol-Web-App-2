import React from 'react'
import styles from '../styles'
import {HelpCard} from '../Components/HelpCard'

const Help = ({page, pageType=''}) => {
    
  const homeHelpCard = [
  {
    title: "Reliable Service",
    description:
      "Our outsourcing model provides consistent, high-quality solutions to keep your business running smoothly. You can count on us to deliver without disruption. We stay reliable so you can stay focused."
  },
  {
    title: "Skilled Professionals",
    description:
      "Experts manage a talented team of developers and designers to deliver tailored solutions that meet your needs. Every team member brings deep expertise and focus. We bring the right people to your project."
  },
  {
    title: "Dedicated Team",
    description:
      "Get full support from project managers, engineers, designers, and technical staff committed to your project. Your goals are our priority at every stage. We’re with you from idea to launch."
  },
  {
    title: "Custom Solutions",
    description:
      "We tailor solutions to your business's specific needs, goals, and challenges. No off-the-shelf answers—just what fits your vision best. Every line of code reflects your needs."
  },
  {
    title: "Multi-Industry Expertise",
    description:
      "Our team has extensive experience in various industries, including Fintech, Healthcare, EdTech, Retail, and Media. We adapt fast to your industry's unique demands. We speak your industry's language."
  },
  {
    title: "Cost-Effective",
    description:
      "Get high-quality services at reasonable rates with flexible engagement models that fit your budget. Save costs without compromising on quality. Invest smart with Graysol."
  }
]
  
  return (
    <div className='w-screen bg-dark-900 py-4 lg:py-10 xl:py-16'>
        <div className='w-[90%] sm:w-[80%] md:w-[90%]  bg-dark-700 max-w-[1400px] mx-auto rounded-xl flex flex-col items-center py-8 md:py-16 lg:py-20 gap-6 md:gap-8 lg:gap-12'>
            <h1 className={`${styles.h1}`}>How We Help</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-32 xl:gap-x-52 gap-y-4 md:gap-y-8 '>
                {page === 'Home' ? homeHelpCard.map((card,index)=>(
                    <HelpCard key={index} page={page} title={card.title} index={index+1} description={card.description} />
                    // the below line of code is taking data coming from prop for different type of service pages
                )):pageType.helpSectionService.map((card,index)=>(
                    <HelpCard key={index} page={page} title={card.title} index={index+1} description={card.description} />
                ))}
            </div>
        </div>
    </div>
  )
}

export { Help}
import React from 'react'
import styles from '../styles'
import HelpCard from '../Components/HelpCard'

const Help = ({page}) => {
  const homeHelpCard = [
    {
        title: "High Quality Service",
        description: "Software development outsourcing allows companies to save money and resources while still getting high-quality software development services. Graysol specializes in providing these outsourcing services to businesses of all sizes."
    },
    {
        title: "Highly Skilled Team",
        description: "Our experienced software developers work under a project manager tobuild custom software solutions that meet your specific business needs. They have worked on a variety of projects for clients in various industries."
    },
    {
        title: "Custom Solutions",
        description: "Our efficient and skilled software developers build custom software solutions that meet your specific business needs and so you can have tailored solutions well suited for your business."
    },
    {
        title: "Multi Industry Experience",
        description: "Our experts have worked on a variety of projects for clients in various industries, and they have the technical expertise and experience to handle even the most complex software development projects."
    },
    {
        title: "Cost Effective",
        description: "Outsourcing software development services & support needs to Graysol can be much more cost-effective than hiring an in-house team. We offer flexible engagement models that allow you to choose the level of involvement you want in the development process."

    },
    {
        title: "Dedicated Team",
        description: "Whether you need a dedicated team to work on a project or just want to hire a few developers on an as-needed basis, Graysol can providea solution that meets your needs by meeting the highest standards of quality."
    },
  ]
  const serviceHelpCard = [
    {
        title: "",
        description: ""
    },
    {
        title: "",
        description: ""
    },
    {
        title: "",
        description: ""
    },
    {
        title: "",
        description: ""
    },
    {
        title: "",
        description: ""
    },
    {
        title: "",
        description: ""
    },
  ]
  return (
    <div className='w-screen bg-dark-900 py-4'>
        <div className='w-[90%] bg-dark-700 mx-auto rounded-xl flex flex-col items-center py-8 gap-6'>
            <h2 className={`${styles.headingText}`}>How We Help</h2>
            <div className='grid col-span-1 gap-y-4'>
                {page === 'Home' ? homeHelpCard.map((card,index)=>(
                    <HelpCard key={index} page={page} title={card.title} index={index+1} description={card.description} />
                )):serviceHelpCard.map((card,index)=>(
                    <HelpCard key={index} page={page} title={card.title} index={index+1} description={card.description} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Help
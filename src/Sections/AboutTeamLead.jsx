import React from 'react'
import styles from '../styles'
import TeamLead1 from '../assets/img/aboutPerson1.png'
import TeamLead2 from '../assets/img/aboutPerson2.png'
import TeamLead3 from '../assets/img/aboutPerson3.png'
import TeamLead4 from '../assets/img/aboutPerson4.png'


const AboutTeamLead = () => {

  const teamLeadData = [

    // File: src/Sections/AboutTeamLead.jsx

    // Commented out the entire `teamLeadData` array within the AboutTeamLead component to temporarily remove all team member cards from the About page.

    // - No JSX or rendering logic was removed.
    // - The section will still render its container and static heading, but without any team members shown.
    // - All individual objects (Jordan Blake, Muhammad Hamza, Haris Javed, Kamran Danish) remain in the code for easy reactivation.
    // - This is a non-destructive temporary change for design/content staging.

    // To restore, simply uncomment the `teamLeadData` array.
    // ----------------
    // {
    //     name: 'Jordan Blake',
    //     position: 'Chief Executive Officer',
    //     image: TeamLead1,
    // },
    // {
    //     name: 'Muhammad Hamza',
    //     position: 'Chief Technical Officer',
    //     image: TeamLead2,
    // },
    // {
    //     name: 'Haris Javed',
    //     position: 'Head of Engineering Department',
    //     image: TeamLead3,
    // },
    // {
    //     name: 'Kamran Danish',
    //     position: 'Senior Web Developer',
    //     image: TeamLead4,
    // },
  ];

  return (
    <div className='bg-dark-900 py-8 text-center'>
            <h2 className={`${styles.h2}`}>
                Get to Know Us
            </h2>
            <p className={`${styles.p2} mt-5 px-[8%]`}>
                Our top Solutioneers lead with passion and humility, and they keep things real with a healthy dose of sarcasm.
            </p>
            <div className={`w-[90%] sm:w-full mx-auto rounded-3xl sm:rounded-none bg-dark-800 grid grid-cols-1 sm:grid-cols-2 mt-3 py-8 sm:py-16 sm:px-[6%] place-items-center gap-8 sm:gap-x-6 xl:gap-x-10`}>
                {teamLeadData.map((data, index) => (
                    <div key={index} className={`text-center flex flex-col items-center sm:items-start gap-1 ${(index+1)%2 ==0 ? 'sm:justify-self-start':'sm:justify-self-end'}`}>
                        <div 
                        className='bg-primary-700 w-64 h-64 md:w-72 md:h-72 flex justify-center items-end rounded-lg' 
                        style={{background: 'linear-gradient(180deg, #131313 -70.89%, #20052C 100%)'}}>
                            <img 
                            className='w-52 h-58 md:w-60 md:h-72 max-w-[441px] max-h-[571px]' 
                            src={data.image} 
                            alt="Team Lead Image" />
                        </div>
                        <h5 className={`${styles.h5Heavy} tracking-wide sm:pl-3`}>
                            {data.name}
                        </h5>
                        <p className={`${styles.p2} opacity-50 sm:pl-3`}>
                            {data.position}
                        </p>
                    
                    </div>
                ))}
            
            </div>
    </div>
  )
}

export {AboutTeamLead}

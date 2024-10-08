import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { PortfolioBanner, PortfolioSection, ContactForm2 } from '../Sections'
import useGetProjects from '../hooks/useGetProject';


const Portfolio = () => {
  const location = useLocation(); // Get the current location

  // const {projects} = useGetProjects(); // uncomment this after working on backend.
  const projects = [] //have to remove when you have to show project fetch from backend

  // Determine if the current location is a nested route
  const isNestedRoute = location.pathname.includes('portfolio/path') && location.pathname !== '/portfolio';

  return (
    <div>
      {!isNestedRoute && (
        <>
            <PortfolioBanner/>
            <PortfolioSection data={projects}/>
            <ContactForm2/>
        </>
        )}
        <Outlet /> {/* Renders nested routes content */}
    </div>
  )
}

export {Portfolio}
import React from 'react'
import "../styles/Projects.css"
import Pcard from './Pcard'
import B2B from "../assets/B2B.jpeg"
import admin from "../assets/admin.png"
const Projects = () => {
    const Projects = [
        {
            img:B2B,
            title: "B2B Transaction Management System",
            description: "A web-based platform designed to streamline and manage transactions between businesses. It ensures secure payment processing, order tracking, and real-time status updates. The system simplifies financial operations and enhances business collaboration.",
            tech_stacks: ["React.JS", "Bootstrap", "MUI", "CSS"]
        },
        {img:admin,
            title: "Admin Portal for CricDost App",
            description: "An intuitive admin dashboard built to manage users, match schedules, and real-time cricket score updates. It empowers administrators to handle content, notifications, and player statistics efficiently. Designed for seamless control and user-friendly management.",
            tech_stacks: ["React.JS", "Bootstrap", "MUI", "CSS","Redux"]
        }
    ];
    
  return (
    <div className='projects'>
      <div className='Project_header'>PROJECTS</div>
      {Projects.map((item)=> <Pcard item={item}></Pcard>)}
      

    </div>
  )
}

export default Projects

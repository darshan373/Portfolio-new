import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Projects.css';
import xcel from "../assets/xcel-corp-leading-the-future-white.png"
const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Xcel Corp",
      period: "June 2024 — Mar 2025",
      description:
        "As an Associate Software Engineer at Xcel Corp, I was responsible for developing dynamic user interfaces using React.js and integrating MUI DataGrid with custom pagination logic, which improved performance and reduced page load time by 10%. I designed and implemented responsive web pages using Bootstrap, ensuring seamless cross-browser compatibility and mobile-first design. I also worked extensively with React Router to implement dynamic routing and optimized navigation flow for a smooth user experience. Additionally, I leveraged React Higher-Order Components (HOCs) to promote code reusability, handling features like authentication checks, logging, and error handling. My responsibilities also included integrating RESTful APIs for efficient frontend-backend communication, working with JavaScript (ES6+) and TypeScript to enhance code maintainability, and writing unit and integration tests using Jest, React Testing Library, and Cypress to ensure the reliability and stability of applications. I managed file uploads using Multer to enhance the handling and processing of user-uploaded content."
    },
    {
      role: "Frontend Developer Intern",
      company: "Varcons Technologies",
      period: "Jan 2023 — Jul 2023",
      description:
        "During my internship as a Frontend Developer at ABC Tech Solutions, I contributed to building scalable and responsive user interfaces using React.js, focusing on creating reusable components and maintaining consistent design patterns. I implemented RESTful API integrations and handled asynchronous data flow, ensuring efficient communication between the frontend and backend. My work involved designing mobile-friendly layouts using Bootstrap and testing for cross-browser compatibility to deliver a seamless experience across devices. I actively collaborated with the development team during code reviews and sprints, enhancing my understanding of clean code practices, modern JavaScript (ES6+), and agile software development processes."
    }
  ];
  const skills = [
    "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap", "Material-UI (MUI)", 
    "React Router", "Redux", "TypeScript", "Axios", "RESTful APIs", "Git & GitHub", 
    "Jest", "React Testing Library", "Cypress", "Node.js", "Express.js", "Multer", "JWT Authentication"
  ];
  

const Experience = () => {
  return (
    <div className="container my-5" id='work'>
      <h2 className="text-white mb-4">Experience</h2>
      {experiences.map((exp, index) => (
        <div className="experience-card mb-4 p-3" key={index}>
            <div className='exp_img'>
                <img src={xcel} alt=""  className='comp_img'/>
            <h4>{exp.role}</h4>
            </div>
          
          <h6 className="text-info">{exp.company}</h6>
          <p className="">{exp.period}</p>
          <p>{exp.description}</p>
        </div>
      ))}
       <h2 className="mt-5 mb-4">Skills</h2>
      <div className="skills-list d-flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span className="badge bg-primary rounded-pill p-2 px-3" key={index} style={{cursor:"pointer"}}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experience;

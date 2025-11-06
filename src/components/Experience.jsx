import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css";
import xcel from "../assets/xcel-corp-leading-the-future-white.png";
import kaplan from "../assets/kaplan_logo.png";
const experiences = [
  {
    logo: kaplan,
    role: "Associate Software Engineer",
    company: "Kaplan India",
    period: "April 2024 — Present",
    description:
      "A passionate software developer with a strong foundation in developing and deploying web applications. I specialize in building robust and scalable solutions using React, TypeScript, and Node.js. I am skilled in database management with MySQL and have experience with Flask and real-time communication using Socket.IO. Eager to leverage my skills to create impactful products and contribute to a dynamic team.",
  },
  {
    logo: xcel,
    role: "Associate Software Engineer",
    company: "Xcel Corp",
    period: "June 2024 — Mar 2025",
    description:
      "As an Associate Software Engineer at Xcel Corp, I was responsible for developing dynamic user interfaces using React.js and integrating MUI DataGrid with custom pagination logic, which improved performance and reduced page load time by 10%. I designed and implemented responsive web pages using Bootstrap, ensuring seamless cross-browser compatibility and mobile-first design. I also worked extensively with React Router to implement dynamic routing and optimized navigation flow for a smooth user experience. Additionally, I leveraged React Higher-Order Components (HOCs) to promote code reusability, handling features like authentication checks, logging, and error handling. My responsibilities also included integrating RESTful APIs for efficient frontend-backend communication, working with JavaScript (ES6+) and TypeScript to enhance code maintainability, and writing unit and integration tests using Jest, React Testing Library, and Cypress to ensure the reliability and stability of applications. I managed file uploads using Multer to enhance the handling and processing of user-uploaded content.",
  },
];
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "Bootstrap",
  "Material-UI (MUI)",
  "React Router",
  "Redux",
  "TypeScript",
  "Axios",
  "RESTful APIs",
  "Git & GitHub",
  "Jest",
  "React Testing Library",
  "Cypress",
  "Node.js",
  "Express.js",
  "Flask",
  "Django",
  "MySQL",
  "Multer",
  "JWT Authentication",
];

const Experience = () => {
  return (
    <div className="container my-5" id="work">
      <h2 className="text-white mb-4">Experience</h2>
      {experiences.map((exp, index) => (
        <div className="experience-card mb-4 p-3" key={index}>
          <div className="exp_img">
            <img src={exp.logo} alt="" className="comp_img" />
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
          <span
            className="badge bg-primary rounded-pill p-2 px-3"
            key={index}
            style={{ cursor: "pointer" }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experience;

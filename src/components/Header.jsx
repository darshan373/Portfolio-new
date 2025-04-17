import React from "react";
import "../styles/Header.css";
import logo from "../assets/ade-logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Logo from "../assets/letter.png"
const Header = () => {
  return (
    <div className="header_div">
      <div className="d_letter col-4">
        {/* <img src={Logo} alt="" style={{width:"30px",height:"30px",background:"transparent"}} /> */}
        D
      </div>
      <div className="header_middle col-4">
        <a href="#home" className="hover-underline">
          Home
        </a>
        <a href="#work" className="hover-underline">
          Work
        </a>
        <a href="#about" className="hover-underline">
          About
        </a>
        <a href="#contact" className="hover-underline">
          Contact
        </a>
      </div>

      <div className="icons col-4">
  <a href="https://www.linkedin.com/in/darshan373/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://github.com/darshan373/" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer">
    <FaInstagramSquare />
  </a>
</div>

    </div>
  );
};

export default Header;

import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub} from "react-icons/fa";
import './index.css'; 

const Footer = () => {
  return (
    <footer id='footer' className="footer">
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/borlakuntasoniya/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin/>
        </a>
        <a href="https://x.com/soniya11190" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
        </a>
        <a href="https://github.com/Soniya-321" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Soniya. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

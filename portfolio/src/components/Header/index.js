import React, { useState } from 'react';
import { MdMenu, MdClose} from "react-icons/md";
import './index.css'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          SONIYA
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#education">Education</a></li>
          <li className="nav-item"><a href="#skills">Skills</a></li>
          <li className="nav-item"><a href="#projects">Projects</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

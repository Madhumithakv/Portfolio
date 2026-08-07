import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = (menuName, e, anchorId) => {
    e.preventDefault();
    setMenu(menuName);
    setIsDropdownOpen(false);
    document.querySelector(anchorId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='navbar'>
      <div className='logo-container'>
        <h1>Madhu</h1>
      </div>

      {/* Hamburger menu icon */}
      <img
        src={menu_open}
        onClick={handleMenuToggle}
        alt="Menu"
        className='nav-mob-open'
      />

      {/* Mobile dropdown menu */}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <img
            src={menu_close}
            onClick={handleMenuToggle}
            alt="Close"
            className='nav-mob-close'
          />
          <ul className="dropdown-list">
            <li><a className='anchor-link' href='#home' onClick={(e) => handleMenuClick("home", e, "#home")}>Home</a></li>
            <li><a className='anchor-link' href='#about' onClick={(e) => handleMenuClick("about", e, "#about")}>About Me</a></li>
            <li><a className='anchor-link' href='#experience' onClick={(e) => handleMenuClick("experience", e, "#experience")}>Experience</a></li>
            <li><a className='anchor-link' href='#skills' onClick={(e) => handleMenuClick("skills", e, "#skills")}>Skills</a></li>
            <li><a className='anchor-link' href='#services' onClick={(e) => handleMenuClick("services", e, "#services")}>Certifications</a></li>
            <li><a className='anchor-link' href='#work' onClick={(e) => handleMenuClick("work", e, "#projects")}>Project Work</a></li>
            <li><a className='anchor-link' href='#work' onClick={(e) => handleMenuClick("coding-corner", e, "#coding-corner")}>Coding profile</a></li>
            <li><a className='anchor-link' href='#contact' onClick={(e) => handleMenuClick("contact", e, "#contact")}>Contact</a></li>
          </ul>
        </div>
      )}

      {/* Desktop nav menu */}
      <ul className="nav-menu">
        <li><a className='anchor-link' href='#home' onClick={(e) => handleMenuClick("home", e, "#home")}><p>Home</p></a>{menu === "home" && <img src={underline} alt='' />}</li>
        <li><a className='anchor-link' href='#about' onClick={(e) => handleMenuClick("about", e, "#about")}><p>About Me</p></a>{menu === "about" && <img src={underline} alt='' />}</li>
        <li><a className='anchor-link' href='#experience' onClick={(e) => handleMenuClick("experience", e, "#experience")}><p>Experience</p></a>{menu === "experience" && <img src={underline} alt='' />}</li>
        <li><a className='anchor-link' href='#skills' onClick={(e) => handleMenuClick("skills", e, "#skills")}><p>Skills</p></a>{menu === "skills" && <img src={underline} alt='' />}</li>
        <li><a className='anchor-link' href='#work' onClick={(e) => handleMenuClick("work", e, "#projects")}><p>Project Work</p></a>{menu === "work" && <img src={underline} alt='' />}</li>
        <li><a className='anchor-link' href='#services' onClick={(e) => handleMenuClick("services", e, "#services")}><p>Certifications</p></a>{menu === "services" && <img src={underline} alt='' />}</li>
        <li><a className='anchor-link' href='#work' onClick={(e) => handleMenuClick("coding-corner", e, "#coding-corner")}><p>Coding Profile</p></a>{menu === "coding-corner" && <img src={underline} alt='' />}</li>
        <li><a className='anchor-link' href='#contact' onClick={(e) => handleMenuClick("contact", e, "#contact")}><p>Contact</p></a>{menu === "contact" && <img src={underline} alt='' />}</li>
      </ul>

      <div className="nav-connect">
        <a className='anchor-link' href='#contact' onClick={(e) => handleMenuClick("contact", e, "#contact")}>
           {/* Connect With Me  */}
           Let's Talk →
        </a>
      </div>
    </div>
  );
};

export default Navbar;

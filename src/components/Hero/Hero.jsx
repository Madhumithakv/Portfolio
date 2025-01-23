import React from 'react';
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import resume_pdf from "../../assets/Madhumitha_Resume.pdf"; // Import the resume file
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Profile" />
        <h1><span>I'm Madhumitha Kumar,</span> full stack developer.</h1>
        <p>I am a passionate Full Stack Developer with a strong foundation in Java, React.js, and Spring Boot. I have experience in building responsive web applications, designing user-friendly interfaces, and developing backend services. My academic background in Computer Science and Engineering has provided me with the skills needed to tackle complex problems and deliver high-quality solutions.</p>
        <div className="hero-action">
            <div className="hero-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    <p onClick={() => setMenu("contact")}></p>Connect with me
                </AnchorLink>
            </div>
            <div className="hero-resume">
                <a href={resume_pdf} download="Madhumitha_Resume.pdf">
                    My resume
                </a>
            </div>
        </div>
    </div>
  );
};

export default Hero;

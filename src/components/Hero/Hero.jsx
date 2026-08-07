// import React from 'react';
// import "./Hero.css";
// import profile_img from "../../assets/profile_img.jpg";
// import resume_pdf from "../../assets/Madhumitha_Resume.pdf";
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import { FaLinkedin, FaGithub } from 'react-icons/fa'; // logo icons

// const Hero = () => {
//   return (
//     <div id='home' className='hero'>
//       <img src={profile_img} className="profile_img" alt="Profile" />

//       <h1><span className="typewriter-text">Hi,I'm Madhumitha Kumar,</span> full stack developer.</h1>
//       <AnchorLink href="#about" className="scroll-down">
//   <span>Scroll Down</span>
//   <div className="arrow"></div>
// </AnchorLink>

//       {/* <p>
//        💻 I am a passionate Full Stack Developer with a strong foundation in Java ☕, React.js ⚛️, and Spring Boot 🌱.
// 🧠 I have experience in building responsive web applications 📱💻, designing user-friendly interfaces 🎨,
// and developing backend services 🛠️.
// 🎓 My academic background in Computer Science and Engineering 🧑‍🎓 has provided me with the skills needed to
// tackle complex problems 🧩 and deliver high-quality solutions 🚀.
//       </p> */}
      
//       <div className="hero-action">
//         <div className="hero-connect">
//           <AnchorLink className='anchor-link' offset={50} href='#contact'>
//             Connect with me
//           </AnchorLink>
//         </div>
//         <div className="hero-resume">
//           <a href={resume_pdf} download="Madhumitha_Resume.pdf">
//             My resume
//           </a>
//         </div>
//       </div>

//       {/* Social Media Logos */}
//       <div className="hero-socials">
//         <a href="https://www.linkedin.com/in/madhumithakumarmk/" target="_blank" rel="noopener noreferrer" className="social-item">
//           <FaLinkedin className="social-icon" />
//           {/* <span>LinkedIn</span> */}
//         </a>
//         <a href="https://github.com/Madhumithakv" target="_blank" rel="noopener noreferrer" className="social-item">
//           <FaGithub className="social-icon" />
//           {/* <span>GitHub</span> */}
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Hero;



import React from "react";
import "./Hero.css";
import resume_pdf from "../../assets/Madhumitha_Resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero">

      {/* LEFT SIDE */}
      <div className="hero-left">

        <div className="hero-badge">
          ● AVAILABLE FOR OPPORTUNITIES
        </div>

        <h1>
          Building intelligent
          <span> backend systems</span>
          <br />
          & AI-powered
          <br />
          products.
        </h1>

        <p>
          I'm a Full Stack Developer passionate about Java,
          Spring Boot, React.js, FastAPI, PostgreSQL and
          Generative AI. I enjoy building scalable backend
          systems and intelligent software solutions.
        </p>

        <div className="hero-action">

          <div className="hero-connect">
            <AnchorLink href="#projects">
              View Projects →
            </AnchorLink>
          </div>

          <div className="hero-resume">
            <a
              href={resume_pdf}
              download="Madhumitha_Resume.pdf"
            >
               My resume
              {/* Get In Touch */}
            </a>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">

        <div className="code-card">

          <div className="card-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <pre>{`
{
  "role": "Full Stack Developer",

  "backend": "Spring Boot",

  "frontend": "React.js",

  "database": "PostgreSQL",

  "focus": "Generative AI"
}
          `}</pre>

        </div>

       <div className="mobile-stats">

      <div className="floating-card cgpa-card-hero">
        <h3>8.7</h3>
        <p>CGPA</p>
      </div>

      <div className="floating-card problem-card-hero">
        <h3>250+</h3>
        <p>Problems</p>
      </div>

      <div className="floating-card project-card-hero">
        <h3>3+</h3>
        <p>Projects</p>
      </div>

     </div>

      </div>

    </section>
  );
};

export default Hero;
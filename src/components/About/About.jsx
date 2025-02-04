import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from  '../../assets/profile_img.svg'

const About = () => {
  return (
    <div  id='about'   className='about'>
    <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
    </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className='about-right'>
            <div className="about-para">
            <p>I'm Madhumitha Kumar, a passionate Full Stack Developer with expertise in building responsive web applications.  My strong foundation in Java helps me craft scalable and efficient software applications, and I have a growing proficiency in JavaScript and HTML/CSS.</p>
            <p>With a degree in Computer Science and Engineering from Mailam Engineering College, I am continually honing my skills through personal projects and contributions. I enjoy tackling complex problems and am dedicated to delivering high-quality, user-centered solutions.</p>
           </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p> <hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>JavaScript</p> <hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Java</p> <hr style={{width:"70%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>250+</h1>
          <p>CODING SOLVED IN SKILLRACK</p>
        </div>
      </div>
    </div>
  )
}

export default About
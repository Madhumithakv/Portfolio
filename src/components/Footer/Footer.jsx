


import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-grid">

        {/* LEFT */}

        <div className="footer-brand">

          <div className="footer-logo">
            <div className="logo-box">MK</div>
            <h2>Madhumitha.</h2>
          </div>

          <p>
            Backend engineer building toward
            Generative AI — one clean API at a
            time.
          </p>

          <div className="footer-social">

            <a
              href="https://github.com/Madhumithakv"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/madhumithakumarmk/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="mailto:madhumithatkvmrb@gmail.com"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        {/* PROFILES */}

        <div className="footer-column">

          <h3>Profiles</h3>

          <a
            href="https://github.com/Madhumithakv"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/madhumithakumarmk/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://madhumithak.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio Site
          </a>

        </div>

        {/* CONTACT */}

        <div className="footer-column">

          <h3>Get In Touch</h3>

          <p>madhumithatkvmrb@gmail.com</p>

          <p>+91 63798 27461</p>

          <p>Chennai, Tamil Nadu, India</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Madhumitha Kumar. All rights reserved.
        </p>

        <p>
          Designed & built with care.
        </p>

      </div>

    </footer>
  );
};

export default Footer;

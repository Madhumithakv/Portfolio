

import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">

      <div className="about-badge">
        THE PROGRAM → ABOUT ME
      </div>

      <div className="about-grid">

        <div className="about-content">

          <h1>
            From classroom algorithms
            <br />
            to <span>production code.</span>
          </h1>

          <p>
            I graduated in Computer Science Engineering with an
            8.7 CGPA, but the moments that shaped me most came from
            building real software — from creating NLP-powered web
            applications to developing secure authentication systems.
          </p>

          <p>
            My journey moved from Data Structures and Core Java into
            Spring Boot, React.js, PostgreSQL and FastAPI. As a
            Trainee Associate at BeyondCloud Tech Solutions, I built
            backend APIs, database integrations and onboarding
            workflows used in production environments.
          </p>

          <p>
            Today, my focus is Generative AI, NLP and scalable backend
            engineering — designing systems that are reliable,
            maintainable and impactful.
          </p>

          <div className="about-highlights">

            <div className="highlight-item">
              <div className="icon">🎯</div>
              <div>
                <h4>Outcome Driven</h4>
                <p>
                  Focused on building software that solves real
                  business problems.
                </p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="icon">🧩</div>
              <div>
                <h4>Full Stack Fluency</h4>
                <p>
                  Comfortable across Spring Boot, FastAPI,
                  React.js and PostgreSQL.
                </p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="icon">📚</div>
              <div>
                <h4>Always Learning</h4>
                <p>
                  Continuously exploring Generative AI,
                  LLMs and Prompt Engineering.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="quick-facts">

          <h3>Quick Facts</h3>

          <div className="fact">
            <span>Education</span>
            <strong>B.E Computer Science</strong>
          </div>

          <div className="fact">
            <span>College</span>
            <strong>Mailam Engineering College</strong>
          </div>

          <div className="fact">
            <span>CGPA</span>
            <strong>8.7 / 10</strong>
          </div>

          <div className="fact">
            <span>Role</span>
            <strong>Trainee Associate</strong>
          </div>

          <div className="fact">
            <span>Location</span>
            <strong>Tamil Nadu, India</strong>
          </div>

          <div className="fact">
            <span>Focus</span>
            <strong>Backend APIs, NLP, GenAI</strong>
          </div>

          <a href="#contact" className="about-btn">
            Work With Me →
          </a>

        </div>

      </div>

    </section>
  );
};

export default About;
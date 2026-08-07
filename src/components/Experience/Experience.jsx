import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">

      <div className="experience-header">

        <div className="experience-tag">
          CAREER TIMELINE
        </div>

        <h1>
          Where I've put
          <span> these skills</span>
          <br />
          to work.
        </h1>

      </div>

      <div className="timeline">

        {/* Experience */}

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-card">

            <div className="timeline-top">

              <div>
                <h2>Trainee Associate</h2>
                <p className="company">
                  BeyonCloud Tech Solutions LLP • Remote
                </p>
              </div>

              <span className="date">
                Aug 2025 – Jan 2026
              </span>

            </div>

            <ul>

              <li>
                Developed RESTful APIs using FastAPI for
                onboarding workflows and CRUD operations.
              </li>

              <li>
                Integrated PostgreSQL databases using
                SQLAlchemy for efficient data management.
              </li>

              <li>
                Connected backend services with Next.js
                frontend applications.
              </li>

              <li>
                Applied OOP principles, clean code practices,
                debugging, and code reviews.
              </li>

              <li>
                Guided and supported new trainees during
                development activities.
              </li>

            </ul>

            <div className="timeline-tags">

              <span>Python</span>
              <span>FastAPI</span>
              <span>PostgreSQL</span>
              <span>SQLAlchemy</span>
              <span>Next.js</span>

            </div>

          </div>

        </div>

        {/* Education */}

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-card">

            <div className="timeline-top">

              <div>
                <h2>B.E Computer Science Engineering</h2>
                <p className="company">
                  Mailam Engineering College
                </p>
              </div>

              <span className="date">
                2020 – 2024
              </span>

            </div>

            <ul>

              <li>
                Graduated with 8.7 CGPA.
              </li>

              <li>
                Built Full Stack and NLP based projects.
              </li>

              <li>
                Developed strong foundations in Java,
                Data Structures and Software Engineering.
              </li>

            </ul>

            <div className="timeline-tags">

              <span>Java</span>
              <span>DSA</span>
              <span>Spring Boot</span>
              <span>React.js</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;
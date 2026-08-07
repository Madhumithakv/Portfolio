


import React from "react";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <section id="projects" className="mywork">

      <div className="projects-header">

        <div className="projects-badge">
          SELECTED WORK
        </div>

        <h1>
          Projects that taught me
          <span> the most.</span>
        </h1>

        <p>
          From backend APIs and authentication systems
          to NLP applications and AI solutions —
          each project strengthened a different part
          of my full-stack development journey.
        </p>

      </div>

      <div className="projects-grid">

        {mywork_data.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-top">

              <span className="project-badge">
                {project.category}
              </span>

              <a
                    href={project.project_link}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.94 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.62-2.805 5.64-5.475 5.94.435.375.81 1.11.81 2.25 0 1.635-.015 2.945-.015 3.345 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    </a>

            </div>

            <h3>{project.w_name}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="challenge-box">

              <h4>CHALLENGES SOLVED</h4>

              <ul>
                {project.challenges.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>

            </div>

            <div className="project-tags">

              {project.key_skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default MyWork;
import React from "react";
import "./Skills.css";

const skills = [
  {
    title: "Backend & APIs",
    icon: "⚙️",
    items: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "FastAPI",
      "REST APIs",
      "JWT Authentication",
      "Hibernate / JPA"
    ]
  },

  {
    title: "Frontend",
    icon: "🎨",
    items: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "React Router",
      "Axios"
    ]
  },

  {
    title: "Databases",
    icon: "🗄️",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Database Design"
    ]
  },

  {
    title: "AI & NLP",
    icon: "🤖",
    items: [
      "NLP",
      "Machine Learning",
      "Generative AI",
      "Prompt Engineering",
      "Text Processing"
    ]
  },

  {
    title: "Tools",
    icon: "🛠️",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Eclipse",
      "STS"
    ]
  },

  {
    title: "Core Concepts",
    icon: "💡",
    items: [
      "OOP",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Clean Code"
    ]
  }
];

const Services = () => {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-header">

        <div className="skills-badge">
          TECH STACK
        </div>

        <h1>
          Tools I use
          <span> every day.</span>
        </h1>

        <p>
          Technologies and frameworks I use to build
          scalable backend systems, modern web applications
          and AI-powered solutions.
        </p>

      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card-new" key={index}>

            <div className="skill-title">

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.title}</h3>

            </div>

            <div className="skill-tags">

              {skill.items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Services;




import React from "react";
import "./CodingCorner.css";
import codingData from "./coding_data";

const CodingCorner = () => {
  return (
    <section id="coding-corner" className="coding">

      <div className="coding-header">

        <div className="coding-badge">
          CODING JOURNEY
        </div>

        <h1>
          Where I sharpen
          <span> problem-solving.</span>
        </h1>

        <p>
          Consistent practice across coding platforms helped me
          strengthen algorithms, data structures, Java,
          SQL and problem-solving skills.
        </p>

      </div>

      <div className="coding-grid">

        {codingData.map((item,index)=>(

          <div className="coding-card" key={index}>

            <div className="coding-top">

              <span className="platform-badge">
                {item.title}
              </span>

              <a
                href={item.project_link}
                target="_blank"
                rel="noreferrer"
                className="visit-btn"
              >
                ↗
              </a>

            </div>

            <h3>{item.title}</h3>

            <div className="achievement-box">

              <h4>HIGHLIGHTS</h4>

              <ul>
                {Array.isArray(item.description)
                  ? item.description.slice(0,4).map((desc,i)=>(
                      <li key={i}>{desc}</li>
                    ))
                  : <li>{item.description}</li>
                }
              </ul>

            </div>

            <div className="coding-tags">

              {item.technologies.slice(0,6).map((tech,i)=>(
                <span key={i}>{tech}</span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default CodingCorner;
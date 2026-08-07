

import React from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data";

const Services = () => {



      const links = {
      "01": "https://drive.google.com/drive/folders/19uJ_QsfjgsgYg8uY-ehl19Gj2cJxbWKM?usp=sharing",
      "03": "https://drive.google.com/file/d/1mDY3YvXX8jSZQAyaEhmlBB43ECquz4tT/view?usp=sharing",
      "04": "https://drive.google.com/file/d/11QHBOX2RLm9_EmcTwPpAoxBeBzq-02l0/view?usp=sharing",
      "05": "https://drive.google.com/file/d/1psCy0MkpHAP04WZZzgbsgM8dS5QaKanJ/view?usp=sharing",
      "06": "https://drive.google.com/drive/folders/1YKzMsqP8kmmBwLkIOiPnXjLwbs4csUp9?usp=sharing",
      "07": "https://drive.google.com/file/d/1YDmxjkwGu88s1pU7QXPx-rV1CEdUCSPX/view?usp=drive_link",
      "08": "https://drive.google.com/file/d/1NwDEkYmt2OHFpTAuZH8KnN3pYuyWdyuh/view?usp=drive_link",
      "09": "https://drive.google.com/file/d/1ZVl-6UX2ZZTSicEZd0l9TdiPPfNWe6g0/view?usp=drive_link",
    };

  const handleCardClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="services" className="certifications">

      <div className="cert-header">

        <div className="cert-badge">
          CREDENTIALS
        </div>

        <h1>
          Certifications &
          <span> continuous learning.</span>
        </h1>

        <p>
          Courses, bootcamps and achievements that
          strengthened my full stack development
          and AI engineering journey.
        </p>

      </div>

      <div className="cert-grid">

        {Services_Data.map((item,index)=>(

          <div
            key={index}
            className="cert-card"
          >

            <span className="cert-number">
              {item.s_no}
            </span>

            <h3>{item.s_name}</h3>

            <h4>{item.institute}</h4>

            <p>{item.s_desc}</p>

            <button
              onClick={() => handleCardClick(links[item.s_no])}
              className="cert-btn"
            >
              {item.certificate}
            </button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Services;
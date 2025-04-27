import React from 'react';
import "./Services.css";
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const handleCardClick = (s_no) => {
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
    if (links[s_no]) {
      window.open(links[s_no], "_blank");
    }
  };

  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>Certifications</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format" onClick={() => handleCardClick(service.s_no)}>
            <h3>{service.s_no}</h3>
            <img src={service.logo} alt={`${service.institute} logo`} className="services-logo" />
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <p className="certificate-text"><strong>{service.certificate}</strong> from <span>{service.institute}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

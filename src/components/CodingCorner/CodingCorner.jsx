import React from 'react';
import './CodingCorner.css';
import theme_pattern from '../../assets/theme_pattern.svg'; // same as used in MyWork
import codingData from './coding_data';

const CodingCorner = () => {
  return (
    <div id='coding-corner' className='coding-corner'>
      <div className="coding-corner-title">
        <h1>Coding Profiles</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      <div className="coding-corner-container">
        {codingData.map((item, index) => (
          <div key={index} className="coding-card">
            <a href={item.project_link} target="_blank" rel="noopener noreferrer">
              <img src={item.thumbnail} alt={item.title} className="coding-card-img" />
            </a>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <h4>Key Skills Used:</h4>
            <ul>
              {item.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingCorner;

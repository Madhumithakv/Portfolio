import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>Project Work</h1>
            <img src={theme_pattern} alt="Theme Pattern" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return (
                    <div key={index} className="work-card">
                        <a href={work.project_link} target="_blank" rel="noopener noreferrer">
                            <img src={work.w_img} alt={work.w_name} className="work-image" />
                        </a>
                        <h2>{work.w_name}</h2>
                        <p>{work.description}</p>
                        <h4>Key Skills Used:</h4>
                        <ul>
                            {work.key_skills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default MyWork;

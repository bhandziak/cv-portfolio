import React from 'react';

interface AboutMeProps {
  title: string;
  description: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ title, description }) => {
  return (
    <div className="aboutme-container">
      <h2 className="second-title">{title}</h2>
      <p className="second-description">{description}</p>
    </div>
  );
};

export default AboutMe;
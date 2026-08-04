import React from 'react';

interface WelcomeProps {
  title: string;
  description: string;
}

const Welcome: React.FC<WelcomeProps> = ({ title, description }) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">
        {title}
      </h1>
      <p className="welcome-description">
        {description}
      </p>
    </div>
  );
};

export default Welcome;
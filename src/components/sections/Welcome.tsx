import React from 'react';

interface WelcomeProps {
  title: string;
  description: string;
  avatarUrl?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ 
  title,
  description,
  avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300", }) => {
  return (
    <div className="welcome-container">
      <img 
        src={avatarUrl} 
        className="welcome-avatar"
        loading="eager"
        width={150}
        height={150}
      />
      <h1 className="main-title">
        {title}
      </h1>
      <p className="main-description">
        {description}
      </p>
    </div>
  );
};

export default Welcome;
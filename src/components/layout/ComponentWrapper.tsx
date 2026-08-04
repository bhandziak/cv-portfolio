import React, { type ReactNode } from 'react';

interface ComponentWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
  as?: 'section' | 'div' | 'header' | 'footer';
}

export const ComponentWrapper: React.FC<ComponentWrapperProps> = ({
  id,
  className = '',
  children,
  as: Component = 'section',
}) => {
  return (
    <Component id={id} className={`section-wrapper ${className}`}>
      {children}
    </Component>
  );
};
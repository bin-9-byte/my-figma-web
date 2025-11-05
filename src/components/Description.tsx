import React from 'react';

interface DescriptionProps {
  title: string;
  author: string;
  className?: string;
}

const Description: React.FC<DescriptionProps> = ({
  title,
  author,
  className = '',
}) => {
  return (
    <div className={`description-container description-default transition-fast ${className}`}>
      <div className="description-title">{title}</div>
      <div className="description-author">{author}</div>
    </div>
  );
};

export default Description;
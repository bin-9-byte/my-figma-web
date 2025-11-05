import React from 'react';

interface EventProps {
  title: string;
  date: string;
  category: string;
  className?: string;
}

const Event: React.FC<EventProps> = ({
  title,
  date,
  category,
  className = '',
}) => {
  return (
    <div className={`event-container event-default transition-fast ${className}`}>
      <div className="event-header">
        <div className="event-title">{title}</div>
        <div className="event-date">{date}</div>
      </div>
      <div className="event-category">{category}</div>
    </div>
  );
};

export default Event;
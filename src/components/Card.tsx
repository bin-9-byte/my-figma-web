import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  className = '',
  elevation = 'sm',
  padding = 'md',
}) => {
  // 阴影样式
  const elevationStyles = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  // 内边距样式
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-sm',
    md: 'p-md',
    lg: 'p-lg',
  };

  return (
    <div
      className={`
        bg-white rounded-lg overflow-hidden border border-border
        ${elevationStyles[elevation]}
        ${paddingStyles[padding]}
        ${className}
      `}
    >
      {title && (
        <div className="font-bold text-lg mb-md border-b border-border pb-sm">
          {title}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;
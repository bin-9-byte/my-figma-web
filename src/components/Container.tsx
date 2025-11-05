import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  fluid = false,
  padding = 'lg',
  maxWidth = 'xl',
}) => {
  // 内边距样式
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-sm',
    md: 'p-md',
    lg: 'p-lg',
    xl: 'p-xl',
  };

  // 最大宽度样式
  const maxWidthStyles = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-xl',
    xl: 'max-w-6xl',
    full: 'max-w-none',
  };

  return (
    <div
      className={`
        w-full
        ${fluid ? 'max-w-none px-0' : `${maxWidthStyles[maxWidth]} mx-auto ${paddingStyles[padding]}`}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  children,
}) => {
  // 变体样式
  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent/90',
    secondary: 'bg-surface text-primary hover:bg-surface/80',
    outline: 'bg-transparent text-primary border border-border hover:bg-surface',
    ghost: 'bg-transparent text-primary hover:bg-surface',
  };

  // 尺寸样式
  const sizeStyles = {
    sm: 'text-sm py-sm px-md',
    md: 'text-base py-sm px-lg',
    lg: 'text-lg py-md px-xl',
  };

  return (
    <button
      className={`
        font-medium rounded-md transition-fast
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0'}
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
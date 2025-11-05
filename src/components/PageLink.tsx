import React from 'react';

interface PageLinkProps {
  href: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const PageLink: React.FC<PageLinkProps> = ({
  href,
  onClick,
  className = '',
  children,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    // 阻止默认行为
    e.preventDefault();
    // 执行点击回调
    if (onClick) {
      onClick();
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <a
        href={href}
        className={`
          page-link page-link-default transition-fast
          ${className}
        `}
        onClick={handleClick}
      >
        {children}
      </a>
    </div>
  );
};

export default PageLink;
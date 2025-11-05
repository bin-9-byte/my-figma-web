import React, { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  className?: string;
  loading?: 'eager' | 'lazy';
  onError?: () => void;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  fit = 'cover',
  className = '',
  loading = 'lazy',
  onError,
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    if (onError) {
      onError();
    }
  };

  // 如果图片加载失败，显示占位符
  if (hasError) {
    return (
      <div
        className={`
          bg-surface border border-border flex items-center justify-center
          text-secondary
          ${className}
        `}
        style={{ width, height }}
      >
        <span>图片加载失败</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={`
        object-${fit}
        ${className}
      `}
      onError={handleError}
      style={{ width, height, objectFit: fit }}
    />
  );
};

export default Image;
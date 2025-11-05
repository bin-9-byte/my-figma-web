import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph1' | 'paragraph2' | 'paragraph3' | 'label1' | 'label2' | 'link' | 'body1' | 'body2' | 'caption' | 'overline';
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning';
  weight?: 'normal' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'primary',
  weight = 'normal',
  align = 'left',
  className = '',
  children,
}) => {
  // 变体映射到HTML标签和样式
  const variantConfig = {
  h1: { 
    tag: 'h1' as const, 
    style: 'text-h1 font-heading font-normal leading-120 tracking-tight' 
  },
  h2: { 
    tag: 'h2' as const, 
    style: 'text-h2 font-heading font-medium leading-100 tracking-tight2' 
  },
  h3: { tag: 'h3' as const, style: 'text-h3 font-spectral font-italic font-medium leading-100 tracking-tight3' },
  h4: { tag: 'h4' as const, style: 'text-h4 font-heading font-medium leading-120 tracking-tight4' },
  h5: { tag: 'h5' as const, style: 'text-h5 font-heading font-normal leading-100 tracking-tight5' },
  h6: { tag: 'h6' as const, style: 'text-h6 font-heading font-medium leading-120 tracking-tight6' },
  paragraph1: { tag: 'p' as const, style: 'text-paragraph-1 font-spectral font-normal leading-120 tracking-tight7' },
  paragraph2: { tag: 'p' as const, style: 'text-paragraph-2 font-heading font-normal leading-140 tracking-tight8' },
  paragraph3: { tag: 'p' as const, style: 'text-paragraph-3 font-heading font-normal leading-140 tracking-tight9' },
  label1: { tag: 'span' as const, style: 'text-label-1 font-heading font-normal leading-100 tracking-tight10' },
  label2: { tag: 'span' as const, style: 'text-label-2 font-spectral font-italic font-normal leading-100 tracking-tight11' },
  link: { tag: 'a' as const, style: 'text-link font-heading font-normal leading-100 tracking-tight12' },
  body1: { tag: 'p' as const, style: 'text-base' },
  body2: { tag: 'p' as const, style: 'text-sm' },
  caption: { tag: 'span' as const, style: 'text-xs font-heading font-normal leading-120 tracking-tight13' },
  overline: { tag: 'span' as const, style: 'text-xs uppercase tracking-wider' },
  };

  // 颜色样式
  const colorStyles = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    success: 'text-success',
    error: 'text-error',
    warning: 'text-warning',
    heading: 'text-heading',
  };

  // 字重样式
  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  // 对齐样式
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const { tag, style } = variantConfig[variant];
  
  return React.createElement(
    tag,
    {
      className: `
        ${style}
        ${colorStyles[color]}
        ${weightStyles[weight]}
        ${alignStyles[align]}
        ${className}
      `,
    },
    children
  );
};

export default Typography;
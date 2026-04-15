import React from 'react';
import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1.5">
    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  rightArrow = false,
  to,
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg',
    outline: 'border-2 border-gray-300 text-text-primary hover:border-primary hover:text-primary bg-transparent',
    white: 'bg-white text-primary hover:bg-gray-50 shadow-md',
    'white-outline': 'border-2 border-white text-white hover:bg-white/10 bg-transparent',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {children}
      {rightArrow && <ArrowIcon />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}

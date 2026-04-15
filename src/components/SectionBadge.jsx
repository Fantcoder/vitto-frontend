import React from 'react';

export default function SectionBadge({ children, color = 'red', className = '' }) {
  const colors = {
    red: 'bg-red-50 text-primary border-red-100',
    green: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    grey: 'bg-gray-100 text-gray-600 border-gray-200',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
  };

  return (
    <span
      className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border ${colors[color] || colors.red} ${className}`}
    >
      {children}
    </span>
  );
}

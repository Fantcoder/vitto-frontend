import React from 'react';

export default function PlaceholderBox({ width = '100%', height = '300px', label = '', className = '' }) {
  return (
    <div
      className={`bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center ${className}`}
      style={{ width, height, minHeight: height }}
    >
      {label && (
        <span className="text-sm text-gray-400 font-medium">{label}</span>
      )}
    </div>
  );
}

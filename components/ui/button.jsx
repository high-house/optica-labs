
import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };

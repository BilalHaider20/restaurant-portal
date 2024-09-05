import React from 'react';

const Button = ({ text, onClick, type }) => {
  const baseClasses = "h-[45px] w-[168px] rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50";
  const blueStyle = "bg-blue-500 text-white hover:bg-blue-600";
  const outlinedStyle = "border border-blue-500 text-blue-500 hover:bg-gray-300";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${type === 'outlined' ? outlinedStyle : blueStyle}`}
    >
      {text}
    </button>
  );
};

export default Button;
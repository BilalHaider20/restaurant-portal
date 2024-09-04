import { useState } from 'react';

const CuisineButton = ({ name }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <button
      onClick={toggleSelection}
      className={`px-4 py-2 rounded-md transition-colors duration-300 ${
        isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
      }`}
    >
      {name}
    </button>
  );
};

export default CuisineButton;
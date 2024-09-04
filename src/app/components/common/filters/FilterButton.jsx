import { useState } from 'react';

const FilterButton = ({ name, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    onClick(name);
  };

  return (
    <button
      onClick={toggleSelection}
      className={`flex items-center px-2 py-2 justify-center rounded-md transition-colors duration-300 text-xs ${
        isSelected ? 'bg-blue-500 text-white' : 'border border-[#E1EAF7] text-black'
      }`}
    >
      {name}
    </button>
  );
};


export default FilterButton;
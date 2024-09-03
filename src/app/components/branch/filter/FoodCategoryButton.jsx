import React from 'react'
import Image from 'next/image'
import images from '../../../../../public/images/index'
import { useState } from 'react'


const FoodCategoryButton = ({ name }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <button
      onClick={toggleSelection}
      className={`flex flex-col items-center justify-center w-[85px] h-[62px] border-2 rounded-[5px] transition-colors duration-300 ${
        isSelected ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300 bg-white text-gray-800'
      }`}
    >
      <Image src={images.chicken} alt={name} className="w-5 h-5" />
      <span className="text-xs">{name}</span>
    </button>
  );
};


export default FoodCategoryButton
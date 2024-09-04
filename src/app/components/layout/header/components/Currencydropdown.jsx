"use client"
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setCurrency } from '@/lib/features/currency/currencySlice';
import Image from 'next/image';
import images from '../../../../../../public/images/navbar';
const options = ["PKR", "USD", "SAR"];

const Dropdown = () => {
  const { cur }= useAppSelector((state) => state.cur);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(cur);

  const dispatch = useAppDispatch()


  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    console.log('currency ', option);
    dispatch(setCurrency(option));
    setIsOpen(false);
  };
  

  return (
    <div className="relative">
      <button
        className=" py-2 px-3 rounded-md text-left text-primary-blue text-base font-medium flex justify-between items-center gap-2"
        onClick={toggleDropdown}
      >
        {selectedOption}
        <Image src={images.arrow} className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''}`}
            alt='arrow' />
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white rounded-md ">
          {options.map((option, index) => (
            <li
              key={index}
              className="py-2 px-4 hover:bg-gray-100 text-primary-blue font-medium text-base cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

"use client"
import { useState } from 'react'
import React from 'react'
import images from '../../../../../../public/images/navbar'
import Image from 'next/image'


const options = ["Profile", "Settings", "Logout"];

const ProfileBtn = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

    return (
        <div className="flex gap-2 cursor-pointer" onClick={toggleDropdown}>
            <div className='navbarCircleDiv' >
                <span className='text-base font-medium text-primary-blue'>SH</span>
            </div>
            <Image src={images.arrow} className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''}`}
            alt='arrow' />
           {isOpen && (
        <ul className="absolute z-10  top-16 right-1 bg-white rounded-md ">
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
    )
}

export default ProfileBtn
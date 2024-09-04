"use client"
import React, { useState } from "react";
import Image from "next/image";
import Rating from "./Rating";

const HotelCard = ({ name, image, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg bg-bg-main border border-gray-200 shadow-md overflow-hidden w-[min(95%,356px)] cursor-pointer"> 
      <div className="bg-gray-100 p-4 text-center">
        <Image src={image} alt={name} className="w-full h-auto" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="flex justify-between text-gray-80 font-normal text-sm">
          <p>Italian • French • Asian</p>
          <p>$$$</p>
        </div>
        <p className="mt-2 text-gray-700">
          {description}...
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleDescription}
          >
            {isOpen ? " Show less" : " View more"}
          </span>
        </p>
        <p
          className={`transition-opacity duration-500 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
        >
          {description}
        </p>
        <Rating />
      </div>
    </div>
  );
};

export default HotelCard;
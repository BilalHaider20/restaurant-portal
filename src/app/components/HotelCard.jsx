"use client"
import React from "react";
import Image from "next/image";
import images from "../../../public/images/index";
import { useState } from "react";

const HotelCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDescription = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className="w-full rounded-lg border border-gray-200 shadow-md overflow-hidden">
      <div className="bg-gray-100 p-4 text-center">
        <Image src={images.hotel} alt="" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">Arcadian Cafe</h2>
        <div className="flex justify-between text-gray-80 font-normal text-sm">
          <p>Italian • French • Asian</p>
          <p>$$$</p>
        </div>
        <p className="mt-2 text-gray-700">
          Arcadian Café has firmly rooted itself in Lahore&apos;s culinary arena in a
          little over seven years. Our team...
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleDescription}
          >
            {isOpen ? " Show less" : " View more"}
          </span>
        </p>
        <p
          className={`transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          We pride ourselves on offering a variety of delicious dishes made from
          fresh ingredients, ensuring every meal is a remarkable experience.
          Join us for a taste of our signature dishes and explore the vibrant
          flavors of our menu!
        </p>
        <div className="flex gap-2 items-center mt-4">
          <span className="text-2xl font-semibold bg-[#346CC4] text-white w-[50px] h-[32px] rounded text-center">
            8.6
          </span>
          <div className="flex flex-col">
            <span className="text-[#3C3C3C] text-lg font-medium">
              Excellent
            </span>
            <span className="text-gray-80">155 Reviews</span>
          </div>
        </div>
        <p className="mt-2 text-gray-600 text-sm">Booked 18 times today</p>
      </div>
    </div>
  );
};

export default HotelCard;

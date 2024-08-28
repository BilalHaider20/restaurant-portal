import React from "react";
import Image from "next/image";
import images from "../../../public/images/index";

const HotelCard = () => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 shadow-md overflow-hidden">
      <div className="bg-gray-100 p-4 text-center">
        <Image src={images.hotel} alt="" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">Arcadian Cafe</h2>
        <div className="flex justify-between text-gray-80 font-normal text-sm">
          <p>
            Italian • French • Asian
          </p>
          <p>$$$</p>
        </div>
        <p className="mt-2 text-gray-700">
          Arcadian Café has firmly rooted itself in Lahores culinary arena in a
          little over seven years. Our team....
          <span className="text-blue-500 cursor-pointer"> View more</span>
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-semibold">8.6</span>
          <span className="text-gray-600">Excellent (155 Reviews)</span>
        </div>
        <p className="mt-2 text-gray-600 text-sm">Booked 18 times today</p>
      </div>
    </div>
  );
};

export default HotelCard;

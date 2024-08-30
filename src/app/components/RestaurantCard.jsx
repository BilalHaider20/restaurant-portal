import React from "react";
import Image from "next/image";
import images from "../../../public/images/index";
import Tags from "../[locale]/restaurants/components/Tags";

const RestaurantCard = () => {
  return (
    <div className="relative flex flex-col sm:flex-row border border-gray-200 rounded-lg shadow-md h-auto overflow-hidden">
      <div className="relative w-full sm:w-1/3 h-auto">
        <Image
          src={images.hotel}
          alt=""
          layout="responsive"
          width={237}
          height={182}
          className="object-cover"
        />
        <div className="absolute top-2 right-0 bg-[#EBF5F0] text-[#2F9461] text-xs font-semibold py-1 px-2 rounded-l flex items-center">
          <Image
            src={images.discount}
            alt="%"
            className="w-3 h-3 mr-1"
          />
          <span>30% Off</span>
        </div>
      </div>
      <div className="flex flex-col justify-between p-4 w-full sm:w-2/3">
        <div className="flex justify-between items-start">
          <h2 className="text-lg sm:text-xl font-bold">Arcadian Cafe</h2>
          <div className="flex space-x-2">
            <Image
              className="cursor-pointer"
              src={images.delete}
              alt="delete"
            />
            <Image
              className="cursor-pointer"
              src={images.edit}
              alt="edit"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <div className="flex flex-col">
            <div className="flex justify-between text-gray-80 font-normal text-sm">
              <p>Italian • French • Asian</p>
            </div>
            <p className="text-gray-80 font-normal text-sm">$$$</p>
          </div>
          <div className="flex flex-col gap-2 items-start mt-2">
            <div className="flex flex-row gap-2">
              <Tags Text="Free Wifi" />
              <Tags Text="Free Wife" />
            </div>
            <span className="text-lg sm:text-2xl font-semibold bg-[#346CC4] text-white w-12 h-8 rounded text-center">
              8.6
            </span>
            <div className="flex flex-col">
              <span className="text-[#3C3C3C] text-base sm:text-lg font-medium">
                Excellent
              </span>
              <span className="text-gray-80 text-sm">155 Reviews</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center text-xs sm:text-sm text-gray-600">
          <Image
            src={images.trend}
            alt=""
            className="mr-1"
          />
          <span>Booked 18 times today</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
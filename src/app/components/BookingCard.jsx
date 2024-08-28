import React from 'react';
import Image from 'next/image';

const BookingCard = ({ label, totalBookings, percentageChange, iconSrc }) => {
  return (
    <div className="bg-white flex flex-col items-start justify-center p-4 border-l-4 border-[#346CC4] rounded-lg w-full h-[84px]">
      <p className="text-sm text-gray-500">{label}</p>
      
      <div className="flex flex-row items-center w-full ">
        <div className="flex-grow flex items-center">
          <p className="text-3xl font-bold text-[#3C3C3C]">{totalBookings}</p>
          <span className="text-green-500 ml-2 text-nowrap tracking-tighter">↑ {percentageChange}</span>
          <p className="text-gray-500 ml-2 text-nowrap tracking-tighter">vs last week</p>
        </div>
        <div className="flex-shrink-0 ml-4 ">
          <div className="w-[52px] h-[52px] bg-[#F6F9FD] rounded-full flex items-center justify-center">
            <Image src={iconSrc} alt="icon" className="w-8 h-8 object-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
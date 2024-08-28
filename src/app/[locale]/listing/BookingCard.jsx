import React from 'react';
import Image from 'next/image';

const BookingCard = ({ label, totalBookings, percentageChange, iconSrc }) => {
  return (
    <div className="w-[343px] h-[84px] border-l-[5px] border-[#346CC4] rounded-lg flex flex-col items-start justify-center p-4">
      <p className="text-sm text-gray-500">{label}</p>
      
      <div className="flex flex-row items-center">
        <p className="text-3xl font-bold text-[#3C3C3C]">{totalBookings}</p>
        <span className="text-green-500 ml-2">↑ {percentageChange}</span>
        <p className="text-gray-500 ml-2">vs last week</p>
        <div className="ml-auto">
          <Image src={iconSrc} alt="icon" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
import React from 'react';
import images from '../../../../../../../public/images';
import Image from 'next/image';

const SearchBar = () => {
  return (
    <div className="relative w-[379px] h-[44px] gap-[8px] rounded-[8px] border-t-[1px] bg-[#FFFFFF] border-[#E6E6E6]  ">
      <div className='w-[347px] h-full'>
        <Image src={images.search} alt="Search Icon" width={24} height={24} className="absolute left-4 top-1/2 transform -translate-y-1/2"/>
        <input
          type="text"
          placeholder="Search Arcadian Cafe Branches"
          className="w-full h-full rounded-lg text-left text-base font-medium leading-7 tracking-[-0.5px] text-center"
        />
      </div>
    </div>
  );
};

export default SearchBar;
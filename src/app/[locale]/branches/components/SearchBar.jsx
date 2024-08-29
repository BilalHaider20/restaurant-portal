import React from 'react';
import images from '../../../../../public/images';
import Image from 'next/image';
const SearchBar = () => {
  return (
      <div className="flex items-center rounded-lg w-[379px] h-[44px] gap-[8px] border-2 ">
        <input
          type="text"
          placeholder="Search Arcadian Cafe Branches"
          className="w-[379px] text-center h-[44px] border rounded-md"
        />
        {/* <Image src={images.search}/> */}
      </div>
  );
};

export default SearchBar;
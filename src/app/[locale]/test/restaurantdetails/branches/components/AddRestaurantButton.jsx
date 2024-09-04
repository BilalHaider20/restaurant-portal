import React from 'react';
import images from '../../../../../../../public/images';
import Image from 'next/image';

const AddRestaurantButton = () => {
  return (
    <div className="w-[170px] h-[44px] py-[8px] flex content-center justify-center gap-[8px] rounded border-t border-opacity-0 bg-[#346CC4]">
        <Image src={images.plusSquare} alt='Plus Square' className='w-[24px] h-[24px]'></Image>
        <button className='w-[66px] h-[24px] text-[#F6F9FD]  text-[16px] font-medium leading-[24px] tracking-[-0.7px] text-center'>
            Add New
        </button>
    </div>
  );
};

export default AddRestaurantButton;
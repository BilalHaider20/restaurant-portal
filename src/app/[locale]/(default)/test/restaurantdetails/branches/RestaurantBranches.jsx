"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import images from '../../../../../../../public/images';
import rest_images from '../../../../../../../public/images/restaurant/index';
import FilterDropdown from '@/app/components/common/dropdowns/FilterDropDown';
import AddRestaurantButton from './components/AddRestaurantButton';
import SearchBar from './components/SearchBar';

const BranchItem = ({ name, location, rating, reviews, onDelete }) => (
  <div className="w-[1075px] gap-[12px] flex items-center rounded-lg">
    <div className="w-[1075px] flex py-[8px] rounded-lg border-s">
      <div>
        <Image src={rest_images.rest_branch1} alt="Branch" className="w-[237px] h-[182px]" />
      </div>
      <div className="w-[838px] h-[184px] p-[12px] gap-[8px] flex flex-col justify-between bg-white">
        <div className="w-[814px] gap-[12px] flex flex-col justify-between">
          <div className="w-[814px] flex">
            <div className="w-[814px]">
              <div className="w-[573px] gap-[8px]">
                <div className="w-[573px]">
                  <h3 className="font-medium text-[18px] leading-7 tracking-[-1px] text-[#3C3C3C]">
                    {name}
                  </h3>
                  <div className="w-[573px] gap-[2px]">
                    <div className="gap-[2px] flex items-center">
                      <Image src={images.location} alt="location" className="w-[16px] h-[16px]" />
                      <span className="font-normal leading-5 tracking-[-0.5px] text-[#808080]">{location}</span>
                    </div>
                    <div className="gap-[2px] flex items-center">
                      <Image src={images.clock} alt="time" className="w-[16px] h-[16px]" />
                      <span className="font-normal leading-5 tracking-[-0.5px] text-[#808080]">Time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[241px] h-[40px] flex flex-center">
              <button className="w-[116px] text-[#346CC4] space-x-[8px] p-2 flex flex-center rounded-lg mr-3 border border-[#346CC4] 
                        hover:text-[#FFFFFF] hover:bg-[#346CC4]">
                <Image src={images.modify} className="mr-[12px]" /> Modify
              </button>
              <button
                className="w-[116px] text-[#F34141] space-x-[8px] p-2 flex flex-center rounded-lg border-[1px] border-[#F34141] 
                        hover:text-[#FFFFFF] hover:bg-[#F34141]"
              >
                <Image src={images.trashbin} className="mr-[12px]" /> Delete
              </button>
            </div>
          </div>
          <div className="w-[150px] h-[28px] gap-[8px] flex">
            <button className="w-[71px] h-[32px] flex items-center justify-center rounded border bg-[#EFF4FA]">
              <p className="w-[47px] gap-[8px] text-[#346CC4] font-medium text-xs leading-4">
                Free Wifi
              </p>
            </button>
            <button className="w-[71px] h-[32px] flex items-center justify-center rounded border bg-[#EFF4FA]">
              <p className="w-[47px] gap-[8px] text-[#346CC4] font-medium text-xs leading-4">
                Free Wifi
              </p>
            </button>
          </div>
        </div>
        <div className="w-[814px] flex items-center mt-2 mb-2">
          <div className="flex items-center gap-[6px]">
            <div className="w-[50px] h-[32px] bg-[#346CC4] rounded">
              <span className="w-full h-full flex justify-center items-center text-white font-bold text-sm leading-5">
                {rating}
              </span>
            </div>
            <div>
              <p className="flex flex-col font-medium text-base leading-6 tracking-[-0.7px] text-[#3C3C3C]">
                Excellent
              </p>
              <p className="font-normal text-xs leading-4 tracking-[-0.5px] text-[#808080]">{reviews} Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BranchListing = () => {
  const [branches, setBranches] = useState([
    { id: 1, name: 'Arcadian Cafe Packages Mall', location: 'Packages Mall, Lahore', rating: 4.8, reviews: 170 },
    { id: 2, name: 'Arcadian Cafe Packages Mall', location: 'Packages Mall, Lahore', rating: 4.8, reviews: 170 },
    { id: 3, name: 'Arcadian Cafe Packages Mall', location: 'Packages Mall, Lahore', rating: 4.8, reviews: 170 },
  ]);
  

  return (
    <div className="w-[1075px] h-[904px]">
      <div className="w-[1075px] flex justify-between items-center my-2">
        <h2 className="text-[#15223C] text-4xl font-semibold leading-[44px] tracking-[-2px] text-left">
          Arcadian Cafe Branches
        </h2>
        <div className="flex items-center gap-[8px] w-[493px] h-[44px]">
          <SearchBar />
          <FilterDropdown />
        </div>
        <div>
          <AddRestaurantButton>
            Add New
          </AddRestaurantButton>
        </div>
      </div>
      {branches.map(branch => (
        <BranchItem
          key={branch.id}
          {...branch}
        />
      ))}
    </div>
  );
};

export default BranchListing;

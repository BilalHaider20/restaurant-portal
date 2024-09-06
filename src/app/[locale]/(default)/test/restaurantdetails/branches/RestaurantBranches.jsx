"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import images from '../../../../../../../public/images';
import rest_images from '../../../../../../../public/images/restaurant/index';
import FilterDropdown from '@/app/components/common/dropdowns/FilterDropDown';
import AddRestaurantButton from './components/AddRestaurantButton';
import SearchBar from './components/SearchBar';
import DeleteConfirmationBox from './components/DeleteConfirmationBox';

const BranchItem = ({ name, location, rating, reviews, onDelete, index }) => (
  <div className="w-full max-w-full gap-[12px]">
    <div className="w-full flex py-2 border-s">
      <div className="flex-shrink-0">
        <Image src={rest_images.rest_branch1} alt="Branch" className="w-[237px] h-full rounded-l-lg object-cover" />
      </div>
      <div className="flex flex-col justify-between p-3 bg-white flex-grow">
        <div className='flex justify-between'>
          <div className="flex flex-col">
            <h3 className="font-medium text-lg leading-6 tracking-[-0.5px] text-[#3C3C3C]">
              {name}
            </h3>
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center gap-[2px]">
                <Image src={images.location_pin} alt="location" className="w-[16px] h-[16px]" />
                <span className="font-normal leading-5 tracking-[-0.5px] text-[#808080]">{location}</span>
              </div>
              <div className="flex items-center gap-[2px]">
                <Image src={images.clock} alt="time" className="w-[16px] h-[16px]" />
                <span className="font-normal leading-5 tracking-[-0.5px] text-[#808080]">Time</span>
              </div>
            </div>
          </div>
          <div className="relative flex flex-row items-end flex-wrap gap-2">
            <button className="flex items-center justify-center text-[#346CC4] p-2 rounded-lg border border-[#346CC4] hover:text-[#FFFFFF] hover:bg-[#346CC4] text-sm min-w-[80px]">
              <Image src={images.modify} alt='modify' className="mr-1" /> Modify
            </button>
            <button
              className="flex items-center justify-center text-[#F34141] p-2 rounded-lg border border-[#F34141] hover:text-[#FFFFFF] hover:bg-[#F34141] text-sm min-w-[80px]"
              onClick={onDelete}
            >
              <Image src={images.trashbin} alt='bin' className="mr-1" /> Delete
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <button className="flex items-center justify-center rounded border bg-[#EFF4FA] h-[32px] px-2">
            <p className="text-[#346CC4] font-medium text-xs leading-4">Free Wifi</p>
          </button>
          <button className="flex items-center justify-center rounded border bg-[#EFF4FA] h-[32px] px-2">
            <p className="text-[#346CC4] font-medium text-xs leading-4">Free Wifi</p>
          </button>
        </div>
        <div className="flex items-center mt-2">
          <div className="w-[50px] h-[32px] bg-[#346CC4] rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm leading-5">{rating}</span>
          </div>
          <div className="ml-2">
            <p className="font-medium text-base leading-6 tracking-[-0.7px] text-[#3C3C3C]">Excellent</p>
            <p className="font-normal text-xs leading-4 tracking-[-0.5px] text-[#808080]">{reviews} Reviews</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BranchListing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [branches, setBranches] = useState([
    { id: 1, name: 'Arcadian Cafe Packages Mall', location: 'Packages Mall, Lahore', rating: 4.8, reviews: 170 },
    { id: 2, name: 'Arcadian Cafe Packages Mall', location: 'Packages Mall, Lahore', rating: 4.8, reviews: 170 },
    { id: 3, name: 'Arcadian Cafe Packages Mall', location: 'Packages Mall, Lahore', rating: 4.8, reviews: 170 },
  ]);
  
  const openDialog = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setCurrentIndex(null);
  };

  const handleDelete = (index) => {
    setBranches((prevBranches) => prevBranches.filter((_, i) => i !== index));
    closeDialog();
  };

  return (
    <div className="max-w-full mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#15223C] text-4xl font-semibold leading-[44px] tracking-[-2px] text-left">
          Arcadian Cafe Branches
        </h2>
        <div className="flex items-center gap-[8px]">
          <SearchBar />
          <FilterDropdown />
        </div>
        <AddRestaurantButton>
          Add New
        </AddRestaurantButton>
      </div>
      {branches.map((branch, index) => (
        <BranchItem
          key={branch.id}
          {...branch}
          index={index}
          onDelete={() => openDialog(index)}
        />
      ))}
      <DeleteConfirmationBox
        isOpen={isOpen}
        onClose={closeDialog}
        onDelete={() => handleDelete(currentIndex)}
        itemindex={currentIndex}
      />
    </div>
  );
};

export default BranchListing;
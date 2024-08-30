import React from 'react';
import images from '../../../../../public/images';
import Image from 'next/image';
import rest_images from '../../../../../public/images/restaurant/index';
import AddBtn from '@/app/components/buttons/AddBtn';
// import SearchInput from '@/app/components/SearchInput';
import SearchBar from './SearchBar';
import Filter from './filter';

const BranchItem = ({ name, location, rating, reviews }) => (
  <div className="flex items-center bg-white justify-between w-[1075px] h-[184px] p-4 border-b">
    <div className="flex items-center w-[237px] h-[182px]">
      <Image src={rest_images.rest_branch} alt="Branch" className=" w-[237px] h-[182px] gap-[6px] object-cover mr-4" />
    </div>
    <div className=' w-[838px] h-[184px] flex flex-col items-left p-[12px] gap-[8px]'>
        <div className='w-[814px] h-[160px] gap-[12px]'>
            <div className='w-[814px] h-[114px] flex'>
                <div className='w-[814px] h-[70px]'>
                    <h3 className="font-semibold">{name}</h3>
                    <div className='w-[573px] h-[42px]'>
                        <div className='w-[157px] h-[20px] flex items-center justify-center'>
                            <Image src={images.location} alt="location" className='w-[16px] h-[16px] '/>
                            <p className="w-[139px] h-[20px] text-sm text-gray-600">{location}</p>
                        </div>
                        <div className='w-[143px] h-[20px] flex items-center justify-center'>
                            <Image src={images.clock} alt="time" className='w-[16px] h-[16px]'/>
                            <p className="w-[125px] h-[20px] text-sm text-gray-600 ">time</p>
                        </div>
                    </div>
                </div>
                <div className='w-[241px] h-[40px] flex flex-center'>
                    <button className=" w-[116px] text-blue-500 p-2 flex flex-center rounded-lg mr-3 border border-blue-500">
                        <Image src={images.modify} className='mr-[12px]'/> Modify
                    </button>
                    <button className="w-[116px] text-red-500 p-2 flex flex-center rounded-lg border border-red-500">
                        <Image src={images.trashbin} className='mr-[12px]' /> Delete
                    </button>
                </div>
            </div>
            <div className="w-[814px] h-[34px] flex items-center mt-1">
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm mr-2">{rating}</span>
                <span className="text-sm text-gray-600">{reviews} Reviews</span>
            </div>
        </div>
    </div>
  </div>
);

const BranchListing = () => {
  const branches = [
    { name: 'Arcadian Cafe Packages Mall', location: 'Packages Mall, Lahore', rating: 4.8, reviews: 170 },
    { name: 'Arcadian Cafe Packages Mall', location: 'Packages Mall, Lahore', rating: 4.8, reviews: 170 },
    { name: 'Arcadian Cafe Packages Mall', location: 'Packages Mall, Lahore', rating: 4.8, reviews: 170 },
  ];

  return (
    <div className='w-[1075px] h-[904px]'>
      <div className="w-[1075px] flex justify-between items-center mb-4">
        <h2 className="font-bold font-semibold text-[32px] leading-[44px] tracking-[-0.05em]">Arcadian Cafe Branches</h2>
        <div className='flex items-center gap-[8px] w-[493px] h-[44px]'>
            <SearchBar/>
            <Filter/>
        </div>
        <div>
        <AddBtn >
          Add New
        </AddBtn>
        </div>

      </div>
      {branches.map((branch, index) => (
        <BranchItem key={index} {...branch} />
      ))}
    </div>
  );
};

export default BranchListing;
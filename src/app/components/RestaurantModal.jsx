"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Icons from '../../../public/images/kit.png';
import vector from '../../../public/images/vector.png';
import center from '../../../public/images/center.png';
import Link from 'next/link';
import profile from '../../../public/images/profile.png';
import camera from '../../../public/images/camera.png';

const RestaurantModal = () => {
  const [ismodalclose,setismodalclose] =useState(false);
  const HandleModal =()=>{
    setismodalclose(true);
  }

  
  

  return (
    <div className={`w-full h-[1123px] max-w-3xl bg-[#F2F4F7] min-h-screen absolute  mx-auto transition-all ease-linear transform
      ${ismodalclose ? 'right-[-800px] ': 'right-0'}
      `}>
      <div className="font-semibold text-[#15223C] bg-[#E6E6E6] w-full p-4 flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl">Add a New Restaurant</h2>
        <button className="text-xl" onClick={HandleModal}>&times;</button>
      </div>
    
      <div className="bg-white rounded-lg m-4 p-4 space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative ">
            <Image src={profile} alt="Restaurant Profile" width={148} height={153} className="  rounded-full" />
            <button className=" m-l-3  transform -translate-x-1/2 bg-primary-blue text-white rounded-full px-3 py-1 flex items-center text-sm">
              <Image src={camera} alt="Camera" width={20} height={20} className="mr-1 " />
              Add
            </button>
          </div>
          <div className="flex-grow w-full">
            <label className="block text-[#3C3C3C] font-semibold mb-2">Restaurant Name</label>
            <input type="text" className="border border-gray-300 w-full p-2 rounded" placeholder="Enter Restaurant Name" />
          </div>
        </div>
        <div className="">

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-[299px] sm:w-1/2  ">
            <label className="block text-[#3C3C3C] font-semibold mb-2">Choose Cuisine</label>
            <div className="flex items-center border border-gray-300  rounded overflow-hidden">
              <div className="p-2">
                <Image src={Icons} alt="Cuisine icon" width={24} height={24} />
              </div>
              <input type="text" className="flex-grow p-2 " placeholder="Select" />
              <div className="p-2">
                <Image src={vector} alt="Vector icon" width={24} height={24} />
              </div>
            </div>
          </div>

          <div className="w-[191px] sm:w-1/2 ">
            <label className="block text-[#3C3C3C] font-semibold mb-2">Pricing Category</label>
            <div className="flex items-center space-x-6">
              {['$', '$$', '$$$'].map((price, index) => (
                <button key={index} className="text-lg cursor-pointer hover:text-primary-blue">{price}</button>
              ))}
              </div>
            </div>
          </div>
        </div>

        <div className='pt-1'>
          <label className="block text-[#3C3C3C] font-semibold mb-2">Restaurant Description</label>
          <textarea 
            className="w-full bg-white border border-gray-300 rounded-lg p-4 h-32 resize-none"
            placeholder="Enter Short Description"
          ></textarea>
        </div>

        <div>
          <label className="block text-[#3C3C3C] font-semibold mb-2">Promotions Banner</label>
          <div className="border-2 border-line rounded-lg p-8 text-center">
            <Image src={center} alt="Upload icon" width={70} height={44} className="mx-auto mb-4" />
            <p className="text-[#1F2937]">
              Drop your files here or <Link href="#" className="text-blue-700">browse</Link>
            </p>
            <p className="text-[#9CA3AF] text-sm mt-2">Maximum size: 50MB</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex justify-end space-x-4">
        <button className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100" onClick={HandleModal}>
          Cancel
        </button>
        <button className="px-4 py-2 text-white bg-primary-blue rounded-lg hover:bg-blue-600">
          Add
        </button>
      </div>
    </div>
  );
};

export default RestaurantModal;
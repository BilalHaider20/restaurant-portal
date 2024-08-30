"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Icons from '../../../public/images/kit.png';
import vector from '../../../public/images/vector.png';
import center from '../../../public/images/center.png';
import Link from 'next/link';
import profile from '../../../public/images/profile.png';
import camera from '../../../public/images/camera.png';

const RestaurantModal = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
    return () => setIsModalOpen(false);
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50`}>
      <div className={`w-full max-w-3xl relative top-36 bg-[#F2F4F7] transition-transform duration-300
        ${isModalOpen ? 'transform translate-x-0' : 'transform translate-x-full'}
      `}>
        <div className="font-semibold text-[#15223C] bg-[#E6E6E6] w-full p-4 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl">Add a New Restaurant</h2>
          <button className="text-xl" onClick={handleModalClose}>&times;</button>
        </div>

        <div className="bg-white rounded-lg m-4 p-4 space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <Image src={profile} alt="Restaurant Profile" width={148} height={153} className="rounded-full" />
              <button className="absolute m-l-3  left-[20px] top-[100px] bg-primary-blue text-white rounded-full px-3 py-1 flex items-center text-sm">
                <Image src={camera} alt="Camera" width={20} height={20} className="mr-1" />
                Add
              </button>
            </div>
            <div className="flex-grow w-full">
              <label className="block text-[#3C3C3C] font-semibold mb-2">Restaurant Name</label>
              <input type="text" className="border border-gray-300 w-full p-2 rounded" placeholder="Enter Restaurant Name" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-[299px] sm:w-1/2">
              <label className="block text-[#3C3C3C] font-semibold mb-2">Choose Cuisine</label>
              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                <div className="p-2">
                  <Image src={Icons} alt="Cuisine icon" width={24} height={24} />
                </div>
                <input type="text" className="flex-grow p-2" placeholder="Select" />
                <div className="p-2">
                  <Image src={vector} alt="Vector icon" width={24} height={24} />
                </div>
              </div>
            </div>

            <div className="w-[191px] sm:w-1/2 ">
              <label className="block text-[#3C3C3C] font-semibold mb-2">Pricing Category</label>
              <div className="flex items-center space-x-6 mt-4">
                <label className="flex items-center">
                  <input className="peer" type="radio" name="price" value="$" />
                  <span className="ml-2 peer-checked:text-primary-blue">$</span>
                </label>
                <label className="flex items-center">
                  <input className="peer" type="radio" name="price" value="$$" />
                  <span className="ml-2 peer-checked:text-primary-blue">$$</span>
                </label>
                <label className="flex items-center">
                  <input className="peer" type="radio" name="price" value="$$$" />
                  <span className="ml-2 peer-checked:text-primary-blue">$$$</span>
                </label>
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

        <div className="sticky bottom-0 bg-white p-4 flex justify-end space-x-4">
          <button className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100" onClick={handleModalClose}>
            Cancel
          </button>
          <button className="px-4 py-2 text-white bg-primary-blue rounded-lg hover:bg-blue-600">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;
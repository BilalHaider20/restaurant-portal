"use client";

import React, { useState, useEffect, useRef } from "react";
import images from '../../../../../public/images/index';
import Image from "next/image";

const AddAmenitiesModal = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(onClose, 300);
  };

  const [profileImage, setProfileImage] = useState(images.profile);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setProfileImage(URL.createObjectURL(files[0]));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
      <div className={`w-full max-w-lg h-screen bg-[#F2F4F7] flex flex-col justify-between transition-transform duration-300 ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Modal Header */}
        <div className="font-semibold text-[#15223C] bg-[#E6E6E6] w-full p-4 flex justify-between items-center">
          <h2 className="text-xl">Add New Amenity</h2>
          <button className="text-xl" onClick={handleModalClose}>
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 flex-grow">
          <div className="bg-white rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
                {/* Profile Section */}
                <div className="flex flex-col w-full sm:flex-row items-center gap-4">
                    <div className="relative">
                        <Image
                        src={profileImage}
                        alt="Restaurant Profile"
                        width={148}
                        height={153}
                        className="rounded-full"
                    />
                    <button
                    onClick={handleClick}
                    className="absolute bottom-0 right-[26px] bg-primary-blue text-white rounded-full px-3 py-1 flex items-center text-sm"
                    >
                    <Image
                        src={images.camera}
                        alt="Camera"
                        width={20}
                        height={20}
                        className="mr-1"
                    />
                    Add
                    </button>
                        {/* Hidden file input */}
                        <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center ml-4 w-full">
                <label className="text-base font-medium">Amenity Title</label>
                <input type="text" className="border border-gray-300 rounded-lg p-2" placeholder="Enter Title" />
                </div>
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-base font-medium">Amenity Description</label>
              <textarea className="border border-gray-300 rounded-lg p-2" placeholder="Enter Short Description" rows="4"></textarea>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white p-4 flex justify-end space-x-4">
          <button className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100" onClick={handleModalClose}>
            Cancel
          </button>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAmenitiesModal;
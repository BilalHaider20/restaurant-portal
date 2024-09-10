"use client";

import React, { useState, useEffect, useRef } from "react";
import images from "../../../../public/images";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
const AddAmenitiesModal = ({ onClose, onAddAmenity }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(images.profile);
  const [amenityTitle, setAmenityTitle] = useState("");
  const [amenityDescription, setAmenityDescription] = useState("");
  const { lang } = useAppSelector((state) => state.lang);
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

  const handleAddClick = () => {
    if (amenityTitle && amenityDescription) { // Check for non-empty values
      const newAmenity = {
        id: Date.now(), // Unique ID
        amenity_title: amenityTitle,
        amenity_details: amenityDescription,
      };

      onAddAmenity(newAmenity); // Call the passed function to add the new amenity
      setAmenityTitle(""); // Reset input fields
      setAmenityDescription("");
      handleModalClose(); // Close the modal
    } else {
      alert("Please fill in both the title and description."); // Alert if fields are empty
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
      <div className={`w-full max-w-lg h-screen bg-[#F2F4F7] flex flex-col justify-between transition-transform duration-300 ${isModalOpen ? 'translate-x-0' : lang==='en'? 'translate-x-full': '-translate-x-full' }`}>
        
        {/* Responsive Modal Header */}
        <div className="font-semibold bg-[#FFFFFF] text-[#15223C] w-full p-4 flex justify-between items-center">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-2xl text-[#15223C]">Add New Amenity</h2>
          <button className="text-xl sm:text-2xl" onClick={handleModalClose}>
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 flex-grow">
          <div className="bg-white rounded-lg p-4 space-y-4">
            <div className="flex flex-col items-center sm:flex-row">
                {/* Profile Section */}
                <div className="flex flex-col items-center sm:flex-row">
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
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-primary-blue text-white rounded-full 
                    px-4 py-1 flex items-center justify-center text-sm"
                    >
                    <Image
                        src={images.camera}
                        alt="Camera"
                        width={20.4}
                        height={20.4}
                        className="mr-1"
                    />
                    <p className="text-sm sm:text-xs">Add</p>
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
                <div className="flex flex-col justify-center w-full ml-2">
                  <label className="text-base font-medium text-[#3C3C3C] ">Amenity Title</label>
                  <input 
                    type="text" 
                    className="border border-gray-300 rounded-lg p-2 text-[#808080]" 
                    placeholder="Enter Title" 
                    value={amenityTitle} 
                    onChange={(e) => setAmenityTitle(e.target.value)} // Track input changes
                  />
                </div>
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-base font-medium text-[#3C3C3C]">Amenity Description</label>
              <textarea 
                className="border border-gray-300 rounded-lg p-2 text-[#808080]" 
                placeholder="Enter Short Description" 
                rows="4"
                value={amenityDescription}
                onChange={(e) => setAmenityDescription(e.target.value)} // Track input changes
              ></textarea>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white p-4 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="w-full sm:w-auto px-4 py-2 text-gray-600 bg-[#FFFFFF] border border-gray-300 rounded-lg hover:bg-gray-100 text-center" onClick={handleModalClose}>
            Cancel
          </button>
          <button className="w-full sm:w-auto px-4 py-2 text-white bg-[#346CC4] rounded-lg hover:bg-blue-600 text-center" onClick={handleAddClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAmenitiesModal;
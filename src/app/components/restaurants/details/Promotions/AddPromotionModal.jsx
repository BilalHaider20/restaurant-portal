"use client";
import React, { useState, useEffect,useCallback } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

// import center from '@/../public/images/center.png';
import FileUpload from '@/app/components/common/FormElements/ImageUpload';


const AddPromotionModal = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsModalOpen(true);
    }, 100); 

    return () => clearTimeout(timer);

    
      }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
      <div
        className={`w-full max-w-3xl h-screen bg-[#F2F4F7] dark:bg-primary-bg-dark flex flex-col justify-between transition-transform duration-300
          ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Modal Header */}
        <div className="font-semibold text-[#15223C] bg-white w-full p-4 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl">Add A New Promotion</h2>
          <button className="text-xl" onClick={handleModalClose}>
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 flex-grow">
          <div className="bg-white rounded-lg m-4 p-4 space-y-6">
            {/* Profile Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-grow w-full">
                <label className="block text-[#3C3C3C] font-semibold mb-2">Promotion Title</label>
                <input
                  type="text"
                  className="border border-gray-300 w-full p-2 rounded"
                  placeholder="Enter Promotion Title"
                />
              </div>
            </div>

            {/* Restaurant Description */}
            <div className="pt-1">
              <label className="block text-[#3C3C3C] font-semibold mb-2">Promotion  Description</label>
              <textarea
                className="w-full bg-white border border-gray-300 rounded-lg p-4 h-32 resize-none"
                placeholder="Enter Short Description"
              ></textarea>
            </div>

            {/* Promotions Banner */}
            {/* <div>
              <label className="block text-[#3C3C3C] font-semibold mb-2">Promotions Banner</label>
              <div className="border-2 border-line rounded-lg p-8 text-center">
                <Image src={center} alt="Upload icon" width={70} height={44} className="mx-auto mb-4" />
                <label className="text-[#1F2937]" htmlFor='file-input'>Drop your file here or <span>Browse</span></label>
                  
                  <input type="image"  src="img_submit.gif" alt="Submit" width="48" height="48" />
                <p className="text-[#9CA3AF] text-sm mt-2">Maximum size: 50MB</p>
              </div>
            </div> */}
        <div className="flex-grow overflow-y-auto p-4 space-y-6">
          <FileUpload title={"Promotional Banner"} />
        </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white p-4 flex justify-end space-x-4">
          <button
            className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
           onClick={handleModalClose}
          >
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

export default AddPromotionModal;

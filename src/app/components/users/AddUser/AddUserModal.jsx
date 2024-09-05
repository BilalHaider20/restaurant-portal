"use client";
import React, { useState,useEffect } from "react";
import ExistingMembers from "./Modal/ExistingMembers";
import AddNewMember from "./Modal/AddNewMember";
import images from '../../../../../public/images/index'
import { ChevronUp,ChevronDown } from 'lucide-react';

const AddUserModal = ({ onClose }) => {
  const [showExisting, setShowExisting] = useState(true);
  const [showNewMember, setShowNewMember] = useState(true);
  const [Profile, setProfile] = useState(images.profile);
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
        <div className="font-semibold text-[#15223C] bg-[#E6E6E6] w-full p-4 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl">Add a New User</h2>
          <button className="text-xl" onClick={handleModalClose}>
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 flex-grow">
          <div className="bg-white rounded-lg  p-4 space-y-4">
            {/* Toggle Choose Existing Members */}
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowExisting(!showExisting)}>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">Choose From Existing Members</h2>
              <span>{showExisting ?  <ChevronUp /> : <ChevronDown/>}</span>
            </div>
            {showExisting && <ExistingMembers />}

            <div className="my-4 border-t border-gray-300" />

            {/* Toggle Add A New Member */}
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowNewMember(!showNewMember)}>
              <h2 className="text-2xl font-medium">Add A New Member</h2>
              <span>{showNewMember ? <ChevronUp /> : <ChevronDown/>}</span>
            </div>
            {showNewMember && <AddNewMember setProfile={setProfile} />}
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

export default AddUserModal;



    
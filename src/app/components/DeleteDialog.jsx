"use client";
// DeleteDialog.js
import React, { useState } from 'react';
import { TriangleAlert } from 'lucide-react';

const DeleteDialog = ({onClose}) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-[60%] md:w-[40%] lg:w-[30%]  sm:h-auto  bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <button
          onClick={() => alert("cross")}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <span className="text-2xl">&times;</span>
        </button>
        <TriangleAlert className='w-16 h-16 mx-auto text-[#F34141]' />
        <div className='text-[#3C3C3C] flex-col mt-10'>
          <h2 className='py-2 text-base md:text-lg lg:text-2xl font-medium leading-tight text-center'>
            Delete Arcadian Cafe Packages Mall
          </h2>
          <p className='text-[#3C3C3C] text-sm md:text-base lg:text-lg font-normal tracking-tighter mb-2 text-center'>
            Are you sure you want to delete this? This action can’t be undone.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-auto">
          <button onClick={() => alert("cancel")} className="w-full md:w-[50%] text-[#F34141] text-sm md:text-base lg:text-lg px-4 py-2 border border-[#F34141] rounded-lg">
            Cancel
          </button>
          <button onClick={() => {
              alert("Delete");
              onClose(); }}  className="w-full md:w-[50%] bg-[#F34141] text-sm md:text-base lg:text-lg text-white px-4 py-2 rounded-lg" >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
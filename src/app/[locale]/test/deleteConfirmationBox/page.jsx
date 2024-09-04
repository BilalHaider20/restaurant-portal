"use client";
// DeleteDialog.js
import React from 'react';
import { TriangleAlert } from 'lucide-react';

const DeleteDialog = () => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[758px] h-[313px] sm:h-auto md:h-[313px] m-2 bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <button
          onClick={() => alert("cross")}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <span className="text-2xl">&times;</span>
        </button>
        <TriangleAlert className='w-16 h-16 mx-auto my-2 text-[#F34141]' />
        <div className='text-[#3C3C3C] flex-col mt-10'>
          <h2 className='text-3xl font-medium leading-tight text-center'>
            Delete Arcadian Cafe Packages Mall
          </h2>
          <p className='text-[#3C3C3C] text-lg font-normal leading-tight mb-2 text-center'>
            Are you sure you want to delete this? This action can’t be undone.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-auto">
          <button onClick={() => alert("cancel")} className="w-full md:w-full text-[#F34141] px-4 py-2 border border-[#F34141] rounded-lg">
            Cancel
          </button>
          <button onClick={() => alert("Delete")} className="w-full md:full bg-[#F34141] text-white px-4 py-2 rounded-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
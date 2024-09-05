"use client"
import React, { useState } from 'react';
import { EllipsisVertical, ChevronDown } from 'lucide-react';

const Floor= () => {
  const initialFloorData = [
    { id: 34568, dateCreated: '31 August 2024', title: 'Ground Floor', details: 'Riaz Plaza, Liberty Chowk, Round About, Gulberg III, Lahore', status: 'Active' },
    { id: 34569, dateCreated: '31 August 2024', title: 'First Floor', details: 'Riaz Plaza, Liberty Chowk, Round About, Gulberg III, Lahore', status: 'Inactive' },
    // Add more rows as needed
  ];

  const [floorData, setFloorData] = useState(initialFloorData);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const changeStatus = (index) => {
    setFloorData((prevData) => {
      const newData = [...prevData];
      newData[index].status = newData[index].status === 'Active' ? 'Inactive' : 'Active';
      return newData;
    });
    setOpenDropdownIndex(null); 
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 text-[#3C3C3C] sm:text-sm font-medium leading-6">
        <thead className="bg-[#E6E6E6] bg-opacity-40 border-[#E6E6E6]">
          <tr>
            {['Floor ID', 'Date Created', 'Floor Title', 'Floor Details', 'Status', 'Actions'].map((header, index) => (
              <th key={index} className="px-2 sm:px-4 py-2 border text-center">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {floorData.map((floor, index) => (
            <tr key={index} className="hover:bg-gray-50 text-left sm:text-center">
              <td className="px-2 sm:px-4 py-2 border text-center">{floor.id}</td>
              <td className="px-2 sm:px-4 py-2 border text-center">{floor.dateCreated}</td>
              <td className="px-2 sm:px-4 py-2 border text-center">{floor.title}</td>
              <td className="px-2 sm:px-4 py-2 border text-center">{floor.details}</td>
              <td className="px-2 sm:px-4 py-2 border text-center">
                <div className='flex items-center justify-center relative'>
                  <div className={`px-4 py-1 rounded-full ${floor.status === 'Active' ? 'bg-[#EBF5F0] text-[#2F9461]' : 'bg-red-100 text-red-600'}`}>
                    {floor.status}
                  </div>
                  <button onClick={() => toggleDropdown(index)} className="ml-2">
                    <ChevronDown />
                  </button>
                  {openDropdownIndex === index && (
                    <div className="absolute right-0 z-10 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg">
                      <button onClick={() => changeStatus(index)} className="block px-4 py-2 text-left w-full hover:bg-gray-100">
                        {floor.status === 'Active' ? 'Set Inactive' : 'Set Active'}
                      </button>
                    </div>
                  )}
                </div>
              </td>
              <td className="px-2 sm:px-4 py-2 border text-center">
                <button className="text-gray-500 hover:text-gray-700">
                  <EllipsisVertical />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Floor;
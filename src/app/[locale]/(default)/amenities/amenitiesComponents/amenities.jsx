"use client";

import React, { useState } from 'react';
import images from '../../../../../../public/images';
import Image from 'next/image';
// import DeleteDialog from '@/app/components/DeleteDialog';

const AmenitiesTable = () => {
  const initialAmenitiesData = [
    { id: 10001,  amenity_title: 'Wifi', amenity_details: 'Lorem Ipsum dolor set amet.'},
    { id: 10001,  amenity_title: 'Wifi', amenity_details: 'Lorem Ipsum dolor set amet.'},
    { id: 10001,  amenity_title: 'Wifi', amenity_details: 'Lorem Ipsum dolor set amet.'},
    { id: 10001,  amenity_title: 'Wifi', amenity_details: 'Lorem Ipsum dolor set amet.'},
    { id: 10001,  amenity_title: 'Wifi', amenity_details: 'Lorem Ipsum dolor set amet.'},
    { id: 10001,  amenity_title: 'Wifi', amenity_details: 'Lorem Ipsum dolor set amet.'},
    { id: 10001,  amenity_title: 'Wifi', amenity_details: 'Lorem Ipsum dolor set amet.'},
    { id: 10001,  amenity_title: 'Wifi', amenity_details: 'Lorem Ipsum dolor set amet.'},
    { id: 10001,  amenity_title: 'Wifi', amenity_details: 'Lorem Ipsum dolor set amet.'},
    { id: 10001,  amenity_title: 'Wifi', amenity_details: 'Lorem Ipsum dolor set amet.'},
  ];

  const [amenitiesData, setAmenitiesData] = useState(initialAmenitiesData);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    // setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const changeStatus = (index) => {

  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 text-[#3C3C3C] sm:text-sm font-medium leading-6">
        <thead className="bg-[#E6E6E6] bg-opacity-40 border-[#E6E6E6]">
          <tr>
            {['Amenity ID', 'Amenity Title', 'Amenity Description', 'Actions'].map((header, index) => (
              <th key={index} className="px-2 sm:px-4 py-2 border text-center">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {amenitiesData.map((amenity, index) => (
            <tr key={index} className="hover:bg-gray-50 text-left sm:text-center">
              <td className="px-2 sm:px-4 py-2 border text-center">{amenity.id}</td>
              <td className="px-2 sm:px-4 py-2 border text-center">{amenity.amenity_title}</td>
              <td className="px-2 sm:px-4 py-2 border text-center">{amenity.amenity_details}</td>
              <td className="px-2 sm:px-4 py-2 border text-center">
                    <button className="text-blue-400 mr-2 hover:text-blue-700">
                    <Image
                            src={images.modify}
                            alt='Delete'
                            width={24}
                            height={24}
                        />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                        <Image
                            src={images.trashbin}
                            alt='Delete'
                            width={24}
                            height={24}
                        />
                    </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmenitiesTable;
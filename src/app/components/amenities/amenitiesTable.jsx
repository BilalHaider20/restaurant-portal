"use client";

import React from 'react';
import images from '../../../../public/images';
import Image from 'next/image';

const AmenitiesTable = ({ amenitiesData , onClickDelete }) => {
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
          {amenitiesData.length > 0 ? (
            amenitiesData.map((amenity, index) => (
              <tr key={index} className="hover:bg-gray-50 text-left sm:text-center">
                <td className="px-2 sm:px-4 py-2 border text-center">{amenity.id}</td>
                <td className="px-2 sm:px-4 py-2 border text-center">{amenity.amenity_title}</td>
                <td className="px-2 sm:px-4 py-2 border text-center">{amenity.amenity_details}</td>
                <td className="px-2 sm:px-4 py-2 border text-center">
                  <button className="text-blue-400 mr-2 hover:text-blue-700">
                    <Image
                      src={images.modify}
                      alt='Modify'
                      width={24}
                      height={24}
                    />
                  </button>
                  <button 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => onClickDelete(amenity)} // Open delete dialog
                  >
                    <Image
                      src={images.trashbin}
                      alt='Delete'
                      width={24}
                      height={24}
                    />
                  </button>
                  {/* {console.log('table onClickDelete:', onClick)} */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4">No amenities available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    
  );
};

export default AmenitiesTable;
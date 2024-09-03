import React from 'react';
import images from '../../../../../public/images';
import Image from 'next/image';

const FloorTable = () => {
  const floorData = [
    { id: 34568, dateCreated: '31 August 2024', title: 'Ground Floor', details: 'Riaz Plaza, Liberty Chowk, Round About, Gulberg III, Lahore', status: 'Active' },
    { id: 34569, dateCreated: '31 August 2024', title: 'Ground Floor', details: 'Riaz Plaza, Liberty Chowk, Round About, Gulberg III, Lahore', status: 'Active' },
    { id: 34569, dateCreated: '31 August 2024', title: 'Ground Floor', details: 'Riaz Plaza, Liberty Chowk, Round About, Gulberg III, Lahore', status: 'Active' },
    { id: 34569, dateCreated: '31 August 2024', title: 'Ground Floor', details: 'Riaz Plaza, Liberty Chowk, Round About, Gulberg III, Lahore', status: 'Active' },
    { id: 34569, dateCreated: '31 August 2024', title: 'Ground Floor', details: 'Riaz Plaza, Liberty Chowk, Round About, Gulberg III, Lahore', status: 'Active' },
    { id: 34569, dateCreated: '31 August 2024', title: 'Ground Floor', details: 'Riaz Plaza, Liberty Chowk, Round About, Gulberg III, Lahore', status: 'Active' },
    { id: 34569, dateCreated: '31 August 2024', title: 'Ground Floor', details: 'Riaz Plaza, Liberty Chowk, Round About, Gulberg III, Lahore', status: 'Active' },
    { id: 34569, dateCreated: '31 August 2024', title: 'Ground Floor', details: 'Riaz Plaza, Liberty Chowk, Round About, Gulberg III, Lahore', status: 'Active' },
    // Add more rows as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 text-[#3C3C3C] text-[14px] font-medium leading-[28px] tracking-[-1px] text-left">
        <thead className='bg-[#E6E6E6] bg-opacity-40 border-[#E6E6E6] '>
          <tr>
            <th className="w-[136px] h-[44px] px-[60px] py-[8px] gap-[10px] border border-l border-t border-r text-center">Floor ID</th>
            <th className="w-[136px] h-[44px] px-[60px] py-[8px] gap-[10px] border border-l border-t border-r text-center">Date Created</th>
            <th className="w-[194px] h-[44px] px-[60px] py-[8px] gap-[10px] border border-l border-t border-r text-center">Floor Title</th>
            <th className="w-[410px] h-[44px] px-[60px] py-[8px] gap-[10px] border border-l border-t border-r text-center">Floor Details</th>
            <th className="w-[120px] h-[44px] px-[60px] py-[8px] gap-[10px] border border-l border-t border-r text-center">Status</th>
            <th className="w-[92px] h-[44px] px-[60px] py-[8px] gap-[10px] border border-l border-t border-r text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {floorData.map((floor, index) => (
            <tr key={index} className="hover:bg-gray-50 text-[#3C3C3C]">
              <td className="w-[136px] h-[44px] px-[60px] py-[8px] gap-[10px] border border-l  text-center">{floor.id}</td>
              <td className="w-[136px] h-[44px] px-[60px] py-[8px] gap-[10px] border border-l  text-center">{floor.dateCreated}</td>
              <td className="w-[194px] h-[44px] px-[60px] py-[8px] gap-[10px] border border-l  text-center">{floor.title}</td>
              <td className="w-[410px] h-[44px] px-[60px] py-[8px] gap-[10px] border border-l  text-center">{floor.details}</td>
              <td className="w-[120px] h-[44px] px-[60px] py-[8px] gap-[4px] border border-l  text-center">
                <div className='flex items-center'>
                    <div className={`items-center p-[5px_20px] gap-[10px] rounded-[150px] bg-[#EBF5F0] 
                        rounded-[100px] gap-[8px] text-${floor.status === 'Active' ? '#2F9461' : 'red'}-600 bg-${floor.status === 'Active' ? '#EBF5F0' : 'red'}-100 rounded-full`}>
                        <p>
                        {floor.status}
                        </p>
                    </div>
                    <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                    </svg>
                </div>
              </td>
              <td className="w-[92px] h-[44px] px-[60px] py-[8px] gap-[10px] border border-l  text-center">
                <button className="text-gray-500 hover:text-gray-700">
                    <Image src={images.view} alt="view" className='w-[24px] h-[24px]'/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FloorTable;

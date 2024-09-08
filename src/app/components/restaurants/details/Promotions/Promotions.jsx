import React from 'react';
import images from '../../../../../../public/images';
import Image from 'next/image';
const Promotions = () => {
  const promotions = Array(7).fill({
    promotionID: '634482',
    dateCreated: '31 August 2023',
    title: 'Monal Restaurant',
    details: 'Ride Plaza',
    status: 'Active'
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100 border-b">
            <th className="py-2 px-4 text-left text-gray-800">Promotion ID</th>
            <th className="py-2 px-4 text-left text-gray-800">Date Created</th>
            <th className="py-2 px-4 text-left text-gray-800">Promotion Title</th>
            <th className="py-2 px-4 text-left text-gray-800">Promotion Details</th>
            <th className="py-2 px-4 text-left text-gray-800">Status</th>
            <th className="py-2 px-4 text-left text-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody>
          {promotions.map((promotion, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4 text-gray-600">{promotion.promotionID}</td>
              <td className="py-2 px-4 text-gray-600">{promotion.dateCreated}</td>
              <td className="py-2 px-4 text-gray-600">{promotion.title}</td>
              <td className="py-2 px-4 text-gray-600">{promotion.details}</td>
              <td className="py-2 px-4 text-gray-600 flex">
                <span className='text-[#2F9461] text-sm flex justify-center items-center py-1 px-3 rounded-full space-x-2 bg-[#EBF5F0]'>{promotion.status}</span>
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
              </td>
              <td className="py-2 px-4 text-gray-600">
                <Image src={images.dot_menu} alt='menu'></Image>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Promotions;

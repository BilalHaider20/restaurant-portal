"use client";
import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import images from '../../../../../../../public/images/index'
import Image from 'next/image';

const Reviews = ({ users }) => {
    const [visibleComments, setVisibleComments] = useState(
        users.map(() => true)
    );

    const toggleCommentsVisibility = (index) => {
        setVisibleComments((prev) =>
            prev.map((visible, i) => (i === index ? !visible : visible))
        );
    };

    return (
        <div className="overflow-x-auto p-2 sm:p-4 md:p-8 bg-slate-100 min-h-[538px]">
            <div className="w-full overflow-x-auto">
                <table className="min-w-full bg-white border border-[#E6E6E6]">
                    <thead className="bg-[#E6E6E6] text-[#3c3c3c]">
                        <tr>
                            <th className="py-2 px-2 sm:px-4 border-b text-center font-semibold border-r border-[#E6E6E6] text-xs sm:text-sm">Date</th>
                            <th className="py-2 px-2 sm:px-4 border-b text-center font-semibold border-r border-[#E6E6E6] text-xs sm:text-sm">Reservation Ref</th>
                            <th className="py-2 px-2 sm:px-4 border-b text-center font-semibold border-r border-[#E6E6E6] text-xs sm:text-sm">Name</th>
                            <th className="py-2 px-2 sm:px-4 border-b text-center font-semibold border-r border-[#E6E6E6] text-xs sm:text-sm">Rating</th>
                            <th className="py-2 px-2 sm:px-4 border-b text-center font-semibold border-r border-[#E6E6E6] text-xs sm:text-sm">Comments</th>
                            <th className="py-2 px-2 sm:px-4 border-b text-center font-semibold text-xs sm:text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="text-[#3c3c3c] hover:bg-gray-50">
                                <td className="py-2 px-2 sm:px-4 border-b text-center border-r border-[#E6E6E6] text-xs sm:text-sm">{user.date}</td>
                                <td className="py-2 px-2 sm:px-4 border-b text-center border-r border-[#E6E6E6] text-xs sm:text-sm">{user.reference}</td>
                                <td className="py-2 px-2 sm:px-4 border-b text-center border-r border-[#E6E6E6] text-xs sm:text-sm">{user.name}</td>
                                <td className="py-2 px-2 sm:px-4 border-b text-center border-r border-[#E6E6E6] text-primary-blue text-xs sm:text-sm">
                                    {'★'.repeat(user.rating) + '☆'.repeat(5 - user.rating)}
                                </td>
                                <td className="py-2 px-2 sm:px-4 border-b text-center border-r border-[#E6E6E6] text-xs sm:text-sm">
                                    {visibleComments[index] ? user.comments : 'Hidden'}
                                </td>
                                <td className="py-4 px-2 sm:px-4 border-b text-center flex items-center justify-center space-x-2">
                                    <button className="text-blue-400 hover:text-blue-700" onClick={() => toggleCommentsVisibility(index)}>
                                        <Icon icon={visibleComments[index] ? eye : eyeOff} size={20} />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <Image
                                            src={images.trashbin}
                                            alt='Delete'
                                            width={20}
                                            height={20}
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reviews;
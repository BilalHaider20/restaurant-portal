"use client"
import React from 'react'
import Image from 'next/image';
import images from '@/../public/images/index'
import RoleDropdown from './RoleDropdown';
import { useState } from 'react';

const Users = ({data}) => {
      const [userRoles, setUserRoles] = useState(data.map(user => user.role));

      const handleRoleChange = (index, newRole) => {
        const updatedRoles = [...userRoles];
        updatedRoles[index] = newRole;
        setUserRoles(updatedRoles);
      };
    
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100 border-b">
            <th className="py-2 px-4 text-left text-gray-80">User</th>
            <th className="py-2 px-4 text-left text-gray-80">Role Type</th>
            <th className="py-2 px-4 text-left text-gray-80">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-[#F6F9FD]flex items-center justify-center text-blue-600 font-semibold">
                  BA
                </div>
                <div className="ml-2">
                  <div>{user.name}</div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </div>
              </td>
              <td className="py-2 px-4 text-gray-600">
              <RoleDropdown 
                  currentRole={userRoles[index]} 
                  onRoleChange={(newRole) => handleRoleChange(index, newRole)} 
                />
              </td>
              <td className="py-2 px-4 flex space-x-2 ">
                <button className="text-red-500 hover:text-red-700">
                  <Image 
                  src={images.trashbin}
                  alt=''
                  />
                </button>
                <button className="text-blue-500 hover:text-blue-700">
                  <Image 
                  src={images.edit}
                  alt=''
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
"use client";

import Sort from '@/app/components/common/dropdowns/Sort';
import SearchInput from '@/app/components/common/SearchField/SearchInput';
import UserFilter from '@/app/components/users/Others/UserFilter';
import Image from 'next/image';
import { LuFileEdit } from "react-icons/lu";
import images from '../../../../public/images';
import { useTranslations } from 'next-intl';
import TabLayout from '@/app/components/common/Common Layout/TabLayout';

const permissionsData = Array(10).fill({
  role: 'Restaurant Manager',
  permissions: 'ADD/REMOVE/EDIT: Branches, Table',
  description: 'Manage and modify branch locations and table settings.',
});

const PermissionsTable = () => {
  const t = useTranslations('permissions');

  return (
    <div className="bg-bg-highlight overflow-y-auto p-2 sm:p-4 md:p-6 flex flex-col gap-4">
      
      
      <TabLayout 
        title={'Roles and Permission'}
        btntext={'add_new'}
        inputPlaceholder={'roles_permissions'}
      /> 

      <div className="bg-bg-highlight flex flex-col gap-4 overflow-x-auto">
        <table className="min-w-full bg-white border border-[#E6E6E6]">
          <thead className="bg-[#E6E6E6] text-[#3c3c3c]">
            <tr>
              <th className="py-2 px-4 text-xs sm:text-sm md:text-base font-medium border text-center">Role</th>
              <th className="py-2 px-4 text-xs sm:text-sm md:text-base font-medium border text-center">Permissions</th>
              <th className="py-2 px-4 text-xs sm:text-sm md:text-base font-medium border text-center">Description</th>
              <th className="py-2 px-4 text-xs sm:text-sm md:text-base font-medium border text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {permissionsData.map((item, index) => (
              <tr key={index} className="text-[#3c3c3c] font-normal hover:bg-gray-50">
                <td className="py-2 px-4 text-xs sm:text-sm border text-center">{item.role}</td>
                <td className="py-2 px-4 text-xs sm:text-sm border text-center">{item.permissions}</td>
                <td className="py-2 px-4 text-xs sm:text-sm border text-center">{item.description}</td>
                <td className="py-2 px-4 text-xs sm:text-sm border text-center">
                  <div className="flex justify-center items-center space-x-2">
                    <button className="text-red-500 hover:text-red-800">
                      <Image
                        src={images.trashbin}
                        alt='Delete'
                        width={16}
                        height={16}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </button>
                    <button className="text-blue-500 hover:text-blue-700">
                      <LuFileEdit className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PermissionsTable;
"use client";
import AddUser from '@/app/components/users/AddUser/AddUser';
import AddBtn from '@/app/components/common/buttons/AddBtn';
import Sort from '@/app/components/common/dropdowns/Sort';
import SearchInput from '@/app/components/common/SearchField/SearchInput';
import FilterDropdown from '@/app/components/common/dropdowns/FilterDropDown';
import Users from '@/app/components/restaurants/details/Members/Users';
import React, { useEffect, useState } from "react";
import AddUserModal from '@/app/components/users/AddUser/AddUserModal';

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-bg-highlight overflow-y-auto p-4 sm:p-6 flex flex-col gap-4">
      <div className='flex flex-row justify-between'>
        <h1 className='text-3xl font-semibold'>User Management</h1>
        <AddUser onClick={handleOpenModal} /> {/* Ensure AddUser handles this prop */}
      </div>
      
      {isModalOpen && <AddUserModal onClose={handleCloseModal} />}
      
      <div className='flex flex-row justify-between'>
        <Sort />
        <div className='flex flex-row gap-2'>
          <SearchInput />
          <FilterDropdown />
        </div>
      </div>
      
      <Users />
    </div>
  );
};

export default User;
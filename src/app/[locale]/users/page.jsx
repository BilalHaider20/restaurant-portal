"use client";
import AddUser from '@/app/components/users/AddUser/AddUser';
import AddBtn from '@/app/components/common/buttons/AddBtn';
import Sort from '@/app/components/common/dropdowns/Sort';
import SearchInput from '@/app/components/common/SearchField/SearchInput';
import Users from '@/app/components/restaurants/details/Members/Users';
import UserFilter from '@/app/components/users/Others/UserFilter';
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
      <div className='flex flex-row justify-between '>
        <h1 className='text-3xl font-semibold'>User Management</h1>
        <AddUser onClick={handleOpenModal} /> 
      </div>
      
      {isModalOpen && <AddUserModal onClose={handleCloseModal} />}
      
      <div className='flex flex-row justify-between'>
        <Sort />
        <div className='flex flex-row gap-2'>
          <SearchInput />
          <UserFilter />
        </div>
      </div>
      
      <Users />
    </div>
  );
};

export default User;
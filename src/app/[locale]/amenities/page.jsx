"use client";
import { React, useState } from "react";
import AddAmenityModal from './amenitiesComponents/addAmenitiesModal';
import AddBtn from '@/app/components/common/buttons/AddBtn';
import Sort from '@/app/components/common/dropdowns/Sort';
import SearchInput from '@/app/components/common/SearchField/SearchInput';
import Amenities from './amenitiesComponents/amenities';
import UserFilter from '@/app/components/users/Others/UserFilter';
import TabLayout from "@/app/components/common/Common Layout/TabLayout";

const AmenitiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="bg-bg-highlight overflow-y-auto p-4 sm:p-6 flex flex-col gap-4">
      <TabLayout 
      title={'Amenities Managment'}
      inputplaceholder={'amenities'}
      btntext={`add_new`}
      onClick={handleOpenModal}
      />
      {isModalOpen && <AddAmenityModal onClose={handleCloseModal} />}
      
      <Amenities />
    </div>
  );
};

export default AmenitiesPage;
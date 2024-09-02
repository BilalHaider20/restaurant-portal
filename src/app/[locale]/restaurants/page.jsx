"use client"
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import RestaurantCard from "../../components/restaurants/RestaurantCard";
import TabLayout from "../../components/common/Common Layout/TabLayout";
import RestaurantModal from "../../components/restaurants/Restaurant Modal/RestaurantModal";

const Page = () => {
  const t = useTranslations('restaurants');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    // console.log("Open modal clicked");
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-bg-highlight overflow-y-auto p-4 sm:p-6">
      <TabLayout title={t('restaurantListing')} onClick={handleOpenModal} 
        btntext={'add_new'} inputPlaceholder={'restaurants'}  />
      
      <div className="flex flex-col gap-4 mt-4">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
      {isModalOpen && <RestaurantModal onClose={handleCloseModal} />}

    </div>
  );
};

export default Page;
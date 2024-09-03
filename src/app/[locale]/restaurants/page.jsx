"use client"
import React, { useState } from "react";
import { useTranslations } from "next-intl";
<<<<<<< Updated upstream
import RestaurantCard from "../../components/RestaurantCard";
import AddBtn from "../../components/buttons/AddBtn";
import SearchInput from "@/app/components/SearchInput";
import FilterDropDown from "../../components/buttons/FilterDropDown";
import RestaurantModal from "../../components/RestaurantModal"; 
=======
import RestaurantCard from "../../components/restaurants/RestaurantCard";
import TabLayout from "../../components/common/Common Layout/TabLayout";
import RestaurantModal from "../../components/restaurants/Restaurant Modal/RestaurantModal";
import Link from "next/link";
import { useRouter } from "next/navigation";
>>>>>>> Stashed changes

const Page = () => {
  const t = useTranslations('restaurants');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    
    console.log("Open modal clicked");
<<<<<<< Updated upstream
    setIsModalOpen(true)};
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-bg-highlight w-full mx-auto p-4 overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl sm:text-[32px] font-semibold">{t("restaurantListing")}</h1>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <SearchInput width="100%" smWidth="379px" height="44px" />
          <FilterDropDown />
          <AddBtn onClick={handleOpenModal} />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <RestaurantCard />
=======
    setIsModalOpen(true);
  };
  const router=useRouter();
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-bg-highlight overflow-y-auto p-4 sm:p-6">
      <TabLayout title={t('restaurantListing')} onClick={handleOpenModal} 
        btntext={'add_new'} inputPlaceholder={'restaurants'}  />
      
      <div className="flex flex-col gap-4 mt-4">
        <RestaurantCard onCardClick={()=>{
        router.push('/en/restaurants/branches')
        }} />
>>>>>>> Stashed changes
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
      {isModalOpen && <RestaurantModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Page;
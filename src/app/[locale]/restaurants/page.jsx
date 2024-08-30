"use client"
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import RestaurantCard from "../../components/RestaurantCard";
import AddBtn from "../../components/buttons/AddBtn";
import SearchInput from "@/app/components/SearchInput";
import FilterDropDown from "../../components/buttons/FilterDropDown";
import RestaurantModal from "../../components/RestaurantModal"; 

const Page = () => {
  const t = useTranslations('restaurants');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    
    console.log("Open modal clicked");
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
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
      {isModalOpen && <RestaurantModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Page;
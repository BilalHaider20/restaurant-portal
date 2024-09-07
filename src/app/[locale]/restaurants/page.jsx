"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import RestaurantCard from "@/app/components/restaurants/RestaurantCard";
import TabLayout from "@/app/components/common/Common Layout/TabLayout";
import RestaurantModal from "@/app/components/restaurants/Restaurant Modal/RestaurantModal";
import {addRestaurants, getRestaurants } from "@/app/services/apiMethods";
import Loading from "@/app/Loading";

const Page = () => {
  const t = useTranslations('restaurants');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getRestaurantsFunction();
    
  }, []);

  const getRestaurantsFunction = async () => {
    
    try {
      const response = await getRestaurants();
      console.log(response.data);
      setData(response.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
}


  

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  

  return (
    <div className="bg-bg-highlight overflow-y-auto p-4 sm:p-6">
      <TabLayout title={t('restaurantListing')} onClick={handleOpenModal} 
        btntext={'add_new'} inputPlaceholder='restaurants'  />
        {loading && <p>Loading...</p>}
        {
          data.map((restaurant) => (
            <RestaurantCard key={restaurant.id} id={restaurant.id} {...restaurant} className="cursor-pointer" />
          ))
        }
      {isModalOpen && <RestaurantModal onClose={handleCloseModal}  />}
    </div>
  );
};

export default Page;
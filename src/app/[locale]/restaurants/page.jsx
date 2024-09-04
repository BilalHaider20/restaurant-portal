"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import RestaurantCard from "../../components/restaurants/RestaurantCard";
import TabLayout from "../../components/common/Common Layout/TabLayout";
import RestaurantModal from "../../components/restaurants/Restaurant Modal/RestaurantModal";
import { restaurants as initialRestaurants } from "@/app/utils/restaurants/restaurantsData";
import { login } from "@/app/services/apiMethods";

const Page = () => {
  const t = useTranslations('restaurants');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(initialRestaurants);
  
  useEffect(() => {
    loginFunction();
  }, []);

  const loginFunction = async () => {
    try {
      const res = await login({ email: 'saadahmad@bookme.pk', password: '12345' });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const addRestaurant = (newRestaurant) => {
    console.log(newRestaurant)
    console.log(data)
    setData((prevData) => [...prevData, newRestaurant]);
    console.log(data)
  };

  return (
    <div className="bg-bg-highlight overflow-y-auto p-4 sm:p-6">
      <TabLayout 
        title={t('restaurantListing')} 
        onClick={handleOpenModal} 
        btntext={'add_new'} 
        inputPlaceholder={'restaurants'} 
      />
      
      <div className="flex flex-col gap-4 mt-4">
        {data.map((restaurant) => (
          <RestaurantCard key={restaurant.id} id={restaurant.id} {...restaurant} className="cursor-pointer" />
        ))}
      </div>
      {isModalOpen && <RestaurantModal onClose={handleCloseModal} onAdd={addRestaurant} />}
    </div>
  );
};

export default Page;
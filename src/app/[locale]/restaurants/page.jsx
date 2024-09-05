"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import RestaurantCard from "../../components/restaurants/RestaurantCard";
import TabLayout from "../../components/common/Common Layout/TabLayout";
import RestaurantModal from "../../components/restaurants/Restaurant Modal/RestaurantModal";
import { getRestaurants } from "@/app/services/apiMethods";
import Loading from "@/app/Loading";

const Page = () => {
  const t = useTranslations('restaurants');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState([]);
  
  useEffect(() => {
    getRestaurantsFunction();
    
  }, []);

  const getRestaurantsFunction = async () => {
    
    try {
      const response = await getRestaurants();
      console.log(response.data);
      setData(response.data);
      setloading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      seterror(error);
    }
}


  

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
      <TabLayout title={t('restaurantListing')} onClick={handleOpenModal} 
        btntext={'add_new'} inputPlaceholder='restaurants'  />
        {loading && <p>Loading...</p>}
        {
          data.map((restaurant) => (
            <RestaurantCard key={restaurant.id} id={restaurant.id} {...restaurant} className="cursor-pointer" />
          ))
        }
      {isModalOpen && <RestaurantModal onClose={handleCloseModal} onAdd={addRestaurant} />}
    </div>
  );
};

export default Page;
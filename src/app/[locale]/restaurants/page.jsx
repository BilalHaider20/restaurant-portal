"use client"
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import RestaurantCard from "../../components/restaurants/RestaurantCard";
import TabLayout from "../../components/common/Common Layout/TabLayout";
import RestaurantModal from "../../components/restaurants/Restaurant Modal/RestaurantModal";
import { getRestaurants } from "@/app/services/apiMethods";
const Page = () => {
  const t = useTranslations('restaurants');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data,setdata] = useState([]);
  const [error,seterror] = useState(null);
  const [loading,setloading] = useState(true);
  
  useEffect(() => {
    getRestaurantsFunction();
    
  }, []);

  const getRestaurantsFunction = async () => {
    
    try {
      const response = await getRestaurants();
      console.log(response.data);
      setdata(response.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      seterror(error);
    }
}


  

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
 
  
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-bg-highlight overflow-y-auto p-4 sm:p-6">
      <TabLayout title={t('restaurantListing')} onClick={handleOpenModal} 
        btntext={'add_new'} inputPlaceholder={'restaurants'}  />
      {loading && <p>Loading...</p>}
      <div className="flex flex-col gap-4 mt-4">
        {
          data.map((restaurant) => (
            <RestaurantCard key={restaurant.id} id={restaurant.id} {...restaurant} className="cursor-pointer" />
          ))
        }
      </div>
      {isModalOpen && <RestaurantModal onClose={handleCloseModal} />}

    </div>
  );
};

export default Page;
"use client"
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import RestaurantCard from "../../components/restaurants/RestaurantCard";
import TabLayout from "../../components/common/Common Layout/TabLayout";
import RestaurantModal from "../../components/restaurants/Restaurant Modal/RestaurantModal";
import { restaurants } from "@/app/utils/restaurants/restaurantsData";
import axios from 'axios';
import { getRestaurants } from "@/app/services/apiMethods";
import { login } from "@/app/services/apiMethods";
const Page = () => {
  const t = useTranslations('restaurants');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data,setdata] = useState([]);
  const [error,seterror] = useState(null);
  const [loading,setloading] = useState(true);
  
  useEffect(() => {
    loginFunction();
    getData()
  }, []);

  const getData = async () => {
    const url = 'http://restaurants-uat.bookmepk.com';
    try {  
      const response = await axios.get(`${url}/portal/api/restaurants`);
      console.log(response.data);
      setdata(response.data);
      setloading(false);
    } catch (error) {
      console.log('error',error);
      seterror(error);
    }
  }

  const loginFunction = async () => {

    login({email: 'saadahmad@bookme.pk', password: '12345'}).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);          
  });

};

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
 
  
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-bg-highlight overflow-y-auto p-4 sm:p-6">
      <TabLayout title={t('restaurantListing')} onClick={handleOpenModal} 
        btntext={'add_new'} inputPlaceholder={'restaurants'}  />
      
      <div className="flex flex-col gap-4 mt-4">
        {
          restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} id={restaurant.id} {...restaurant}  />
          ))
        }
      </div>
      {isModalOpen && <RestaurantModal onClose={handleCloseModal} />}

    </div>
  );
};

export default Page;
"use client"
import React,{useState} from "react";
import Image from "next/image";
import rest_images from '../../../../public/images/restaurant'
import RestaurantIntro from "@/app/components/RestaurantIntro";
import Switcher from "./components/Switcher";
import AddBtn from "@/app/components/buttons/AddBtn";
import BranchCard from "./components/BranchCard";
// import { useState } from "react";


const Branches = () => {
  const [activeTab, setactiveTab] = useState('Branches');
  const rest = {
    reviews: 4,
    image: rest_images.rest_image,
    name: "Arcadian Cafe",
    para: "Arcadian Café has firmly rooted itself in Lahore's culinary arena in a little over seven years. Our team of dedicated professionals works tirelessly to bring the world's cuisines to your town. Located at 28-K MM Alam Road, we are passionate about every dish that hits the table. We offer a variety of cuisines including Asian-fusion, Continental, and French-Italian. We offer a unique oblong 360-degree bar through the restaurant where guests can enjoy our comprehensive selection of mocktails, lattes, and coffees.",
    price: "$$$",
    cuisines: "Italian • French • Asian",
  }
  const branches = [
    {
      name: 'Arcadian Cafe Packages Mall',
      location: 'Packages Mall, Lahore',
      hours: '11:00 am - 10:00 pm',
      imageUrl: 'https://your-image-url.com/image.jpg', // Replace with actual image URL
      discount: '30%',
      features: ['Free Wifi', 'Free Wifi'],
      rating: '8.6',
      reviews: 155,
      bookings: 18,
    },
  ];

  const renderTab = () => {
  switch (activeTab) {
    case 'Branches':
      return (
      <div className="flex flex-col gap-4">
        <BranchCard branch={branches[0]} />
    </div>)
      
  
    default:
      break;
  }
}

  return (
    <div className="bg-bg-main scrollbar-none flex flex-col space-y-5  p-4">
      <RestaurantIntro rest={rest} />
      <div className="flex">
        <Switcher className="" activeTab={activeTab} setactiveTab={setactiveTab} />
      </div>
      <div className="flex flex-row justify-between">
        <h2 className="text-[clamp(1rem,2vw,32px)] font-semibold">Arcadian Cafe Branches</h2>
        <AddBtn onClick={() => {
          console.log("Add button clicked!")
        }} />
      </div>

      {
        renderTab()
      }
        
    </div>
  );
};

export default Branches;

"use client"
import React from "react";
import Image from "next/image";
import rest_images from '../../../../public/images/restaurant'
import RestaurantIntro from "@/app/components/RestaurantIntro";
import Switcher from "./components/Switcher";
// import { useState } from "react";

const Branches = () => {
  const rest = {
    reviews: 4,
    image: rest_images.rest_image,
    name: "Arcadian Cafe",
    para: "Arcadian Café has firmly rooted itself in Lahore's culinary arena in a little over seven years. Our team of dedicated professionals works tirelessly to bring the world's cuisines to your town. Located at 28-K MM Alam Road, we are passionate about every dish that hits the table. We offer a variety of cuisines including Asian-fusion, Continental, and French-Italian. We offer a unique oblong 360-degree bar through the restaurant where guests can enjoy our comprehensive selection of mocktails, lattes, and coffees.",
    price: "$$$",
    cuisines: "Italian • French • Asian",
  }
  return (
    <div className="bg-bg-main scrollbar-none flex flex-col space-y-5 pb-4 ">
      <RestaurantIntro rest={rest} />  
      <div className="flex">
      <Switcher />
      </div>
    </div>
  );
};

export default Branches;
{/* <button className=" w-[116px] text-blue-500 p-2 flex flex-center rounded-lg mr-3 border border-blue-500">
<Image src={images.modify} className="mr-[12px]" alt=""/> Modify
</button>
<button className="w-[116px] text-red-500 p-2 flex flex-center rounded-lg border border-red-500">
<Image src={images.trashbin} className="mr-[12px]" alt=""/> Delete
</button> */}
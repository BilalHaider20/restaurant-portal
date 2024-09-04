"use client"
import React, { useState } from "react";
import { useParams } from "next/navigation";
import rest_images from '@/../public/images/restaurant'

//Components
import RestaurantIntro from "@/app/components/RestaurantIntro";
import Switcher from "@/app/components/common/Tabswitch/Switcher";
import BranchCard from "@/app/components/restaurants/details/Branch/BranchCard";
import Users from "@/app/components/restaurants/details/Members/Users";
import Promotions from "@/app/components/restaurants/details/Promotions/Promotions";
import floor from "@/app/components/restaurants/details/Floor/Floor";
import TabLayout from "@/app/components/common/Common Layout/TabLayout";
import AddPromotionModal from "@/app/components/restaurants/details/Promotions/AddPromotionModal";
import BranchesModal from "@/app/components/restaurants/details/Branch/BranchesModal";
import { branches } from "@/app/utils/restaurants/branches/branchesData";

const Branches = () => {
  const [activeTab, setactiveTab] = useState('Branches');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 
  const { id } = useParams();
  const restaurantBranches = branches[id];
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const [branchesModalOpen, setBranchesModalOpen] = useState(false);
  const handleBranchesCloseModal = () => {
    setBranchesModalOpen(false)
  }
  const handleOpenBranchesModal = () => {
    setBranchesModalOpen(true)
  }

  const filteredBranches = restaurantBranches?.filter((branch) =>
    branch.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  // const rest = {
  //   reviews: 4,
  //   image: rest_images.rest_image,
  //   name: "Arcadian Cafe",
  //   para: "Arcadian Café has firmly rooted itself in Lahore's culinary arena in a little over seven years. Our team of dedicated professionals works tirelessly to bring the world's cuisines to your town. Located at 28-K MM Alam Road, we are passionate about every dish that hits the table. We offer a variety of cuisines including Asian-fusion, Continental, and French-Italian. We offer a unique oblong 360-degree bar through the restaurant where guests can enjoy our comprehensive selection of mocktails, lattes, and coffees.",
  //   price: "$$$",
  //   cuisines: "Italian • French • Asian",
  // }
  // const branches = [
  //   {
  //     name: 'Arcadian Cafe Packages Mall',
  //     location: 'Packages Mall, Lahore',
  //     hours: '11:00 am - 10:00 pm',
  //     imageUrl: 'https://your-image-url.com/image.jpg', // Replace with actual image URL
  //     discount: '30%',
  //     features: ['Free Wifi', 'Free Wifi'],
  //     rating: '8.6',
  //     reviews: 155,
  //     bookings: 18,
  //   },
  // ];
  if (!restaurantBranches) {
    return <p>No branches found for this restaurant.</p>;
  }


  const renderTab = () => {
    switch (activeTab) {
      case 'Branches':
        return (
          <>
            <TabLayout title={"Arcdian Cafe Branches"} btntext={"add_new_branch"} inputPlaceholder={"branches"} onClick={handleOpenBranchesModal} onSearch={setSearchQuery}  />
            <div className="flex flex-col gap-4">
            {filteredBranches.map((branch, index) => (
                <BranchCard key={index} id={index} branch={branch} />
              ))}
              {branchesModalOpen && <BranchesModal onClose={handleBranchesCloseModal} />}
            </div>
          </>)
      case 'Promotions':
        return (
          <>
            <TabLayout title={"Promotions and Deals"} btntext={"add_new_promotion"} inputPlaceholder={"promotion"} onClick={handleOpenModal} />
            <Promotions />
            {isModalOpen && <AddPromotionModal onClose={handleCloseModal} />}
          </>
        )
      case 'Members':
        return (
          <>
            <TabLayout title={"Arcadian Cafe Packages Mall Users"} btntext={"add_new_user"} inputPlaceholder={"user"} />
            <Users />
          </>
        )
      


      default:
        break;
    }
  }

  return (
    <div className="bg-bg-main scrollbar-none flex flex-col space-y-5 p-6">
      <RestaurantIntro rest={rest_images} />
      <div className="flex">
        <Switcher className="" activeTab={activeTab} setactiveTab={setactiveTab} />
      </div>

      {
        renderTab()
      }
    </div>
  );
};

export default Branches;

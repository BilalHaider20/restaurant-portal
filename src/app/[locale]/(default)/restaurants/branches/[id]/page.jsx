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
import AddUserModal from "@/app/components/users/AddUser/AddUserModal";

const Branches = () => {
  const [activeTab, setactiveTab] = useState('Branches');
  const [isModalOpen, setIsModalOpen] = useState({branches: false, promotion: false, user: false});
  const [searchQuery, setSearchQuery] = useState(""); 
  const { id } = useParams();
  const restaurantBranches = branches[id];

  const handleOpenModal = (tab) => {
    setIsModalOpen({...isModalOpen, [tab]: true});
  };

  const handleCloseModal = (tab) => {
    setIsModalOpen({...isModalOpen, [tab]: false});
  };
  
  

  const filteredBranches = restaurantBranches?.filter((branch) =>
    branch.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

 
  if (!restaurantBranches) {
    return <p>No branches found for this restaurant.</p>;
  }


  const renderTab = () => {
    switch (activeTab) {
      case 'Branches':
        return (
          <>
            <TabLayout title={"Arcdian Cafe Branches"} btntext={"add_new_floor"} inputPlaceholder={"branches"} onSearch={setSearchQuery}  onClick={()=>handleOpenModal('branches')} />
            <div className="flex flex-col gap-4">
            {filteredBranches.map((branch, index) => (
                <BranchCard key={index} id={index} branch={branch} />
              ))}
              {isModalOpen['branches'] && <BranchesModal onClose={()=>handleCloseModal('branches')} isActive={isModalOpen['branches']} />}
            </div>
          </>)
      case 'Promotions':
        return (
          <>
            <TabLayout title={"Promotions and Deals"} btntext={"add_new_promotion"} inputPlaceholder={"promotion"} onClick={()=>handleOpenModal('promotion')} />
            <Promotions />
            {<AddPromotionModal onClose={()=>handleCloseModal('promotion')} />}
          </>
        )
      case 'Members':
        return (
          <>
            <TabLayout title={"Arcadian Cafe Packages Mall Users"} btntext={"add_new_user"} inputPlaceholder={"user"} onClick={()=>handleOpenModal('user')} />
            <Users />
            {isModalOpen['user'] && <AddUserModal onClose={()=>handleCloseModal('user')} />}
          </>
        )
      default:
        break;
    }
  }

  return (
    <div className="bg-bg-main scrollbar-none flex flex-col gap-y-5 p-6">
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

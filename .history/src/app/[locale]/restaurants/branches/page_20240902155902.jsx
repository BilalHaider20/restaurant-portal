"use client"
import React,{useState} from "react";
import rest_images from '@/../public/images/restaurant'
import RestaurantIntro from "@/app/components/RestaurantIntro";
import Switcher from "../../../components/common/Tabswitch/Switcher";
import BranchCard from "../../../components/restaurants/branches/Branches/BranchCard";
import Users from "../../../components/restaurants/branches/Members/Users";
import Promotions from "../../../components/restaurants/branches/Promotions/Promotions";
import TabLayout from "@/app/components/common/Common Layout/TabLayout";
import AddPromotionModal from "@/app/components/restaurants/branches/Promotions/AddPromotionModal";
import BranchesModal from "@/app/components/restaurants/branches/Branches/BranchesModal";
const Branches = () => {
  const [activeTab, setactiveTab] = useState('Branches');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log('btn click')
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);
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
        <>
        <TabLayout title={"Arcdian Cafe Branches"} btntext={"add_new_branch"} inputPlaceholder={"branches"}/>
        <div className="flex flex-col gap-4">
        <BranchCard branch={branches[0]} />
        <BranchCard branch={branches[0]} />
        <BranchCard branch={branches[0]} />
        {/* {isModalOpen && <BranchesModal />} */}
        </div>
    </>)
      case  'Members':
        return (
          <>
          <TabLayout title={"Arcadian Cafe Packages Mall Users} btntext={"add_new_user"} inputPlaceholder={"user"}  />
          <Users />
          </>
        )
      case 'Promotions':
        return(
          <>
          <TabLayout title={"Arcdian Cafe Branches"} btntext={"add_new_promotion"} inputPlaceholder={"promotion"} onClick={handleOpenModal} />
          <Promotions />
          {isModalOpen && <AddPromotionModal onClose={handleCloseModal} />}
          </>
        )
  
    default:
      break;
  }
}

  return (
    <div className="bg-bg-main scrollbar-none flex flex-col space-y-5 p-6">
      <RestaurantIntro rest={rest} />
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

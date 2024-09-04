"use client"
import { useState } from 'react'
import BranchIntro from '../../../../restaurant/components/BranchIntro'
import rest_images from '../../../../../../../public/images/restaurant'
import TabLayout from '@/app/components/common/Common Layout/TabLayout'
import MenuItem from '@/app/[locale]/restaurant/components/MenuItem' 
import Switch from '@/app/[locale]/restaurant/components/Switch'
import Users from '@/app/components/restaurants/details/Members/Users'
import Promotions from '@/app/components/restaurants/details/Promotions/Promotions'
import Reviews from '@/app/components/restaurants/details/Branch/reviews/Reviews'
import AddPromotionModal from '@/app/components/restaurants/details/Promotions/AddPromotionModal'
import BranchesModal from '@/app/components/restaurants/details/Branch/BranchesModal'

const Page = () => {
  const users = Array(100).fill({
    date:'31 Auguest 2024',
    name: 'Basel AbdulMajid',
    email: 'basel@bookme.pk',
    role: 'Restaurant Manager',
    reference: 'TAB-1234567890',
    comments: 'It was Great',
    rating:3,
    

  });
  const [activeTab, setactiveTab] = useState("Floors");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log('btn click')
    setIsModalOpen(true);
  };
  const [isBranchesModalOpen, setIsBranchesModalOpen] = useState(false);


  const handleOpenBranchesModal = () => {
    console.log('Add Branch button clicked');
    setIsBranchesModalOpen(true);
  };

  const handleCloseBranchesModal = () => {
    setIsBranchesModalOpen(false);
  };
  const rest = {
    reviews: 4,
    image: rest_images.branch,
    name: "Arcadian Cafe",
    para: "Arcadian Café has firmly rooted itself in Lahore's culinary arena in a little over seven years. Our team of dedicated professionals works tirelessly to bring the world's cuisines to your town. Located at 28-K MM Alam Road, we are passionate about every dish that hits the table. We offer a variety of cuisines including Asian-fusion, Continental, and French-Italian. We offer a unique oblong 360-degree bar through the restaurant where guests can enjoy our comprehensive selection of mocktails, lattes, and coffees.",
    price: "$$$",
    cuisines: "Italian • French • Asian",
    location: "Packages Mall, Lahore",
    time: "11:00 am - 10:00 pm",
    benefits: ["Free Wifi", "Free Wifi", "Free Wifi"]
  }
  const menu = [
    {
      name: "Chicken Chilli Dry",
      cuisine: "Asian",
      image: rest_images.food,
      desc: "Sautéed slices with green chili and ginger glazed in mouthwatering Chinese sauce.",
      price: 1840
    },
    {
      name: "Chicken Chilli Dry",
      cuisine: "Asian",
      image: rest_images.food,
      desc: "Sautéed slices with green chili and ginger glazed in mouthwatering Chinese sauce.",
      price: 1840
    },
    {
      name: "Chicken Chilli Dry",
      cuisine: "Asian",
      image: rest_images.food,
      desc: "Sautéed slices with green chili and ginger glazed in mouthwatering Chinese sauce.",
      price: 1840
    },
    {
      name: "Chicken Chilli Dry",
      cuisine: "Asian",
      image: rest_images.food,
      desc: "Sautéed slices with green chili and ginger glazed in mouthwatering Chinese sauce.",
      price: 1840
    },
    {
      name: "Chicken Chilli Dry",
      cuisine: "Asian",
      image: rest_images.food,
      desc: "Sautéed slices with green chili and ginger glazed in mouthwatering Chinese sauce.",
      price: 1840
    },
    {
      name: "Chicken Chilli Dry",
      cuisine: "Asian",
      image: rest_images.food,
      desc: "Sautéed slices with green chili and ginger glazed in mouthwatering Chinese sauce.",
      price: 1840
    },
    {
      name: "Chicken Chilli Dry",
      cuisine: "Asian",
      image: rest_images.food,
      desc: "Sautéed slices with green chili and ginger glazed in mouthwatering Chinese sauce.",
      price: 1840
    },
    {
      name: "Chicken Chilli Dry",
      cuisine: "Asian",
      image: rest_images.food,
      desc: "Sautéed slices with green chili and ginger glazed in mouthwatering Chinese sauce.",
      price: 1840
    },
    {
      name: "Chicken Chilli Dry",
      cuisine: "Asian",
      image: rest_images.food,
      desc: "Sautéed slices with green chili and ginger glazed in mouthwatering Chinese sauce.",
      price: 1840
    },
  ]

  const renderTab = () => {
    switch (activeTab) {
      case 'Floors':
        return (
          <>
            <TabLayout title={"Arcdian Cafe Branches"} btntext={"add_new_branch"} inputPlaceholder={"branches"} onClick={handleOpenBranchesModal} />
            {isBranchesModalOpen && <BranchesModal onClose={handleCloseBranchesModal} />}
            <TabLayout title={"Arcdian Cafe Branches"} btntext={"add_new_branch"} inputPlaceholder={"branches"} onClick={handleOpenBranchesModal} />
            {isBranchesModalOpen && <BranchesModal onClose={handleCloseBranchesModal} />}
          </>
        )
      case 'Menu':
        return (
          <>
            <TabLayout title={"Food Menu"} btntext={"add_new_food_item"} inputPlaceholder={"food_items"} />
            <div className='mt-5 flex flex-wrap gap-3 justify-center'>
              {
                menu.map((item, index) => {
                  return <MenuItem key={index} item={item} />
                })
              }
            </div>
          </>
        )
      case 'Members':
        return (
          <>
            <TabLayout title={"Arcdian Cafe Branches"} btntext={"add_new_user"} inputPlaceholder={"user"} />
            <Users />
          </>
        )
      case 'Promotions':
        return (
          <>
            <TabLayout title={"Arcdian Cafe Branches"} btntext={"add_new_promotion"} inputPlaceholder={"promotion"} onClick={handleOpenModal} />
            <Promotions />
            {isModalOpen && <AddPromotionModal onClose={handleCloseModal} />}
          </>
        )
      case 'Reviews':
        return(
          <>
           <TabLayout title={"User Reviews"} btntext={"user_reviews"} inputPlaceholder={"reviews"} />
          <Reviews users = {users}/>
          </>
        )

      default:
        break;
    }
  }

  return (
    <div className={`px-5 py-5 bg-bg-main relative`}>
      <BranchIntro rest={rest} />
      <div className="flex">
        <Switch className="" activeTab={activeTab} setactiveTab={setactiveTab} />
      </div>

      {
        renderTab()
      }
    </div>
  )
}

export default Page
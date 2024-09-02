import React from 'react'
import BranchIntro from '../components/BranchIntro'
import rest_images from '../../../../../public/images/restaurant'
import TabLayout from '@/app/components/common/Common Layout/TabLayout'

const page = () => {
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
      name : "Chicken Chilli Dry",
      cuisine : ""
    }
  ]
  return (
    <div className='px-5 pt-5 bg-bg-main'>
      <BranchIntro rest={rest} />
      <TabLayout title={"Food Menu"} btntext={"add_new_food_item"} inputPlaceholder={"food_items"}  />
      <div>

      </div>
    </div>
  )
}

export default page
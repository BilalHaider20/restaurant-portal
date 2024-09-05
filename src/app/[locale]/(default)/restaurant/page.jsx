import React from 'react'
import { useTranslations } from 'next-intl'
import rest_images from '../../../../../public/images/restaurant'

//Components

import WelcomeStats from '@/app/components/WelcomeStats'
import RestaurantCard from './components/restaurantCard'
import RestaurantIntro from '@/app/components/RestaurantIntro'
import FoodFilterMenu from '@/app/components/branch/FoodFilterMenu'



const Page = () => {
    const t = useTranslations('restaurant')
    const rest = {
        reviews: 4,
        image: rest_images.rest_image,
        name: "Arcadian Cafe",
        para: "Arcadian Café has firmly rooted itself in Lahore's culinary arena in a little over seven years. Our team of dedicated professionals works tirelessly to bring the world's cuisines to your town. Located at 28-K MM Alam Road, we are passionate about every dish that hits the table. We offer a variety of cuisines including Asian-fusion, Continental, and French-Italian. We offer a unique oblong 360-degree bar through the restaurant where guests can enjoy our comprehensive selection of mocktails, lattes, and coffees.",
        price: "$$$",
        cuisines: "Italian • French • Asian",
        branches: [
            {
                name: "Arcadian Cafe Pacakges Mall",
                image: rest_images.rest_branch,
                location: "Packages Mall, Lahore",
                time: "11:00 am - 10:00 pm",
                benefits: ["Free Wifi", "Free Wifi", "Free Wifi"]
            },
            {
                name: "Arcadian Cafe Pacakges Mall",
                image: rest_images.rest_branch,
                location: "Packages Mall, Lahore",
                time: "11:00 am - 10:00 pm",
                benefits: ["Free Wifi", "Free Wifi", "Free Wifi"]
            },
            {
                name: "Arcadian Cafe Pacakges Mall",
                image: rest_images.rest_branch,
                location: "Packages Mall, Lahore",
                time: "11:00 am - 10:00 pm",
                benefits: ["Free Wifi", "Free Wifi", "Free Wifi"]
            },
            {
                name: "Arcadian Cafe Pacakges Mall",
                image: rest_images.rest_branch,
                location: "Packages Mall, Lahore",
                time: "11:00 am - 10:00 pm",
                benefits: ["Free Wifi", "Free Wifi", "Free Wifi"]
            },
            {
                name: "Arcadian Cafe Pacakges Mall",
                image: rest_images.rest_branch,
                location: "Packages Mall, Lahore",
                time: "11:00 am - 10:00 pm",
                benefits: ["Free Wifi", "Free Wifi", "Free Wifi"]
            },
            {
                name: "Arcadian Cafe Pacakges Mall",
                image: rest_images.rest_branch,
                location: "Packages Mall, Lahore",
                time: "11:00 am - 10:00 pm",
                benefits: ["Free Wifi", "Free Wifi", "Free Wifi"]
            }
        ]
    }
    return (
        <div className=' bg-bg-main scrollbar-none flex flex-col space-y-5 pb-4 '>
            <WelcomeStats
                userName="John Doe"
                firstblock={"Total Sales"}
                totalSales={300}
                totalSavings={200}
                expenses={320}
                salesChange="5.67%"
                savingsChange="3.45%"
                expensesChange="11.67%"
            />
            <RestaurantIntro rest={rest} />

            <div className='px-5 flex justify-between'>
                <h2 className='font-semibold text-2xl text-heading-clr' >{rest.name} {t('branches')}</h2>
                <FoodFilterMenu />

            </div>
            <div className='px-5 flex flex-wrap gap-4 mt-0 justify-center'>
                {
                    rest.branches.map((info, index) =>
                        <RestaurantCard key={index} info={info} />
                    )
                }
            </div>

        </div>
    )
}

export default Page
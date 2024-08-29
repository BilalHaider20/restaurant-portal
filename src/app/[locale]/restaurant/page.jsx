import React from 'react'
import Image from 'next/image'
import images from '../../../../public/images/restaurant'
import WelcomeStats from '@/app/components/WelcomeStats'
import RestaurantIntro from './components/RestaurantIntro'

const Page = () => {
    const rest = {
        reviews: 4,
        image: images.rest_image,
        name: "Arcadian Cafe",
        para: "Arcadian Café has firmly rooted itself in Lahore's culinary arena in a little over seven years. Our team of dedicated professionals works tirelessly to bring the world's cuisines to your town. Located at 28-K MM Alam Road, we are passionate about every dish that hits the table. We offer a variety of cuisines including Asian-fusion, Continental, and French-Italian. We offer a unique oblong 360-degree bar through the restaurant where guests can enjoy our comprehensive selection of mocktails, lattes, and coffees.",
        price: "$$$",
        cuisines: "Italian • French • Asian",
        branches:[
            {
                name: "Arcadian Cafe Pacakges Mall",
                location: "Packages Mall, Lahore",
                time: "11:00 am - 10:00 pm",
                benefits: ["Free Wifi", "Free Wifi", "Free Wifi"]
            }
        ]
    }
    return (
        <div  className=' bg-bg-main flex flex-col space-y-5'>
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
            <RestaurantIntro rest={rest}  />

            <div>
                <h2>{rest.name} Branches</h2>

            </div>
        </div>
    )
}

export default Page
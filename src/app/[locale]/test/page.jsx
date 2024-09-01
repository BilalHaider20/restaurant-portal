// "use client"
// import React from "react";
// import Image from "next/image";
// import rest_images from '../../../../public/images/restaurant'
// import RestaurantIntro from "@/app/components/RestaurantIntro";
// import Switcher from "../branches/components/Switcher";
// import AddBtn from "@/app/components/buttons/AddBtn";
// import Sort from "@/app/components/buttons/Sort";
// import SearchInput from "@/app/components/common/SearchField/SearchInput";
// import FilterDropdown from "@/app/components/common/FilterDropDown";
// // import { useState } from "react";
// // import Users from "../branches/components/Users";
// import Promotions from "../branches/components/Promotions";


// const Branches = () => {
//     const rest = {
//         reviews: 4,
//         image: rest_images.rest_image,
//         name: "Arcadian Cafe",
//         para: "Arcadian Café has firmly rooted itself in Lahore's culinary arena in a little over seven years. Our team of dedicated professionals works tirelessly to bring the world's cuisines to your town. Located at 28-K MM Alam Road, we are passionate about every dish that hits the table. We offer a variety of cuisines including Asian-fusion, Continental, and French-Italian. We offer a unique oblong 360-degree bar through the restaurant where guests can enjoy our comprehensive selection of mocktails, lattes, and coffees.",
//         price: "$$$",
//         cuisines: "Italian • French • Asian",
//     }
//     return (
//         <div className="bg-bg-main scrollbar-none flex flex-col space-y-5  p-4">
//             <RestaurantIntro rest={rest} />
//             <div className="flex">
//                 <Switcher onChange={(selection) => console.log(selection)} className="" />
//             </div>
//             <div className="flex flex-row justify-between">
//                 <h2 className="text-[clamp(1rem,2vw,32px)] font-semibold">Arcadian Cafe Users</h2>
//                 <AddBtn onClick={() => {
//                     console.log("Add button clicked!")
//                 }} />
//             </div>
//             <div className="flex flex-row justify-between">
//                 <Sort />
//                 <div className="flex flex-row gap-4">
//                     <SearchInput width="379px" />
//                     <FilterDropdown className=""/>
//                 </div>
//             </div>
//             <Promotions />
//         </div>
//     );
// };

// export default Branches;

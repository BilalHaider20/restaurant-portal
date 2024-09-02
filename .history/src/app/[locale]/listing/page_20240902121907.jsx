import React from "react";
import WelcomeStats from "../../components/WelcomeStats";
import images from '../../../../public/images/index'
import HotelCard from "../../components/HotelCard";
const Listing = () => {
  const branches = [
    {
      name: "Arcadian Cafe Pacakges Mall",
      image: images.hotel,
      description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores porro fuga beatae repellendus praesentium,"
    },
    {
      name: "Arcadian Cafe Pacakges Mall",
      image: images.hotel,
      description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores porro fuga beatae repellendus praesentium"
    },
    {
      name: "Arcadian Cafe Pacakges Mall",
      image: images.hotel,
      description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores porro fuga beatae repellendus praesentium, "
    },
    {
      name: "Arcadian Cafe Pacakges Mall",
      image: images.hotel,
      description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores porro fuga beatae repellendus praesentium,"
    },
    {
      name: "Arcadian Cafe Pacakges Mall",
      image: images.hotel,
      description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores porro fuga beatae repellendus praesentium, "
    },
    {
      name: "Arcadian Cafe Pacakges Mall",
      image: images.hotel,
      description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores porro fuga beatae repellendus praesentium, "
    },
  ];
  return (
    <div className="bg-bg-highlight p">
    <WelcomeStats
      userName="Sir Bilal"
      firstblock={"Total Sales"}
      totalSales={300}
      totalSavings={200}
      expenses={320}
      salesChange="5.67%"
      savingsChange="3.45%"
      expensesChange="11.67%"
    />
    <div className="flex flex-wrap gap-4 justify-center">
      {branches.map((info, index) => (
        <HotelCard 
          key={index} 
          name={info.name} 
          image={info.image} 
          description={info.description} 
        />
      ))}
    </div>
  </div>
  );
};

export default Listing;

import React from "react";
import WelcomeStats from "../../components/WelcomeStats"
import HotelCard from "../../components/HotelCard"
const Listing = () => {
  return (
   <div className="bg-bg-highlight">
      <WelcomeStats 
      userName="Sir Bilal"
      totalSales={300}
      totalSavings={200}
      expenses={320}
      salesChange="5.67%"
      savingsChange="3.45%"
      expensesChange="11.67%"
    />
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
    </div>
    {/* <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
          <HotelCard />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
          <HotelCard />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
          <HotelCard />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
          <HotelCard />
        </div>
      </div> */}
   </div>
  );
};

export default Listing;

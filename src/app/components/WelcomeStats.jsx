"use client"
import React from "react";
import SearchInput from "./common/SearchField/SearchInput"; 
import BookingCard from "./BookingCard";
import BookBadge from "../../../public/images/listing/book-badge.svg"
import SaveBadge from "../../../public/images/listing/save-badge.svg"
import DollarBadge from "../../../public/images/listing/badge-dollar-sign.svg"
import { getAirports } from "../services/apiMethods";

const WelcomeStats = ({ userName,firstblock, totalSales, totalSavings, expenses, salesChange, savingsChange, expensesChange }) => {

// const onQueryChange = (query) => {


//   getAirports(query).then((res) => {
//     console.log(res.data);
//   }).catch((err) => {
//     console.log(err);
//   }); 

// }



  return (
    <div className="flex-grow p-5 bg-[#F6F9FD] dark:bg-primary-bg-dark">
      <div className="flex flex-col gap-4">
        <div className="flex  flex-col gap-3 md:flex-row md:items-center justify-between">
          <div className="w-[273px] h-[52px]">
            <h1 className="font-semibold text-2xl tracking-tighter text-nowrap dark:text-heading-text-dark">Good Morning, {userName}!</h1>
            <p className="text-gray-80 font-normal text-sm dark:text-secondary-text-dark">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <SearchInput  placeholder={'restaurants'}
          //  onQueryChange={(e)=>{onQueryChange(e.target.value)}}
           />
        </div>
        <div className="flex flex-col lg:flex-row gap-3 ">
          <BookingCard
            label={firstblock}
            totalBookings={totalSales}
            percentageChange={salesChange}
            iconSrc={BookBadge}
          />
          <BookingCard
            label="Total Saving"
            totalBookings={totalSavings}
            percentageChange={savingsChange}
            iconSrc={SaveBadge}
          />
          <BookingCard
            label="Expense"
            totalBookings={expenses}
            percentageChange={expensesChange}
            iconSrc={DollarBadge}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeStats;
import React from "react";
import SearchInput from "./SearchInput"; 
import BookingCard from "./BookingCard";
import BookBadge from "../../../public/images/listing/book-badge.png"
import SaveBadge from "../../../public/images/listing/save-badge.png"
import DollarBadge from "../../../public/images/listing/badge-dollar-sign.png"


const WelcomeStats = ({ userName, totalSales, totalSavings, expenses, salesChange, savingsChange, expensesChange }) => {
  return (
    <div className="flex-grow p-5 w-[1150px] bg-[#F6F9FD]">
      <div className="flex flex-col gap-[23px]">
        <div className="flex flex-row items-center justify-between h-[52px]">
          <div className="w-[273px] h-[52px]">
            <h1 className="font-semibold text-2xl">Good Morning, {userName}!</h1>
            <p className="text-gray-80 font-normal text-sm">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <SearchInput />
        </div>
        <div className="flex flex-row gap-[20px]">
          <BookingCard
            label="Total Sales"
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
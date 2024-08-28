import React from "react";
import SearchInput from "../../components/SearchInput";
import BookingCard from "./BookingCard";
import BookBadge from "../../../../public/images/listing/book-badge.png"
const Listing = () => {
  return (
    <div className="flex-grow p-5 w-[1075px]">
      <div className="flex flex-col gap-[23px]">
        <div className="flex flex-row items-center justify-between h-[52px] ">
          <div className="w-[273px] h-[52px]">
            <h1 className="font-semibold text-2xl">Good Morning, Sir Bilal!</h1>
            <p className="text-gray-80 font-normal text-sm">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <SearchInput />
        </div>
        <div className="flex flex-row gap-[20px]">
          {/* <div className="w-[343px] h-[84px] border-l-[5px] border-[#346CC4] rounded-lg flex flex-col items-start justify-center p-4">
            <p className="text-sm text-gray-80">Total Bookings</p>

            <div className="flex flex-row">
            <p className="text-2xl font-semibold text-[#3C3C3C]">512</p>
              <span className="text-green-500">↑ 12%</span>
              <p className="text-gray-80 m-l-2">vs last week</p>
            </div>
          </div> */}
          <BookingCard
            label="Total Sales"
            totalBookings={300}
            percentageChange="5.67%"
            iconSrc={BookBadge}
          />
          <div className="w-[343px] h-[84px] border-l-[5px] border-[#346CC4] rounded-lg">
            Total Saving
          </div>
          <div className="w-[343px] h-[84px] border-l-[5px] border-[#346CC4] rounded-lg">
            Expense
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;

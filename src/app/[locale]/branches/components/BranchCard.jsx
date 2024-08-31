import React from "react";
import Image from "next/image";
import images from "../../../../../public/images/index";
import Tags from "../../restaurants/components/Tags";

const BranchCard = ({ branch }) => {
  return (
    <div className="relative  flex flex-col sm:flex-row border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* <div className=""> */}
        <Image
          src={images.branch}
          alt=""
          // layout="responsive"
          className="object-cover min-w-[340px] "
          height={150}
          width={100}
        />
        
      {/* </div> */}
      <div className="flex flex-col justify-between p-4 w-full">
        <div className="flex justify-between items-start">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
            Arcadian Cafe
          </h2>
          <div className="flex gap-2 flex-col md:flex-row">

            <button className=" text-blue-500 p-2 flex flex-center rounded-lg border border-blue-500">
              <Image src={images.modify}  alt="" /> Modify
            </button>
            <button className=" text-red-500 p-2 flex flex-center rounded-lg border border-red-500">
              <Image src={images.trashbin} alt="" />
              Delete
            </button>

          </div>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <div className="flex flex-col">
            <div className="flex justify-between text-gray-80 font-normal text-sm md:text-base">
              <p>Italian • French • Asian</p>
            </div>
            <p className="text-gray-80 font-normal text-sm md:text-base">$$$</p>

          </div>
          <div className="flex flex-col gap-2 items-start mt-2">
            <div className="flex flex-row gap-2">
              <Tags Text="Free Wifi" />
              <Tags Text="Free Wife" />
            </div>
            <div className="flex gap-2">
            <span className="text-lg md:text-2xl font-semibold bg-[#346CC4] text-white w-12 h-8 rounded text-center">
              8.6
            </span>
            <div className="flex flex-col ">
              <span className="text-[#3C3C3C] text-base md:text-lg font-medium">
                Excellent
              </span>
              <span className="text-gray-80 text-sm md:text-base">
                155 Reviews
              </span>

            </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center text-xs sm:text-sm text-gray-600">
          <Image src={images.trend} alt="" className="mr-1" />
          <span>Booked 18 times today</span>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;

{
  /* */
}

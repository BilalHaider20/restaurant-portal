import React from "react";
import FloorPlan from "./Konva/index";

const page = () => {
  return (
    <div className="flex justify-center items-center overflow-y-auto p-4 sm:p-6 mt-16">
      <div className="w-[1400px]">
        <FloorPlan 
        />
      </div>
    </div>
  );
};

export default page;

import React from "react";
import FloorPlan from "./Konva/index";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import Button from "@/app/components/common/filters/Button";

const FloorComp = ({ onBack }) => {
  const handleNextBtn = () => {
    alert("Next button clicked")
  }
  const handleSaveBtn = () => {
    alert("Save button clicked")
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Navbar */}
      <div className='flex px-5 py-3 bg-white dark:bg-secondary-bg-dark shadow-sm fixed top-0 left-0 w-full z-50'>
        <div className='flex flex-row justify-center items-center gap-2'>
          <button onClick={onBack}>
            <MdArrowBackIos />
          </button>
          <p className='text-dark-text font-semibold text-3xl'>Ground Floor</p>
        </div>
      </div>

      <div className="mt-16 pt-16 flex-grow">
        <FloorPlan />
      </div>

      {/* Footer */}
      <div className="flex px-5 py-3 bg-white dark:bg-secondary-bg-dark shadow-sm fixed bottom-0 left-0 w-full z-50 gap-2 justify-end">
        <Button
          text="Save as Draft"
          onClick={handleSaveBtn}
          type="outlined"
          className="mr-2"
        />
        <Button
          text="Next"
          onClick={handleNextBtn}
        />
      </div>
    </div>
  );
};


export default FloorComp;

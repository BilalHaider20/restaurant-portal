"use client"
import React,{useState} from "react";
import FloorPlan from "./Konva/index";
import { MdArrowBackIos } from "react-icons/md";
import Button from "@/app/components/common/filters/Button";
import FloorReview from "./FloorReview";

const TablePlacement = ({ onBack, floorName }) => {
    const [showComponent, setShowComponent] = useState(false)
  const handleNextBtn = () => {
    setShowComponent(true)
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
          <p className='text-dark-text font-semibold text-3xl'>{floorName} - Table Placement</p>
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
        <div>
        <Button
          text="Next"
          onClick={handleNextBtn}
          />
          {showComponent && <FloorReview  onBack={() => setShowComponent(false)} /> }
          </div>
      </div>
    </div>
  );
};


export default TablePlacement;

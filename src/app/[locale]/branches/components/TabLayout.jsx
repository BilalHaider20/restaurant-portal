import React from 'react'
import AddBtn from "@/app/components/buttons/AddBtn";
import FilterDropdown from '@/app/components/buttons/FilterDropDown';
import Sort from '@/app/components/buttons/Sort';
import SearchInput from '@/app/components/SearchInput';
const TabLayout = ({title,btntext,inputPlaceholder}) => {
  return (
    <div className="flex flex-col justify-between">
        <div className='flex-col justify-between w-full '>
        <div className='flex justify-between w-full py-2'>

        <h2 className="text-2xl lg:text-3xl  font-semibold ">{title}</h2>
        <AddBtn btnText={btntext}  onClick={() => {
          console.log("Add button clicked!")
        }} />
        </div>
        <div className='flex justify-between md:items-center '>
        <Sort />
        <div className='flex flex-col-reverse md:flex-row items-end  md:items-center md:gap-2'>
        <SearchInput placeholder={inputPlaceholder} />
        <FilterDropdown />
        </div>
        </div>

        </div>
      </div>
  )
}

export default TabLayout
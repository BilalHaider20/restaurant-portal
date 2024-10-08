import React from 'react'
import AddBtn from "../buttons/AddBtn";
// import FilterDropdown from '../dropdowns/FilterDropDown';
import FoodFilterMenu from '@/app/components/restaurants/details/Branch/FoodFilterMenu'
import Sort from '../dropdowns/Sort';
import SearchInput from '@/app/components/common/SearchField/SearchInput';
const TabLayout = (props) => {

  return (
    <div className="flex flex-col justify-between gap-y-4">
        <div className='flex-col justify-between w-full '>
        <div className='flex justify-between w-full py-2'>

        <h2 className="text-2xl lg:text-3xl  font-semibold ">{props.title}</h2>
        <AddBtn btnText={props.btntext} onClick={props.onClick} />
        </div>
        <div className='flex justify-between md:items-center '>
        <Sort />
        <div className='flex flex-col-reverse md:flex-row items-end  md:items-center md:gap-2'>
        <SearchInput 
              placeholder={props.inputPlaceholder} 
              onQueryChange={(e) => props.onSearch(e.target.value)} // Pass the search query to parent
            />
       < FoodFilterMenu />
        </div>
        </div>

        </div>
      </div>
  )
}

export default TabLayout
import React from 'react'
import RestaurantInfo from './branches/RestaurantInfo'
import RestaurantBranches from './branches/RestaurantBranches'

const page = () => {
  return (
    <div className='bg-blue-100'>
        <div className='w-[1075px] gap-[20px] ml-[36px] mt-[17px] pt-4'>
            <RestaurantInfo/>
            <RestaurantBranches/>
        </div>
    </div>
  )
}

export default page
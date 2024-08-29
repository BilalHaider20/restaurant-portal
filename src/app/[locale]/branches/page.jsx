import React from 'react'
import RestaurantInfo from './components/RestaurantInfo'
import RestaurantBranches from './components/RestaurantBranches'

const page = () => {
  return (
    <div className='bg-blue-100'>
        <div className='w-[1075px] h-[904px]'>
            <RestaurantInfo/>
            <RestaurantBranches/>
        </div>
    </div>
  )
}

export default page
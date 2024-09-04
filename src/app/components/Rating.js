import React from 'react'
import Rating  from '@mui/material/Rating';
const Rate = ({rating}) => {
  return (
   <div className='text-xs md:text-sm lg:text-[16px]'>
   <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
   <p className='text-[#808080] '>115 Reviews</p>
   </div>
  )
}

export default Rate
import React from 'react'
import images from '../../../../public/images/index'
import Image from 'next/image'

const AddBtn = () => {
  return (
    <div>
      <button className='w-[170px] h-[44px] bg-primary-blue rounded-lg text-white 
      flex flex-row justify-center items-center gap-2'>
        <Image
        src={images.plusSquare}
        alt=''
        className='inline-block'
        />
        Add New
      </button>
    </div>
  )
}

export default AddBtn
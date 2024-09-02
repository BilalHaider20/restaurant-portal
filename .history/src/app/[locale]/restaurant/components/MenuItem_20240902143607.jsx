import React from 'react'
import Image from 'next/image'

const MenuItem = ({item}) => {
  return (
    <div className='flex flex-col w-[min(100%,354px)] bg-bg-light '>
        <Image className='object-cover flex:[0.5]'  src={item.image} alt={item.name} />
        <div className='flex:[0.5] px-5 py-2'>
            <div>
                <h2 className='fond-medium text-lg text-dark-text'>{item.name}</h2>
                <span className='text-light-text text-sm '>{item.cuisine}</span>
                <p className='text-[#3C3C3CE0] text-[10px] '>
                    {item.desc}
                </p>
            </div>
            <div className='flex flex-col items-end'>
                <span className='block text-[10px] text-light-text'>Per serving</span>
                <span className='block text-lg text-primary-blue font-semibold mt-[-5px]'>Rs {item.price}</span>
            </div>
        </div>
    </div>
  )
}

export default MenuItem
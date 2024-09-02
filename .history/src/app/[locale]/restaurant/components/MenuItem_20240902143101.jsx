import React from 'react'
import Image from 'next/image'

const MenuItem = ({item}) => {
  return (
    <div className='flex flex-col w-[min(100%,354px)] bg-bg-light '>
        <Image className='object-cover flex:[0.5]'  src={item.image} alt={item.name} />
        <div className='flex:[0.5] px-5 py-2'>
            <div>
                <h2 className='fond-medium text-lg text-dark-text'>{item.name}</h2>
                <span className='text-light-text text-sm'>{item.cuisine}</span>
                <p>
                    {item.desc}
                </p>
            </div>
            <div>
                <span>Per serving</span>
                <span>Rs {item.price}</span>
            </div>
        </div>
    </div>
  )
}

export default MenuItem
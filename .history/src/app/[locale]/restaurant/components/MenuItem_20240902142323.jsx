import React from 'react'
import Image from 'next/image'

const MenuItem = ({item}) => {
  return (
    <div className='w-[in()]'>
        <Image src={item.image} alt={item.name} />
        <div>
            <div>
                <h2>{item.name}</h2>
                <span>{item.cuisine}</span>
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
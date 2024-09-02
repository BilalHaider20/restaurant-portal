import React from 'react'
import Image from 'next/image'

const MenuItem = ({item}) => {
  return (
    <div className=''>
        <Image src={item.image} alt={item.name} />
        <div>
            <h2>{item.name}</h2>
            <h3>{} </h3>
        </div>
    </div>
  )
}

export default MenuItem
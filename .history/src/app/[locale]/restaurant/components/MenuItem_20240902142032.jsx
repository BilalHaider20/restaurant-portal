import React from 'react'
import Image from 'next/image'

const MenuItem = ({item}) => {
  return (
    <div className=''>
        <Image src={item.image} alt={item.name} />
    </div>
  )
}

export default MenuItem
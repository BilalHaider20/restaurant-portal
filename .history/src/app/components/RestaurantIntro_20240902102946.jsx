import React from 'react'
import Image from 'next/image'
import images from '../../../public/images'

const RestaurantIntro = ({ rest }) => {
    const maxStars = 5
    const stars = Array(maxStars).fill(0).map((_, index) => {
        return index < rest.reviews ? <Image src={images.star_fill} alt='star' /> : <Image src={images.star_hollow} alt='star' />;
    });
    return (
        <div className='flex flex-col md:flex-row'>
            <div className=' flex flex-col justify-between md:flex-[0.15]'>
                <Image src={rest.image} alt='restaurant image'  />
                <span className='text-light-text tracking-tighter'>{rest.cuisines}</span>
            </div>
            <div className='flex-[0.85] space-y-3'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='font-semibold text-2xl text-heading-clr'>{rest.name}</h2>
                        <div className="flex">
                            {stars.map((star, index) => (
                                <span key={index}>{star}</span>
                            ))}
                        </div>
                    </div>
                    <span className='font-medium text-lg text-dark-text'>{rest.price}</span>
                </div>
                <div >
                    <p className='text-lg text-dark-text'>{rest.para}</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantIntro
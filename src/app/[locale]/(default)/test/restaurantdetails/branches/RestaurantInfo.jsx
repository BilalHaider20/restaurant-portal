import React from 'react';
import rest_images from '../../../../../../../public/images/restaurant/index';
import Image from 'next/image';
import images from '../../../../../../../public/images';

const RestaurantInfo = () => {
    const maxStars = 5
    const stars = Array(maxStars).fill(0).map((_, index) => {
        return index < 5 ? <Image src={images.star_fill} alt='star' /> : <Image src={images.star_hollow} alt='star' />;
    });
    return (
        <div className="w-[1075px] flex items-center gap-[20px]">
            <div className='h-[236px] gap-[12px]'>
                <div>
                    <Image src={rest_images.rest_image} alt="Restaurant Logo" className='w-[200px] h-[200px] rounded-lg ' />
                </div>
                <div>
                    <ul className='w-[200px] gap-[12px] pt-2 flex justify-center text-[#808080] text-sm font-normal leading-6 tracking-[-0.7px] text-left'> 
                        <li>Italian</li>
                        <li>French</li>
                        <li>Asian</li>
                    </ul>
                </div>
            </div>
            <div className='w-[855px] pt-2' >
                <div className='w-[855px] h-[80px] '>
                    <h1 className=" text-[#15223C] text-2xl font-semibold leading-8 tracking-[-1px] text-left">Arcadian Cafe</h1>
                    <div className="flex items-center">
                    {stars.map((star, index) => (
                    <span key={index}>{star}</span>
                    ))}
                    <star className="w-4 h-4 text-yellow-400" />
                    </div>
                    <p className="text-[#3C3C3C] text-base font-medium leading-7 tracking-[-1px] text-left">$$$</p>
                </div>
                <div className='w-[855px] h-[140px] text-[#3C3C3C] text-base font-normal leading-7 tracking-[-1px] text-left'>
                    <p >
                        Arcadian Café has firmly rooted itself in Lahore’s culinary arena in a little over seven 
                        years. Our team of dedicated professionals works tirelessly to bring the world’s cuisines to your town. 
                        Located at 28-K MM Alam Road, we are passionate about every dish that hits the table. We offer a variety of 
                        cuisines including Asian-fusion, Continental, and French-Italian. We offer a unique oblong 360-degree bar through 
                        the restaurant where guests can enjoy our comprehensive selection of mocktails, lattes, and coffees.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RestaurantInfo;
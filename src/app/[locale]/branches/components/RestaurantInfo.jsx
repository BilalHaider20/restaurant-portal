import React from 'react';
// import { Star } from 'lucide-react';
import rest_images from '../../../../../public/images/restaurant/index';
import Image from 'next/image';
import images from '../../../../../public/images';

const RestaurantInfo = () => {
    const maxStars = 5
    const stars = Array(maxStars).fill(0).map((_, index) => {
        return index < 5 ? <Image src={images.star_fill} alt='star' /> : <Image src={images.star_hollow} alt='star' />;
    });
    return (
        <div className="flex items-center w-[1075px] h-[236px] gap-[20px]">
            <div className='w-[200px] h-[236px] relative'>
            <Image src={rest_images.rest_image} alt="Restaurant Logo" className="w-[200px] h-[200px] " />
            <ul className='flex items-center gap-[10px] justify-center pt-2'>
                <li>Italian</li>
                <li>French</li>
                <li>Asian</li>
            </ul>
            </div>
            <div className='w-[855px] h-[220px] ' >
                <h1 className="text-2xl font-bold">Arcadian Cafe</h1>
                <div className="flex items-center">
                {stars.map((star, index) => (
                <span key={index}>{star}</span>
                ))}
                <star className="w-4 h-4 text-yellow-400" />
                </div>
                <p className="text-sm text-gray-600">$$$</p>
                <p className="w-[855px] h-[140px] size-[18px] mt-2">Arcadian Café has firmly rooted itself in Lahore’s culinary arena in a little over seven 
                    years. Our team of dedicated professionals works tirelessly to bring the world’s cuisines to your town. 
                    Located at 28-K MM Alam Road, we are passionate about every dish that hits the table. We offer a variety of 
                    cuisines including Asian-fusion, Continental, and French-Italian. We offer a unique oblong 360-degree bar through 
                    the restaurant where guests can enjoy our comprehensive selection of mocktails, lattes, and coffees.
                </p>
            </div>
        </div>
    );
};

export default RestaurantInfo;
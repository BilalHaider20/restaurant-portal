import React from 'react';
import Image from 'next/image';
import images from '../../../public/images/index';

const Rating = () => {
    return (
        <div className="flex flex-col mt-4 w-[330px]">
            <div className="flex gap-2 items-center">
                <div className='bg-[#346CC4] w-[50px] h-[32px] rounded flex items-center justify-center'>
                <span className="text-[14px] font-semibold  text-white rounded ">
                    8.6
                </span>
                </div>
                <div className="flex flex-col w-full">
                    <span className="text-[#3C3C3C] text-lg font-medium">
                        Excellent
                    </span>
                    <div className="flex justify-between items-center w-full">
                        <span className="text-gray-80">155 Reviews</span>
                        <div className="flex items-center">
                            <Image 
                                src={images.trend} 
                                alt="Trend Icon" 
                                className="w-4 h-4 mr-1"  
                            />
                            <span className="text-gray-80 text-xs">Booked 18 times today</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rating;
import { useState } from 'react'
import React from 'react'
import images from '../../../../public/images/navbar'
import Image from 'next/image'


const Profile = () => {
    //   const { cur }= useAppSelector((state) => state.cur);
    
      const [isOpen, setIsOpen] = useState(false);
      const [selectedOption, setSelectedOption] = useState(options[0]);
    
    //   const dispatch = useAppDispatch()
    
    
      const ProfileToggle = () => setIsOpen(!isOpen);
    
      const handleOptionClick = (option) => {
        setSelectedOption(option);
        console.log('currency ', option);
        // dispatch(setCurrency(option));
        setIsOpen(false);
      };
    };

const ProfileBtn = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex gap-2 cursor-pointer">
            <div className='navbarCircleDiv'>
                <span className='text-base font-medium text-primary-blue'>SH</span>
            </div>
            <Image src={images.arrow} className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''}`}
            alt='arrow' />
           
        </div>
    )
}

export default ProfileBtn
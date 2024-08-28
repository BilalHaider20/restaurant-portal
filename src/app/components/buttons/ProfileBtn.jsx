"use client"
import { useState } from 'react'
import React from 'react'
import images from '../../../../public/images/navbar'
import Image from 'next/image'

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
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import images from '../../../../../public/images/index'

const Footer = () => {
  return (
    <footer className='bg-white py-2 pr-10 pl-5 z-100 '>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <li className='text-base font-normal text-[#999] list-none'>© Copyright 2022</li>
          <li className='text-base font-normal text-[#999] list-none'>All Rights Reserved.</li>
          <Link href='/' className='text-base font-normal text-primary-blue'>Bookme.pk</Link>
        </div>
        <div>
          <Image src={images.footerlogo} alt='logo' />
        </div>
      </div>
    </footer>
  )
}

export default Footer

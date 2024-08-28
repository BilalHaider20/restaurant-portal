import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import images from '../../../public/images'
const Footer = () => {
  return (
    <div className='flex h-[52px] py-3 pr-10 pl-5 align-bottom justify-between'>
      <div className='flex align-center gap-[10px] '>
        <li className='text-base font-normal text-[#999] list-none'> © Copyright 2022</li>
        <li className='text-base font-normal text-[#999] list-none'>All Right Reserved.</li>
        <Link href='/' className='text-base font-normal text-primary-blue'>Bookme.pk</Link>
       </div>
      <div>
        <Image src={images.footerlogo} />
      </div>
    </div>
  )
}

export default Footer
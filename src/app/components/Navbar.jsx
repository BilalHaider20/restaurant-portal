import React from 'react'
import images from '../../../public/images/navbar/index'
import Image from 'next/image'
import Dropdown from './Dropdown'
import LoginBtn from './buttons/LoginBtn'
import ProfileBtn from './buttons/ProfileBtn'

const Navbar = ({toggleSidebar}) => {
  return (
    <div className='flex items-center justify-between px-5 py-4 '>
      <div className='flex gap-5'>
        <Image className='cursor-pointer' onClick={toggleSidebar} src={images.menu} alt='menu icon' />
        <Image src={images.logo} alt='logo' />
      </div>
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-5 '>
          <div className='navbarCircleDiv' >
            <Image src={images.bell} alt='bell' />
          </div>
          <div className='navbarCircleDiv'>
            <Image src={images.mail} alt='mail' />
          </div>
        </div>
        <Dropdown />
        <LoginBtn />
        <ProfileBtn />
      </div>
    </div>
  )
}

export default Navbar
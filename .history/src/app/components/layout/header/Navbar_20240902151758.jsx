import React from 'react'
import images from '../../../../../public/images'
import 
import Image from 'next/image'
import Dropdown from './components/Currencydropdown'
import LoginBtn from './components/LoginBtn'
import ProfileBtn from './components/ProfileBtn'

const Navbar = ({toggleSidebar}) => {
  return (
    <div className='flex items-center justify-between px-5 py-3 bg-white dark:bg-secondary-bg-dark shadow-sm fixed top-0 left-0 w-full z-50'>
      <div className='flex gap-5'>
        <Image className='cursor-pointer' onClick={toggleSidebar} src={images.menu} alt='menu icon' />
        <Image src={images.logo} alt='logo' />
      </div>
      <div className='hidden items-center gap-3 md:flex'>
        <div className='flex items-center gap-5'>
          <div className='navbarCircleDiv'>
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

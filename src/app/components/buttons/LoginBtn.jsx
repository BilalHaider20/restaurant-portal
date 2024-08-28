import React from 'react'
import { useTranslations } from 'next-intl'
import Sidebar from '../Sidebar'

const LoginBtn = () => {
  const t = useTranslations("loginBtn")
  return (
    <button className='w-[164px] py-[0.75rem] flex items-center justify-center text-base text-primary-blue font-medium border border-primary-blue rounded-lg'>
        Login
    </button>
  )
}

export default LoginBtn
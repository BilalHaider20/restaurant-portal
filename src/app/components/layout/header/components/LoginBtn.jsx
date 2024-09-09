import React from 'react'
import { useTranslation } from 'react-i18next'

const LoginBtn = () => {
  const {t} = useTranslation();
  return (
    <button className='w-[164px] py-[0.75rem] flex items-center justify-center text-base text-primary-blue font-medium border border-primary-blue rounded-lg'>
        {t("sidebar.login")}
    </button>
  )
}

export default LoginBtn
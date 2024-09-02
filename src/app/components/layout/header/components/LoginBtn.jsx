import React from 'react'
import { useTranslations } from 'next-intl'

const LoginBtn = () => {
  const t = useTranslations("sidebar")
  return (
    <button className='w-[164px] py-[0.75rem] flex items-center justify-center text-base text-primary-blue font-medium border border-primary-blue rounded-lg'>
        {t("login")}
    </button>
  )
}

export default LoginBtn
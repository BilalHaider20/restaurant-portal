import React from 'react'
import images from '../../../../public/images/index'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const AddBtn = ({ btnText,onClick }) => {
  const t = useTranslations('Tab_Header.button');
  return (
    <div>
      <button className='min-w-24 px-4 py-2 md:py-3  bg-primary-blue rounded-lg text-white 
      flex flex-row justify-center items-center gap-2 text-xs md:text-sm lg:text-lg text-nowrap ' onClick={onClick}>
        <Image
        src={images.plusSquare}
        alt=''
        className='inline-block'
        />
        {t(btnText)}
      </button>
    </div>
  )
}

export default AddBtn
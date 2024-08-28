"use client"
import {useEffect, useState} from 'react';
import Image from 'next/image';
import images from '../../../../public/images/navbar/index';
import Menu from './Menu'
import { useTranslations } from 'next-intl';

const Sidebar = () => {
  const t = useTranslations('sidebar')

  return (
    <div className='block border-r-0 h-[90vh] w-[289px] py-[12px] px-[20px] flex-col align-top flex-shrink-0 gap-6 '>
      <Menu  /> 
      <div className='w-full h-[1px] bg-divider-grey my-2'></div>

      <div className="bg-divider-clr w-full h-[1px] "></div>

      <div className='flex flex-col rounded-lg my-5 space-y-2 px-3 py-2 p-2 border border-[#C3D5EF]'>
        <div className='flex gap-2 text-primary-blue'>
          <Image src={images.wallet} alt='wallet' width={24} height={24} />
          <span>{t('credit')}</span>
        </div>

        <div className='flex flex-col'>
          <span className='font-medium text-dark-text text-base'>{t("balance")}</span>
          <span className='font-base text-dark-text text-base'>PKR 510</span>
        </div>
      </div>

      <div className='px-[20px] py-5 mt-[200px] flex gap-2 '>
        <Image src={images.logout} alt="logout" />
        <span className='text-red-500'>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
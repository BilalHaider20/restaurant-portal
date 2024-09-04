"use client";
import Image from 'next/image';
import images from '../../../../../public/images/index';
import nav_images from '../../../../../public/images/navbar'
import Menu from './Menu';
import { Convert } from 'easy-currencies';
import { useTranslations } from 'next-intl';
import {  useAppSelector } from '@/lib/hooks';
import { useState, useEffect } from 'react';

const Sidebar = ({ sidebarOpen }) => {
  const t = useTranslations('sidebar');
  const {cur} = useAppSelector((state) => state.cur);
  const temp_amount = 1.80
  const [amount, setAmount] = useState()

  useEffect(() => {
    const convert = async () => {
      const result = await Convert(temp_amount).from("USD").to(cur)
      setAmount(result.toFixed(2));
    };

    convert();
  }, [cur])
  return (
    <div className={`sticky h-[calc(100vh-4rem)] dark:bg-secondary-bg-dark overflow-y-scroll scrollbar-none scrollbar-thumb-rounded block border-r-0 ${sidebarOpen ? 'md:w-[289px] w-full' : 'md:flex hidden'} py-[12px] px-[20px] flex flex-col justify-between`}>
      <div>
        <Menu sidebarOpen={sidebarOpen} />
        <div className='w-full h-[1px] bg-divider-grey my-2'></div>
        {sidebarOpen && (
          <>
            <div className="bg-divider-clr w-full h-[1px] "></div>
            <div className='flex flex-col rounded-lg my-5 space-y-2 px-3 py-2 border border-[#C3D5EF]'>
              <div className='flex gap-2 text-primary-blue'>
                <Image src={nav_images.wallet} alt='wallet' width={24} height={24} />
                <span>{t('credit')}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-medium text-dark-text text-base">
                  {t('balance')}
                </span>
                <span className="font-base text-dark-text text-base">
                  {cur} {amount}
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Logout button section */}
      {sidebarOpen && (
        <div className=' px-[20px] py-2 flex gap-2'>
          <Image src={nav_images.logout} alt="logout" />
          <span className='text-red-500'>Logout</span>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

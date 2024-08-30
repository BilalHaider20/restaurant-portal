"use client";
import Image from 'next/image';
import images from '../../../../public/images/navbar/index';
import Menu from './Menu';
import { useTranslations } from 'next-intl';

const Sidebar = ({ sidebarOpen }) => {
  const t = useTranslations('sidebar');

  return (
    <div
      className={`fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] dark:bg-secondary-bg-dark overflow-y-auto scrollbar-none scrollbar-thumb-rounded border-r-0 ${
        sidebarOpen ? 'md:w-[289px] w-full' : ''
      }  py-[12px] px-[20px] flex-col flex-shrink-0 gap-6 hidden md:flex transition-all ease-in-out duration-300`}
    >
      <Menu sidebarOpen={sidebarOpen} />
      <div className="w-full h-[1px] bg-divider-grey my-2"></div>

      {sidebarOpen && (
        <>
          <div className="bg-divider-clr w-full h-[1px]"></div>
          <div className="flex flex-col justify-between rounded-lg my-5 space-y-2 px-3 py-2 border border-[#C3D5EF]">
            <div className="flex gap-2 text-primary-blue">
              <Image src={images.wallet} alt="wallet" width={24} height={24} />
              <span>{t('credit')}</span>
            </div>

            <div className="flex flex-col">
              <span className="font-medium text-dark-text text-base">
                {t('balance')}
              </span>
              <span className="font-base text-dark-text text-base">
                PKR 510
              </span>
            </div>
          </div>

          <div className="px-[20px] py-2 flex gap-2">
            <Image src={images.logout} alt="logout" />
            <span className="text-red-500">Logout</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
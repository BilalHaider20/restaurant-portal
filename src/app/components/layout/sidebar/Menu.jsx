"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import images from '../../../../../public/images/navbar';
import Link from 'next/link';


const Menu = ({ sidebarOpen }) => {

  const {t} = useTranslation();
  const data = [
    { text: t('sidebar.dashboard'), icon: images.dashboard, href: '/dashboard' },
    { text: t('sidebar.restaurant'), icon: images.restaurant, href: '/restaurants' },
    // { text: t('make_bookings'), icon: images.make_bookings, href: '/en/dashboard' },
    // { text: t('reports'), icon: images.reports, href: '/en/dashboard' },
    // { text: t('my_bookings'), icon: images.my_bookings, href: '/en/dashboard' },
    // { text: t('invoices'), icon: images.invoice, href: '/en/dashboard' },
    { text: t('sidebar.amenities'), icon: images.file_chart_coloumn , href: '/amenities' },
    { text: t('sidebar.users'), icon: images.users, href: '/users' },
    { text: t('sidebar.permissions'), icon: images.workflow, href: '/permissions' },
    // { text: t('departments'), icon: images.departments, href: '/en/dashboard' },
    { text: t('sidebar.slots'), icon: images.privacy, href: '/slots' },
    // { text: t('terms'), icon: images.newspaper, href: '/en/dashboard' }
  ];

  const [current, setCurrent] = useState(t('sidebar.dashboard'));

  return (
    <ul>
      {data.map((e, index) => (
        <li className={`${current === e.text ? `bg-bg-highlight` : ``} ${sidebarOpen ? '' : 'md:flex hidden'} cursor-pointer rounded-lg  text-light-text  gap-5 items-center py-2 px-3 mt-2  `} key={index} onClick={() => setCurrent(e.text)}>
          <Link href={e.href} passHref>
            <span className='flex gap-2'>
              <Image
                src={e.icon}
                alt={`${e.text} icon`}
                width={20}
                height={20}
              />
              {sidebarOpen && <span >{e.text}</span>}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

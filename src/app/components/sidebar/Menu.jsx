"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import images from '../../../../public/images/navbar';

const Menu = ({sidebarOpen}) => {

  const t = useTranslations('sidebar')
  const data = [
    { text: t('dashboard'), icon: images.dashboard },
    { text: t('restaurant'), icon: images.restaurant },
    { text: t('make_bookings'), icon: images.make_bookings },
    { text: t('reports'), icon: images.reports },
    { text: t('my_bookings'), icon: images.my_bookings },
    { text: t('invoices'), icon: images.invoice },
    { text: t('users'), icon: images.users },
    { text: t('departments'), icon: images.departments },
    { text: t('privacy'), icon: images.privacy },
    { text: t('terms'), icon: images.newspaper }
  ];

  const [current, setCurrent] = useState(t('dashboard'));

  return (
    <ul>
      {data.map((e, index) => (
        <li className={`${current === e.text ? `bg-bg-highlight` : ``} cursor-pointer rounded-lg  text-light-text flex gap-5 items-center py-2 px-3 mt-2 `} key={index} onClick={() => setCurrent(e.text)}>
          <span>
            <Image
              src={e.icon}
              alt={`${e.text} icon`}
              width={20}
              height={20}
            />
          </span>
          { sidebarOpen && <span>{e.text}</span>}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
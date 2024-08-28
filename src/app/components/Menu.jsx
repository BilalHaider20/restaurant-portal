"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Menu = () => {

  const t = useTranslations('sidebar')
  const data = [
    { text: t('flights') },
    { text: t('visitSaudi') },
  ];
  
  const [current, setCurrent] = useState(t('flights'));

  return (
    <ul>
      {data.map((e, index) => (
        <li className={`${current === e.text ? `text-primary-blue bg-[#E1EAF780] dark:bg-slate-400 border border-primary-blue` : ``} cursor-pointer rounded-lg flex gap-5 items-center py-2 px-3 mt-2 `} key={index} onClick={() => setCurrent(e.text)}>
          <span>
            <Image 
              src={current === e.text ? e.iconActive : e.iconInactive} 
              alt={`${e.text} icon`} 
              width={20} 
              height={20} 
            />
          </span>
          <span className={`${current === e.text ? `text-primary-blue` : `text-grey-text`}`}>{e.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
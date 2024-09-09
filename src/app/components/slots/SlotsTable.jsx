import React from 'react'
import Image from 'next/image';
import images from '../../../../public/images';
import { useTranslation } from 'react-i18next';


const SlotsTable = () => {

const {t} = useTranslation();

  const slots = Array(7).fill({
    slotTitle: 'Lunch Slot',
    slotType: 'Regular',
    Days: 'Mon - Fri',
    openingTime: '12 pm',
    closingTime: '04:00 pm',
    duration: '45 minutes',
  });

  return (
    <div className="overflow-auto w-full">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="">
            <th className="colStyle colHead  w-[175px] min-w-[109px] ">{t('slots.table.title')} </th>
            <th className="colStyle colHead w-[175px] min-w-[109px]">{t('slots.table.type')}</th>
            <th className="colStyle colHead w-[175px] min-w-[109px]">{t('slots.table.days')}</th>
            <th className="colStyle colHead w-[100px] min-w-[68px]">{t('slots.table.opening_time')}</th>
            <th className="colStyle colHead w-[100px] min-w-[68px]">{t('slots.table.closing_time')}</th>
            <th className="colStyle colHead w-[100px] min-w-[68px]">{t('slots.table.duration')}</th>
            <th className="colStyle colHead w-[80px] min-w-[68px]">{t('slots.table.actions')}</th>
          </tr>
        </thead>
        <tbody>
          {slots.map((slot, index) => (
            <tr key={index} className="border">
              <td className="colStyle">{slot.slotTitle}</td>
              <td className="colStyle">{slot.slotType}</td>
              <td className="colStyle">{slot.Days}</td>
              <td className="colStyle">{slot.openingTime}</td>
              <td className="colStyle ">{slot.closingTime}</td>
              <td  className="colStyle ">{slot.duration}</td>
              <td className="colStyle ">
                <Image className='mx-auto' src={images.dot_menu} alt='menu'></Image>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SlotsTable
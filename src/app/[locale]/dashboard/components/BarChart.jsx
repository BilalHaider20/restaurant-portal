
'use client';

import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { RestaurantDropDown } from "./RestaurantDropDown";
import BarChartcomponent from './BarChartcomponent';
import { useTranslations } from 'next-intl';
Chart.register(CategoryScale);


export const BarChart = () => {
  const t = useTranslations('dashboard.cafedropdown');
  const tt = useTranslations('dashboard');
  const labels = useTranslations('dashboard.BarChartLabels');

  const DropdownOptions = [
    `${t('Arcadian Cafe')}`, `${t('Burger Lab')}`, `${t('Gloria Jeans')}`, `${t('KFC')}`, `${t('McDonalds')}`
  ];

  const barchartdata = {
    labels: [`${labels('Monday')}`, `${labels('Tuesday')}`, `${labels('Wednesday')}`, `${labels('Thursday')}`, `${labels('Friday')}`, `${labels('Saturday')}`, `${labels('Sunday')}`],
    datasets: [
      {
        label: `${tt('totalreservations')}`,
        data: [40, 140, 110, 5, 5, 420, 310],
        backgroundColor:
         [
             'rgb(255, 159, 64)',
             'rgb(255, 205, 86)',
             'rgb(75, 192, 192)',
             'rgb(54, 162, 235)',
             'rgb(201, 203, 207)',
             'rgb(255, 99, 132)',
        'rgb(153, 102, 255)',
    ],
        barThickness: 36,
      },
    ],
  };

  return (
    <div className="max-w-[100%] sm:min-w-[550px] rounded-lg bg-white px-3 py-4 shadow-md">
      <div className='flex justify-between items-center mb-8'>
        <h3 className="text-heading-clr font-semibold text-xl sm:text-2xl tracking-tighter">
         {tt('totalreservations')}
        </h3>
        <RestaurantDropDown DropdownOptions={DropdownOptions} />
      </div>
      <BarChartcomponent data={barchartdata} />
    </div>
  );
};

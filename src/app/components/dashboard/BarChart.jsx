
'use client';

import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { RestaurantDropDown } from "./RestaurantDropDown";
import BarChartcomponent from './BarChartcomponent';
import { useTranslation } from 'react-i18next';
Chart.register(CategoryScale);


export const BarChart = () => {
  const {t} = useTranslation();

  const DropdownOptions = [
    `${t('dashboard.cafedropdown.Arcadian Cafe')}`, `${t('dashboard.cafedropdown.Burger Lab')}`, `${t('dashboard.cafedropdown.Gloria Jeans')}`, `${t('dashboard.cafedropdown.KFC')}`, `${t('dashboard.cafedropdown.McDonalds')}`
  ];

  const barchartdata = {
    labels: [`${t('dashboard.BarChartLabels.Monday')}`, `${t('dashboard.BarChartLabels.Tuesday')}`, `${t('dashboard.BarChartLabels.Wednesday')}`, `${t('dashboard.BarChartLabels.Thursday')}`, `${t('dashboard.BarChartLabels.Friday')}`, `${t('dashboard.BarChartLabels.Saturday')}`, `${t('dashboard.BarChartLabels.Sunday')}`],
    datasets: [
      {
        label: `${t('dashboard.totalreservations')}`,
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
    <div className=" rounded-lg bg-white px-3 py-4 shadow-md">
      <div className='flex justify-between items-center mb-8'>
        <h3 className="text-heading-clr font-semibold text-xl sm:text-2xl tracking-tighter">
         {t('dashboard.totalreservations')}
        </h3>
        <RestaurantDropDown DropdownOptions={DropdownOptions} />
      </div>
      <BarChartcomponent data={barchartdata} />
    </div>
  );
};

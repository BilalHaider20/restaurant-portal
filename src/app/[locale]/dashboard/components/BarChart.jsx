// components/BarChart.js
'use client';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js';
import { barchartdata as  data } from '../data/barchartdata';
import { RestaurantDropDown } from "./RestaurantDropDown";
import TotalReservations from "./TotalReservationStats";
Chart.register(CategoryScale);

const DropdownOptions=[
  'Arcadian Cafe','Burger Lab','Gloria Jeans','KFC','McDonalds'
];


export const BarChart = () => {
  return (
    <div className="w-[553px] rounded-lg bg-white px-3 py-4 shadow-md">
      <div className='flex justify-between align-center mb-8'>
            <h3 className="text-heading-clr font-semibold text-2xl tracking-tighter">Total Reservations</h3>
            <RestaurantDropDown DropdownOptions={DropdownOptions}/>
        </div>
      <Bar
            data={data}
      />
    </div>
  );
};
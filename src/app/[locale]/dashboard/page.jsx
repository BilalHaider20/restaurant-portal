import React from 'react'
import { BarChart } from './components/BarChart'
import TotalReservations from './components/TotalReservationStats'
import RecentBooking from './components/RecentBooking'



const page = () => {
  return (
    <div >
        <div className='flex flex-row justify-around py-4 '>
        <TotalReservations />
        <BarChart />
        </div>
        <RecentBooking />
    </div>
  )
}

export default page
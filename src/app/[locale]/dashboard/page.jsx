import React from 'react'
import { BarChart } from './components/BarChart'
import TotalReservations from './components/TotalReservationStats'
import RecentBooking from './components/RecentBooking'
import WelcomeStats from '@/app/components/WelcomeStats'


const page = () => {
  return (
    <div className='bg-[#F6F9FD] pb-2 h-screen overflow-y-scroll'>
      <WelcomeStats 
      userName="John Doe"
      firstblock={"Total Bookings"}
      totalSales={512}
      totalSavings={200}
      expenses={320}
      salesChange="5.67%"
      savingsChange="3.45%"
      expensesChange="11.67%"
      />
        <div className='flex flex-col justify-center py-4 lg:flex-row gap-4 px-4'>
        <TotalReservations />
        <BarChart />
        </div>
        <RecentBooking />
    </div>
  )
}

export default page
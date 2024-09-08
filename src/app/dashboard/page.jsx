'use client'
import React from 'react'
import { BarChart } from '@/app/components/dashboard/BarChart'
import TotalReservations from '@/app/components/dashboard/TotalReservationStats'
import RecentBooking from '@/app/components/dashboard/RecentBooking'
import WelcomeStats from '@/app/components/WelcomeStats'


const page = () => {

  return (
    <div className='bg-[#F6F9FD] pb-2 overflow-y-auto'>

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
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 px-5">
      <TotalReservations />
      <BarChart />
    </div>
     <RecentBooking />
    </div>
  )
}

export default page

import React from 'react'
import { bookingData } from '../data/RecentBookingdata'

const RecentBooking = () => {
  return (
    <div className='px-3 py-4 mx-2 sm:mx-6 my-4 rounded-md bg-white dark:bg-primary-bg-dark shadow-md'>
      <h3 className="text-heading-clr font-semibold text-xl sm:text-2xl tracking-tighter mb-4">
        Recent Bookings
      </h3>
      
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full">
          <thead>
            <tr className='border border-primary-blue rounded-lg text-center'>
              <th className="px-2 py-2 text-primary-blue font-medium">Sr #</th>
              <th className="px-2 py-2 text-primary-blue font-medium">Order ID</th>
              <th className="px-2 py-2 text-primary-blue font-medium">Created By</th>
              <th className="px-2 py-2 text-primary-blue font-medium">Booking Type</th>
              <th className="px-2 py-2 text-primary-blue font-medium">Date</th>
              <th className="px-2 py-2 text-primary-blue font-medium">Debit</th>
              <th className="px-2 py-2 text-primary-blue font-medium">Credit</th>
              <th className="px-2 py-2 text-primary-blue font-medium">Status</th>
              <th className="px-2 py-2 text-primary-blue font-medium">Action</th>
            </tr>
          </thead>

          {bookingData.recentBookings.map((booking, index) => (
            <tbody key={index}>
              <tr className='text-center text-light-text tracking-tighter'>
                <td className="border border-x-0 px-3 py-2 text-sm">{booking.srNo}</td>
                <td className="border border-x-0 px-3 py-2 text-sm">{booking.orderID}</td>
                <td className="border border-x-0 px-3 py-2 text-sm">{booking.createdBy}</td>
                <td className="border border-x-0 px-3 py-2 text-sm">{booking.bookingType}</td>
                <td className="border border-x-0 px-3 py-2 text-sm">{booking.date}</td>
                <td className="border border-x-0 px-3 py-2 text-sm text-red-500">{booking.debit}</td>
                <td className="border border-x-0 px-3 py-2 text-sm text-green-500">{booking.credit}</td>
                <td className="border border-x-0 text-sm">
                  <span className='text-[#2F9461] bg-green-100 p-2 rounded-sm'>{booking.status}</span>
                </td>
                <td className="border border-x-0 text-sm">
                  <a href="#" className="text-blue-500 hover:underline bg-blue-100 px-2 py-1 rounded-sm">{booking.action}</a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  )
}

export default RecentBooking;

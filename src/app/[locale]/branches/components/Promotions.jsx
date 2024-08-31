
import React from 'react'

const Promotions = () => {
  const users = Array(7).fill({
    promotionID: '634482',
    dateCreated: '31 August 2023',
    title: 'Monal Restaurant',
    details: 'Ride Plaza'
  });
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100 border-b">
            <th className="py-2 px-4 text-left text-gray-80">Promotion ID</th>
            <th className="py-2 px-4 text-left text-gray-80">Date Created</th>
            <th className="py-2 px-4 text-left text-gray-80">Promotion Title</th>
            <th className="py-2 px-4 text-left text-gray-80">Promotion Details</th>
            <th className="py-2 px-4 text-left text-gray-80">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="flex items-center justify-center">
                <div className="ml-2">
                  <div>{user.promotionID}</div>
                </div>
              </td>
              <td className="py-2 px-4 text-gray-600">
                <div className="ml-2">
                  <div>{user.dateCreated}</div>
                </div>
              </td>
              <td className="py-2 px-4 flex space-x-2">
                <div className="ml-2">
                  <div>{user.title}</div>
                </div>
              </td>
              <td className="py-2 px-4 flex space-x-2">
                <div className="ml-2">
                  <div>{user.details}</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Promotions
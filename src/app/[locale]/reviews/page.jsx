import Reviews from '@/app/components/Reviews'
import React from 'react'

const page = () => {
    const users = Array(11).fill({
        date:'31 Auguest 2024',
        name: 'Basel AbdulMajid',
        email: 'basel@bookme.pk',
        role: 'Restaurant Manager',
        reference: 'TAB-1234567890',
        comments: 'It was Great',
        rating:3,
        

      });

    
     
  return (
    <div>
      <Reviews users ={users} />
      
    </div>
  )
}

export default page

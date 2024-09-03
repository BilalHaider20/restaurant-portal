
import React from 'react'
import { HiOutlineUserAdd } from "react-icons/hi";


const AddUser = () => {
  return (
    <button className='flex flex-row items-center rounded-lg justify-center h-11 p-2 gap-1 rounded duration-200 bg-[#346CC4] text-white'>
        <HiOutlineUserAdd />
        Add New User
    </button>
  )
}

export default AddUser
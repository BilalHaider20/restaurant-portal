import AddUser from '@/app/components/users/AddUser'
import React from 'react'
import AddBtn from '@/app/components/common/buttons/AddBtn'
import Sort from '@/app/components/common/dropdowns/Sort'
import SearchInput from '@/app/components/common/SearchField/SearchInput'
import FilterDropdown from '@/app/components/branch/FoodFilterMenu'
import Users from '@/app/components/restaurants/branches/Members/Users'

const users = () => {
  return (
    <div className="bg-bg-highlight overflow-y-auto p-4 sm:p-6 flex flex-col gap-4">
      <div className='flex flex-row justify-between '>
        <h1 className='text-3xl font-semibold'>User Management</h1>
        <AddUser />
      </div>
      <div className='flex flex-row justify-between'>
        <Sort />
        <div className='flex flex-row gap-2'>
          <SearchInput />
          <FilterDropdown />
        </div>
      </div>
        <Users />
    </div>
  )
}

export default users
import React from 'react'
import Link from 'next/link'
import { MdArrowBackIos } from "react-icons/md";

const Navbar = ({ toggleSidebar }) => {
    return (
        <div className='flex items-center justify-between px-5 py-3 bg-white dark:bg-secondary-bg-dark shadow-sm fixed top-0 left-0 w-full z-50'>
            <div className='flex flex-row justify-center items-center gap-2'>
                <Link
                    href="/en/restaurants/branches/undefined/details"
                >
                    <MdArrowBackIos />
                </Link>
                <p className='text-dark-text font-semibold text-3xl'>Ground Floor</p>
            </div>
        </div>
    )
}

export default Navbar

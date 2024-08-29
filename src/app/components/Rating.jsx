import React from 'react'

const Rating = () => {
    return (
        <div className="flex flex-col mt-4">
    <div className="flex gap-2 items-center">
        <span className="text-2xl font-semibold bg-[#346CC4] text-white w-[50px] h-[32px] rounded text-center">
            8.6
        </span>
        <div className="flex flex-col">
            <span className="text-[#3C3C3C] text-lg font-medium">
                Excellent
            </span>
            <span className="text-gray-80">155 Reviews</span>
        </div>
    </div>
    <p className="mt-2 text-gray-600 text-sm ml-auto">Booked 18 times today</p>
</div>
    )
}

export default Rating
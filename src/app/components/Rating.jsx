import React from 'react'

const Rating = () => {
    return (
        <div class="flex flex-col mt-4">
    <div class="flex gap-2 items-center">
        <span class="text-2xl font-semibold bg-[#346CC4] text-white w-[50px] h-[32px] rounded text-center">
            8.6
        </span>
        <div class="flex flex-col">
            <span class="text-[#3C3C3C] text-lg font-medium">
                Excellent
            </span>
            <span class="text-gray-80">155 Reviews</span>
        </div>
    </div>
    <p class="mt-2 text-gray-600 text-sm ml-auto">Booked 18 times today</p>
</div>
    )
}

export default Rating
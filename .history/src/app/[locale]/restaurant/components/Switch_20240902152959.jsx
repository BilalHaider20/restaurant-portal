"use client"
import { useEffect, useState } from "react";

export default function Switch({ activeTab, setactiveTab }) {
    const [indicatorPosition, setIndicatorPosition] = useState("0%");

    const handleClick = (selection) => {
        setactiveTab(selection);
    };

    useEffect(() => {
        const updateIndicatorPosition = () => {
            
        setIndicatorPosition(activeTab === 'Floors' ? '0px': activeTab === "Menu" ? '120px' : activeTab === 'Promotions' ? '265px' : '435px');
        };

        updateIndicatorPosition();
        window.addEventListener('resize', updateIndicatorPosition);

        return () => window.removeEventListener('resize', updateIndicatorPosition);
    }, [activeTab]);

    

    return (
        <div className="relative bg-[#EFF0F1] py-2 px-4 rounded-full border border-[#E6E6E6] text-gray-80 w-fit flex items-center">
            <div className="flex justify-between gap-7 text-sm font-medium z-20  ">
                <button
                    onClick={() => handleClick('Floors')}
                    className={`text-${activeTab === 'Floors' ? 'white' : 'gray-80'} w-[80px] border border-black transition-all delay-100 text-left text-xs md:text-base`}
                >
                    Floors
                </button>
                <button
                    onClick={() => handleClick('Menu')}
                    className={`text-${activeTab === 'Menu' ? 'white' : 'gray-80'} w-[80px] border border-black  transition-all delay-100 text-left text-xs md:text-base`}
                >
                    Menu
                </button>
                <button
                    onClick={() => handleClick('Promotions')}
                    className={`text-${activeTab === 'Promotions' ? 'white' : 'gray-80'} w-[80px] border border-black  transition-all delay-100 text-left text-xs md:text-base`}
                >
                    Promotions
                </button>
                <button
                    onClick={() => handleClick('Members')}
                    className={`text-${activeTab === 'Members' ? 'white' : 'gray-80'} w-[80px] border border-black  transition-all delay-100 text-left text-xs md:text-sm lg:text-base xl:text-lg`}
                >
                    Members
                </button>
            </div>
            <div
                className={`absolute z-10 bottom-0 w-[110px] h-full bg-[#346CC4] rounded-full flex items-center justify-center pointer-events-none transition-left duration-300 ease-in-out`}
                style={{
                    left: indicatorPosition,
                }}
            >
            </div>
        </div>
    );
}
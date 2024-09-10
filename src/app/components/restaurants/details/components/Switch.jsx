"use client"
import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
export default function Switch({ activeTab, setactiveTab }) {
    const [indicatorPosition, setIndicatorPosition] = useState("-1%");
    const {lang} = useAppSelector((state)=>state.lang);
    const handleClick = (selection) => {
        setactiveTab(selection);
    };

    useEffect(() => {
        const updateIndicatorPosition = () => {
            
        setIndicatorPosition(activeTab === 'Floors' ? '-1%' : activeTab === 'Menu' ? '15%' : activeTab === 'Promotions' ? '35%' : activeTab === 'Members' ? '58%' : '80%');
        };

        updateIndicatorPosition();
        window.addEventListener('resize', updateIndicatorPosition);

        return () => window.removeEventListener('resize', updateIndicatorPosition);
    }, [activeTab]);

    

    return (
        <div className="relative bg-[#EFF0F1] px-4 py-2 rounded-full border border-[#E6E6E6] text-gray-80 w-fit flex items-center">
            <div className="flex justify-between  gap-8 text-sm z-20 w-full  ">
                <button
                    onClick={() => handleClick('Floors')}
                    className={`text-${activeTab === 'Floors' ? 'white' : 'gray-80'}   transition-all delay-100  text-xs md:text-sm lg:text-base xl:text-lg`}
                >
                    Floors
                </button>
                <button
                    onClick={() => handleClick('Menu')}
                    className={`text-${activeTab === 'Menu' ? 'white' : 'gray-80'}    transition-all delay-100  text-xs md:text-sm lg:text-base xl:text-lg`}
                >
                    Menu
                </button>
                <button
                    onClick={() => handleClick('Promotions')}
                    className={`text-${activeTab === 'Promotions' ? 'white' : 'gray-80'}    transition-all delay-100  text-xs md:text-sm lg:text-base xl:text-lg`}
                >
                    Promotions
                </button>
                <button
                    onClick={() => handleClick('Members')}
                    className={`text-${activeTab === 'Members' ? 'white' : 'gray-80'}    transition-all delay-100  text-xs md:text-sm lg:text-base xl:text-lg `}
                >
                    Members
                </button>
                <button
                    onClick={() => handleClick('Reviews')}
                    className={`text-${activeTab === 'Reviews' ? 'white' : 'gray-80'}    transition-all delay-100 text-xs md:text-sm lg:text-base xl:text-lg `}
                >
                    Reviews
                </button>
            </div>
            <div
                className={`absolute z-10 bottom-0 w-1/5 h-full bg-[#346CC4] rounded-full flex items-center justify-center pointer-events-none transition-left duration-300 ease-in-out`}
                style={{
                   left : indicatorPosition
                }}
            >
            </div>
        </div>
    );
}
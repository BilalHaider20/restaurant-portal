import { useState } from 'react';

export default function Switcher({ activeTab,setactiveTab }) {

    const handleClick = (selection) => {
        setactiveTab(selection);
    };

    return (
        <div className="relative bg-[#EFF0F1] py-2 px-4 rounded-full border border-[#E6E6E6] text-gray-80 w-fit flex items-center">
            <div className="flex gap-7 text-sm font-medium z-20">
                <button
                    onClick={() => handleClick('Branches')}
                    className={`text-${activeTab === 'Branches' ? 'white' : 'gray-80'} transition-all delay-100`}
                >
                    Branches
                </button>
                <button
                    onClick={() => handleClick('Promotions')}
                    className={`text-${activeTab === 'Promotions' ? 'white' : 'gray-80'} transition-all delay-100`}
                >
                    Promotions
                </button>
                <button
                    onClick={() => handleClick('Members')}
                    className={`text-${activeTab === 'Members' ? 'white' : 'gray-80'} transition-all delay-100`}
                >
                    Members
                </button>
            </div>
            <div
                className={`absolute z-10 bottom-0 w-[95px] h-full bg-[#346CC4] rounded-full flex items-center justify-center pointer-events-none transition-left duration-300 ease-in-out`}
                style={{
                    left: `calc(${activeTab === 'Branches' ? '0.2rem' 
                        : activeTab === 'Promotions' ? '100px' : '200px'} - 0.3rem)`
                }}
            >
            </div>
        </div>
    );
}
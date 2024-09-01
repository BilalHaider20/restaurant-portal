"use client";
import React, { useState } from "react";
// import { useTranslations } from "next-intl";
import Image from "next/image";
import images from "../../../../public/images/index";

const Sort = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("All");
    // const t = useTranslations('FilterDropdown');

    const Sortoptions = ['Ascending', 'Descending'];

    const handleFilterSelect = (filter) => {
        setSelectedFilter(filter);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className=" min-h-10 inline-flex justify-between items-center  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs md:text-sm lg:text-base xl:text-lg font-medium text-gray-80 hover:bg-gray-50 "
                >
                    <Image src={images.filter} alt="" className="mr-2" />
                    <span>Sort</span>
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-30 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        {Sortoptions.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => handleFilterSelect(filter)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sort;

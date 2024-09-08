'use client'
import React, { useState, useEffect } from 'react';
import ReactCountryFlag from "react-country-flag";
import Image from 'next/image';
import images from '../../../../../public/images/navbar';
// import { useAppDispatch, useAppSelector } from '../lib/hooks';
// import { setLanguage } from '../lib/features/lang/langSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setLanguage } from '@/lib/features/lang/langSlice';
import {useTranslation} from "react-i18next";

const options = [
    { lang: "English", code: "en", iconCode: "GB" },
    { lang: "Arabic", code: "ar", iconCode: "SA" },
];


const LangDropdown = () => {
    const { i18n } = useTranslation();
    const dispatch = useAppDispatch()
    const {lang} = useAppSelector((state) => state.lang);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
        options.find(option => option.code === lang) || options[0]
    );

    useEffect(() => {
        const selected = options.find(option => option.code === lang);
        if (selected) {
            setSelectedOption(selected);
        }
    }, [lang]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        i18n.changeLanguage(option.code);
        dispatch(setLanguage(option.code));
        setIsOpen(false);
    };

    return (
        <div className="relative flex flex-row">
            <button
                className=" py-2 px-3 rounded-md text-left text-primary-blue text-base font-medium flex  items-center gap-1"
                onClick={toggleDropdown}
            >
                <ReactCountryFlag
                    countryCode={selectedOption.iconCode}
                    style={{ width: '20px', height: '15px', marginRight: '8px' }}
                    svg
                />
                {selectedOption.lang}
                <Image src={images.arrow} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    alt='arrow' />
            </button>
            {isOpen && (
                <ul className="absolute z-10 w-full mt-10 bg-white rounded-md shadow-lg">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="py-2 px-4 hover:bg-gray-100 text-light-blue font-medium text-base cursor-pointer flex items-center"
                            onClick={() => handleOptionClick(option)}
                        >
                            <ReactCountryFlag
                                countryCode={option.iconCode}
                                style={{ width: '20px', height: '15px', marginRight: '8px' }}
                                svg
                            />
                            {option.lang}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LangDropdown;

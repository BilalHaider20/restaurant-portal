"use client";
import React, { useState, useEffect, useRef } from 'react';

const Select = ({ label, name, options }) => {
    const [selected, setSelected] = useState('');
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full space-y-1" ref={dropdownRef}>
            <label htmlFor={name} className='text-[#3C3C3C] font-semibold'>{label}</label>
            <div className="relative">
                <button
                    id={name}
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="selectForm "
                >
                    {selected ? options.find(option => option.value === selected)?.label : <span className='text-light-text'>Select an option</span> }
                    <svg
                        className={`w-4 h-4 transform ${open ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {open && (
                    <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-10">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                onClick={() => {
                                    setSelected(option.value);
                                    setOpen(false);
                                }}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Select;

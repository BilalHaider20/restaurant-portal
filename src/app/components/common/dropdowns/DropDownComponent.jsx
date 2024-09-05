"use client";
import React, { useState, useEffect, useRef } from 'react';

const DropDownComponent = ({ label, name, options, defaultSelected, error, disabled = false, onChange }) => {
    const [selected, setSelected] = useState(defaultSelected);
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

    const handleButtonClick = () => {
        if (!disabled) {
            setOpen(!open);
        }
    };

    const handleOptionSelect = (value) => {
        setSelected(value); // Update the selected value locally
        setOpen(false); // Close the dropdown
        onChange(value); 
    };



    return (
        <div className="w-full space-y-1" ref={dropdownRef}>
            <label htmlFor={name} className="text-[#3C3C3C] font-semibold">{label}</label>
            <label htmlFor={name} className="text-[#3C3C3C] font-semibold">{label}</label>
            <div className="relative">
                <button
                    id={name}
                    type="button"
                    onClick={handleButtonClick}
                    className="selectForm"
                    disabled={disabled}
                >
                    {selected ? options.find((option) => option.value === selected)?.label : <span className="text-light-text">Select an option</span>}
                    {selected ? options.find((option) => option.value === selected)?.label : <span className="text-light-text">Select an option</span>}
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
                {open && !disabled && (
                    <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-10">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                onClick={() => handleOptionSelect(option.value)}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
                {error && <p className="text-red-500" role="alert">{error}</p>}
            </div>
        </div>
    );
};

export default DropDownComponent;

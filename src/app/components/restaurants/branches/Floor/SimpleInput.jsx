"use client";
import React from 'react';

const SimpleInput = ({ label, placeholder }) => {
    return (
        <div className="w-full space-y-1 ">
            <label className="font-semibold">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className="inputForm border rounded p-3 w-full h-12"
            />
        </div>
    );
};

export default SimpleInput;
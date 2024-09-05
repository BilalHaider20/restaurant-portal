"use client";
import React from 'react';

const SimpleTextArea = ({ label, placeholder }) => {
    return (
        <div className="w-full space-y-1">
            <label className="font-semibold">{label}</label>
            <textarea
                placeholder={placeholder}
                className="inputForm border rounded p-2 w-full h-32 resize-none"
            />
        </div>
    );
};

export default SimpleTextArea;
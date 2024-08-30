"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Input = ({ label, name, value, onChange, placeholder, type = "text", error, icon }) => {
    return (
        <div className="w-full space-y-1 relative">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`inputForm ${icon && 'inputSvg'} ${error ? 'border-red-500' : ''}`}
            />
            {icon && <div className="formSvgDiv">
                <Image src={icon} alt='mail' />
            </div>}
            {error && <p className="text-red-500" role="alert">{error}</p>}
        </div>
    );
};

export default Input;

import React, { useState } from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import DropDownComponent from '../dropdowns/DropDownComponent';
import images from '../../../../../public/images';

import Image from 'next/image';

const AvailableInput = ({ day, index, control }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [currentStartTime, setCurrentStartTime] = useState('12:00 am');
    const [currentEndTime, setCurrentEndTime] = useState('01:00 am');

    const { fields: timeFields, append: appendTime, remove: removeTime } = useFieldArray({
        control,
        name: `availability.${index}.times`,  // Create a field array for the times of each day
    });

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setIsOpen(false);
    };

    const handleClick = () => {
        if (isChecked) {
            setIsOpen(true);
        }
    };

    const timeOptions = [
        { value: '12:00 am', label: '12:00 am' },
        { value: '01:00 am', label: '01:00 am' },
        { value: '02:00 am', label: '02:00 am' },
        { value: '03:00 am', label: '03:00 am' },
        { value: '04:00 am', label: '04:00 am' },
        { value: '05:00 am', label: '05:00 am' },
        { value: '06:00 am', label: '06:00 am' },
        { value: '07:00 am', label: '07:00 am' },
        { value: '08:00 am', label: '08:00 am' },
        { value: '09:00 am', label: '09:00 am' },
        { value: '10:00 am', label: '10:00 am' },
        { value: '11:00 am', label: '11:00 am' },
        { value: '12:00 pm', label: '12:00 pm' },
        { value: '01:00 pm', label: '01:00 pm' },
        { value: '02:00 pm', label: '02:00 pm' },
        { value: '03:00 pm', label: '03:00 pm' },
        { value: '04:00 pm', label: '04:00 pm' },
        { value: '05:00 pm', label: '05:00 pm' },
        { value: '06:00 pm', label: '06:00 pm' },
        { value: '07:00 pm', label: '07:00 pm' },
        { value: '08:00 pm', label: '08:00 pm' },
        { value: '09:00 pm', label: '09:00 pm' },
        { value: '10:00 pm', label: '10:00 pm' },
        { value: '11:00 pm', label: '11:00 pm' },
    ]

    return (
        <div
            className={`border border-divider-clr rounded-lg py-2 px-3 ${isChecked ? 'cursor-pointer' : 'cursor-default'}`}
            onClick={handleClick}
        >
            <label className="inline-flex items-center cursor-pointer">
                <Controller
                    name={`availability.${index}.day`}
                    control={control}
                    render={({ field }) => (
                        <input
                            type="checkbox"
                            value={day}
                            className="sr-only peer"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                    )}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 font-medium text-dark-text">{day}</span>
            </label>
            <div>
                {isOpen && (
                    <div className="grid grid-cols-2 gap-4">
                        <div className='flex w-[2/4] flex-1 items-center justify-center mt-2 gap-2'>
                        <Controller
                                name={`availability.${index}.times.start`}
                                control={control}
                                render={({ field }) => (
                                    <DropDownComponent
                                        name={field.name}
                                        options={timeOptions}
                                        value={currentStartTime}  // Bind to local state
                                        defaultSelected='12:00 am'
                                        onChange={(value) => setCurrentStartTime(value)}  // Update local state
                                    />
                                )}
                            />
                            <span>to</span>
                            <Controller
                                name={`availability.${index}.times.end`}
                                control={control}
                                render={({ field }) => (
                                    <DropDownComponent
                                        name={field.name}
                                        options={timeOptions}
                                        value={currentEndTime}  // Bind to local state
                                        defaultSelected='01:00 am'
                                        onChange={(value) => setCurrentEndTime(value)}  // Update local state
                                    />
                                )}
                            />
                            <button
                                type="button"
                                onClick={() => appendTime({ start: currentStartTime, end: currentEndTime })}
                            >
                                <Image width={50} src={images.plus_button} alt='add' />
                            </button>
                        </div>
                        {timeFields.map((time, timeIndex) =>
                            <div key={timeIndex} className="flex w-[2/4] flex-1 items-center mt-2 gap-2">
                                <Controller
                                    name={`availability.${index}.times.${timeIndex}.start`}
                                    control={control}
                                    render={({ field }) => (
                                        <DropDownComponent
                                            name={field.name}
                                            options={timeOptions}
                                            value={field.value}
                                            defaultSelected={time.start}
                                            onChange={(value) => field.onChange(value)}
                                            disabled={true}
                                        />
                                    )}
                                />
                                <span>to</span>
                                <Controller
                                    name={`availability.${index}.times.${timeIndex}.end`}
                                    control={control}
                                    render={({ field }) => (
                                        <DropDownComponent
                                            name={field.name}
                                            options={timeOptions}
                                            value={field.value}
                                            defaultSelected={time.end}
                                            onChange={(value) => field.onChange(value)}
                                            disabled={true}
                                        />
                                    )}
                                />
                                <button
                                    type="button"
                                    onClick={() => removeTime(timeIndex)}
                                >
                                    <Image width={50} src={images.delete} alt='delete' />
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AvailableInput;

"use client"
import React from 'react'
import { useState } from 'react'
import images from '../../../public/images'
import Image from 'next/image'
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import Select from './Select';


const BranchesModal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isModalOpen, setIsModalOpen] = useState(true)

    const cityOptions = [
        { value: 'lahore', label: 'Lahore' },
        { value: 'karachi', label: 'Karachi' },
        { value: 'islamabad', label: 'Islamabad' },
    ];

    const countryOptions = [
        { value: 'pakistan', label: 'Pakistan' },
        { value: 'india', label: 'India' },
        { value: 'bangladesh', label: 'Bangladesh' },
    ];

    const dayOptions = [
        { value: 'monday', label: 'Monday' },
        { value: 'tuesday', label: 'Tuesday' },
        { value: 'wednesday', label: 'Wednesday' },
        { value: 'thursday', label: 'Thursday' },
        { value: 'friday', label: 'Friday' },
        { value: 'saturday', label: 'Saturday' },
        { value: 'sunday', label: 'Sunday' },
    ];
    const timeOptions = [
        { value: '00:00', label: '00:00' },
        { value: '01:00', label: '01:00' },
        { value: '02:00', label: '02:00' },
        { value: '03:00', label: '03:00' },
        { value: '04:00', label: '04:00' },
        { value: '05:00', label: '05:00' },
        { value: '06:00', label: '06:00' },
        { value: '07:00', label: '07:00' },
        { value: '08:00', label: '08:00' },
        { value: '09:00', label: '09:00' },
        { value: '10:00', label: '10:00' },
        { value: '11:00', label: '11:00' },
        { value: '12:00', label: '12:00' },
        { value: '13:00', label: '13:00' },
        { value: '14:00', label: '14:00' },
        { value: '15:00', label: '15:00' },
        { value: '16:00', label: '16:00' },
        { value: '17:00', label: '17:00' },
        { value: '18:00', label: '18:00' },
        { value: '19:00', label: '19:00' },
        { value: '20:00', label: '20:00' },
        { value: '21:00', label: '21:00' },
        { value: '22:00', label: '22:00' },
        { value: '23:00', label: '23:00' },
    ];
    const facilitiesOptions = [
        { value: 'option 1', label: 'Option 1' },
        { value: 'option 2', label: 'Option 2' },
        { value: 'option 3', label: 'Option 3' },
    ];
    const paymentOptions = [
        { value: 'option 1', label: 'Option 1' },
        { value: 'option 2', label: 'Option 2' },
        { value: 'option 3', label: 'Option 3' },
    ];

    const handleClick = (e) => {
        e.preventDefault(); 
        setIsModalOpen(!isModalOpen);
    }




    const onSubmit = (data) => {
        // console.log(data);
    };
    return (
        <div className={`w-[778px] ml-auto bg-bg-main transition-transform duration-300 ${isModalOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
            <div className='w-full flex justify-between py-3 px-5 bg-bg-light'>
                <h2 className='font-semibold text-lg text-heading-clr '>Edit Arcadian Cafe Packages Mall</h2>
                <button type='button' onClick={(e) => handleClick(e) }>
                    <Image src={images.cross} alt="x" />
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className=' m-5 p-3 bg-bg-light space-y-3' >
                <div className=" w-full space-y-1  relative">
                    <label className='m-0' htmlFor="name">Branch Name </label>
                    <input
                        {...register('name', { required: "Please enter branch name" })}
                        type="text"
                        className="inputForm"
                        placeholder="Branch Name"
                        name='name'
                    />
                    {errors.name && <p className="text-red-500" role="alert">{errors.name.message}</p>}
                </div>
                <div className='flex  gap-3'>
                    <div className="space-y-1 relative w-full">
                        <label className='m-0' htmlFor="phone">Phone Number </label>
                        <PhoneInput country='pk' name="phone" className="inputForm" />
                    </div>
                    <div className="space-y-1 relative w-full">
                        <label className='m-0' htmlFor="email">Email Address</label>
                        <input
                            {...register("email", { required: "Please enter email address" })}
                            type="email"
                            className="inputForm inputSvg "
                            name='email'
                            placeholder="Email Address"
                        />
                        <div className="formSvgDiv">
                            <Image src={images.mail_form} alt='mail' />
                        </div>
                        {errors.email && <p className="text-red-500" role="alert">{errors.email.message}</p>}
                    </div>
                </div>
                <div className='flex gap-3'>
                    <Select label="Choose Day" name="day" options={dayOptions} />
                    <Select label="Choose Day" name="day" options={dayOptions} />
                </div>


                <div className='flex gap-3'>
                    <Select label="Choose Day" name="day" options={dayOptions} />
                    <Select label="Opening Hours" name="opening-hours" options={timeOptions} />
                    <Select label="Closing Hours" name="closing-hours" options={timeOptions} />
                </div>

                <div className='flex gap-3'>
                    <Select label="Select Facilities" name="facilites" options={facilitiesOptions} />
                    <Select label="Select Payment Methods" name="payment-methods" options={paymentOptions} />
                </div>


            </form>
        </div>
    )
}

export default BranchesModal
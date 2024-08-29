"use client"
import React from 'react'
import images from '../../../public/images'
import Image from 'next/image'
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";


const BranchesModal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
    };
    return (
        <div className='w-[778px] ml-auto bg-bg-main'>
            <div className='w-full flex justify-between py-3 px-5 bg-bg-light'>
                <h2 className='font-semibold text-lg text-heading-clr '>Edit Arcadian Cafe Packages Mall</h2>
                <Image src={images.cross} alt="x" />
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
                    <div className='w-full space-y-1 '>
                        <label htmlFor="city">City</label>
                        <select name="city" id="city" className='inputForm selectForm selectPlaceholder'>
                            <option value="lahore">Lahore</option>
                            <option value="karachi">Karachi</option>
                            <option value="islamabad">Islamabad</option>
                        </select>
                    </div>
                    <div className='w-full space-y-1'>
                        <label htmlFor="country">Country</label>
                        <select name="country" id="country" className='inputForm selectForm selectPlaceholder'>
                            <option value="pakistan">Pakistan</option>
                            <option value="india">India</option>
                            <option value="bangladesh">Bangladesh</option>
                        </select>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='w-full space-y-1'>
                        <label htmlFor="day">Choose Day</label>
                        <select name="day" id="day" className='inputForm selectForm selectPlaceholder'>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                            <option value="sunday">Sunday</option>

                        </select>
                    </div>
                    <div className='w-full space-y-1 '>
                        <label htmlFor="opening-hours">Opening Hours</label>
                        <select name="opening-hours" id="opening-hours" className='inputForm selectForm selectPlaceholder'>
                            <option value="00:00">00:00</option>
                            <option value="01:00">01:00</option>
                            <option value="02:00">02:00</option>
                            <option value="03:00">03:00</option>
                            <option value="04:00">04:00</option>
                            <option value="05:00">05:00</option>
                            <option value="06:00">06:00</option>
                            <option value="07:00">07:00</option>
                            <option value="08:00">08:00</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                            <option value="22:00">22:00</option>
                            <option value="23:00">23:00</option>

                        </select>
                    </div>
                    <div className='w-full space-y-1 '>
                        <label htmlFor="closing-hours">Closing Hours</label>
                        <select name="closing-hours" id="closing-hours" className='inputForm selectForm selectPlaceholder'>
                            <option value="00:00">00:00</option>
                            <option value="01:00">01:00</option>
                            <option value="02:00">02:00</option>
                            <option value="03:00">03:00</option>
                            <option value="04:00">04:00</option>
                            <option value="05:00">05:00</option>
                            <option value="06:00">06:00</option>
                            <option value="07:00">07:00</option>
                            <option value="08:00">08:00</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                            <option value="22:00">22:00</option>
                            <option value="23:00">23:00</option>

                        </select>
                    </div>
                </div>

                <div className='flex gap-3'>
                    <div className='w-full space-y-1'>
                        <label htmlFor="facilities">Select Facilities</label>
                        <select name="facilities" id="facilities" className='inputForm selectForm selectPlaceholder'>
                            <option value="" selected disabled >Select all which apply</option>
                        </select>
                    </div>
                    <div className='w-full space-y-1'>
                        <label htmlFor="payment">Select Payment Method</label>
                        <select name="payment" id="facilities" className='inputForm selectForm selectPlaceholder'>
                            <option value="" selected disabled >Select all which apply</option>
                        </select>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default BranchesModal
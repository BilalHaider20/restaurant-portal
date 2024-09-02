"use client"
import React from 'react'
import { useState } from 'react'
import images from '@/../public/images'
import Image from 'next/image'
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import { useForm, Controller } from "react-hook-form";
// import Input from './Input'
// import FileUpload from './FileUpload'
import Input from '@/app/components/common/FormElements/Input'
import { useTranslations } from 'next-intl'



const BranchesModal = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const t = useTranslations('BranchesModal')

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
        <div className={`w-full ml-auto bg-bg-main transition-transform duration-300 ${isModalOpen ? 'transform translate-x-0' : 'transform translate-x-full'} md:w-[778px]`}>
            <div className='w-full flex justify-between py-3 px-5 bg-bg-light'>
                <h2 className='font-semibold text-lg text-heading-clr '>{t('edit')} Arcadian Cafe Packages Mall</h2>
                <button type='button' onClick={(e) => handleClick(e)}>
                    <Image src={images.cross} alt="x" />
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className=' ' >
                <div className='m-5 bg-bg-light p-3 space-y-5'>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: "Please enter branch name" }}
                        render={({ field }) => (
                            <Input
                                label={t('branchName')}
                                name="name"
                                value={field.value}
                                onChange={field.onChange}
                                placeholder={t('branchName')}
                                error={errors.name?.message}
                            />
                        )}
                    />
                    <div className='flex flex-col gap-3 md:flex-row'>
                        <div className="space-y-1 relative w-full">
                            <label className='m-0' htmlFor="phone">{t('phoneNumber')} </label>
                            <PhoneInput country='pk' name="phone" className="inputForm" />
                        </div>
                        <Controller
                            name="email"
                            
                            control={control}
                            rules={{ required: "Please enter branch name" }}
                            render={({ field }) => (
                                <Input
                                    label={t('emailAddress')}
                                    name="email"
                                    type="email"
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder={`Enter ${t('emailAddress')}`}
                                    error={errors.name?.message}
                                />
                            )}
                        />
                    </div>
                    <div className='flex flex-col gap-3 md:flex-row'>
                        <Controller
                            name="city"
                            control={control}
                            render={({ field }) => (
                                <Select label={t('branchCity')} name="city" options={cityOptions} value={field.value} onChange={field.onChange} />
                            )}
                        />
                        <Controller
                            name="country"
                            control={control}
                            render={({ field }) => (
                                <Select label={t('branchCountry')}  name="country" options={countryOptions} value={field.value} onChange={field.onChange} />
                            )}
                        />
                    </div>
                    <div className='flex flex-col gap-3 md:flex-row'>
                        <Controller
                            name="day"
                            control={control}
                            render={({ field }) => (
                                <Select label={t("chooseDay")} name="day" options={dayOptions} value={field.value} onChange={field.onChange} />
                            )}
                        />

                        <Controller
                            name="opening-hours"
                            control={control}
                            render={({ field }) => (
                                <Select label={t('openingHours')} name="opening-hours" options={timeOptions} value={field.value} onChange={field.onChange} />
                            )}
                        />
                        <Controller
                            name="closing-hours"
                            control={control}
                            render={({ field }) => (
                                <Select label={t('closingHours')} name="closing-hours" options={timeOptions} value={field.value} onChange={field.onChange} />
                            )}
                        />
                    </div>

                    <div className='flex flex-col gap-3 md:flex-row'>
                        <Controller
                            name="facilities"
                            control={control}
                            render={({ field }) => (
                                <Select label={t("selectFacilities")} name="facilities" options={facilitiesOptions} value={field.value} onChange={field.onChange} />
                            )}
                        />
                        <Controller
                            name="payment-methods"
                            control={control}
                            render={({ field }) => (
                                <Select label={t("selectPayment")} name="payment-methods" options={paymentOptions} value={field.value} onChange={field.onChange} />
                            )}
                        />
                    </div>
                    <FileUpload control={control} name="gallery" />
                </div>
                <div className='bg-bg-light px-4 py-2 flex justify-end gap-3'>
                    <button className="px-4 py-2 text-gray-600 bg-bg-light border border-gray-300 rounded-lg hover:bg-gray-100">
                        {t('cancel')}
                    </button>
                    <button className="px-4 py-2 text-white bg-primary-blue rounded-lg hover:bg-blue-600">
                    {t('add')}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BranchesModal
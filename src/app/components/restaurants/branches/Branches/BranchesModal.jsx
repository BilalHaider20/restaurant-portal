"use client"
import React, { useState } from 'react';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import Image from 'next/image';
import images from '@/../public/images';
import DropDownComponent from '@/app/components/common/dropdowns/DropDownComponent';
import AvailableInput from '@/app/components/common/FormElements/AvailableInput';
import Input from '@/app/components/common/FormElements/Input';
import { useTranslations } from 'next-intl';

const BranchesModal = ({ onClose }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            availability: [
                { day: 'Monday', times: [{ start: '12:00 am', end: '12:00 am' }] },
                { day: 'Tuesday', times: [] },
                { day: 'Wednesday', times: [] },
                { day: 'Thursday', times: [] },
                { day: 'Friday', times: [] },
                { day: 'Saturday', times: [] },
                { day: 'Sunday', times: [] }
            ],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "availability",
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const t = useTranslations('BranchesModal');
    const [isModalOpen, setIsModalOpen] = useState(true);

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

    return (
        <div className={`absolute top-0 right-0 w-full ml-auto bg-bg-main transition-transform duration-300 space-y-0 ${isModalOpen ? 'transform translate-x-0' : 'transform translate-x-full'} md:w-[778px]`}>
            <div className='w-full flex justify-between py-3 px-5 bg-bg-light'>
                <h2 className='font-semibold text-lg text-heading-clr '>{t('edit')} Arcadian Cafe Packages Mall</h2>
                <button type='button' onClick={onClose}>
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
                            rules={{ required: "Please enter branch email" }}
                            render={({ field }) => (
                                <Input
                                    label={t('emailAddress')}
                                    name="email"
                                    type="email"
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder={`Enter ${t('emailAddress')}`}
                                    error={errors.email?.message}
                                />
                            )}
                        />
                    </div>
                    <div className='flex flex-col gap-3 md:flex-row'>
                        <Controller
                            name="city"
                            control={control}
                            render={({ field }) => (
                                <DropDownComponent
                                    label={t('branchCity')}
                                    name="city"
                                    options={cityOptions}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <Controller
                            name="country"
                            control={control}
                            render={({ field }) => (
                                <DropDownComponent
                                    label={t('branchCountry')}
                                    name="country"
                                    options={countryOptions}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                    </div>
                    {fields.map((item, index) => (
                        <AvailableInput
                            key={index}
                            day={item.day}
                            control={control}
                            index={index}
                        />
                    ))}
                </div>

                <div className='bg-bg-light px-4 py-2 flex justify-end gap-3'>
                    <button type="button" className="px-4 py-2 text-gray-600 bg-bg-light border border-gray-300 rounded-lg hover:bg-gray-100" onClick={onClose}>
                        {t('cancel')}
                    </button>
                    <button type="submit" className="px-4 py-2 text-white bg-primary-blue rounded-lg hover:bg-blue-600">
                        {t('add')}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BranchesModal;

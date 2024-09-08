"use client"
import React, { useState, useEffect } from 'react';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import images from "@/../public/images";
import DropDownComponent from "@/app/components/common/dropdowns/DropDownComponent";
import AvailableInput from "@/app/components/common/FormElements/AvailableInput";
import Input from "@/app/components/common/FormElements/Input";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageUpload from '@/app/components/common/FormElements/ImageUpload';

const SlotsModal = ({ onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            availability: [
                { day: "Monday", times: [] },
                { day: "Tuesday", times: [] },
                { day: "Wednesday", times: [] },
                { day: "Thursday", times: [] },
                { day: "Friday", times: [] },
                { day: "Saturday", times: [] },
                { day: "Sunday", times: [] },
            ],
        },
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 100);

        return () => clearTimeout(timer);


    }, []);

    const handleModalClose = () => {
        setIsModalOpen(false);
        setTimeout(onClose, 300);
    };

    const { fields, append, remove } = useFieldArray({
        control,
        name: "availability",
    });

    const onSubmit = (data) => {
        console.log(data);
        toast.success("Slot created successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        reset({
            title: "",
            type: "",
            duration: "",
            availability: [
                { day: "Monday", times: [] },
                { day: "Tuesday", times: [] },
                { day: "Wednesday", times: [] },
                { day: "Thursday", times: [] },
                { day: "Friday", times: [] },
                { day: "Saturday", times: [] },
                { day: "Sunday", times: [] },
            ],
        });
    };

    const typeOptions = [
        { value: "regular", label: "Regular" },
        { value: "lunch", label: "Lunch Slot" },
        { value: "dinner", label: "Dinner Slot" },
    ]

    const durationOptions = [
        { value: "30", label: "30 minutes" },
        { value: "45", label: "45 minutes" },
        { value: "60", label: "1 hour" },
        { value: "120", label: "2 hours" }
    ];


    const {t} = useTranslation();


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
            <div
                className={`w-full max-w-3xl h-screen bg-[#F2F4F7] flex flex-col justify-between transition-transform duration-300
          ${isModalOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >
                {/* Modal Header */}
                <div className="font-semibold text-[#15223C] bg-[#FFFFFF] w-full p-4 flex justify-between items-center">
                    <h2 className="text-xl sm:text-2xl">
                        {t("slots.form.edit")} Arcadian Cafe Packages Mall
                    </h2>
                    <button className="text-xl" onClick={handleModalClose} >&times;</button>
                </div>

                {/* Modal Body */}
                <form onSubmit={handleSubmit(onSubmit)} className="overflow-y-auto p-2 flex-grow">
                    <div className="m-5 bg-bg-light p-3 space-y-5">
                        <Controller
                            name="type"
                            control={control}
                            rules={{ required: t("slots.form.requiredField") }}
                            render={({ field }) => (
                                <DropDownComponent
                                    label={t("slots.form.type")}
                                    name="type"
                                    options={typeOptions}
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={errors.type?.message}
                                />
                            )}
                        />
                        <div className="flex flex-col gap-3 md:flex-row">
                            <Controller
                                name="title"
                                control={control}
                                rules={{ required: t("slots.form.requiredField") }}
                                render={({ field }) => (
                                    <Input
                                        label={t("slots.form.title")}
                                        name="title"
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder={`Enter ${t("slots.form.title")}`}
                                        error={errors.title?.message}
                                    />
                                )}
                            />
                            <Controller
                                name="duration"
                                control={control}
                                rules={{ required: t("slots.form.requiredField") }}
                                render={({ field }) => (
                                    <DropDownComponent
                                        label={t("slots.form.duration")}
                                        name="duration"
                                        options={durationOptions}
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={errors.duration?.message}
                                    />
                                )}
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='font-medium text-dark-text'>Availability</span>
                            <div className='flex flex-col gap-3'>
                                {fields.map((item, index) => (
                                    <AvailableInput
                                        key={index}
                                        day={item.day}
                                        control={control}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                </form>

                {/* Modal Footer */}
                <div className="bg-white p-4 flex justify-end space-x-4">
                    <button className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
                        onClick={handleModalClose}
                    >
                        Cancel
                    </button>
                    <button className="px-4 py-2 text-white bg-primary-blue rounded-lg hover:bg-blue-600">
                        Add
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SlotsModal;

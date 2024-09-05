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
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BranchesModal = ({ onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      availability: [
        { day: "Monday", times: [{ start: "12:00 am", end: "12:00 am" }] },
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

    
      }, []);

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
    toast.success("Branch details submitted successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    reset({
      name: "",
      phone: "",
      email: "",
      city: "",
      country: "",
      availability: [
        { day: "Monday", times: [{ start: "12:00 am", end: "12:00 am" }] },
        { day: "Tuesday", times: [] },
        { day: "Wednesday", times: [] },
        { day: "Thursday", times: [] },
        { day: "Friday", times: [] },
        { day: "Saturday", times: [] },
        { day: "Sunday", times: [] },
      ],
    });
  };

  const t = useTranslations("BranchesModal");
  

  const cityOptions = [
    { value: "lahore", label: "Lahore" },
    { value: "karachi", label: "Karachi" },
    { value: "islamabad", label: "Islamabad" },
  ];

  const countryOptions = [
    { value: "pakistan", label: "Pakistan" },
    { value: "india", label: "India" },
    { value: "bangladesh", label: "Bangladesh" },
  ];

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
            {t("edit")} Arcadian Cafe Packages Mall
          </h2>
          <button className="text-xl" onClick={handleModalClose} >&times;</button>
        </div>

        {/* Modal Body */}
        <form className="overflow-y-auto p-2 flex-grow">
          <div className="m-5 bg-bg-light p-3 space-y-5">
            <Controller
              name="name"
              control={control}
              rules={{ required: t("requiredField") }}
              render={({ field }) => (
                <Input
                  label={t("branchName")}
                  name="name"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder={t("branchName")}
                  error={errors.name?.message}
                />
              )}
            />
            <div className="flex flex-col gap-3 md:flex-row">
              <Controller
                name="phone"
                control={control}
                rules={{ required: t("requiredField") }}
                render={({ field }) => (
                  <div className="space-y-1 relative w-full">
                    <label className="m-0" htmlFor="phone">
                      {t("phoneNumber")}
                    </label>
                    <PhoneInput
                      country="pk"
                      name="phone"
                      value={field.value}
                      onChange={field.onChange}
                      className="inputForm"
                    />
                    {errors.phone && (
                      <span className="text-red-600">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{ required: t("requiredField") }}
                render={({ field }) => (
                  <Input
                    label={t("emailAddress")}
                    name="email"
                    type="email"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={`Enter ${t("emailAddress")}`}
                    error={errors.email?.message}
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-3 md:flex-row">
              <Controller
                name="city"
                control={control}
                rules={{ required: t("requiredField") }}
                render={({ field }) => (
                  <DropDownComponent
                    label={t("branchCity")}
                    name="city"
                    options={cityOptions}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.city?.message}
                  />
                )}
              />
              <Controller
                name="country"
                control={control}
                rules={{ required: t("requiredField") }}
                render={({ field }) => (
                  <DropDownComponent
                    label={t("branchCountry")}
                    name="country"
                    options={countryOptions}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.country?.message}
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

export default BranchesModal;

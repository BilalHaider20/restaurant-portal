"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FileUpload from "../../common/FormElements/ImageUpload";
import images from "../../../../../public/images";
import { Controller, useForm } from "react-hook-form";
import DropDownComponent from "../../common/dropdowns/DropDownComponent";
import Input from "../../common/FormElements/Input";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import "react-phone-input-2/lib/style.css";
import { addRestaurants } from "@/app/services/apiMethods";

const cuisineOptions = [{ value: "italian", label: "italian" }];

const RestaurantModal = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setIsModalOpen(true);
    return () => setIsModalOpen(false);
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(onClose, 300);
  };

  const [profileImage, setProfileImage] = useState(images.profile);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setProfileImage(URL.createObjectURL(files[0]));
    }
  };

  const handlePhoneChange = (value) => {
      const phoneNumberObject = parsePhoneNumberFromString(`+${value}`);
      const phone_number_country = phoneNumberObject.country;
      console.log(phone_number_country);
      return phone_number_country;
    
  };

  const Add_New_Restaurants=async (data)=>{
    try{
      const reponse = await addRestaurants(data);
      console.log(reponse);
    }
    catch(error){
      console.log(error);
    }
  }

  const onSubmit = (data) => {
    const phone_number_country = handlePhoneChange(data.phone_number);
    data= {...data, phone_number_country};
    console.log(data);
    Add_New_Restaurants(data);

    // handleModalClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
      <div
        className={`w-full max-w-3xl h-screen bg-[#F2F4F7] flex flex-col justify-between transition-transform duration-300
          ${isModalOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Modal Header */}
        <div className="font-semibold text-[#15223C] bg-[#E6E6E6] w-full p-4 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl">Add a New Restaurant</h2>
          <button className="text-xl" onClick={handleModalClose}>
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 flex-grow">
          <div className="bg-white rounded-lg m-4 p-4 space-y-6">
            {/* Profile Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative">
                <Image
                  src={profileImage}
                  alt="Restaurant Profile"
                  width={148}
                  height={153}
                  className="rounded-full"
                />
                <button
                  onClick={handleClick}
                  className="absolute bottom-0 right-[22px] bg-primary-blue text-white rounded-full px-3 py-1 flex items-center text-sm"
                >
                  <Image
                    src={images.camera}
                    alt="Camera"
                    width={20}
                    height={20}
                    className="mr-1"
                  />
                  Add
                </button>
                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <div className="flex-grow w-full">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "This is a required field" }}
                  render={({ field }) => (
                    <Input
                      label="Restaurant Name"
                      name="name"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder={`Enter Restaurant Name`}
                      error={errors.name?.message}
                    />
                  )}
                />
              </div>
            </div>

            {/* Cuisine and Pricing Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Choose Cuisine */}
              <div className="w-full sm:w-1/2">
                <Controller
                  name="cuisine"
                  control={control}
                  rules={{ required: "Cuisine selection is required" }}
                  render={({ field }) => (
                    <DropDownComponent
                      label="Choose Cuisine"
                      options={cuisineOptions}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.cuisine && (
                  <p className="text-red-500">{errors.cuisine.message}</p>
                )}
              </div>

              {/* Pricing Category */}
              <div className="w-full sm:w-1/2">
                <label className="block text-[#3C3C3C] font-semibold mb-2">
                  Pricing Category
                </label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-6 mt-[8px]">
                    {["$", "$$", "$$$"].map((price) => (
                      <label
                        key={price}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          name="price_range"
                          type="radio"
                          value={price}
                          {...register("price_range", {
                            required: "Pricing category is required",
                          })}
                          className="peer"
                        />
                        <span className="ml-2 text-gray-500 peer-checked:text-blue-500">
                          {price}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                {errors.price && (
                  <p className="text-red-500">{errors.price.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3 md:flex-row">
              <Controller
                name="phone_number"
                control={control}
                rules={{ required: "This is a required field" }}
                render={({ field }) => (
                  <div className="space-y-1 relative w-full">
                    <label className="m-0" htmlFor="phone">
                      Phone Number
                    </label>
                    <PhoneInput
                      country={"pk"}
          
                      name="phone_number"
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
                rules={{ required: "This is a required field" }}
                render={({ field }) => (
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={`Enter Email Address`}
                    error={errors.email?.message}
                  />
                )}
              />
            </div>

            {/* Restaurant Description */}
            <div className="pt-1">
              <label className="block text-[#3C3C3C] font-semibold mb-2">
                Restaurant Description
              </label>
              <textarea
                {...register("description")}
                className="w-full bg-white border border-gray-300 rounded-lg p-4 h-32 resize-none"
                placeholder="Enter Short Description"
              ></textarea>
            </div>

            {/* Promotions Banner */}
            <div className="flex-grow overflow-y-auto p-4 space-y-6">
              <FileUpload />
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white p-4 flex justify-end space-x-4">
          <button
            className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
            onClick={handleModalClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-white bg-primary-blue rounded-lg hover:bg-blue-600"
            onClick={handleSubmit(onSubmit)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;

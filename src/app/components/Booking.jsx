"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import vector from '../../../public/images/vector.png';
import { useTranslations } from 'next-intl';
import email from '../../../public/images/email-box.png'
import Select from './Select';
import Input from './Input'
import FileUpload from './FileUpload'
import PhoneInput from 'react-phone-input-2';
import { useForm, Controller } from "react-hook-form";






const Booking = () => {
    const t = useTranslations('addRestaurant');

    const [isModalOpen, setIsModalOpen] = useState(false);
    


    useEffect(() => {
      setIsModalOpen(true);
      return () => setIsModalOpen(false);
    }, []);
  
    const handleModalClose = () => {
      setIsModalOpen(false);
      setTimeout(onClose, 300);
    };

    const countryOptions = [
        { value: 'pakistan', label: 'Pakistan' },
        { value: 'india', label: 'India' },
        { value: 'bangladesh', label: 'Bangladesh' },
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
    const dateOptions = [
        {
            value: '03-09-2024',label: '03-09-2024'
        },
        {value: '04-09-2024',label:'04-09-2024'},
        {
            value: '05-09-2024',label: '05-09-2024'
        },
        {
            value: '06-09-2024',label: '06-09-2024'
        },
        {
            value:'07-09-2024',label: '07-09-2024'
        }
    ]

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
   

  return (
    <div className={`fixed overflow-y-auto inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50`}>
      <div className={`w-full max-w-3xl absolute top-0 bg-[#F2F4F7] transition-transform duration-300
        ${isModalOpen ? 'transform translate-x-0' : 'transform translate-x-full'}
      `}>
        <div className="font-semibold text-[#15223C] bg-[#E6E6E6] w-full p-4 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl">Add A New Restaurant</h2>
          <button className="text-xl" onClick={handleModalClose}>&times;</button>
        </div>

      <div className="bg-white rounded-lg m-4 p-4 space-y-6">
        <div className=" items-center gap-4">
        <div className="text-[#3C3C3C] w-[254px] h-[32px] font-semibold text-xl">{t('reservation')}</div> 
          <div className="flex-grow w-full">
            <label className="block text-[#3C3C3C] font-normal mb-2">{t('reservationid')}</label>
            <input type="text" className="border border-gray-300 w-full p-2 rounded" placeholder="RES1234567890" />
          </div>
        </div>

          <div className="flex flex-col sm:flex-row justify-between gap-8 ">
            <div className="">
              <label className="block text-[#3C3C3C] font-normal mb-2">{t('tablenumber')}</label>
              <div className="flex items-center   rounded-full  ">
                <input type="text" className="flex-grow p-2  w-[200px] " placeholder="Select" />  
                <Image className='cursor-pointer' src={vector}  alt=''/>              
              </div>
            </div>

            <div className="flex flex-col">
              <label className="block text-[#3C3C3C] font-normal mb-2">{t('guest')}</label>
              <div className=" sm:w-1/3 w-[200px] border border-collapse ">
              <div className="flex items-center   rounded-full ">
                <input type="text" className="flex-grow p-2 w-[180px]  " placeholder="1" />  
                <Image className='cursor-pointer' src={vector}  alt=''/>              
              </div>
            </div>
            </div>

            <div className="">
              <label className="block text-[#3C3C3C] font-normal mb-2">{t('slot')}</label>
              <div className="flex items-center   rounded-full   ">
                <input type="text" className="flex-grow p-2 w-[200px]  " placeholder="45 minutes" />  
                <Image className='cursor-pointer' src={vector}  alt=''/>              
              </div>
            </div>
          
        </div>
        <div className="flex flex-col sm:flex-row justify-between sm:space-x-4 space-y-4 sm:space-y-0 w-full ">

        <div className="flex-1  ">
              <div className="flex items-center text-[#3C3C3C] rounded-full    ">
              <Controller
                            name=""
                            control={control}
                            render={({ field }) => (
                                <Select  label={t('reservationdate')}
                                 name={t('reservationdate')} 
                                 options={dateOptions} 
                                 value={field.value} 
    
                                 onChange={field.onChange} />
                            )}
                        />
                          
              </div>
            </div>



        

            <div className="flex-1">
              <div className="flex items-center text-[#3C3C3C] rounded-full  ">
              <Controller
                            name="opening-hours"
                            control={control}
                            render={({ field }) => (
                                <Select  label={t('reservationtime')}
                                 name={t('reservationtime')} 
                                 options={timeOptions} 
                                 value={field.value} 
    
                                 onChange={field.onChange} />
                            )}
                        />
                
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-[#3C3C3C] font-normal mb-2">{t('status')}</label>
              <div className="flex items-center   rounded-full  ">
                <input type="text" className="flex-grow p-2  w-[200px] " placeholder="Confirmed" />  
                <Image className='cursor-pointer' src={vector}  alt=''/>              
              </div>
            </div>
            </div>

        <div className="pt-1">
          <label className="block text-[#3C3C3C] font-semibold text-xl mb-2">{t('clientdetails')}</label>
        </div>

        <div className="flex-grow w-full">
            <label className="block text-[#3C3C3C] font-normal mb-2">{t('fullname')}</label>
            <input type="text" className="border border-gray-300 w-full p-2 rounded" placeholder="Basel AbdulMajid"/>
          </div>

          <div className="sm:1/2 flex flex-col justify-between  sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full">

          <div className="flex-1">
              <label className="block text-[#3C3C3C] font-normal mb-2">{t('phonenumber')}</label>
              <div className="flex items-center flex-row">
                <div className="w-[56px] flex">
              <PhoneInput country='pk' name="phone" className="inputForm " />
              </div>
                <input type="text" className="flex-grow p-2  w-[200px] " placeholder="+92(0300) 0000000" />  
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-[#3C3C3C] font-normal  mb-2">{t('email')}</label>
              <div className="flex items-center   rounded-full  ">
                <Image className='w-[56px] h-[52px] 'src={email} alt=''/>
                <input type="text" className="flex-grow p-2  w-[200px] " placeholder="Enter Email Address" />  
              </div>
            </div>
            </div>

          
        </div>

        <div className="sticky bottom-0 bg-white p-4 flex justify-end space-x-4">
          <button className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100" onClick={handleModalClose}>
            Cancel
          </button>
          <button className="px-4 py-2 text-white bg-primary-blue rounded-lg hover:bg-blue-600">
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default Booking

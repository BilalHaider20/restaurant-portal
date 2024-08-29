"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Icons from '../../../public/images/kit.png';
import vector from '../../../public/images/vector.png';
import center from '../../../public/images/center.png';
import Link from 'next/link';
import profile from '../../../public/images/profile.png';
import camera from '../../../public/images/camera.png';
import { useTranslations } from 'next-intl';

const RestaurantModal = () => {
  const [userInfo, setUserInfo] = useState({
    restaurantName: '',
    cuisine: '',
    pricing: '',
    restaurantDescription: ''
  });
  const [isModalClose, setIsModalClose] = useState(false);

  useEffect(() => {
    const savedInfo = localStorage.getItem('restaurantInfo');
    if (savedInfo) {
      setUserInfo(JSON.parse(savedInfo));
    
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handlePricingChange = (price) => {
    setUserInfo(prevInfo => ({
      ...prevInfo,
      pricing: price
    }));
  };

  const handleSubmit = () => {
    localStorage.setItem('restaurantInfo', JSON.stringify(userInfo));
    console.log(userInfo)
    alert('Information saved successfully!');
  };

  const handleModal = () => {
    setIsModalClose(true);
  };

  const t = useTranslations('RestaurantModal');

  return (
    <div className={`w-full h-[1123px] max-w-3xl bg-[#F2F4F7] min-h-screen absolute mx-auto transition-all ease-linear transform
      ${isModalClose ? 'right-[-800px]' : 'right-0'}
    `}>
      <div className="font-semibold text-[#15223C] bg-[#E6E6E6] w-full p-4 flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl">{t('newRestaurant')}</h2>
        <button className="text-xl" onClick={handleModal}>&times;</button>
      </div>
    
      <div className="bg-white rounded-lg m-4 p-4 space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative mb-2">
            <Image src={profile} alt="Restaurant Profile" width={148} height={153} className="rounded-full " />
            <button className="ml-[52px] transform -translate-x-1/2 bg-primary-blue text-white rounded-full px-3 py-1 flex items-center text-sm">

              <Image src={camera} alt="Camera" width={20} height={20} className="mr-1" />
              Add
            </button>
            
          </div>
          <div className="flex-grow w-full">
            <label className="block text-[#3C3C3C] font-semibold mb-2">{t('restaurantName')}</label>
            <input
              type="text"
              name="restaurantName"
              value={userInfo.restaurantName}
              onChange={handleChange}
              className="border border-gray-300 w-full p-2 rounded"
              placeholder="Enter Restaurant Name"
            />
          </div>
        </div>

        <div className="flex flex-col ml-36 sm:flex-row gap-4">
          <div className="w-[299px] sm:w-1/2">
            <label className="block text-[#3C3C3C] font-semibold mb-2">{t('cusine')}</label>
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <div className="p-2">
                <Image src={Icons} alt="Cuisine icon" width={24} height={24} />
              </div>
              <input
                type="text"
                name="cuisine"
                value={userInfo.cuisine}
                onChange={handleChange}
                className="flex-grow p-2"
                placeholder="Select"
              />
              <div className="p-2">
                <Image src={vector} alt="Vector icon" width={24} height={24} />
              </div>
            </div>
          </div>

          <div className="w-[191px] sm:w-1/2">
            <label className="block text-[#3C3C3C] font-semibold mb-2">{t('pricing')}</label>
            <div className="flex items-center space-x-6">
              {['$', '$$', '$$$'].map((price) => (
                <button
                  key={price}
                  className={`text-lg cursor-pointer ${userInfo.pricing === price ? 'text-primary-blue' : 'hover:text-primary-blue'}`}
                  onClick={() => handlePricingChange(price)}
                >
                  {price}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='pt-1'>
          <label className="block text-[#3C3C3C] font-semibold mb-2">{t('restaurantDescription')}</label>
          <textarea
            name="restaurantDescription"
            value={userInfo.restaurantDescription}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-lg p-4 h-32 resize-none"
            placeholder="Enter Short Description"
          ></textarea>
        </div>

        <div>
          <label className="block text-[#3C3C3C] font-semibold mb-2">{t('promotionBanner')}</label>
          <div className="border-2 border-line rounded-lg p-8 text-center">
            <Image src={center} alt="Upload icon" width={70} height={44} className="mx-auto mb-4" />
            <p className="text-[#1F2937]">
              {t('dragfiles')} <Link href="#" className="text-blue-700">{t('browse')}</Link>
            </p>
            <p className="text-[#9CA3AF] text-sm mt-2">{t('maximumsize')}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex justify-end space-x-4">
        <button className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100" onClick={handleModal}>
          {t('cancle')}
        </button>
        <button className="px-4 py-2 text-white bg-primary-blue rounded-lg hover:bg-blue-600" onClick={handleSubmit}>
          {t('add')}
        </button>
      </div>
    </div>
  );
};

export default RestaurantModal;
"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Optionally use these if needed
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import images from '../../../../public/images';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = ('')
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const handleSignin = (e) => {
        e.preventDefault();
        router.push('/en/dashboard');
    };

    const handleToggle = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white text-[#3c3c3c] px-4 sm:px-6 lg:px-8">
            <div className="w-full h-[943px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-[#F6F9FD] p-6 rounded-lg relative">
                <Image
                    className="w-[192px] h-[60px] ml-12 mt-28 mb-8"
                    src={images.logo}
                    alt="Logo"
                />
                <div className="ml-12 mb-6">
                    <h2 className="font-semibold text-2xl">{t('bookmeLogin')}</h2>
                    <p className="text-sm text-[#3c3c3c]">{t('provideDetails')}
                    </p>
                </div>
                <div className="space-y-6 ml-12">
                    <div>
                        <label className="block text-sm font-medium text-[#3c3c3c] mb-2">
                            {t('email')}
                        </label>
                        <div className="relative">
                            <Image
                                className="absolute top-1/2 transform -translate-y-1/2 left-3"
                                src={images.emailbox}
                                alt="Email Icon"
                            />
                            <input
                                type="text"
                                className="w-[536px] pl-16 p-4 border border-gray-300 rounded-md"
                                placeholder="Enter Email Address"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#3c3c3c] mb-2">
                            {t('password')}
                        </label>
                        <div className="relative  ">
                            <Image
                                className="absolute top-1/2 transform -translate-y-1/2 left-3"
                                src={images.key}
                                alt="Password Icon"
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-[536px] pl-16 p-4 border border-gray-300 rounded-md bg-white"
                                placeholder="Enter Password"
                            />
                            <div 
                                className="absolute top-1/2 transform -translate-y-1/2 right-16 cursor-pointer"
                                onClick={handleToggle}
                            >
                                {showPassword ? <Icon icon={eyeOff} size={25} /> : <Icon icon={eye} size={25} />}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            {t('remember')}
                        </label>
                        <a href="#" className="text-[#346CC4] mr-[45px]">
                          {t('forgot')}
                        </a>
                    </div>
                    <button className="w-[536px] bg-[#346CC4] text-white py-3 rounded-md hover:bg-[#2d5ca7]" onClick={handleSignin}>
                        {t('signin')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
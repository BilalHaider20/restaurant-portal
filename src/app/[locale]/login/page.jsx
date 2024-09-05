"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import images from '../../../../public/images';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setToken } from '@/lib/features/auth/authSlice';
import { login } from '@/app/services/apiMethods';
import { useAppSelector } from '@/lib/hooks';

const Page = () => {
  const t = ('')
    const router = useRouter();
    const isArabic = router.locale === 'ar'; 
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error,setError] = useState(null);

    const token = useAppSelector((state) => state.auth.token);
    
    const handleSignin =async (e) => {
        e.preventDefault();
        try {
            const response = await login(
                {
                    email,
                    password
                }
            );
            const token = response.data.Token; 
            
            dispatch(setToken(token));


            const locale = router.locale || 'en'|| 'ar';
            router.push(`/${locale}/dashboard`);
            
            
        } catch (error) {
            console.log('login failed', error);
            setError(error);
        }
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
                <div className="mb-6">
                    <h2 className="font-semibold  text-base sm:text-lg md:text-2xl">Bookme Restaurant Portal</h2>
                    <p className="text-sm text-[#3c3c3c]">
                        Please provide details below to log in to your account
                    </p>
                </div>
                <div className="space-y-6 ">
                    <div>
                        <label className="block text-sm font-medium text-[#3c3c3c] mb-2">
                            {t('email')}
                        <label className="block text-xs md:text-sm font-medium text-[#3c3c3c] mb-2">
                            Email Address
                        </label>
                        <div className="relative ">
                            <Image
                                className="absolute top-1/2 transform -translate-y-1/2 "
                                src={images.emailbox}
                                alt="Email Icon"
                            />
                            <input
                                type="email"
                                className="w-full  p-4 border border-gray-300 rounded-md pl-12 pr-12"
                                placeholder="Enter Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#3c3c3c] mb-2">
                            {t('password')}
                        </label>
                        <div className="relative flex gap-2 items-center ">
                            <Image
                                className="absolute top-1/2 transform -translate-y-1/2 "
                                src={images.key}
                                alt="Password Icon"
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full  p-4 border border-gray-300 rounded-md bg-white pl-12 pr-12"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            {t('remember')}
                        </label>
                        <a href="#" className="text-[#346CC4] mr-[45px]">
                          {t('forgot')}
                        <a href="#" className="text-[#346CC4] ">
                            Forgot Password?
                        </a>
                    </div>
                    <button className="w-[536px] bg-[#346CC4] text-white py-3 rounded-md hover:bg-[#2d5ca7]" onClick={handleSignin}>
                        {t('signin')}
                    <button className="w-full bg-[#346CC4] text-white py-3 rounded-md hover:bg-[#2d5ca7]" onClick={handleSignin}>
                        Sign In
                    </button>
                    {error && <p className="text-red-500 text-sm">{error.response.data}</p>}
                </div>
            </div>
        </div>
    );
};

export default Page;
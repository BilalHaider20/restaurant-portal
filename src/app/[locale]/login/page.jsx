"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import images from '../../../../public/images';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const handleSignin=(e)=>{
        e.preventDefault();
        router.push('./en/')


    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-[#3c3c3c] px-4 sm:px-6 lg:px-8">
      <div className="w-full h-[943px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-[#F6F9FD] p-6 rounded-lg relative">
        <Image
          className="w-[192px] h-[60px] ml-8 mt-28 mb-8"
          src={images.logo}
          alt="Logo"
        />
        <div className=" ml-8 mb-6">
          <h2 className="font-semibold text-2xl">Bookme Restaurant Portal</h2>
          <p className="text-sm text-[#3c3c3c]">
            Please Provide details below to log in to your account
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#3c3c3c] mb-2">
              Email Address
            </label>
            <div className="relative">
              <Image
                className="absolute top-1/2 transform -translate-y-1/2 left-3"
                src={images.emailbox}
                alt="Email Icon"
              />
              <input
                type="text"
                className="w-full pl-16 p-4 border border-gray-300 rounded-md"
                placeholder="Enter Email Address"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#3c3c3c] mb-2">
              Password
            </label>
            <div className="relative">
              <Image
                className="absolute top-1/2 transform -translate-y-1/2 left-3"
                src={images.key}
                alt="Password Icon"
              />
              <input
                type="password"
                className="w-full pl-16 p-2 border border-gray-300 rounded-md"
                placeholder="Enter Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-[#346CC4]">
              Forgot Password?
            </a>
          </div>
          <button className="w-full bg-[#346CC4] text-white py-3 rounded-md hover:bg-[#2d5ca7]" onClick={handleSignin}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

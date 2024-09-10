import React, { useRef } from "react";
// import images from "../../../../../public/images";
import Image from "next/image";
import images from '../../../../../../public/images/index'

const AddNewMember = ({ setProfile }) => {
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            console.log('Selected file:', files[0]);
            setProfile(URL.createObjectURL(files[0]));
        }
    };

    return (
        <div className="bg-white rounded-lg p-4 space-y-4">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">Basic Details</h2>
            <div className="flex flex-col items-center mb-4">
                {/* Profile Image Upload Section */}
                <div className="relative">
                    <Image
                        src={images.profile}
                        alt="User Profile"
                        width={148}
                        height={153}
                        className="rounded-full"
                    />
                    <button
                        onClick={handleClick}
                        className="absolute bottom-0 inset-x-7 bg-primary-blue text-white rounded-full px-2  text-center py-1 flex items-center justify-center gap-1 text-xs md:text-sm "
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
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>
            <div className="flex flex-col gap-y-3">
                <div className="flex justify-between gap-3">
                    <input type="text" placeholder="First Name" className="border rounded-lg p-2 w-1/2" />
                    <input type="text" placeholder="Last Name" className="border rounded-lg p-2 w-1/2" />
                </div>
                <div className="flex justify-between gap-3">
                    <input type="text" placeholder="Phone Number" className="border rounded-lg p-2 w-1/2" />
                    <input type="email" placeholder="Email Address" className="border rounded-lg p-2 w-1/2" />
                </div>
                <div className="flex justify-between gap-3">
                    <select className="border rounded-lg p-2 w-1/2">
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <input type="date" className="border rounded-lg p-2 w-1/2" />
                </div>
                <div className="flex flex-col justify-between">
                    <h2 className="text-xs md:text-base lg:text-lg font-medium">Permission Details</h2>
                    
                    <div className="flex flex-row justify-between gap-3">
                        <select className="border rounded-lg p-2 w-1/2">
                            <option>Choose Your Role</option>
                        </select>
                        <input type="text" placeholder="Associated with" className="border rounded-lg p-2 w-1/2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewMember;
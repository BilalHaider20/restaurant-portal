// "use client"
// import React from 'react'
// import images from '../../../public/images'
// import Image from 'next/image'
// import PhoneInput from 'react-phone-input-2';
// import "react-phone-input-2/lib/style.css";
// import { useForm } from "react-hook-form";


const BranchesModal = () => {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //   } = useForm();
    
    //   const onSubmit = (data) => {
    //     // console.log(data);
    //   };
    return (
        <div className='w-[778px] ml-auto bg-bg-main'>
            {/* <div className='w-full flex justify-between py-3 px-5 bg-bg-light'>
                <h2 className='font-semibold text-lg text-heading-clr '>Edit Arcadian Cafe Packages Mall</h2>
                <Image src={images.cross} alt="x" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2 w-full relative">
                    <label className='m-0' htmlFor="name">Name <span className='text-red-500'>*</span></label>
                    <div className="formSvgDiv">

                    </div>
                    <input
                        {...register('name', { required: "Please enter your name" })}
                        type="text"
                        className="inputForm"
                        placeholder="Enter Your Name"
                        name='name'
                    />
                    {errors.name && <p className="text-red-500" role="alert">{errors.name.message}</p>}
                </div>
                <div>
                    <div className="space-y-2 w-full">
                        <label className='m-0' htmlFor="phone">Phone Number </label>
                        <PhoneInput country='pk' name="phone"/>
                    </div>
                </div>
                <div className="relative space-y-2 w-full">
                    <label className='m-0' htmlFor="email">Email Address <span className='text-red-500'>*</span></label>
                    <input
                        {...register("email", { required: "Please enter your email address" })}
                        type="email"
                        className="inputForm "
                        name='email'
                        placeholder="Enter Your Email Address"
                    />
                    <div className="formSvgDiv">
                    </div>
                    {errors.email && <p className="text-red-500" role="alert">{errors.email.message}</p>}
                </div>
            </form> */}
        </div>
    )
}

export default BranchesModal
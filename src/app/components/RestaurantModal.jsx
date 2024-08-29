"use client"
import React from 'react'
import Image from 'next/image'
import Icons from '../../../public/images/kit.png'
import vector from '../../../public/images/vector.png'
import center from '../../../public/images/center.png'
import Link from 'next/link'
import profile from '../../../public/images/profile.png'
import camera from '../../../public/images/camera.png'



const RestaurantModal = () => {
  return (
    <div className="w-[778px] h-[1123px] bg-[#F2F4F7]  absolute right-0">
      <div className=" font-semibold text-[#15223C] bg-[#E6E6E6] w-[778px] h-[82px] flex justify-between pt-[32px] pl-[32px] pr-[16px] pb-[32px] text-2xl ">
        Add a New Restaurant
        <p>X</p>
      </div>
    
    <div className="w-[714px] h-[668px] bg-[#FFFFFF] rounded-[10px] mt-[20px] ml-[20px] mr-[20px] mb-[20px] pt-[16px] pl-[18px] " >
      <div className="w-[674px] h-[178px] bg-[#FFFFFF] " >
      <div className="w-[148px] h-[153px] bg-[#FFFFFF] flex flex-row">
        <Image src = {profile} alt =""/>
        <div className="w-[73px] h-[28px] bg-primary-blue text-[#FFFFFF] mt-[135px] ml-[79px] absolute left-0 rounded-full ">
        <button className=' flex items-center justify-between ml-2 '>
          <Image className ="w-[20px] h-[20px] flex items-center justify-between " src ={camera}/>Add</button>
          </div>
        <div className='text-[#3C3C3C]  w-[514px] ml-2 font-semibold'>Restaurant Name <br />
        <input type="Restaurant Name" className='border boder-1px bg-[#FFFFFF] w-[482px] h-[48px] pl-2 mt-2 font-normal ' placeholder='Enter First Name' />
        <div className="flex flex-row">
        <div className='text-[#3C3C3C] font-semibold w-[299px] '>Choose Cuisine <br />
        <div className="absolute right-0 mr-16 w-[191px] h-[28px] top-48 mt-3">Pricing Category
          <div className="  flex flex-row">
            <ul>
            <li className="ml-4 list-[circle]">$</li>
            </ul>
            <ul><li className=' list-[circle] w-[20px] h-[20px] ml-6'>$$</li></ul>
          <ul><li className=' list-[circle] ml-6'>$$$</li></ul>
          </div>
          
          
        </div>

        <div className="flex items-center justify-between border border-collapse ">
          <div className="w-[56px] h-[48px] flex items-center justify-center  ">
        <Image className='w-[24px] h-[24px] ' src={Icons}/>
        </div>
        <input type="Restaurant Name" className=' bg-[#FFFFFF] w-[299px] h-[48px] pl-2 font-normal  ' placeholder='Select' />
        
        <div className="w-[56px] h-[48px] flex items-center justify-center ">
        <Image src ={vector} alt= ""/>
        </div>
        </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      <h3 className='mb-2 text-[#3C3C3C]'>Restaurant Description</h3>
      <div className="w-[674px] h-[150px] bg-white border border-[#E6E6E6] rounded-[10px] ">
        <div className="width-[642px] h-[48px] items-center ml-4 text-xl mt-2  rounded-[10px] text-[#E6E6E6] bg-[#FFFFFF]">
          Enter Short Desciption
        </div>
      </div>

      <h3 className='mb-2 text-[#3C3C3C] mt-4' >Promotions Banner</h3>


      <div className="w-[674px] h-[209px] bg-white border border-[#E6E6E6] rounded-[10px] flex items-center justify-center flex-col">
        <div className="w-[70px] h-[44px] ">
        <Image src = {center}/>
        </div>
        <div className="mt-4 text-[#1F2937]">Drop Your files here or
          <Link className='text-blue-700 pl-2' href="link">browse</Link>
          <div className="text-[#9CA3AF] text-center">Maximum size:50MB</div>
        </div>
        </div>
        <div className="w-[778px] h-[101px] bg-[#FFFFFF] absolute bottom-0 right-0 flex items-center">
          <div className=" flex items-center justify-between w-[173px] h-[43px] absolute right-12">
          <button className='w-[89px] h-[44px] text-[#E6E6E6] bg-[#FFFFFF] border border-[#E6E6E6] rounded-[8px] '>Cancel</button>
          <button className='w-[68px] h-[44px] text-[#FFFFFF] bg-primary-blue border border-[#E6E6E6] rounded-[8px]'>Add</button>
          </div>
        </div>
        </div> 
        </div>

  )
}

export default RestaurantModal

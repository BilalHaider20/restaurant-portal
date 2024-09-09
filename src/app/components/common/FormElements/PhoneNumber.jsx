import React from 'react'
import { Controller,useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import "react-phone-input-2/lib/style.css";


const getCountryCode = (value) => {
    console.log(value);
    const phoneNumberObject = parsePhoneNumberFromString(`+${value}`);
    const phone_number_country = phoneNumberObject.country;
    return phone_number_country;
  };
const PhoneNumber = (props) => {
    


  return (
    <div className='w-full'>
        <Controller
                name="phone_number"
                control={props.control}
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
                   
                    {props.errors.phone && (
                      <span className="text-red-600">
                        {props.errors.phone.message}
                      </span>
                    )}
                  </div>
                )}
              />
    </div>
  )
}

export { PhoneNumber,getCountryCode};
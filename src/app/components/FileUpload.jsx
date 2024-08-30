"use client";
import React, { useRef } from 'react';
import { useState } from 'react';
import images from '../../../public/images';
import Image from 'next/image';
import { Controller } from 'react-hook-form';

const FileUpload = ({ control, name }) => {
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const selectedFiles = [...event.target.files];
        setFiles(selectedFiles);
    };

    const handleBrowseClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="">
            <div className="mb-2 text-lg font-medium text-gray-700">Add Gallery</div>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <>
                        <div
                            className="flex flex-col items-center justify-center h-48 space-y-2 w-full p-4 border border-dashed border-gray-300 rounded-md text-center"
                            onClick={handleBrowseClick}
                        >
                            {/* Icon placeholder */}
                            <Image src={images.browse_image} alt='image' />
                            {/* Text */}
                            <p className="text-[#1F2937] font-medium">Drop your files here or <span className="text-primary-blue cursor-pointer">Browse</span></p>
                            <p className="text-gray-400 text-sm">Maximum size: 50MB</p>
                            {/* Hidden file input */}
                            <input
                                type="file"
                                multiple
                                onChange={(e) => {
                                    handleFileChange(e);
                                    field.onChange(e.target.files);
                                }}
                                className="hidden"
                                ref={fileInputRef}
                            />
                        </div>
                        {files.length > 0 && (
                            <div className="mt-2 text-gray-600">
                                {files.map((file, index) => (
                                    <div key={index}>{file.name}</div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            />
        </div>
    );
};

export default FileUpload;

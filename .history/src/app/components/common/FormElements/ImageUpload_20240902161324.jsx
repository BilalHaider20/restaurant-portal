import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import center from '../../../../../public/images/center.png';

const FileUpload = ({ title }) => {
  const [previews, setPreviews] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newPreviews = acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    });

    Promise.all(newPreviews).then((previewList) => {
      setPreviews((prev) => [...prev, ...previewList]);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col space-y-2">
      <label className="block text-[#3C3C3C] font-semibold mb-2">{title}</label>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-line rounded-lg p-8 text-center flex flex-col items-center justify-center"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-[#1F2937]">Drop the files here...</p>
        ) : (
          <>
            <Image src={center} alt="Upload icon" width={70} height={44} className="mx-auto mb-4" />
            <p className="text-[#1F2937]">
              Drop your files here or <span className="text-blue-700 cursor-pointer">browse</span>
            </p>
          </>
        )}
        <p className="text-[#9CA3AF] text-sm mt-2">Maximum size: 50MB</p>
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        {previews.map((preview, index) => (
          <div key={index} className="relative">
            <Image src={preview} alt={`Preview ${index + 1}`} width={100} height={100} className="rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;

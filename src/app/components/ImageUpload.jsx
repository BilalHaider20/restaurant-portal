import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import center from '../../../public/images/center.png';

const FileUpload = ({title}) => {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
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
        <Image src={center} alt="Upload icon" width={70} height={44} className="mx-auto mb-4" />
        {preview ? (
          <img src={preview} alt="Uploaded Preview" className="w-full h-auto rounded-lg" />
        ) : isDragActive ? (
          <p className="text-[#1F2937]">Drop the files here...</p>
        ) : (
          <p className="text-[#1F2937]">
            Drop your files here or <span className="text-blue-700 cursor-pointer">browse</span>
          </p>
        )}
        <p className="text-[#9CA3AF] text-sm mt-2">Maximum size: 50MB</p>
      </div>
    </div>
  );
};

export default FileUpload;

import React from 'react';
import Button from '@/app/components/common/filters/Button';


const Modal = ({ isOpen, onClose, onScheduleLater, onPublishNow }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[768px] md:w-1/3">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Confirmation</h2>
                    <button onClick={onClose} className="text-gray-600 text-xl">
                        X
                    </button>
                </div>
                <p className="mb-4">Are you sure you want to publish now?</p>
                <div className="flex  gap-1">
                    <button
                        onClick={onScheduleLater}
                        className="px-4 py-2 w-1/2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"  
                    >
                        Schedule Later
                    </button>
                    <button
                        onClick={onPublishNow}
                        className="px-4 py-2 w-1/2 text-white bg-primary-blue rounded-lg hover:bg-blue-600">
                       Publish Now
                    </button>
                        
                   
                </div>
            </div>
        </div>
    );
};

export default Modal;
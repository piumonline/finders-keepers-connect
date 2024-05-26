"use client"

import React, { useState } from 'react';

const ImageInput: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [description, setDescription] = useState<string>('');
    const [bagType, setBagType] = useState<string>('lost');

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file && file.type.startsWith('image')) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                setImageSrc(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const onTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBagType(event.target.value);
    };

    const onSubmit = () => {
        console.log('Submitting:', { imageSrc, description, bagType });
        // Add actual submission logic here
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col items-center justify-center space-y-4">
                <select className= " form-select block w-full mt-1 border border-black p-4 rounded-lg" onChange={onTypeChange} value={bagType}>
                    <option value="lost">Lost Bag</option>
                    <option value="found">Found Bag</option>
                </select>
                {imageSrc ? (
                    <img src={imageSrc} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '400px' }} />
                ) : (
                    <input type="file" accept="image/*" onChange={handleImageChange} className="form-input block w-full mt-1" />
                )}
                {/* <textarea value={description} onChange={onDescriptionChange}  className="form-textarea block w-full mt-1 border border-black p-4" placeholder="Enter description here..." /> */}
                <input type="text" className="form-input block w-full mt-1 border border-black p-4" placeholder="Enter the location" />
                <input type="text" className="form-input block w-full mt-1 border border-black p-4" placeholder="Enter your Name" />
                <input type="text" className="form-input block w-full mt-1 border border-black p-4" placeholder="Enter your Contact Number" />
                
                <button onClick={onSubmit} className= " w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ImageInput;

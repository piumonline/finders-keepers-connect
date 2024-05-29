import React from 'react';

interface Step1Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ formData, handleChange, handleImageChange, handleNextStep }) => {
  return (
    <section className='w-full'>
      <div className='flex gap-20'>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-semibold">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full mt-2 border border-gray-300 rounded"
          />
          {formData.imagePreview && (
            <img src={formData.imagePreview} alt="Image Preview" className="w-full mt-4 rounded" />
          )}
        </div>
        <div className='w-full'>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-semibold">Text Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
              placeholder="Describe the item"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="itemType" className="block text-gray-700 font-semibold">Type:</label>
            <select
              id="itemType"
              name="itemType"
              value={formData.itemType}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
            >
              <option value="lost">Lost</option>
              <option value="found">Found</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-semibold">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
              placeholder="Location where the item was lost or found"
            />
          </div>
        </div>
      </div>
      <button type="button" onClick={handleNextStep} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
        Next
      </button>
    </section>
  );
};

export default Step1;

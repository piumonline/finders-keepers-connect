import React from 'react';

interface Step1Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ formData, handleChange, handleImageChange, handleNextStep }) => {
  const isNextDisabled = !formData.description || !formData.image || !formData.location;

  return (
    <section className='w-full'>
      <div className='flex gap-20'>
        <div className="mb-4 w-1/2">
          <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Image:</label>
          {formData.imagePreview ? (
            <div className="relative w-full">
              <img src={formData.imagePreview} alt="Image Preview" className="w-full rounded-lg shadow-md" />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg">
                <label htmlFor="image" className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition duration-200">
                  Change Image
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-60 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-200">
              <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-full">
                <svg className="w-8 h-8 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 2a1 1 0 011 1v5h-1.586l-1.707-1.707a1 1 0 00-1.414 0L9 12.586l-2.293-2.293a1 1 0 00-1.414 0L4 11.586V6a1 1 0 011-1h10zM5 8a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1zm5 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-5 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="mt-2 text-sm text-gray-500">Click to upload image</span>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          )}
        </div>
        <div className='w-full'>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-semibold">Text Description:</label>
            <textarea
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
      <div className='flex justify-end mt-4'>
        <button
          type="button"
          onClick={handleNextStep}
          disabled={isNextDisabled}
          className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Step1;
